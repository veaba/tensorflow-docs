Returns the truth value of (x == y) element-wise.



### Aliases:

- [ `tf.compat.v1.equal` ](/api_docs/python/tf/math/equal)

- [ `tf.compat.v1.math.equal` ](/api_docs/python/tf/math/equal)

- [ `tf.compat.v2.equal` ](/api_docs/python/tf/math/equal)

- [ `tf.compat.v2.math.equal` ](/api_docs/python/tf/math/equal)

- [ `tf.equal` ](/api_docs/python/tf/math/equal)



```
 tf.math.equal(
    x,
    y,
    name=None
)
 
```



### Used in the tutorials:

- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)

- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)

- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)

- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)



#### Usage:


```
 x = tf.constant([2, 4])
y = tf.constant(2)
tf.math.equal(x, y) ==> array([True, False])

x = tf.constant([2, 4])
y = tf.constant([2, 4])
tf.math.equal(x, y) ==> array([True,  True])
 
```

**NOTE** :  `Equal`  supports broadcasting. More about broadcasting [here](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html)



#### Args:

- **`x`** : A  `Tensor`  or  `SparseTensor`  or  `IndexedSlices` .

- **`y`** : A  `Tensor`  or  `SparseTensor`  or  `IndexedSlices` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor`  of type bool with the same size as that of x or y.

