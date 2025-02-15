> Configuração do Projeto
   - yarn create react-app --template typescript .
   - yarn add -D eslint eslint-config-prettier eslint-config-react-app eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks typescript-eslint/eslint-plugin typescript-eslint/parser prettier prettier-plugin-tailwindcss
   - yarn eslint -- init

   - Crie e configure o arquivo "prettierrc.json":
   ```bash
   {
      "semi": true,
      "singleQuote": true,
      "trailingComma": "es5",
      "jsxSingleQuote": false,
      "bracketSpacing": true,
      "bracketSameLine": false,
      "printWidth": 80,
      "tabWidth": 2,
      "useTabs": false,
      "arrowParens": "always",
      "plugins": [
         "prettier-plugin-tailwindcss"
      ]
   }
   ```

   - Configure o arquivo 'eslint.config.mjs' para compreender a versão do react 17+:

   ```bash
   import globals from "globals";
   import pluginJs from "@eslint/js";
   import tseslint from "typescript-eslint";
   import pluginReact from "eslint-plugin-react";


   /** @type {import('eslint').Linter.Config[]} */
   export default [
   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
   { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
   pluginJs.configs.recommended,
   ...tseslint.configs.recommended,
   pluginReact.configs.flat.recommended,
   pluginReact.configs.flat['jsx-runtime'],
   ];
   ```

   - yarn add -D husky lint-staged
   - yarn add --dev husky

   - Criado o arquivo ".lintstagedrc.json" e adicionado comandos nos arquivos staged

   ```bash
   {
      "*.{ts,tsx}": [
         "yarn eslint --fix"
      ]
   }
   ```

   - npx husky init
   - Adicionada linha no arquivo "pre-commit": yarn lint-staged
   - yarn add -D git-commit-msg-linter
   - npx husky add .husky/commit-msg ".git/hooks/commit-msg \\$1"

> Dependencias do projeto
   - yarn add react-icons
   - yarn add react-router-dom
   - yarn add axios
   - (Styled Components) yarn add styled-components 
   - (Styled Components) yarn add -D @types/styled-components
   - (Styled Components) Extensão VSCode: vscode-styled-components
   - (Styled Components) Extensão VSCode: styled-components-snippets
   - yarn add react-hook-form
   - yarn add validator
      - yarn add -D @types/validator
   - yarn add firebase (Requer configuração adicional do firebase.config.ts)
      - node src/scripts/firestore-script.js (Executa o script firestore.js)
   - (Fire Base) E-mail and Password provider
   - (Fire Base) Google provider
   - Context API
   - yarn add react-spinners
   - Local Storage
   - Stripe integration for payments
   - React Redux: 
      - yarn add redux react-redux
      - yarn add -D @types/react-redux
      - yarn add redux-logger (Requer configuração adicional com applyMiddleWare no store.tsx)
      - yarn add -D @types/redux-logger
      - yarn add redux-persist
      - yarn add redux-thunk
   - Redux ToolKit
      - yarn add @reduxjs/toolkit

> Snippet
   - Digite: exsc, depois Crtl+Espaço (Cria modelo base para no style component)

> Hooks Novos
- useContext: Permite usar contextos nos componentes.