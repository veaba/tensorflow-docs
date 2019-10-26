Returns the truth value of (x == y) element-wise.
### Aliases:
- tf.compat.v1.equal
- tf.compat.v1.math.equal
- tf.compat.v2.equal
- tf.compat.v2.math.equal
- tf.equal

```
 tf.math.equal(
    x,
    y,
    name=None
)
```
### Used in the tutorials:
- Better performance with tf.function
- Transformer model for language understanding
- Image captioning with visual attention
- Neural machine translation with attention
#### Usage:

```
 x = tf.constant([2, 4])
y = tf.constant(2)
tf.math.equal(x, y) ==> array([True, False])

x = tf.constant([2, 4])
y = tf.constant([2, 4])
tf.math.equal(x, y) ==> array([True,  True])
```
[here](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html)NOTE: Equal supports broadcasting. More about broadcasting 

#### Args:
- x: A Tensor or SparseTensor or IndexedSlices.
- y: A Tensor or SparseTensor or IndexedSlices.
- name: A name for the operation (optional).
#### Returns:
A Tensor of type bool with the same size as that of x or y.
