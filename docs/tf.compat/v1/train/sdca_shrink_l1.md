对参数应用l1正则化收缩步骤。

```
 tf.compat.v1.train.sdca_shrink_l1(
    weights,
    l1,
    l2,
    name=None
)
 
```

#### 参数：
- **`weights`** : A list of  `Tensor`  objects with type mutable  `float32` .a list of vectors where each value is the weight associated with afeature group.
- **`l1`** : A  `float` . Symmetric l1 regularization strength.
- **`l2`** : A  `float` .Symmetric l2 regularization strength. Should be a positive float.
- **`name`** : A name for the operation (optional).


#### 返回：
创建的操作。

