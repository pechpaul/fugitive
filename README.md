# ☕ Fugitive: The Perfect Brew

Welcome to the Fugitive Chai brewery! In this monorepo, we are carefully blending a rich assortment of modern technologies to craft a full-bodied, aromatic, and delightful web application. This isn't just code; it's a recipe for success.

---

### 🌿 Our Secret Recipe (The Tech Stack)

Every great chai has its essential ingredients. Here are ours:

- **The Cup (Frontend)**: A robust and elegant cup provided by **Angular**, offering a perfect, modern structure for our user's experience.
- **The Spices (Backend)**: A powerful and aromatic blend of spices from **NestJS**, providing a scalable and well-organized API.
- **The Sweetener (Database)**: A flexible dash of sweetness from **MongoDB**, allowing our data to flow smoothly and adapt to any taste.
- **The Kettle (Monorepo Tool)**: A high-performance kettle from **Nx**, ensuring all our ingredients are managed efficiently and brewed together in perfect harmony.
- **The Water (Language)**: The pure, strongly-typed water of **TypeScript**, ensuring a clean and reliable brew from start to finish.

---

### 🫖 The Brew Guide (Getting Started)

Ready to brew your own cup? Follow these steps.

#### 1. Prepare Your Station (Prerequisites)

Ensure you have a running instance of **MongoDB** on your machine. You will also need **Node.js** (v20 or higher).

#### 2. Gather the Ingredients (Installation)

Clone the repository and install all the necessary packages from the root directory:

```bash
npm install
```

#### 3\. A Gentle Heat (Running in Development)

To get the full experience, you'll need to run both the API (the spices) and the App (the tea) at the same time. The easiest way is to use two separate terminals.

**In your first terminal, steep the spices (run the API):**

```bash
npx nx serve api
```

**In your second terminal, pour the tea (run the App):**

```bash
npx nx serve app
```

Once both are running, open your browser to `http://localhost:4200` to enjoy your fresh brew\!

---

### 🗄️ The Spice Rack (Workspace Structure)

Our kitchen is organized for maximum efficiency:

- `apps/`: This is where our final products are stored.
  - `api/`: Our concentrated chai essence (the NestJS backend).
  - `app/`: The final, delicious drink we serve to users (the Angular frontend).
- `libs/`: Our collection of reusable spices and recipes. Any shared code, interfaces, or logic goes here to be used across our brews.

---

### ✨ Useful Incantations (Nx Commands)

Here are a few magical commands to help you with your brewing:

- **Taste-test a specific brew:**

  ```bash
  npx nx test <project-name>  # e.g., nx test api
  ```

- **Check the quality of your ingredients:**

  ```bash
  npx nx lint <project-name>
  ```

- **Efficiently taste-test only what's changed:**

  ```bash
  npx nx affected -t test
  ```

- **See a map of how all your ingredients connect:**

  ```bash
  npx nx graph
  ```

---

Enjoy the process, and happy brewing\!
hosting: https://www.hetzner.com/
