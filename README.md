# Abell Integrations Repository

A repository to show how you can integrate Abell with your favorite frameworks, libraries, tools 

## How to Integrate with Framework of your choice

If your framework's integration example already exists in this repo, you can check it out directly.

If you want to understand how abell integrates with frameworks, you can checkout the steps below. 

1. Install Abell
  ```sh
  npm install --save-dev abell@latest
  ```
2. Change "scripts" in package.json to abell scripts

  ```js
  "scripts": {
    "dev": "abell dev",
    "build": "abell generate"
  }
  ```
3. Turn index.html file of framework to index.abell (Now you can do dynamic things in your HTML  🚀)
4. Add Vite plugin of that framework (E.g. for react its `@vitejs/plugin-react`) Make sure to enable it's SSR configuration if it has any.
5. Add your framework's SSR function (called `renderToString` in most frameworks) in index.abell.
  Checkout [React's Example](./with-react/index.abell)
6. Turn your render call in client-side file to hydrate.
