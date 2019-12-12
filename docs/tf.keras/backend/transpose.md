转换张量并返回它。

**别名** : [ `tf.compat.v1.keras.backend.transpose` ](/api_docs/python/tf/keras/backend/transpose), [ `tf.compat.v2.keras.backend.transpose` ](/api_docs/python/tf/keras/backend/transpose)

```
 tf.keras.backend.transpose(x)
 
```

#### 参数：
- **`x`** : Tensor or variable.


#### 返回：
张量

#### 示例：


```
var = K.variable([[1, 2, 3], [4, 5, 6]]) 
>>> K.eval(var) 
array([[ 1.,  2.,  3.], 
    [ 4.,  5.,  6.]], dtype=float32) 
>>> var_transposed = K.transpose(var) 
>>> K.eval(var_transposed) 
array([[ 1.,  4.], 
    [ 2.,  5.], 
    [ 3.,  6.]], dtype=float32) 

```

```
>>> input = K.placeholder((2, 3))
>>> input
<tf.Tensor 'Placeholder_11:0' shape=(2, 3) dtype=float32>
>>> input_transposed = K.transpose(input)
>>> input_transposed
<tf.Tensor 'transpose_4:0' shape=(3, 2) dtype=float32>

 
```

