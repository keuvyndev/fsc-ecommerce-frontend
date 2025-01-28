Configuração do Projeto
1: yarn create react-app --template typescript .
2: yarn add -D eslint
3: yarn eslint -- init
4: yarn add -D husky lint-staged
4.1: yarn add --dev husky
4.2 Criado o arquivo ".lintstagedrc.json" e adicionado comandos nos arquivos staged

```bash
{
   "*.ts": [
      "yarn standard --fix",
      "git add ."
   ],
   "*.tsx": [
      "yarn standard --fix",
      "git add ."
   ]
}
```

4.3: npx husky init
4.4: Adicionada linha no arquivo "pre-commit": yarn lint-staged
5: yarn add -D git-commit-msg-linter
5.1: npx husky add .husky/commit-msg ".git/hooks/commit-msg \\$1"
