Computes log sigmoid of  `x`  element-wise.



### Aliases:

- [ `tf.compat.v1.log_sigmoid` ](/api_docs/python/tf/math/log_sigmoid)

- [ `tf.compat.v1.math.log_sigmoid` ](/api_docs/python/tf/math/log_sigmoid)

- [ `tf.compat.v2.math.log_sigmoid` ](/api_docs/python/tf/math/log_sigmoid)



```
 tf.math.log_sigmoid(
    x,
    name=None
)
 
```

Specifically,  `y = log(1 / (1 + exp(-x)))` .  For numerical stability,
we use  `y = -tf.nn.softplus(-x)` .



#### Args:

- **`x`** : A Tensor with type  `float32`  or  `float64` .

- **`name`** : A name for the operation (optional).



#### Returns:
A Tensor with the same type as  `x` .

