export interface Course {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
}

export const Courses: Course[] = [
  // --- FRONT-END ---
  {
    id: "front-end-html-css-fundamentos",
    title: "HTML e CSS: Fundamentos",
    image: "https://placehold.co/400x200",
    price: 149.99,
    category: "Front-end",
  },
  {
    id: "front-end-javascript-moderno",
    title: "JavaScript Moderno",
    image: "https://placehold.co/400x200",
    price: 199.99,
    category: "Front-end",
  },
  {
    id: "front-end-react-do-zero-ao-avancado",
    title: "React do Zero ao Avançado",
    image: "https://placehold.co/400x200",
    price: 249.99,
    category: "Front-end",
  },
  {
    id: "front-end-nextjs-ssr-rotas-dinamicas",
    title: "Next.js: SSR e Rotas Dinâmicas",
    image: "https://placehold.co/400x200",
    price: 269.99,
    category: "Front-end",
  },
  {
    id: "front-end-typescript-para-react",
    title: "TypeScript para React",
    image: "https://placehold.co/400x200",
    price: 229.99,
    category: "Front-end",
  },

  // --- BACK-END ---
  {
    id: "back-end-nodejs-criando-apis-rest",
    title: "Node.js: Criando APIs REST",
    image: "https://placehold.co/400x200",
    price: 219.99,
    category: "Back-end",
  },
  {
    id: "back-end-django-rest-framework",
    title: "Django REST Framework",
    image: "https://placehold.co/400x200",
    price: 239.99,
    category: "Back-end",
  },
  {
    id: "back-end-masterizando-java",
    title: "Masterizando Java",
    image: "https://placehold.co/400x200",
    price: 299.99,
    category: "Back-end",
  },
  {
    id: "back-end-spring-boot-microsservicos",
    title: "Spring Boot e Microsserviços",
    image: "https://placehold.co/400x200",
    price: 289.99,
    category: "Back-end",
  },
  {
    id: "back-end-ruby-on-rails-do-zero",
    title: "Ruby on Rails do Zero",
    image: "https://placehold.co/400x200",
    price: 199.99,
    category: "Back-end",
  },

  // --- DESIGN ---
  {
    id: "design-figma-para-iniciantes",
    title: "Figma para Iniciantes",
    image: "https://placehold.co/400x200",
    price: 159.99,
    category: "Design",
  },
  {
    id: "design-ux-ui-principios",
    title: "Princípios de UX/UI",
    image: "https://placehold.co/400x200",
    price: 179.99,
    category: "Design",
  },
  {
    id: "design-prototipagem-no-figma",
    title: "Prototipagem no Figma",
    image: "https://placehold.co/400x200",
    price: 189.99,
    category: "Design",
  },
  {
    id: "design-criando-design-systems",
    title: "Criando Design Systems",
    image: "https://placehold.co/400x200",
    price: 209.99,
    category: "Design",
  },
  {
    id: "design-tipografia-avancada",
    title: "Tipografia Avançada",
    image: "https://placehold.co/400x200",
    price: 169.99,
    category: "Design",
  },

  // --- BANCO DE DADOS ---
  {
    id: "banco-de-dados-sql-para-iniciantes",
    title: "SQL para Iniciantes",
    image: "https://placehold.co/400x200",
    price: 179.99,
    category: "Banco de Dados",
  },
  {
    id: "banco-de-dados-mongodb-pratico",
    title: "MongoDB na Prática",
    image: "https://placehold.co/400x200",
    price: 199.99,
    category: "Banco de Dados",
  },
  {
    id: "banco-de-dados-otimizacao-sql",
    title: "Otimização de Consultas SQL",
    image: "https://placehold.co/400x200",
    price: 199.99,
    category: "Banco de Dados",
  },
  {
    id: "banco-de-dados-postgresql-avancado",
    title: "PostgreSQL Avançado",
    image: "https://placehold.co/400x200",
    price: 219.99,
    category: "Banco de Dados",
  },
  {
    id: "banco-de-dados-modelagem-avancada",
    title: "Modelagem de Dados Avançada",
    image: "https://placehold.co/400x200",
    price: 189.99,
    category: "Banco de Dados",
  },

  // --- INFRAESTRUTURA ---
  {
    id: "infraestrutura-docker-para-desenvolvedores",
    title: "Docker para Desenvolvedores",
    image: "https://placehold.co/400x200",
    price: 229.99,
    category: "Infraestrutura",
  },
  {
    id: "infraestrutura-kubernetes-fundamentos",
    title: "Kubernetes: Fundamentos",
    image: "https://placehold.co/400x200",
    price: 249.99,
    category: "Infraestrutura",
  },
  {
    id: "infraestrutura-linux-essencial",
    title: "Linux Essencial",
    image: "https://placehold.co/400x200",
    price: 159.99,
    category: "Infraestrutura",
  },
  {
    id: "infraestrutura-ci-cd-pipelines",
    title: "CI/CD com GitHub Actions",
    image: "https://placehold.co/400x200",
    price: 219.99,
    category: "Infraestrutura",
  },
  {
    id: "infraestrutura-terraform-para-iniciantes",
    title: "Terraform para Iniciantes",
    image: "https://placehold.co/400x200",
    price: 239.99,
    category: "Infraestrutura",
  },

  // --- CIBERSEGURANÇA ---
  {
    id: "ciberseguranca-hacking-etico",
    title: "Hacking Ético para Iniciantes",
    image: "https://placehold.co/400x200",
    price: 249.99,
    category: "Cibersegurança",
  },
  {
    id: "ciberseguranca-pentest-web",
    title: "Pentest em Aplicações Web",
    image: "https://placehold.co/400x200",
    price: 269.99,
    category: "Cibersegurança",
  },
  {
    id: "ciberseguranca-seguranca-redes",
    title: "Segurança em Redes",
    image: "https://placehold.co/400x200",
    price: 239.99,
    category: "Cibersegurança",
  },
  {
    id: "ciberseguranca-engenharia-social",
    title: "Engenharia Social e Prevenção",
    image: "https://placehold.co/400x200",
    price: 219.99,
    category: "Cibersegurança",
  },
  {
    id: "ciberseguranca-criptografia-pratica",
    title: "Criptografia na Prática",
    image: "https://placehold.co/400x200",
    price: 259.99,
    category: "Cibersegurança",
  },
];

export const featuredCourses: Course[] = [
  {
    id: "front-end-nextjs-ssr-rotas-dinamicas",
    title: "Next.js: SSR e Rotas Dinâmicas",
    image: "https://placehold.co/400x200",
    price: 269.99,
    category: "Front-end",
  },
  {
    id: "back-end-masterizando-java",
    title: "Masterizando Java",
    image: "https://placehold.co/400x200",
    price: 299.99,
    category: "Back-end",
  },
  {
    id: "design-figma-para-iniciantes",
    title: "Figma para Iniciantes",
    image: "https://placehold.co/400x200",
    price: 159.99,
    category: "Design",
  },
  {
    id: "banco-de-dados-otimizacao-sql",
    title: "Otimização de Consultas SQL",
    image: "https://placehold.co/400x200",
    price: 199.99,
    category: "Banco de Dados",
  },
  {
    id: "infraestrutura-docker-para-desenvolvedores",
    title: "Docker para Desenvolvedores",
    image: "https://placehold.co/400x200",
    price: 229.99,
    category: "Infraestrutura",
  },
  {
    id: "ciberseguranca-hacking-etico",
    title: "Hacking Ético para Iniciantes",
    image: "https://placehold.co/400x200",
    price: 249.99,
    category: "Cibersegurança",
  },
];
