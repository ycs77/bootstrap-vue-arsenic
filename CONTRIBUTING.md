# Contributing

> 👍🎉 First off, thanks for taking the time to contribute! 🎉👍

## Playground & Issue Reports

If you want to play with BootstrapVue components without any local setup just head to
[OnlinePlayground](https://bootstrap-vue-arsenic.js.orgplay) and you can interactively play and test
components with a fresh Vue instance. If you want to keep your changes or make PRs reporting a
component's misbehaviour you can save them in JSFiddle and provide that link in issues.

## Setup

- Clone this repo (`git clone https://github.com/ycs77/bootstrap-vue-arsenic --branch=develop`)
- Make sure you have node & yarn installed locally.
- `cd bootstrap-vue-arsenic`
- Run `yarn install` to get all dependencies installed.

## Work on components

If you want to hack and improve components locally, you can follow these steps:

- Run `yarn docs-dev` to run a local development server.
- Head to `http://localhost:3000/play`.
- Now you can locally make changes to components (they are located in the `components` directory).
  Changes will be applied with webpack hot-reloading without needing to reload the page.
- Finally feel free to share your awesome hacks with others and opening a PR.

## Test inside your project

If you want to see your changes in your project instead of the playground:

- Execute `yarn link` inside _bootstrap-vue-arsenic_ directory.
- In your project run `yarn link bootstrap-vue-arsenic`
- Run `yarn watch` inside _bootstrap-vue-arsenic_
- Now every time you change a component, a new production version will be built and ready on your
  project.

## Pull requests

Please ensure all pull requests are made against the `develop` branch on GitHub. See the
[Conventional Commits](https://conventionalcommits.org/) spec for commit and PR naming guidelines.
This is very important, as the `CHANGELOG` is generated from these messages.

Examples:

- `fix(modal): fixes some broken modal stuff`
- `feat(table): add a feature to the table component!`

## Attribution

> This Contributing Guide is adapted from
> [BootstrapVue's contributing guide](https://github.com/bootstrap-vue/bootstrap-vue/blob/dev/CONTRIBUTING.md).
