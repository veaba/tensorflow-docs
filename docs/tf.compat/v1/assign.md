Update  `ref`  by assigning  `value`  to it.

```
 tf.compat.v1.assign(
    ref,
    value,
    validate_shape=None,
    use_locking=None,
    name=None
)
 
```

This operation outputs a Tensor that holds the new value of  `ref`  afterthe value has been assigned. This makes it easier to chain operations thatneed to use the reset value.

#### Args:
- **`ref`** : A mutable  `Tensor` . Should be from a  `Variable`  node. May beuninitialized.
- **`value`** : A  `Tensor` . Must have the same shape and dtype as  `ref` . The value tobe assigned to the variable.
- **`validate_shape`** : An optional  `bool` . Defaults to  `True` . If true, theoperation will validate that the shape of 'value' matches the shape of theTensor being assigned to.  If false, 'ref' will take on the shape of'value'.
- **`use_locking`** : An optional  `bool` . Defaults to  `True` . If True, the assignmentwill be protected by a lock; otherwise the behavior is undefined, but mayexhibit less contention.
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  that will hold the new value of  `ref`  after  the assignment has completed.

