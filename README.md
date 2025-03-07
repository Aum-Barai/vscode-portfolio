<!-- @format -->

# VS Code Themed Portfolio

> This project is a customized version of the [VSCode Portfolio](https://github.com/itsnitinr/vscode-portfolio) template created by [Nitin Ranganath](https://github.com/itsnitinr). The original template has received over 1.1k stars on GitHub and provides an excellent foundation for developer portfolios.

A personal portfolio website featuring a VS Code-inspired interface. Built with modern web technologies and designed to showcase my projects and skills in a familiar IDE-like environment.

## Credits and Attribution

This portfolio is based on the work of:
- **Original Template**: [VSCode Portfolio](https://github.com/itsnitinr/vscode-portfolio)
- **Creator**: [Nitin Ranganath](https://github.com/itsnitinr)
- **Creator's Website**: [nitinranganath.com](https://nitinranganath.com)

The template has been customized with additional features like Web3Forms integration while maintaining the original VS Code theme concept. All credit for the original design and implementation goes to Nitin Ranganath.

## Features

- 💻 VS Code themed UI (original design by Nitin Ranganath)
- 📱 Fully responsive design
- 📧 Functional contact form using Web3Forms
- 🚀 Project showcase with dynamic content
- 🔗 GitHub integration for displaying repositories
- ⚡ Fast page loads with Next.js
- 🎨 Clean and modern design

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

## Environment Setup & Security

### Environment Variables

This project uses environment variables for configuration. Follow these steps to set up:

1. **Development Environment:**

   ```bash
   # Copy the example env file
   cp .env.example .env.local

   # Edit .env.local with your actual values
   # NEVER commit this file
   ```

2. **Production Environment:**
   - Set up environment variables in your hosting platform (e.g., Vercel)
   - Never commit production credentials to the repository

### Security Guidelines

1. **Environment Files:**

   - ✅ `.env.example` - Template file, safe to commit
   - ❌ `.env.local` - Local development, never commit
   - ❌ `.env.production` - Production settings, never commit
   - ❌ `.env.development` - Development settings, never commit

2. **API Keys:**

   - Always use environment variables for API keys
   - Rotate keys if they are ever exposed
   - Use appropriate key restrictions where possible

3. **Public Variables:**

   - Only use `NEXT_PUBLIC_` prefix for variables that are truly public
   - Never prefix sensitive values with `NEXT_PUBLIC_`

4. **Version Control:**
   - Double-check `.gitignore` before committing
   - Never commit any `.env` files except `.env.example`
   - If secrets are accidentally committed, change them immediately

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
