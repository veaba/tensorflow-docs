返回与输入形状和内容相同的张量列表

**别名** : [ `tf.compat.v1.identity_n` ](/api_docs/python/tf/identity_n), [ `tf.compat.v2.identity_n` ](/api_docs/python/tf/identity_n)

```
 tf.identity_n(
    input,
    name=None
)
 
```

张量。

This op can be used to override the gradient for complicated functions. Forexample, suppose y = f(x) and we wish to apply a custom function g for backpropsuch that dx = g(dy). In Python,

```
 with tf.get_default_graph().gradient_override_map(
    {'IdentityN': 'OverrideGradientWithG'}):
  y, _ = identity_n([f(x), x])

@tf.RegisterGradient('OverrideGradientWithG')
def ApplyG(op, dy, _):
  return [None, g(dy)]  # Do not backprop to f(x).
 
```

#### 参数：
- **`input`** : A list of  `Tensor`  objects.
- **`name`** : A name for the operation (optional).


#### 返回：
A list of  `Tensor`  objects. Has the same type as  `input` .

