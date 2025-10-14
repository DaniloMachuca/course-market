export interface Course {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

export const Courses: Course[] = [
  // --- FRONT-END ---
  {
    id: "front-end-html-css-fundamentos",
    title: "HTML e CSS: Fundamentos",
    image: "https://placehold.co/400x200",
    price: 149.99,
    category: "Front-end",
    description:
      "Aprenda a estruturar páginas com HTML e criar layouts modernos e responsivos com CSS, entendendo os fundamentos essenciais do desenvolvimento web.",
  },
  {
    id: "front-end-javascript-moderno",
    title: "JavaScript Moderno",
    image: "https://placehold.co/400x200",
    price: 199.99,
    category: "Front-end",
    description:
      "Domine o JavaScript moderno, aprendendo desde a lógica básica até recursos avançados como ES6+, manipulação do DOM e consumo de APIs.",
  },
  {
    id: "front-end-react-do-zero-ao-avancado",
    title: "React do Zero ao Avançado",
    image: "https://placehold.co/400x200",
    price: 249.99,
    category: "Front-end",
    description:
      "Construa interfaces interativas com React, aprendendo componentização, hooks, gerenciamento de estado e boas práticas para aplicações escaláveis.",
  },
  {
    id: "front-end-nextjs-ssr-rotas-dinamicas",
    title: "Next.js: SSR e Rotas Dinâmicas",
    image: "https://placehold.co/400x200",
    price: 269.99,
    category: "Front-end",
    description:
      "Aprenda Next.js e crie aplicações React com renderização no servidor (SSR), rotas dinâmicas e otimização de desempenho para SEO.",
  },
  {
    id: "front-end-typescript-para-react",
    title: "TypeScript para React",
    image: "https://placehold.co/400x200",
    price: 229.99,
    category: "Front-end",
    description:
      "Entenda como o TypeScript torna seu código React mais seguro e previsível, aprendendo tipagem, interfaces e integração com projetos reais.",
  },

  // --- BACK-END ---
  {
    id: "back-end-nodejs-criando-apis-rest",
    title: "Node.js: Criando APIs REST",
    image: "https://placehold.co/400x200",
    price: 219.99,
    category: "Back-end",
    description:
      "Desenvolva APIs REST completas com Node.js e Express, conectando bancos de dados e aplicando princípios de arquitetura limpa.",
  },
  {
    id: "back-end-django-rest-framework",
    title: "Django REST Framework",
    image: "https://placehold.co/400x200",
    price: 239.99,
    category: "Back-end",
    description:
      "Aprenda a criar e gerenciar APIs robustas com Django REST Framework, utilizando autenticação, permissões e serialização de dados.",
  },
  {
    id: "back-end-masterizando-java",
    title: "Masterizando Java",
    image: "https://placehold.co/400x200",
    price: 299.99,
    category: "Back-end",
    description:
      "Aprofunde seus conhecimentos em Java, explorando orientação a objetos, coleções, streams, e boas práticas para aplicações corporativas.",
  },
  {
    id: "back-end-spring-boot-microsservicos",
    title: "Spring Boot e Microsserviços",
    image: "https://placehold.co/400x200",
    price: 289.99,
    category: "Back-end",
    description:
      "Domine o Spring Boot e crie microsserviços escaláveis, aplicando arquitetura moderna, segurança e integração entre serviços.",
  },
  {
    id: "back-end-ruby-on-rails-do-zero",
    title: "Ruby on Rails do Zero",
    image: "https://placehold.co/400x200",
    price: 199.99,
    category: "Back-end",
    description:
      "Aprenda a desenvolver aplicações completas com Ruby on Rails, desde o setup inicial até a publicação em produção.",
  },

  // --- DESIGN ---
  {
    id: "design-figma-para-iniciantes",
    title: "Figma para Iniciantes",
    image: "https://placehold.co/400x200",
    price: 159.99,
    category: "Design",
    description:
      "Descubra o Figma e aprenda a criar interfaces de alta fidelidade, colaborando em tempo real e aplicando princípios de design moderno.",
  },
  {
    id: "design-ux-ui-principios",
    title: "Princípios de UX/UI",
    image: "https://placehold.co/400x200",
    price: 179.99,
    category: "Design",
    description:
      "Entenda os fundamentos de experiência e interface do usuário, criando produtos digitais intuitivos e visualmente atraentes.",
  },
  {
    id: "design-prototipagem-no-figma",
    title: "Prototipagem no Figma",
    image: "https://placehold.co/400x200",
    price: 189.99,
    category: "Design",
    description:
      "Aprenda a transformar ideias em protótipos navegáveis com Figma, simulando interações reais e otimizando o processo de design.",
  },
  {
    id: "design-criando-design-systems",
    title: "Criando Design Systems",
    image: "https://placehold.co/400x200",
    price: 209.99,
    category: "Design",
    description:
      "Aprenda a criar e documentar design systems consistentes, garantindo padronização visual e eficiência no desenvolvimento de interfaces.",
  },
  {
    id: "design-tipografia-avancada",
    title: "Tipografia Avançada",
    image: "https://placehold.co/400x200",
    price: 169.99,
    category: "Design",
    description:
      "Explore o impacto da tipografia no design digital e aprenda a escolher e combinar fontes de forma profissional e expressiva.",
  },

  // --- BANCO DE DADOS ---
  {
    id: "banco-de-dados-sql-para-iniciantes",
    title: "SQL para Iniciantes",
    image: "https://placehold.co/400x200",
    price: 179.99,
    category: "Banco de Dados",
    description:
      "Aprenda a consultar, filtrar e manipular dados com SQL, entendendo as bases dos bancos de dados relacionais.",
  },
  {
    id: "banco-de-dados-mongodb-pratico",
    title: "MongoDB na Prática",
    image: "https://placehold.co/400x200",
    price: 199.99,
    category: "Banco de Dados",
    description:
      "Domine o MongoDB e aprenda a modelar dados em formato NoSQL, criando aplicações escaláveis e flexíveis.",
  },
  {
    id: "banco-de-dados-otimizacao-sql",
    title: "Otimização de Consultas SQL",
    image: "https://placehold.co/400x200",
    price: 199.99,
    category: "Banco de Dados",
    description:
      "Otimize suas consultas SQL, reduzindo tempo de execução e melhorando o desempenho de grandes volumes de dados.",
  },
  {
    id: "banco-de-dados-postgresql-avancado",
    title: "PostgreSQL Avançado",
    image: "https://placehold.co/400x200",
    price: 219.99,
    category: "Banco de Dados",
    description:
      "Explore recursos avançados do PostgreSQL como triggers, views, funções e tuning de performance.",
  },
  {
    id: "banco-de-dados-modelagem-avancada",
    title: "Modelagem de Dados Avançada",
    image: "https://placehold.co/400x200",
    price: 189.99,
    category: "Banco de Dados",
    description:
      "Aprofunde-se em modelagem conceitual e lógica de dados, aprendendo normalização, relacionamentos e boas práticas de estruturação.",
  },

  // --- INFRAESTRUTURA ---
  {
    id: "infraestrutura-docker-para-desenvolvedores",
    title: "Docker para Desenvolvedores",
    image: "https://placehold.co/400x200",
    price: 229.99,
    category: "Infraestrutura",
    description:
      "Aprenda a criar, gerenciar e distribuir containers com Docker, facilitando o deploy e a escalabilidade de aplicações.",
  },
  {
    id: "infraestrutura-kubernetes-fundamentos",
    title: "Kubernetes: Fundamentos",
    image: "https://placehold.co/400x200",
    price: 249.99,
    category: "Infraestrutura",
    description:
      "Entenda os conceitos do Kubernetes e aprenda a orquestrar containers, automatizando deploys e gerenciando clusters.",
  },
  {
    id: "infraestrutura-linux-essencial",
    title: "Linux Essencial",
    image: "https://placehold.co/400x200",
    price: 159.99,
    category: "Infraestrutura",
    description:
      "Domine os comandos fundamentais do Linux, administração de sistema e navegação por terminal para desenvolvedores.",
  },
  {
    id: "infraestrutura-ci-cd-pipelines",
    title: "CI/CD com GitHub Actions",
    image: "https://placehold.co/400x200",
    price: 219.99,
    category: "Infraestrutura",
    description:
      "Automatize testes, builds e deploys contínuos com GitHub Actions, integrando práticas DevOps ao seu fluxo de trabalho.",
  },
  {
    id: "infraestrutura-terraform-para-iniciantes",
    title: "Terraform para Iniciantes",
    image: "https://placehold.co/400x200",
    price: 239.99,
    category: "Infraestrutura",
    description:
      "Aprenda a criar e gerenciar infraestrutura como código com Terraform, automatizando recursos em nuvem de forma segura.",
  },

  // --- CIBERSEGURANÇA ---
  {
    id: "ciberseguranca-hacking-etico",
    title: "Hacking Ético para Iniciantes",
    image: "https://placehold.co/400x200",
    price: 249.99,
    category: "Cibersegurança",
    description:
      "Descubra as técnicas de um hacker ético e aprenda a identificar vulnerabilidades e proteger sistemas de forma responsável.",
  },
  {
    id: "ciberseguranca-pentest-web",
    title: "Pentest em Aplicações Web",
    image: "https://placehold.co/400x200",
    price: 269.99,
    category: "Cibersegurança",
    description:
      "Realize testes de invasão em aplicações web, aprendendo a explorar falhas, aplicar correções e reforçar a segurança.",
  },
  {
    id: "ciberseguranca-seguranca-redes",
    title: "Segurança em Redes",
    image: "https://placehold.co/400x200",
    price: 239.99,
    category: "Cibersegurança",
    description:
      "Aprenda os fundamentos da segurança de redes, criptografia, firewalls e protocolos de defesa contra ataques.",
  },
  {
    id: "ciberseguranca-engenharia-social",
    title: "Engenharia Social e Prevenção",
    image: "https://placehold.co/400x200",
    price: 219.99,
    category: "Cibersegurança",
    description:
      "Entenda como funciona a engenharia social e aprenda estratégias eficazes para identificar e evitar ataques psicológicos.",
  },
  {
    id: "ciberseguranca-criptografia-pratica",
    title: "Criptografia na Prática",
    image: "https://placehold.co/400x200",
    price: 259.99,
    category: "Cibersegurança",
    description:
      "Domine os conceitos e algoritmos de criptografia, aplicando-os em sistemas reais para garantir segurança e privacidade de dados.",
  },
];

export const featuredCourses: Course[] = [
  {
    id: "front-end-react-do-zero-ao-avancado",
    title: "React do Zero ao Avançado",
    image: "https://placehold.co/400x200",
    price: 249.99,
    category: "Front-end",
    description:
      "Construa interfaces interativas com React, aprendendo componentização, hooks, gerenciamento de estado e boas práticas para aplicações escaláveis.",
  },
  {
    id: "back-end-nodejs-criando-apis-rest",
    title: "Node.js: Criando APIs REST",
    image: "https://placehold.co/400x200",
    price: 219.99,
    category: "Back-end",
    description:
      "Desenvolva APIs REST completas com Node.js e Express, conectando bancos de dados e aplicando princípios de arquitetura limpa.",
  },
  {
    id: "design-ux-ui-principios",
    title: "Princípios de UX/UI",
    image: "https://placehold.co/400x200",
    price: 179.99,
    category: "Design",
    description:
      "Entenda os fundamentos de experiência e interface do usuário, criando produtos digitais intuitivos e visualmente atraentes.",
  },
  {
    id: "banco-de-dados-sql-para-iniciantes",
    title: "SQL para Iniciantes",
    image: "https://placehold.co/400x200",
    price: 179.99,
    category: "Banco de Dados",
    description:
      "Aprenda a consultar, filtrar e manipular dados com SQL, entendendo as bases dos bancos de dados relacionais.",
  },
  {
    id: "infraestrutura-docker-para-desenvolvedores",
    title: "Docker para Desenvolvedores",
    image: "https://placehold.co/400x200",
    price: 229.99,
    category: "Infraestrutura",
    description:
      "Aprenda a criar, gerenciar e distribuir containers com Docker, facilitando o deploy e a escalabilidade de aplicações.",
  },
  {
    id: "ciberseguranca-hacking-etico",
    title: "Hacking Ético para Iniciantes",
    image: "https://placehold.co/400x200",
    price: 249.99,
    category: "Cibersegurança",
    description:
      "Descubra as técnicas de um hacker ético e aprenda a identificar vulnerabilidades e proteger sistemas de forma responsável.",
  },
];
