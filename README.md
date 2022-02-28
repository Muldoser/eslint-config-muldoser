# eslint-config-muldoser

[![npm version](https://img.shields.io/npm/v/eslint-config-muldoser?color=green)](https://img.shields.io/npm/v/eslint-config-muldoser?color=green)

This package extends eslint-config-airbnb-base and adds custom rules so a centralized extension can easily be used for the eslint configuration.

## Overview

- [eslint-config-muldoser](#eslint-config-muldoser)
  - [Overview](#overview)
  - [Usage](#usage)
    - [1. Install the correct versions of each package, which are listed by the command:](#1-install-the-correct-versions-of-each-package-which-are-listed-by-the-command)
    - [2. Add `"extends": "eslint-config-muldoser"` to your `.eslintrc`](#2-add-extends-eslint-config-muldoser-to-your-eslintrc)

## Usage

Install with npm:

```sh
npm install eslint-config-muldoser --savedev
```

### 1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-muldoser@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-muldoser
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "eslint-config-muldoser@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.
  
  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-muldoser;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-muldoser eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-muldoser
  ```
  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-muldoser eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
  ```

### 2. Add `"extends": "eslint-config-muldoser"` to your `.eslintrc`
