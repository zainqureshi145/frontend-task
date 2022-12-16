# DevGate Consultancy's Frontend Intership Task
I have used React and Tailwindcss with Vite for this task.

# Dependencies

- React@latest
- Tailwindcss@latest
- React Router DOM
- Vite

## Initial Setup Requirements
Instead of using create-react-app use Vite to create the project.

```bash
npm create vite@latest name_of_the_app -- --template react
```
When the installation is completed, do:

```bash
cd name_of_the_app
npm install
npm run dev
```
## Setup Tailwindcss

Step 1

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Step 2

Add the paths to all of your template files in your tailwind.config.js file.

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Step 3

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4

Start build process

```bash
npm run dev
```

Step 5

Check Installation

```bash
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

## I have used React Router for Navigation

Install React Router DOM 

```bash
npm i react-router-dom
```

## Thanks
I want to thank Devgate for this opportunity!