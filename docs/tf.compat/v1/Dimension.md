## Class Dimension
Represents the value of one dimension in a TensorShape.
## __init__
View source

```
 __init__(value)
```
Creates a new Dimension with the given value.
## Properties
### value
The value of this dimension, or None if it is unknown.
## Methods
### __add__
View source

```
 __add__(other)
```
Returns the sum of `self` and `other`.
Dimensions are summed as follows:

```
 tf.compat.v1.Dimension(m)    + tf.compat.v1.Dimension(n)     ==
tf.compat.v1.Dimension(m + n)
tf.compat.v1.Dimension(m)    + tf.compat.v1.Dimension(None)  # equiv. to
tf.compat.v1.Dimension(None)
tf.compat.v1.Dimension(None) + tf.compat.v1.Dimension(n)     # equiv. to
tf.compat.v1.Dimension(None)
tf.compat.v1.Dimension(None) + tf.compat.v1.Dimension(None)  # equiv. to
tf.compat.v1.Dimension(None)
```
#### Args:
- `other`: An`other` Dimension, or a value accepted by `as_dimension`.
#### Returns:
A Dimension whose value is the sum of `self` and `other`.
### __div__
View source

```
 __div__(other)
```
DEPRECATED: Use `__floordiv__` via `x // y` instead.
This function exists only for backwards compatibility purposes; new code should use `__floordiv__` via the syntax `x // y`. Using `x // y` communicates clearly that the result rounds down, and is forward compatible to Python 3.
#### Args:
- `other`: An`other` `Dimension`.
#### Returns:
A `Dimension` whose value is the integer quotient of `self` and `other`.
### __eq__
View source

```
 __eq__(other)
```
Returns true if `other` has the same known value as this Dimension.
### __floordiv__
View source

```
 __floordiv__(other)
```
Returns the quotient of `self` and `other` rounded down.
Dimensions are divided as follows:

```
 tf.compat.v1.Dimension(m)    // tf.compat.v1.Dimension(n)     ==
tf.compat.v1.Dimension(m // n)
tf.compat.v1.Dimension(m)    // tf.compat.v1.Dimension(None)  # equiv. to
tf.compat.v1.Dimension(None)
tf.compat.v1.Dimension(None) // tf.compat.v1.Dimension(n)     # equiv. to
tf.compat.v1.Dimension(None)
tf.compat.v1.Dimension(None) // tf.compat.v1.Dimension(None)  # equiv. to
tf.compat.v1.Dimension(None)
```
#### Args:
- `other`: An`other` Dimension, or a value accepted by `as_dimension`.
#### Returns:
A `Dimension` whose value is the integer quotient of `self` and `other`.
### __ge__
View source

```
 __ge__(other)
```
Returns True if `self` is known to be greater than or equal to `other`.
Dimensions are compared as follows:

```
 (tf.compat.v1.Dimension(m)    >= tf.compat.v1.Dimension(n))    == (m >= n)
(tf.compat.v1.Dimension(m)    >= tf.compat.v1.Dimension(None)) == None
(tf.compat.v1.Dimension(None) >= tf.compat.v1.Dimension(n))    == None
(tf.compat.v1.Dimension(None) >= tf.compat.v1.Dimension(None)) == None
```
#### Args:
- `other`: An`other` Dimension.
#### Returns:
The value of `self.value >= other.value` if both are known, otherwise None.
### __gt__
View source

```
 __gt__(other)
```
Returns True if `self` is known to be greater than `other`.
Dimensions are compared as follows:

```
 (tf.compat.v1.Dimension(m)    > tf.compat.v1.Dimension(n))    == (m > n)
(tf.compat.v1.Dimension(m)    > tf.compat.v1.Dimension(None)) == None
(tf.compat.v1.Dimension(None) > tf.compat.v1.Dimension(n))    == None
(tf.compat.v1.Dimension(None) > tf.compat.v1.Dimension(None)) == None
```
#### Args:
- `other`: An`other` Dimension.
#### Returns:
The value of `self.value > other.value` if both are known, otherwise None.
### __le__
View source

```
 __le__(other)
```
Returns True if `self` is known to be less than or equal to `other`.
Dimensions are compared as follows:

