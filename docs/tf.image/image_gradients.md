Returns image gradients (dy, dx) for each color channel.
### Aliases:
- tf.compat.v1.image.image_gradients
- tf.compat.v2.image.image_gradients

```
 tf.image.image_gradients(image)
```
Both output tensors have the same shape as the input: [batch_size, h, w, d]. The gradient values are organized so that [I(x+1, y) - I(x, y)] is in location (x, y). That means that dy will always have zeros in the last row, and dx will always have zeros in the last column.
#### Arguments:
- image: Tensor with shape [batch_size, h, w, d].
#### Returns:
Pair of tensors (dy, dx) holding the vertical and horizontal image gradients (1-step finite difference).
#### Raises:
- ValueError: If image is not a 4D tensor.
