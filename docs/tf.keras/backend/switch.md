根据标量值在两个操作之间切换。

**别名** : [ `tf.compat.v1.keras.backend.switch` ](/api_docs/python/tf/keras/backend/switch), [ `tf.compat.v2.keras.backend.switch` ](/api_docs/python/tf/keras/backend/switch)

```
 tf.keras.backend.switch(
    condition,
    then_expression,
    else_expression
)
 
```

Note that both  `then_expression`  and  `else_expression` should be symbolic tensors of the *same shape*.

#### 参数：
- **`condition`** : tensor ( `int`  or  `bool` ).
- **`then_expression`** : either a tensor, or a callable that returns a tensor.
- **`else_expression`** : either a tensor, or a callable that returns a tensor.


#### 返回：
选定的张量。

#### 加薪：
- **`ValueError`** : If rank of  `condition`  is greater than rank of expressions.
