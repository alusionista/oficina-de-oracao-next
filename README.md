# Oficina de Oração - Blog de Reflexões Bíblicas

Um blog de reflexões bíblicas e meditações diárias sobre o Antigo Testamento, Rei Davi e obediência a Deus, construído com Next.js e componentes shadcn UI.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

## Características

- Design moderno e responsivo
- Construído com Next.js e Tailwind CSS
- Utiliza componentes shadcn UI para uma interface consistente e bonita
- Listagem de postagens com destaque
- Páginas individuais para cada postagem
- Barra lateral responsiva com postagens recentes e categorias
- Navegação otimizada para dispositivos móveis

## Índice:

- [Características](#características)
- [Tecnologias](#tecnologias)
- [Começando](#começando)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Personalização](#personalização)
- [Implantação](#implantação)

## Tecnologias

- [Next.js](https://nextjs.org/) - Framework React para aplicações renderizadas no servidor
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [shadcn UI](https://ui.shadcn.com/) - Componentes UI reutilizáveis construídos com Radix UI e Tailwind CSS
- [Lucide Icons](https://lucide.dev/) - Ícones de código aberto bonitos

## Começando

Primeiro, instale as dependências:

```bash
npm install
```

Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

- `/components` - Componentes React
  - `/blog` - Componentes específicos do blog (BlogCard, FeaturedPost, BlogPostDetail)
  - `/layout` - Componentes de layout (Header, Footer, Sidebar, Layout)
  - `/ui` - Componentes shadcn UI
- `/data` - Dados simulados para o blog
- `/pages` - Páginas Next.js
  - `/post` - Páginas dinâmicas de postagens
- `/styles` - Estilos globais e configuração do Tailwind
- `/public` - Ativos estáticos

## Personalização

### Estilo

O projeto usa Tailwind CSS para estilização. Você pode personalizar as cores, fontes e outros tokens de design no arquivo `tailwind.config.js`.

### Conteúdo

As postagens do blog estão armazenadas no arquivo `data/posts.js`. Você pode adicionar, remover ou modificar as postagens neste arquivo.

### Componentes

Os componentes de UI são construídos com shadcn UI. Você pode personalizar esses componentes ou adicionar novos conforme necessário.

## Testes

### Testes Padrão Incluídos

Incluímos algumas ferramentas que nos ajudam a manter estes templates. Este template atualmente usa:

- [Renovate](https://www.mend.io/free-developer-tools/renovate/) - para atualizar regularmente nossas dependências
- [Cypress](https://www.cypress.io/) - para executar testes sobre como o template funciona no navegador
- [Cypress Netlify Build Plugin](https://github.com/cypress-io/netlify-plugin-cypress) - para executar nossos testes durante o processo de build

Se sua equipe não estiver interessada nessas ferramentas, você pode removê-las facilmente!

### Removing Renovate

In order to keep our project up-to-date with dependencies we use a tool called [Renovate](https://github.com/marketplace/renovate). If you’re not interested in this tooling, delete the `renovate.json` file and commit that onto your main branch.