```
 (tf.compat.v1.Dimension(m)    <= tf.compat.v1.Dimension(n))    == (m <= n)
(tf.compat.v1.Dimension(m)    <= tf.compat.v1.Dimension(None)) == None
(tf.compat.v1.Dimension(None) <= tf.compat.v1.Dimension(n))    == None
(tf.compat.v1.Dimension(None) <= tf.compat.v1.Dimension(None)) == None
```
#### Args:
- `other`: An`other` Dimension.
#### Returns:
The value of `self.value <= other.value` if both are known, otherwise None.
### __lt__
View source

```
 __lt__(other)
```
Returns True if `self` is known to be less than `other`.
Dimensions are compared as follows:

```
 (tf.compat.v1.Dimension(m)    < tf.compat.v1.Dimension(n))    == (m < n)
(tf.compat.v1.Dimension(m)    < tf.compat.v1.Dimension(None)) == None
(tf.compat.v1.Dimension(None) < tf.compat.v1.Dimension(n))    == None
(tf.compat.v1.Dimension(None) < tf.compat.v1.Dimension(None)) == None
```
#### Args:
- `other`: An`other` Dimension.
#### Returns:
The value of `self.value < other.value` if both are known, otherwise None.
### __mod__
View source

```
 __mod__(other)
```
Returns `self` modulo `other`.
Dimension moduli are computed as follows:

```
 tf.compat.v1.Dimension(m)    % tf.compat.v1.Dimension(n)     ==
tf.compat.v1.Dimension(m % n)
tf.compat.v1.Dimension(m)    % tf.compat.v1.Dimension(None)  # equiv. to
tf.compat.v1.Dimension(None)
tf.compat.v1.Dimension(None) % tf.compat.v1.Dimension(n)     # equiv. to
tf.compat.v1.Dimension(None)
tf.compat.v1.Dimension(None) % tf.compat.v1.Dimension(None)  # equiv. to
tf.compat.v1.Dimension(None)
```
#### Args:
- `other`: An`other` Dimension, or a value accepted by `as_dimension`.
#### Returns:
A Dimension whose value is `self` modulo `other`.
### __mul__
View source

```
 __mul__(other)
```
Returns the product of `self` and `other`.
Dimensions are summed as follows:

```
 tf.compat.v1.Dimension(m)    * tf.compat.v1.Dimension(n)     ==
tf.compat.v1.Dimension(m * n)
tf.compat.v1.Dimension(m)    * tf.compat.v1.Dimension(None)  # equiv. to
tf.compat.v1.Dimension(None)
tf.compat.v1.Dimension(None) * tf.compat.v1.Dimension(n)     # equiv. to
tf.compat.v1.Dimension(None)
tf.compat.v1.Dimension(None) * tf.compat.v1.Dimension(None)  # equiv. to
tf.compat.v1.Dimension(None)
```
#### Args:
- `other`: An`other` Dimension, or a value accepted by `as_dimension`.
#### Returns:
A Dimension whose value is the product of `self` and `other`.
### __ne__
View source

```
 __ne__(other)
```
Returns true if `other` has a different known value from `self`.
### __radd__
View source

```
 __radd__(other)
```
Returns the sum of `other` and `self`.
#### Args:
- `other`: An`other` Dimension, or a value accepted by `as_dimension`.
#### Returns:
A Dimension whose value is the sum of `self` and `other`.
### __rdiv__
View source

```
 __rdiv__(other)
```
Use `__floordiv__` via `x // y` instead.
This function exists only to have a better error message. Instead of: TypeError: unsupported operand type(s) for /: 'int' and 'Dimension', this function will explicitly call for usage of `` instead.
#### Args:
- `other`: An`other` `Dimension`.
#### Raises:
TypeError.
### __rfloordiv__
View source

```
 __rfloordiv__(other)
```
Returns the quotient of `other` and `self` rounded down.
#### Args:
- `other`: An`other` Dimension, or a value accepted by `as_dimension`.
#### Returns:
A `Dimension` whose value is the integer quotient of `self` and `other`.
### __rmod__
View source

