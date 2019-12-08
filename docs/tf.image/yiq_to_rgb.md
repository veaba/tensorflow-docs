Converts one or more images from YIQ to RGB.



### Aliases:

- [ `tf.compat.v1.image.yiq_to_rgb` ](/api_docs/python/tf/image/yiq_to_rgb)

- [ `tf.compat.v2.image.yiq_to_rgb` ](/api_docs/python/tf/image/yiq_to_rgb)



```
 tf.image.yiq_to_rgb(images)
 
```

Outputs a tensor of the same shape as the  `images`  tensor, containing the RGB
value of the pixels.
The output is only well defined if the Y value in images are in [0,1],
I value are in [-0.5957,0.5957] and Q value are in [-0.5226,0.5226].



#### Args:

- **`images`** : 2-D or higher rank. Image data to convert. Last dimension must be
size 3.



#### Returns:

- **`images`** : tensor with the same shape as  `images` .

