Returns all variables that maintain their moving averages.

```
 tf.compat.v1.moving_average_variables(scope=None)
```
If an ExponentialMovingAverage object is created and the apply() method is called on a list of variables, these variables will be added to the GraphKeys.MOVING_AVERAGE_VARIABLES collection. This convenience function returns the contents of that collection.
#### Args:
- scope: (Optional.) A string. If supplied, the resulting list is filtered to include only items whose name attribute matches scope using re.match. Items without a name attribute are never returned if a scope is supplied. The choice of re.match means that a scope without special tokens filters by prefix.
#### Returns:
A list of Variable objects.
