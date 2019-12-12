Computes the standard deviation of elements across dimensions of a tensor.

**Aliases** : [ `tf.compat.v1.math.reduce_std` ](/api_docs/python/tf/math/reduce_std), [ `tf.compat.v2.math.reduce_std` ](/api_docs/python/tf/math/reduce_std)

```
 tf.math.reduce_std(    input_tensor,    axis=None,    keepdims=False,    name=None) 
```

### Used in the tutorials:
- [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)
Reduces  `input_tensor`  along the dimensions given in  `axis` .Unless  `keepdims`  is true, the rank of the tensor is reduced by 1 for eachentry in  `axis` . If  `keepdims`  is true, the reduced dimensionsare retained with length 1.

If  `axis`  is None, all dimensions are reduced, and atensor with a single element is returned.

#### For example:


```
 x = tf.constant([[1., 2.], [3., 4.]])
tf.reduce_std(x)  # 1.1180339887498949
tf.reduce_std(x, 0)  # [1., 1.]
tf.reduce_std(x, 1)  # [0.5,  0.5]
 
```

#### Args:
- **`input_tensor`** : The tensor to reduce. Should have numeric type.
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`name`** : A name scope for the associated operations (optional).


#### Returns:
The reduced tensor, of the same dtype as the input_tensor.

#### Numpy Compatibility
Equivalent to np.std

Please note that  `np.std`  has a  `dtype`  parameter that could be used tospecify the output type. By default this is  `dtype=float64` . On the otherhand,  `tf.reduce_std`  has an aggressive type inference from  `input_tensor` ,

