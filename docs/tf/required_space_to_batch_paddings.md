
Calculate padding required to make block_shape divide input_shape.


### Aliases:
- [ `tf.compat.v1.required_space_to_batch_paddings` ](/api_docs/python/tf/required_space_to_batch_paddings)
- [ `tf.compat.v2.required_space_to_batch_paddings` ](/api_docs/python/tf/required_space_to_batch_paddings)


```
tf.required_space_to_batch_paddings(
    input_shape,
    block_shape,
    base_paddings=None,
    name=None
)

```


This function can be used to calculate a suitable paddings argument for usewith space_to_batch_nd and batch_to_space_nd.


#### Args:
- **`input_shape`** : int32 Tensor of shape [N].
- **`block_shape`** : int32 Tensor of shape [N].
- **`base_paddings`** : Optional int32 Tensor of shape [N, 2].  Specifies the minimumamount of padding to use.  All elements must be >= 0.  If not specified,defaults to 0.
- **`name`** : string.  Optional name prefix.


#### Returns:

(paddings, crops), where:

 `paddings`  and  `crops`  are int32 Tensors of rank 2 and shape [N, 2]
- <p>**`satisfying`** : paddings[i, 0] = base_paddings[i, 0].0 <= paddings[i, 1] - base_paddings[i, 1] < block_shape[i](/api_docs/python/tf/input_shape%5Bi%5D%20+%20paddings%5Bi,%200%5D%20+%20paddings%5Bi,%201%5D) % block_shape[i] == 0</p><p>crops[i, 0] = 0crops[i, 1] = paddings[i, 1] - base_paddings[i, 1]</p>

Raises: ValueError if called with incompatible shapes.
