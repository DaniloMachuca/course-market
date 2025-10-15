"use client";
import { Course } from "@/data/data";
import { RootReducer } from "@/store";
import { add, remove } from "@/store/reducers/favorites";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Star } from "@geist-ui/icons";

type Props = {
  course: Course;
  className?: string;
};

const FavStar = ({ course, className }: Props) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);

  const favorites = useSelector((state: RootReducer) => state.fav.list);

  const isFavorite = favorites.some((c) => c.id === course.id);

  const handleFavColor = () => {
    if (isFavorite) {
      if (hover) {
        return "#000";
      }
      return "#ebc634";
    }
    if (hover) {
      return "#ebc634";
    }
  };

  const hadleClickFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(remove(course.id));
    } else {
      dispatch(add(course));
    }
  };

  return (
    <Star
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      color={handleFavColor()}
      fill={isFavorite ? "#ebc634" : "transparent"}
      onClick={hadleClickFav}
      className={className + " cursor-pointer transition-colors"}
    />
  );
};

export default FavStar;
