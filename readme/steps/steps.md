Kostiantyn Ochenash:

`2023-01-27 16:40`

```bash
yarn create vite . --template react-ts
yarn
yarn dev #yd
```

`2023-01-28 03:44`

```bash
yarn add styled-components modern-normalize
yarn add -D eslint prettier @types/node @types/styled-components
```

`2023-01-28 04:10`

```bash
yarn create @eslint/config

(yarn add -D \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-config-airbnb \
  eslint-config-airbnb-typescript \
  eslint-config-prettier \
  eslint-import-resolver-typescript \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
)

# npx mrm@2 lint-staged # adds husky lint-staged

# (yarn add -D \
#   stylelint \
#   stylelint-config-styled-components \
#   stylelint-config-recommended \
#   stylelint-config-standard \
#   stylelint-config-prettier \
#   stylelint-a11y \
#   stylelint-order \
#   stylelint-config-rational-order)
```