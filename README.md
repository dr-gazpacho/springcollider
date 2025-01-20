# Spring Collider
I don't know Spring. I am rusty with React. I want to learn super collider better. Why not stick em all together?

In the UI, I plan to build a small handlful of synth modules: some basic things like FM Synthesis/Additive Synthesis and Wave Tables.
I also plan to build a digital UI to test some code for an embedded build on a Raspberry Pi.

In the Spring app, I'm going to try to implement a simple Chain of Responsibility. Supercollider can recieve OSC/UDP messages, and therefore sends no responses.
I need to build out an application that keeps track of which synths are running in supercollider so it can handle user input successfully

The Supercollider file should mostly wind up being paramterized SynthDefs and OSC listeners

Notes on FM
- Modulator Frequency: determines sideband spacing
- Modulator Amplitude (mul): determines number of audible side bands (index of modulation)
- Carrier Frequencty: the anchor around which we create sidebands
- A clear sense of pitch arises when the carrier and modulator form a simple ratio

## React + TypeScript + Vite

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
