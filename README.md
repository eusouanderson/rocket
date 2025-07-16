# 🚀 Rocket – Full Stack Moderno com Fastify, Drizzle ORM, Vue 3 e Vuetify

O **Rocket** é um projeto full stack criado com foco em performance, escalabilidade e tipagem segura. Ele combina um backend moderno com **Fastify + Drizzle ORM** e um frontend dinâmico utilizando **Vue 3 + Vuetify + Tailwind CSS**, entregando uma estrutura robusta, enxuta e de fácil manutenção.

---

## 🧠 Tecnologias Utilizadas

### Backend (`/server`)
- **Fastify** – Framework Node.js ultrarrápido para APIs performáticas.
- **TypeScript** – Tipagem estática para maior confiabilidade no desenvolvimento.
- **Drizzle ORM** – ORM moderno e tipo-safe com suporte a migrations e schemas.
- **Zod** – Validação de dados com segurança de tipos.
- **PostgreSQL** – Banco de dados relacional robusto.
- **Drizzle Kit** – CLI para gerenciar o banco e visualizar estrutura via `studio`.
- **Biome.js** – Linter/formatter ultrarrápido para código limpo e padronizado.

### Frontend (`/web`)
- **Vue 3** – Framework reativo para criação de SPAs.
- **Vuetify 3** – Biblioteca de componentes UI com Material Design.
- **Tailwind CSS** – Framework de utilitários para estilização rápida e responsiva.
- **Vite** – Bundler moderno para desenvolvimento rápido.
- **Vue Router** – Gerenciamento de rotas SPA.
- **Cypress** – Testes E2E e de componentes.
- **Prettier, ESLint, Oxlint** – Ferramentas de linting e formatação.

---

## ⚙️ Funcionalidades

### Backend
- Servidor Fastify com inicialização via `src/server.ts`
- Suporte a variáveis de ambiente com `--env-file`
- Migrations e seeds automatizados com Drizzle Kit
- Tipagem segura do banco de dados até as rotas com Drizzle + Zod
- Suporte a CORS com `@fastify/cors`
- Scripts para desenvolvimento, build e visualização do banco

### Frontend
- Interface moderna e responsiva com Vuetify + Tailwind
- Navegação SPA com Vue Router
- Estilização padronizada com Tailwind + Sass
- Testes E2E (Cypress) com `start-server-and-test`
- Testes unitários de componentes com Cypress
- Linting avançado com Oxlint, ESLint e Prettier

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js `>=18`
- pnpm `>=10`
- PostgreSQL local ou remoto

### Backend

```bash
cd server
pnpm install

# Gerar e aplicar as migrations
pnpm db:generate
pnpm db:migrate

# Rodar o seed
pnpm db:seed

# Iniciar o servidor em modo dev
pnpm dev
