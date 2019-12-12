Assert that the tensor does not contain any NaN's or Inf's.

```
 tf.debugging.assert_all_finite(
    x,
    message,
    name=None
)
 
```

#### Args:
- **`x`** : Tensor to check.
- **`message`** : Message to log on failure.
- **`name`** : A name for this operation (optional).


#### Returns:
Same tensor as  `x` .

