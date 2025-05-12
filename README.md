# Vatican News Inspired Blog with shadcn UI

A blog website inspired by Vatican News, built with Next.js and shadcn UI components.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

## Features

- Modern, responsive design inspired by Vatican News
- Built with Next.js and Tailwind CSS
- Uses shadcn UI components for a consistent and beautiful UI
- Blog post listing with featured posts
- Individual blog post pages
- Responsive sidebar with recent posts and categories
- Mobile-friendly navigation

## Table of Contents:

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-rendered applications
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn UI](https://ui.shadcn.com/) - Re-usable UI components built with Radix UI and Tailwind CSS
- [Lucide Icons](https://lucide.dev/) - Beautiful open-source icons

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/components` - React components
  - `/blog` - Blog-specific components (BlogCard, FeaturedPost, BlogPostDetail)
  - `/layout` - Layout components (Header, Footer, Sidebar, Layout)
  - `/ui` - shadcn UI components
- `/data` - Mock data for the blog
- `/pages` - Next.js pages
  - `/post` - Dynamic blog post pages
- `/styles` - Global styles and Tailwind configuration
- `/public` - Static assets

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the colors, fonts, and other design tokens in the `tailwind.config.js` file.

### Content

The blog posts are stored in the `data/posts.js` file. You can add, remove, or modify the posts in this file.

### Components

The UI components are built with shadcn UI. You can customize these components or add new ones as needed.

## Testing

### Included Default Testing

We’ve included some tooling that helps us maintain these templates. This template currently uses:

- [Renovate](https://www.mend.io/free-developer-tools/renovate/) - to regularly update our dependencies
- [Cypress](https://www.cypress.io/) - to run tests against how the template runs in the browser
- [Cypress Netlify Build Plugin](https://github.com/cypress-io/netlify-plugin-cypress) - to run our tests during our build process

If your team is not interested in this tooling, you can remove them with ease!

### Removing Renovate

In order to keep our project up-to-date with dependencies we use a tool called [Renovate](https://github.com/marketplace/renovate). If you’re not interested in this tooling, delete the `renovate.json` file and commit that onto your main branch.
