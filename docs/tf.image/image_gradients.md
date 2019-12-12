Returns image gradients (dy, dx) for each color channel.

**别名** : [ `tf.compat.v1.image.image_gradients` ](/api_docs/python/tf/image/image_gradients), [ `tf.compat.v2.image.image_gradients` ](/api_docs/python/tf/image/image_gradients)

```
 tf.image.image_gradients(image) 
```

Both output tensors have the same shape as the input: [batch_size, h, w,d]. The gradient values are organized so that [I(x+1, y) - I(x, y)] is inlocation (x, y). That means that dy will always have zeros in the last row,and dx will always have zeros in the last column.

#### 参数：
- **`image`** : Tensor with shape [batch_size, h, w, d].


#### 返回：
Pair of tensors (dy, dx) holding the vertical and horizontal imagegradients (1-step finite difference).

#### 加薪：
- **`ValueError`** : If  `image`  is not a 4D tensor.
