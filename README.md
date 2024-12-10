# Carwash Calendar

this project is to create a carwash calendar for splitting money and adjust schedule for the Carwash in Petrol Canada.

## Scenerio
In canada, Car wash has been a pain for most people due to weather and its cost. To most ppl the best way to have carwash is to share a washing pass that last for 30 days -180 days. We will open a group on Telegram and each member will have 1 day of a week to wash the car. The group leader will be the one who in charge for owning the carwash card and distribute the login info to other group member. since it is a bit of repeated calculation to generate the schedule for the car wash cycle and calculate the amount of someone who owes the leader. This app is created to facilitate the generation of schedule and calculate the amount needs to pay for each participant in the cycle.

## disclaimer

this project is not to demonstrate any Code or Design pattern, please dun access any of my skills based on this repo

<summary>
 React + TypeScript + Vite
</summary>
<detail>


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
</detail>