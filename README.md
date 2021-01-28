# Triangulum Color Picker

A front-end web app to pick a tint/tone/shade of hues more logically and more intuitively than the standard color pickers

![landing page screenshot](public/thumbnail.png)

## URL

https://triangulum-color-picker.app

## JS libraries used

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [parse-color](https://github.com/substack/parse-color)
- [Styled Components](https://styled-components.com/)

## Web APIs used

- [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

## Contributing

This app is in an experimental stage. Pull requests are welcome.

## Setting up local environment

Requirements: [Node.js](http://nodejs.org/) (and [NPM](https://npmjs.org/) which comes with it).

To install:
```
$ git clone https://github.com/masakudamatsu/triangulum-color-picker.git
$ cd triangulum-color-picker
$ npm install
```
To start server:
```
$ npm run dev
```
which runs the `next dev` command (see [Next.js Docs](https://nextjs.org/docs/api-reference/cli#development)).

## Testing

The following testing tools are used:
- [Cypress](https://www.cypress.io/)
- [cypress-image-snapshot](https://www.npmjs.com/package/cypress-image-snapshot)
- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

To run component tests with Testing-Library and Jest:
```
$ npm test
```

To run e2e tests with [Cypress Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview):
- if you've started the development server
```
$ npm run e2e
```
- if you haven't started the development server
```
$ npm run test:e2e
```

To run cypress-image-snapshot tests headlessly in the Electron browser:
```
$ npm run snapshot
```

## Contact

Triangulum Color Picker is developed by Masa Kudamatsu. You can find me on Twitter ([@masa_kudamatsu](https://twitter.com/masa_kudamatsu)). Alternatively, email me at masakudamatsu[at]gmail.com

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