```
 __rmod__(other)
```
Returns `other` modulo `self`.
#### Args:
- `other`: An`other` Dimension, or a value accepted by `as_dimension`.
#### Returns:
A Dimension whose value is `other` modulo `self`.
### __rmul__
View source

```
 __rmul__(other)
```
Returns the product of `self` and `other`.
#### Args:
- `other`: An`other` Dimension, or a value accepted by `as_dimension`.
#### Returns:
A Dimension whose value is the product of `self` and `other`.
### __rsub__
View source

```
 __rsub__(other)
```
Returns the subtraction of `self` from `other`.
#### Args:
- `other`: An`other` Dimension, or a value accepted by `as_dimension`.
#### Returns:
A Dimension whose value is the subtraction of `self` from `other`.
### __rtruediv__
View source

```
 __rtruediv__(other)
```
Use `__floordiv__` via `x // y` instead.
This function exists only to have a better error message. Instead of: TypeError: unsupported operand type(s) for /: 'int' and 'Dimension', this function will explicitly call for usage of `` instead.
#### Args:
- `other`: An`other` `Dimension`.
#### Raises:
TypeError.
### __sub__
View source

```
 __sub__(other)
```
Returns the subtraction of `other` from `self`.
Dimensions are subtracted as follows:

```
 tf.compat.v1.Dimension(m)    - tf.compat.v1.Dimension(n)     ==
tf.compat.v1.Dimension(m - n)
tf.compat.v1.Dimension(m)    - tf.compat.v1.Dimension(None)  # equiv. to
tf.compat.v1.Dimension(None)
tf.compat.v1.Dimension(None) - tf.compat.v1.Dimension(n)     # equiv. to
tf.compat.v1.Dimension(None)
tf.compat.v1.Dimension(None) - tf.compat.v1.Dimension(None)  # equiv. to
tf.compat.v1.Dimension(None)
```
#### Args:
- `other`: An`other` Dimension, or a value accepted by `as_dimension`.
#### Returns:
A Dimension whose value is the subtraction of `other` from `self`.
### __truediv__
View source

```
 __truediv__(other)
```
Use `__floordiv__` via `x // y` instead.
This function exists only to have a better error message. Instead of: TypeError: unsupported operand type(s) for /: 'Dimension' and 'int', this function will explicitly call for usage of `` instead.
#### Args:
- `other`: An`other` `Dimension`.
#### Raises:
TypeError.
### assert_is_compatible_with
View source

```
 assert_is_compatible_with(other)
```
Raises an exception if `other` is not compatible with this Dimension.
#### Args:
- `other`: An`other` Dimension.
#### Raises:
- `ValueError`: If `self` and `other` are not compatible (see is_compatible_with).
### is_compatible_with
View source

```
 is_compatible_with(other)
```
Returns true if `other` is compatible with this Dimension.
Two known Dimensions are compatible if they have the same value. An unknown Dimension is compatible with all other Dimensions.
#### Args:
- `other`: An`other` Dimension.
#### Returns:
True if this Dimension and `other` are compatible.
### merge_with
View source

```
 merge_with(other)
```
Returns a Dimension that combines the information in `self` and `other`.
Dimensions are combined as follows:

```
 tf.compat.v1.Dimension(n)   .merge_with(tf.compat.v1.Dimension(n))     ==
tf.compat.v1.Dimension(n)
tf.compat.v1.Dimension(n)   .merge_with(tf.compat.v1.Dimension(None))  ==
tf.compat.v1.Dimension(n)
tf.compat.v1.Dimension(None).merge_with(tf.compat.v1.Dimension(n))     ==
tf.compat.v1.Dimension(n)
# equivalent to tf.compat.v1.Dimension(None)
tf.compat.v1.Dimension(None).merge_with(tf.compat.v1.Dimension(None))

# raises ValueError for n != m
tf.compat.v1.Dimension(n)   .merge_with(tf.compat.v1.Dimension(m))
```
#### Args:
- `other`: An`other` Dimension.
#### Returns:
A Dimension containing the combined information of `self` and `other`.
#### Raises:
- `ValueError`: If `self` and `other` are not compatible (see is_compatible_with).
