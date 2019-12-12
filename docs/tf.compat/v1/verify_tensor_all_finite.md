断言张量不包含任何nan或inf。

```
 tf.compat.v1.verify_tensor_all_finite(
    t=None,
    msg=None,
    name=None,
    x=None,
    message=None
)
 
```

#### 参数：
- **`t`** : Tensor to check.
- **`msg`** : Message to log on failure.
- **`name`** : A name for this operation (optional).
- **`x`** : Alias for t.
- **`message`** : Alias for msg.


#### 返回：
Same tensor as  `t` .

