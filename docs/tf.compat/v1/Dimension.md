

## Class  `Dimension` 
Represents the value of one dimension in a TensorShape.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L184-L198)

```
 __init__(value)
 
```

Creates a new Dimension with the given value.

## Properties


###  `value` 
The value of this dimension, or None if it is unknown.

## Methods


###  `__add__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L317-L346)

```
 __add__(other)
 
```

Returns the sum of  `self`  and  `other` .

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
- **`other`** : Another Dimension, or a value accepted by  `as_dimension` .


#### Returns:
A Dimension whose value is the sum of  `self`  and  `other` .

###  `__div__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L494-L508)

```
 __div__(other)
 
```

DEPRECATED: Use  `__floordiv__`  via  `x // y`  instead.

This function exists only for backwards compatibility purposes; new codeshould use  `__floordiv__`  via the syntax  `x // y` .  Using  `x // y` communicates clearly that the result rounds down, and is forward compatibleto Python 3.

#### Args:
- **`other`** : Another  `Dimension` .


#### Returns:
A  `Dimension`  whose value is the integer quotient of  `self`  and  `other` .

###  `__eq__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L207-L215)

```
 __eq__(other)
 
```

Returns true if  `other`  has the same known value as this Dimension.

###  `__floordiv__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L448-L477)

```
 __floordiv__(other)
 
```

Returns the quotient of  `self`  and  `other`  rounded down.

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
- **`other`** : Another Dimension, or a value accepted by  `as_dimension` .


#### Returns:
A  `Dimension`  whose value is the integer quotient of  `self`  and  `other` .

###  `__ge__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L673-L696)

```
 __ge__(other)
 
```

Returns True if  `self`  is known to be greater than or equal to  `other` .

Dimensions are compared as follows:

```
 (tf.compat.v1.Dimension(m)    >= tf.compat.v1.Dimension(n))    == (m >= n)
(tf.compat.v1.Dimension(m)    >= tf.compat.v1.Dimension(None)) == None
(tf.compat.v1.Dimension(None) >= tf.compat.v1.Dimension(n))    == None
(tf.compat.v1.Dimension(None) >= tf.compat.v1.Dimension(None)) == None
 
```

#### Args:
- **`other`** : Another Dimension.


#### Returns:
The value of  `self.value >= other.value`  if both are known, otherwiseNone.

###  `__gt__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L648-L671)

```
 __gt__(other)
 
```

Returns True if  `self`  is known to be greater than  `other` .

Dimensions are compared as follows:

```
 (tf.compat.v1.Dimension(m)    > tf.compat.v1.Dimension(n))    == (m > n)
(tf.compat.v1.Dimension(m)    > tf.compat.v1.Dimension(None)) == None
(tf.compat.v1.Dimension(None) > tf.compat.v1.Dimension(n))    == None
(tf.compat.v1.Dimension(None) > tf.compat.v1.Dimension(None)) == None
 
```

#### Args:
- **`other`** : Another Dimension.


#### Returns:
The value of  `self.value > other.value`  if both are known, otherwiseNone.

###  `__le__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L623-L646)

```
 __le__(other)
 
```

Returns True if  `self`  is known to be less than or equal to  `other` .

Dimensions are compared as follows:

```
 (tf.compat.v1.Dimension(m)    <= tf.compat.v1.Dimension(n))    == (m <= n)
(tf.compat.v1.Dimension(m)    <= tf.compat.v1.Dimension(None)) == None
(tf.compat.v1.Dimension(None) <= tf.compat.v1.Dimension(n))    == None
(tf.compat.v1.Dimension(None) <= tf.compat.v1.Dimension(None)) == None
 
```

#### Args:
- **`other`** : Another Dimension.


#### Returns:
The value of  `self.value <= other.value`  if both are known, otherwiseNone.

###  `__lt__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L598-L621)

```
 __lt__(other)
 
```

Returns True if  `self`  is known to be less than  `other` .

Dimensions are compared as follows:

```
 (tf.compat.v1.Dimension(m)    < tf.compat.v1.Dimension(n))    == (m < n)
(tf.compat.v1.Dimension(m)    < tf.compat.v1.Dimension(None)) == None
(tf.compat.v1.Dimension(None) < tf.compat.v1.Dimension(n))    == None
(tf.compat.v1.Dimension(None) < tf.compat.v1.Dimension(None)) == None
 
```

#### Args:
- **`other`** : Another Dimension.


#### Returns:
The value of  `self.value < other.value`  if both are known, otherwiseNone.

###  `__mod__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L558-L584)

```
 __mod__(other)
 
```

Returns  `self`  modulo  `other` .

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
- **`other`** : Another Dimension, or a value accepted by  `as_dimension` .


