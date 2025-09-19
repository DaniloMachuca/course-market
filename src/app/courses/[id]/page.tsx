import { Courses } from "@/data/data";
import { notFound } from "next/navigation";
import { getCourseById } from "@/utils/";

const CoursePage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;
  const courseId = getCourseById(id);

  if (!courseId) {
    return notFound();
  }

  return (
    <div>
      <p>bem vindo ao curso de {courseId.title}</p>
    </div>
  );
};

export default CoursePage;
