Flip an image vertically (upside down).

**Aliases** : [ `tf.compat.v1.image.flip_up_down` ](/api_docs/python/tf/image/flip_up_down), [ `tf.compat.v2.image.flip_up_down` ](/api_docs/python/tf/image/flip_up_down)

```
 tf.image.flip_up_down(image)
 
```

Outputs the contents of  `image`  flipped along the height dimension.

See also  `reverse()` .

#### Args:
- **`image`** : 4-D Tensor of shape  `[batch, height, width, channels]`  or 3-D Tensorof shape  `[height, width, channels]` .


#### Returns:
A  `Tensor`  of the same type and shape as  `image` .

#### Raises:
- **`ValueError`** : if the shape of  `image`  not supported.
