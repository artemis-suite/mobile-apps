fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## iOS

### ios update_plists

```sh
[bundle exec] fastlane ios update_plists
```

update plists

### ios build

```sh
[bundle exec] fastlane ios build
```

run build with its configurations

### ios alpha

```sh
[bundle exec] fastlane ios alpha
```

build an alpha release with dev certificates, suitable for distributing in firebase app distribution only

### ios beta

```sh
[bundle exec] fastlane ios beta
```

build a beta release with prod certificats, suitable for distributing in test flight

### ios prod

```sh
[bundle exec] fastlane ios prod
```

build a prod release with prod certificats, suitable for distributing in app store

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
