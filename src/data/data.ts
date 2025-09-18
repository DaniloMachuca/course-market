export interface Curso {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

export const cursos: Curso[] = [
  {
    id: 1,
    title: "Desenvolvimento Front-end com React",
    image: "https://placehold.co/400x200",
    price: 299.99,
    category: "Front-end",
  },
  {
    id: 2,
    title: "Curso Completo de Python",
    image: "https://placehold.co/400x200",
    price: 349.99,
    category: "Back-end",
  },
  // Adicione mais cursos aqui
];
