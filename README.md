# Tabular grid for react-native

A `<table>`-style grid layout for react-native.

Requires experimental support for `FlexBasis` to be turned on - to do this, add
the following lines to your `AppDelegate.m`

```
#import <yoga/Yoga.h>
...
YGSetExperimentalFeatureEnabled(YGExperimentalFeatureWebFlexBasis, @YES);
```
