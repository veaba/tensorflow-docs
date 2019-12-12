Assert tensor shapes and dimension size relationships between tensors.

```
 tf.debugging.assert_shapes(    shapes,    data=None,    summarize=None,    message=None,    name=None) 
```

This Op checks that a collection of tensors shape relationshipssatisfies given constraints.

#### Example:


```
 tf.assert_shapes([
  (x: ('N', 'Q')),
  (y: ('N', 'D')),
  (param: ('Q',)),
  (scalar: ()),
])
 
```

If  `x` ,  `y` ,  `param`  or  `scalar`  does not have a shape that satisfiesall specified constraints,  `message` , as well as the first  `summarize`  entriesof the first encountered violating tensor are printed, and `InvalidArgumentError`  is raised.

Size entries in the specified shapes are checked against other entries bytheir **hash** , except:  - a size entry is interpreted as an explicit size if it can be parsed as an    integer primitive.  - a size entry is interpreted as *any* size if it is None or '.'.

If the first entry of a shape is  `...`  (type  `Ellipsis` ) or '*' that indicatesa variable number of outer dimensions of unspecified size, i.e. the constraintapplies to the inner-most dimensions only.

Scalar tensors and specified shapes of length zero (excluding the 'inner-most'prefix) are both treated as having a single dimension of size one.

#### Args:
- **`shapes`** : dictionary with ( `Tensor`  to shape) items. A shape must be aniterable.
- **`data`** : The tensors to print out if the condition is False.  Defaults to errormessage and first few entries of the violating tensor.
- **`summarize`** : Print this many entries of the tensor.
- **`message`** : A string to prefix to the default message.
- **`name`** : A name for this operation (optional).  Defaults to "assert_shapes".


#### Raises:
- **`ValueError`** :  If static checks determine any shape constraint is violated.
