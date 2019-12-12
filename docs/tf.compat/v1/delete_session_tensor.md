删除给定张量句柄的张量。

```
 tf.compat.v1.delete_session_tensor(
    handle,
    name=None
)
 
```

这是实验性的，随时可能改变。

Delete the tensor of a given tensor handle. The tensor is producedin a previous run() and stored in the state of the session.

#### 参数：
- **`handle`** : The string representation of a persistent tensor handle.
- **`name`** : Optional name prefix for the return tensor.


#### 返回：
A pair of graph elements. The first is a placeholder for feeding atensor handle and the second is a deletion operation.

