import { Technology } from "../types/types";

export const backEnd: Technology[] = [
  {
    Habilidades: [
      "Rest API",
      "JWT",
      "Web Socket",
      "Postman",
      "bcrypt",
      "Swagger",
    ],
  },
  {
    Tecnologias: ["Node js", "Express js", "Nest Js"],
  },
];

export const frontEnd: Technology[] = [
  {
    Habilidades: [
      "Rutas protegidas",
      "APIs",
      "React Query",
      "Router DOM",
      "Lazy loading",
      "Tailwind Css",
      "Estados",
    ],
  },
  {
    Tecnologias: ["React js", "Next js"],
  },
];

export const DB: Technology[] = [
  {
    ["Relacionales / No-Relacionales"]: [
      "MySQL",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
    ],
  },

  {
    ["ORM'S/ODM'S"]: ["Sequelize", "TypeORM", "Prisma", "Mongoose"],
  },
];

export const Herramientas: Technology[] = [
  {
    Habilidades: ["Docker", "Git", "Jest", "Docker Compose"],
  },
];
