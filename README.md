# 🍳 Recipe Explorer App

A modern, responsive web application for browsing and filtering culinary recipes. Built with **React**, **TypeScript**, and styled using **Material UI (MUI)**.

## ✨ Features

- **Responsive Grid Layout**: Uses the modern Material UI v9 Grid system to display recipe cards beautifully across mobile, tablet, and desktop viewports.
- **Recipe Information**: High-quality visual cards showing difficulty badges, ratings, calorie counts, and total preparation time.
- **Dynamic Filtering**: Filter or search recipes by name, minimum star ratings, maximum calories, and cook times (UI controls included).
- **Pagination Control**: Integrated clean navigation tracking pages (e.g., Page 1 of 5) to handle large catalogs smoothly.

## 🛠️ Tech Stack

- **Framework**: [React 18+](https://react.dev)
- **Build Tool**: [Vite](https://vitejs.dev)
- **Language**: [TypeScript](https://typescriptlang.org)
- **UI & Styling**: [Material UI (MUI v9)](https://mui.com)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have **Node.js** installed on your computer. You can verify this by running:

```bash
node -v
```

### Installation

1. **Clone or open the repository folder** in your terminal:

   ```bash
   cd recipes-project
   ```

2. **Install the dependencies**:
   Using `npm`:
   ```bash
   npm install
   ```
   _Alternatively, if you use `yarn` or `pnpm`:_
   ```bash
   yarn install  # or pnpm install
   ```

### Running the Application

To start the local development server with Vite, run the following command:

```bash
npm run dev
```

Once the terminal outputs the local URL, open your browser and navigate to:
👉 **`http://localhost:5173/`** _(or the local port provided in your terminal)_

---

## 📦 Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode with Hot Module Replacement (HMR).
- **`npm run build`**: Compiles and optimizes the TypeScript code into production-ready static assets in the `dist` folder.
- **`npm run preview`**: Locally previews the production build created by the build command.
- **`npm run lint`**: Runs ESLint checks to ensure code quality and formatting match best standards.
