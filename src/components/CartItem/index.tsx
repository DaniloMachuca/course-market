import { Course } from "@/data/data";
import { RootReducer } from "@/store";
import { remove } from "@/store/reducers/cart";
import { parseToBRL } from "@/utils";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  course: Course;
};

const CartItem = ({ course }: Props) => {
  const dispatch = useDispatch();
  const { list } = useSelector((state: RootReducer) => state.cart);

  const handleRemove = () => {
    dispatch(remove(course.id));
  };
  return (
    <div className="grid grid-cols-7 p-4 items-center border-b border-gray-400">
      <Image
        src={course.image}
        alt={course.title}
        width={100}
        height={100}
        className="col-span-2"
      />
      <h3 className="text-center col-span-2">{course.title}</h3>
      <span className="text-center col-span-2">{parseToBRL(course.price)}</span>
      <span
        onClick={handleRemove}
        className="text-end hover:cursor-pointer text-2xl text-gray-600 hover:text-gray-800 transition-colors duration-300"
      >
        x
      </span>
    </div>
  );
};
export default CartItem;
