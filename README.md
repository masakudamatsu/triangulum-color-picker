# Triangulum Color Picker

A front-end web app to pick tints and shades of a hue by luminance and by
chroma, to make our color choice more logical and more intuitive

## UI preview

![Screenshots of Triangulum Color Picker for desktop, tablet, and mobile screens](readme-images/ui-preview.png)

## URL

https://triangulum.netlify.app

## Features

See Medium articles that accompany Triangulum Color Picker:

- ["Pick color by luminance with Triangulum Color Picker"](https://medium.com/introducing-triangulum-color-picker/pick-color-by-luminance-with-triangulum-color-picker-dbcf858c40a1)
- ["Pick color by chroma with Triangulum Color Picker"](https://medium.com/introducing-triangulum-color-picker/pick-color-by-chroma-with-triangulum-color-picker-f6902d6f91ae)

## JS libraries used

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [parse-color](https://www.npmjs.com/package/parse-color)

## Web APIs used

- [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

## Contributing

This app is in an experimental stage. Pull requests are welcome.

## Setting up local environment

Requirements: [Node.js](http://nodejs.org/) (with [NPM](https://npmjs.org/)
which comes with it) and [Git LFS](https://git-lfs.github.com/)

To install:

```
$ git clone https://github.com/masakudamatsu/triangulum-color-picker.git
$ cd triangulum-color-picker
$ npm install
```

To start a development server:

```
$ npm run dev
```

which runs the `next dev` command (see
[Next.js Docs](https://nextjs.org/docs/api-reference/cli#development)).

## Testing

The following testing tools are used:

- [Cypress](https://www.cypress.io/)
- [cypress-image-snapshot](https://www.npmjs.com/package/cypress-image-snapshot)
- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

To run all the unit tests with Testing Library and Jest (with code coverage
reports):

```
$ npm run test:coverage
```

To run only the unit tests relevant to changes since the last commit (with Jest
watch mode):

```
$ npm t
```

To run e2e tests with
[Cypress Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview):

```
$ npm run test:e2e
```

To run cypress-image-snapshot tests headlessly in the Electron browser (after
launching the development server):

```
$ npm run snapshot
```

When you make a commit, ESLint, Prettier, and Jest will be run only on the files
to be committed. If there is any error, the commit will be aborted.

## Writing commit messages

After staging files to be committed, run

```
npm run commit
```

which launches a dialog to write a commit message in the fashion of
[Angular's Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

## Contact

Triangulum Color Picker is developed by Masa Kudamatsu. You can find me on
Twitter ([@masa_kudamatsu](https://twitter.com/masa_kudamatsu)). Alternatively,
email me at masakudamatsu[at]gmail.com

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