#### Returns:
A Dimension whose value is  `self`  modulo  `other` .

###  `__mul__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L405-L435)

```
 __mul__(other)
 
```

Returns the product of  `self`  and  `other` .

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
- **`other`** : Another Dimension, or a value accepted by  `as_dimension` .


#### Returns:
A Dimension whose value is the product of  `self`  and  `other` .

###  `__ne__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L217-L225)

```
 __ne__(other)
 
```

Returns true if  `other`  has a different known value from  `self` .

###  `__radd__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L348-L357)

```
 __radd__(other)
 
```

Returns the sum of  `other`  and  `self` .

#### Args:
- **`other`** : Another Dimension, or a value accepted by  `as_dimension` .


#### Returns:
A Dimension whose value is the sum of  `self`  and  `other` .

###  `__rdiv__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L510-L524)

```
 __rdiv__(other)
 
```

Use  `__floordiv__`  via  `x // y`  instead.

This function exists only to have a better error message. Instead of: `TypeError: unsupported operand type(s) for /: 'int' and 'Dimension'` ,this function will explicitly call for usage of  `//`  instead.

#### Args:
- **`other`** : Another  `Dimension` .


#### Raises:
TypeError.

###  `__rfloordiv__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L479-L492)

```
 __rfloordiv__(other)
 
```

Returns the quotient of  `other`  and  `self`  rounded down.

#### Args:
- **`other`** : Another Dimension, or a value accepted by  `as_dimension` .


#### Returns:
A  `Dimension`  whose value is the integer quotient of  `self`  and  `other` .

###  `__rmod__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L586-L596)

```
 __rmod__(other)
 
```

Returns  `other`  modulo  `self` .

#### Args:
- **`other`** : Another Dimension, or a value accepted by  `as_dimension` .


#### Returns:
A Dimension whose value is  `other`  modulo  `self` .

###  `__rmul__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L437-L446)

```
 __rmul__(other)
 
```

Returns the product of  `self`  and  `other` .

#### Args:
- **`other`** : Another Dimension, or a value accepted by  `as_dimension` .


#### Returns:
A Dimension whose value is the product of  `self`  and  `other` .

###  `__rsub__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L390-L403)

```
 __rsub__(other)
 
```

Returns the subtraction of  `self`  from  `other` .

#### Args:
- **`other`** : Another Dimension, or a value accepted by  `as_dimension` .


#### Returns:
A Dimension whose value is the subtraction of  `self`  from  `other` .

###  `__rtruediv__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L542-L556)

```
 __rtruediv__(other)
 
```

Use  `__floordiv__`  via  `x // y`  instead.

This function exists only to have a better error message. Instead of: `TypeError: unsupported operand type(s) for /: 'int' and 'Dimension'` ,this function will explicitly call for usage of  `//`  instead.

#### Args:
- **`other`** : Another  `Dimension` .


#### Raises:
TypeError.

###  `__sub__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L359-L388)

```
 __sub__(other)
 
```

Returns the subtraction of  `other`  from  `self` .

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
- **`other`** : Another Dimension, or a value accepted by  `as_dimension` .


#### Returns:
A Dimension whose value is the subtraction of  `other`  from  `self` .

###  `__truediv__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L526-L540)

```
 __truediv__(other)
 
```

Use  `__floordiv__`  via  `x // y`  instead.

This function exists only to have a better error message. Instead of: `TypeError: unsupported operand type(s) for /: 'Dimension' and 'int'` ,this function will explicitly call for usage of  `//`  instead.

#### Args:
- **`other`** : Another  `Dimension` .


#### Raises:
TypeError.

###  `assert_is_compatible_with` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L263-L275)

```
 assert_is_compatible_with(other)
 
```

Raises an exception if  `other`  is not compatible with this Dimension.

#### Args:
- **`other`** : Another Dimension.


#### Raises:
- **`ValueError`** : If  `self`  and  `other`  are not compatible (seeis_compatible_with).


###  `is_compatible_with` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L244-L261)

```
 is_compatible_with(other)
 
```

Returns true if  `other`  is compatible with this Dimension.

Two known Dimensions are compatible if they have the same value.An unknown Dimension is compatible with all other Dimensions.

#### Args:
- **`other`** : Another Dimension.


#### Returns:
True if this Dimension and  `other`  are compatible.

###  `merge_with` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L277-L315)

```
 merge_with(other)
 
```

Returns a Dimension that combines the information in  `self`  and  `other` .

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
- **`other`** : Another Dimension.


#### Returns:
A Dimension containing the combined information of  `self`  and `other` .

#### Raises:
- **`ValueError`** : If  `self`  and  `other`  are not compatible (seeis_compatible_with).
