"use client";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "@/store";
import { parseToBRL } from "@/utils";
import { redirect } from "next/navigation";
import { clear } from "@/store/reducers/cart";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const [payWithCard, setPayWithCard] = useState(false);
  const { list } = useSelector((state: RootReducer) => state.cart);
  const [purchased, setPurchased] = useState(false);

  const form = useFormik({
    initialValues: {
      //Dados de Entrega

      fullName: "",
      email: "",
      cpf: "",
      deliveryEmail: "",
      confirmDeliveryEmail: "",

      //Dados do Cartão
      cardOwner: "",
      cpfCardOwner: "",
      cardDisplayName: "",
      cardNumber: "",
      expiresMonth: "",
      expiresYear: "",
      cardCode: "",
      installments: 1,
    },
    validationSchema: Yup.object({
      //Dados de Entrega

      fullName: Yup.string()
        .min(5, "O nome deve ter no mínimo 5 caracteres")
        .required("O campo é obrigatório"),
      email: Yup.string()
        .email("Email inválido")
        .required("O campo é obrigatório"),
      cpf: Yup.string()
        .min(14, "CPF inválido")
        .max(14, "CPF inválido")
        .required("O campo é obrigatório"),
      deliveryEmail: Yup.string().email().required("O campo é obrigatório"),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref("deliveryEmail")], "Os e-mails devem ser iguais")
        .required("O campo é obrigatório"),

      //Dados do Cartão
      cardOwner: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema
      ),
      cpfCardOwner: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema
      ),
      cardDisplayName: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema
      ),
      cardNumber: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema
      ),
      expiresMonth: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema
      ),
      expiresYear: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema
      ),
      cardCode: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema
      ),
      installments: Yup.number().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema
      ),
    }),
    onSubmit: (values) => {
      console.log({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName,
        },
        delivery: {
          email: values.deliveryEmail,
        },
        payment: {
          installments: values.installments,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            owner: {
              name: values.cardOwner,
              document: values.cpfCardOwner,
            },
            name: values.cardDisplayName,
            number: values.cardNumber,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
        products: list.map((list) => ({
          id: list.id,
          price: list.price as number,
        })),
      });

      dispatch(clear());
      setPurchased(true);
    },
  });

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  if (list.length === 0 && !purchased) {
    redirect("/home");
  }

  const inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";

  const buttonClass =
    "text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer transition-colors";

  const buttonClassActive = `text-white bg-primary-dark hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer transition-colors`;

  return (
    <section className="container mx-auto p-8 max-w-6xl min-h-screen">
      {purchased ? (
        <>
          <h3 className="text-3xl font-bold mb-2 text-gray-800">
            Compra finalizada com sucesso!
          </h3>
          <p className="mb-4">
            Esta seria a mensagem de confirmação para o comprador com os dados
            do pedido e comprovante de pagamento, entretando este site não
            possui api própria e foi criado apenas para fins didático
          </p>
          <p className="mb-4">
            Porém, os dados do pedido e do comprador estão sendo exibidos no
            console para futura implementação à uma api.
          </p>
        </>
      ) : (
        <>
          <h3 className="text-3xl font-bold mb-2 text-gray-800">
            Finalizar compra
          </h3>
          <p>
            Valor total:{" "}
            {parseToBRL(list.reduce((acc, course) => acc + course.price, 0))}
          </p>
          <p>
            Preencha os dados abaixo para finalizar a compra do(s) curso(s)
            selecionado(s)
          </p>
          <h4 className="text-2xl font-bold mt-4 mb-4 text-gray-800">
            Dados pessoais:
          </h4>
          <form onSubmit={form.handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-4 col-span-2">
                <label htmlFor="fullName">Nome completo</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError("fullName")
                      ? inputClass + " border-red-500"
                      : inputClass
                  }
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="cpf">CPF</label>
                <input
                  id="cpf"
                  type="text"
                  name="cpf"
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError("cpf")
                      ? inputClass + " border-red-500"
                      : inputClass
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={
                  checkInputHasError("email")
                    ? inputClass + " border-red-500"
                    : inputClass
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <label htmlFor="deliveryEmail">Email de Entrega</label>
                <input
                  id="deliveryEmail"
                  type="deliveryEmail"
                  name="deliveryEmail"
                  value={form.values.deliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError("deliveryEmail")
                      ? inputClass + " border-red-500"
                      : inputClass
                  }
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="confirmDeliveryEmail">
                  Confirme o email de entrega
                </label>
                <input
                  id="confirmDeliveryEmail"
                  type="confirmDeliveryEmail"
                  name="confirmDeliveryEmail"
                  value={form.values.confirmDeliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError("confirmDeliveryEmail")
                      ? inputClass + " border-red-500"
                      : inputClass
                  }
                />
              </div>
            </div>
            <h4 className="text-2xl font-bold mt-4 mb-2 text-gray-800">
              Dados de pagamento:
            </h4>
            <div>
              <h5 className="text-xl font-bold text-gray-800">
                Selecione uma forma de pagamento
              </h5>
              <div className="flex gap-6 mt-4">
                <button
                  type="button"
                  className={payWithCard ? buttonClassActive : buttonClass}
                  onClick={() => setPayWithCard(true)}
                >
                  Cartão
                </button>
                <button
                  onClick={() => setPayWithCard(false)}
                  type="button"
                  className={payWithCard ? buttonClass : buttonClassActive}
                >
                  Boleto
                </button>
              </div>
            </div>
            {payWithCard ? (
              <>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col col-span-2 gap-4">
                    <label htmlFor="cardOwner">Nome do titular</label>
                    <input
                      id="cardOwner"
                      type="text"
                      name="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("cardOwner")
                          ? inputClass + " border-red-500"
                          : inputClass
                      }
                    />
                  </div>
                  <div className="flex flex-col col-span-1 gap-4">
                    <label htmlFor="cpfCardOwner">CPF do titular</label>
                    <input
                      id="cpfCardOwner"
                      type="text"
                      name="cpfCardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("cpfCardOwner")
                          ? inputClass + " border-red-500"
                          : inputClass
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col col-span-1 gap-4">
                  <label htmlFor="cardDisplayName">Nome no Cartão</label>
                  <input
                    id="cardDisplayName"
                    type="text"
                    name="cardDisplayName"
                    value={form.values.cardDisplayName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError("cardDisplayName")
                        ? inputClass + " border-red-500"
                        : inputClass
                    }
                  />
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="flex flex-col col-span-7 gap-4">
                    <label htmlFor="cardNumber">Número do Cartão</label>
                    <input
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("cardNumber")
                          ? inputClass + " border-red-500"
                          : inputClass
                      }
                    />
                  </div>
                  <div className="flex flex-col col-span-1 gap-4">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("cardCode")
                          ? inputClass + " border-red-500"
                          : inputClass
                      }
                    />
                  </div>
                  <div className="flex flex-col col-span-2 gap-4">
                    <label htmlFor="expiresMonth">Mês de validade</label>
                    <input
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("expiresMonth")
                          ? inputClass + " border-red-500"
                          : inputClass
                      }
                    />
                  </div>
                  <div className="flex flex-col col-span-2 gap-4">
                    <label htmlFor="expiresYear">Ano de validade</label>
                    <input
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("expiresYear")
                          ? inputClass + " border-red-500"
                          : inputClass
                      }
                    />
                  </div>
                </div>
              </>
            ) : (
              <p>
                O boleto ser&aacute; enviado por e-mail após a
                finaliza&ccedil;&atilde;o da compra
              </p>
            )}
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded mt-4 hover:bg-primary-dark cursor-pointer"
            >
              Finalizar compra
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default CheckoutPage;
