向tf运行时保证输入张量是常量。

**别名** : [ `tf.compat.v1.guarantee_const` ](/api_docs/python/tf/guarantee_const), [ `tf.compat.v2.guarantee_const` ](/api_docs/python/tf/guarantee_const)

```
 tf.guarantee_const(
    input,
    name=None
)
 
```

然后，运行库可以在此基础上自由进行优化。

Only accepts value typed tensors as inputs and rejects resource variable handlesas input.

返回未经修改的输入张量。

#### 参数：
- **`input`** : A  `Tensor` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

