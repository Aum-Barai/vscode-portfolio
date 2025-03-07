<!-- @format -->

# My Portfolio Website

Welcome to my modern portfolio website repository. This project showcases my personal work, projects, and skills using modern web technologies.

## Tech Stack

- React
- TypeScript
- Next.js
- Tailwind CSS (if applicable)

## Project Overview

This portfolio is built using a component-based architecture for clean, maintainable, and scalable code. The project has been streamlined by removing unnecessary boilerplate and example files, such as default API routes that are not used in the final product.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the development server using `npm run dev` or `yarn dev`.

## File Structure

- pages/ _(Main application pages)_
- components/ _(Reusable UI components)_
- public/ _(Static assets)_
- styles/ _(CSS modules)_
- Other configuration files (e.g., package.json, tsconfig.json)

## Features

- VS Code themed UI
- Responsive design
- Dark mode support
- Multiple themes:
  - GitHub Dark (default)
  - Dracula
  - Ayu
  - Nord

## Environment Variables

For fetching your articles from dev.to, create an `.env.local` file inside the project directory. Check the `.env.local.example` file for more information.

## Running Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

All VSCode related components can be found in the `components` folder. To change the content of the portfolio, check out the `pages` folder. To add or remove pages, modify `components/Sidebar.jsx` and `components/Explorer.jsx`.

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributions

Contributions are welcome! Feel free to fork the repository and submit pull requests for improvements or bug fixes.
