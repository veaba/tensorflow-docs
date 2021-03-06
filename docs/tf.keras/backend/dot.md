Multiplies 2 tensors (and/or variables) and returns a *tensor*.

**别名** : [ `tf.compat.v1.keras.backend.dot` ](/api_docs/python/tf/keras/backend/dot), [ `tf.compat.v2.keras.backend.dot` ](/api_docs/python/tf/keras/backend/dot)

```
 tf.keras.backend.dot(
    x,
    y
)
 
```

When attempting to multiply a nD tensorwith a nD tensor, it reproduces the Theano behavior.(e.g.  `(2, 3) * (4, 3, 5) -> (2, 4, 5)` )

#### 参数：
- **`x`** : Tensor or variable.
- **`y`** : Tensor or variable.


#### 返回：
A tensor, dot product of  `x`  and  `y` .

#### 示例：


```
     # dot product between tensors
    >>> x = K.placeholder(shape=(2, 3))
    >>> y = K.placeholder(shape=(3, 4))
    >>> xy = K.dot(x, y)
    >>> xy
    <tf.Tensor 'MatMul_9:0' shape=(2, 4) dtype=float32>
 
```

```
     # dot product between tensors
    >>> x = K.placeholder(shape=(32, 28, 3))
    >>> y = K.placeholder(shape=(3, 4))
    >>> xy = K.dot(x, y)
    >>> xy
    <tf.Tensor 'MatMul_9:0' shape=(32, 28, 4) dtype=float32>
 
```

```
     # Theano-like behavior example
    >>> x = K.random_uniform_variable(shape=(2, 3), low=0, high=1)
    >>> y = K.ones((4, 3, 5))
    >>> xy = K.dot(x, y)
    >>> K.int_shape(xy)
    (2, 4, 5)
 
```

