Assert that the tensor does not contain any NaN's or Inf's.

```
 tf.compat.v1.verify_tensor_all_finite(
    t=None,
    msg=None,
    name=None,
    x=None,
    message=None
)
 
```

#### Args:
- **`t`** : Tensor to check.
- **`msg`** : Message to log on failure.
- **`name`** : A name for this operation (optional).
- **`x`** : Alias for t.
- **`message`** : Alias for msg.


#### Returns:
Same tensor as  `t` .

