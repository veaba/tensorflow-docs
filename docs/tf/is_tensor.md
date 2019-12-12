Checks whether  `x`  is a tensor or "tensor-like".

**别名** : [ `tf.compat.v1.is_tensor` ](/api_docs/python/tf/is_tensor), [ `tf.compat.v2.is_tensor` ](/api_docs/python/tf/is_tensor)

```
 tf.is_tensor(x)
 
```

If  `is_tensor(x)`  returns  `True` , it is safe to assume that  `x`  is a tensor orcan be converted to a tensor using  `ops.convert_to_tensor(x)` .

#### 参数：
- **`x`** : A python object to check.


#### 返回：
 `True`  if  `x`  is a tensor or "tensor-like",  `False`  if not.

