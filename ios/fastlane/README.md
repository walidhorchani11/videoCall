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

### ios beta

```sh
[bundle exec] fastlane ios beta
```

submit a new beta build to apple testflight

this will also make sure the profile is up to date

### ios beta2

```sh
[bundle exec] fastlane ios beta2
```

test beta 2 with doc fastlane

### ios screenshots

```sh
[bundle exec] fastlane ios screenshots
```

screenshots generation and push to appstore

### ios custom_lane

```sh
[bundle exec] fastlane ios custom_lane
```

Description of what the lane does

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
