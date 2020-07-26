# Development Environment Setting

## Requirements

### ESLint

> $ yarn global add eslint

> $ yarn add -D eslint-config-prettier

> $ yarn add -D eslint-plugin-prettier

### Prettier

> $ yarn global add prettier

### VS Code Extension

* `TypeScript`: ms-vscode.vscode-typescript-next
* `Live Server`: ritwickdey.liveserver
* `ESLint`: dbaeumer.vscode-eslint
* `Bracket Pair Colorizer2`: coenraads.bracket-pair-colorizer-2
* `Auto Rename Tag`: formulahendry.auto-rename-tag

## Settings

### ESLint

> $ eslint --init

```js
// .eslintrc.js
module.exports = {
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  rules: {
    "react/jsx-filename-extension": false
  }
};
```

### VS Code

```js
// settings.json
{
  "eslint.enable": true,
  "prettier.packageManager": "yarn",
  "prettier.requirePragma": true,
  "prettier.singleQuote": true,
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  },
  "[typescript]": {
    "editor.formatOnSave": true,
  }
}
```
