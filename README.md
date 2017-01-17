# Dashboard Layout Labs

Dashboard Layout Labs. See a live demo at https://vlukashov.github.io/layout-lab/.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Install project dependencies

```
$ npm install
```

## Viewing Your Application

Without live auto reload:
```
$ polymer serve
```

With live auto reload:
```
$ npm start
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Updating the GitHub pages

```
$ npm run update-docs
```

This will build the project (`polymer build`) and recreate the contents of the `docs/` folder from the `build/unbundled/` folder. It will also replace all references to 3rd party dependencies from the `bower_components` folder with corresponding references to `unpkg.com`.

Push to the `master` branch to deploy a new version to GitHub pages at https://vlukashov.github.io/layout-lab/.

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
