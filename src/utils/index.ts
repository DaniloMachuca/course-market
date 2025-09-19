import { Course, Courses } from "@/data/data";

export const parseToBRL = (prices = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(prices);
};

export const getCoursesByCategory = (category: string) => {
  return Courses.filter((c) => c.category === category);
};

export const getCourseById = (id: string) => {
  return Courses.find((c) => c.id === id);
};

export const FrontEnd: Course[] = getCoursesByCategory("Front-end");
export const BackEnd: Course[] = getCoursesByCategory("Back-end");
export const Design: Course[] = getCoursesByCategory("Design");
export const BancoDeDados: Course[] = getCoursesByCategory("Banco de Dados");
export const Infraestrutura: Course[] = getCoursesByCategory("Infraestrutura");
export const Cibersegurança: Course[] = getCoursesByCategory("Cibersegurança");
export const Ferramentas: Course[] = getCoursesByCategory("Ferramentas");
