Randomly flip an image horizontally (left to right).
### Aliases:
- tf.compat.v1.image.random_flip_left_right
- tf.compat.v2.image.random_flip_left_right

```
 tf.image.random_flip_left_right(
    image,
    seed=None
)
```
### Used in the tutorials:
- CycleGAN
With a 1 in 2 chance, outputs the contents of image flipped along the second dimension, which is width. Otherwise output the image as-is.
#### Args:
- image: 4-D Tensor of shape [batch, height, width, channels] or 3-D Tensor of shape [height, width, channels].
- seed: A Python integer. Used to create a random seed. See tf.compat.v1.set_random_seed for behavior.
#### Returns:
A tensor of the same type and shape as image.
#### Raises:
- ValueError: if the shape of image not supported.
