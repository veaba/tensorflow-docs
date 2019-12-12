将对象展开到tfdecorators和最终目标的列表中。

```
 tf.compat.v1.flags.tf_decorator.unwrap(maybe_tf_decorator)
 
```

#### 参数：
- **`maybe_tf_decorator`** : Any callable object.


#### 返回：
A tuple whose first element is an list of TFDecorator-derived objects thatwere applied to the final callable target, and whose second element is thefinal undecorated callable target. If the  `maybe_tf_decorator`  parameter isnot decorated by any TFDecorators, the first tuple element will be an emptylist. The  `TFDecorator`  list is ordered from outermost to innermostdecorators.

