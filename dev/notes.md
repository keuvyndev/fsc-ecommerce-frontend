Configuração do Projeto

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
