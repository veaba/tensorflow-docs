Compute the trace of a tensor  `x` .

**别名** : [ `tf.compat.v1.linalg.trace` ](/api_docs/python/tf/linalg/trace), [ `tf.compat.v1.trace` ](/api_docs/python/tf/linalg/trace), [ `tf.compat.v2.linalg.trace` ](/api_docs/python/tf/linalg/trace)

```
 tf.linalg.trace(
    x,
    name=None
)
 
```

 `trace(x)`  returns the sum along the main diagonal of each inner-most matrixin x. If x is of rank  `k`  with shape  `[I, J, K, ..., L, M, N]` , then outputis a tensor of rank  `k-2`  with dimensions  `[I, J, K, ..., L]`  where

 `output[i, j, k, ..., l] = trace(x[i, j, i, ..., l, :, :])` 

#### 例如：


```
 x = tf.constant([[1, 2], [3, 4]])
tf.linalg.trace(x)  # 5

x = tf.constant([[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]])
tf.linalg.trace(x)  # 15

x = tf.constant([[[1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]],
                 [[-1, -2, -3],
                  [-4, -5, -6],
                  [-7, -8, -9]]])
tf.linalg.trace(x)  # [15, -15]
 
```

#### 参数：
- **`x`** : tensor.
- **`name`** : A name for the operation (optional).


#### 返回：
输入张量的轨迹。

