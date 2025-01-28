Configuração do Projeto

- yarn create react-app --template typescript .
- yarn add -D eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks typescript-eslint/eslint-plugin typescript-eslint/parser prettier prettier-plugin-tailwindcss
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
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"], // Aplica a configuração para os arquivos JS/TSX
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended, // Regras recomendadas para TypeScript
  pluginReact.configs.recommended, // Regras recomendadas para React
  {
    settings: {
      react: {
        version: "detect", // Detecta automaticamente a versão do React
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Não é mais necessário importar React desde o React 17
      "prettier/prettier": "error", // Mostra erros do Prettier como erros do ESLint
    },
  },
  eslintConfigPrettier, // Desativa regras que entram em conflito com o Prettier
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
