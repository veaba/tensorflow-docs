断言张量不包含任何nan或inf。

```
 tf.debugging.assert_all_finite(
    x,
    message,
    name=None
)
 
```

#### 参数：
- **`x`** : Tensor to check.
- **`message`** : Message to log on failure.
- **`name`** : A name for this operation (optional).


#### 返回：
Same tensor as  `x` .

