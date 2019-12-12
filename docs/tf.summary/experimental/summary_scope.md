用于定义自定义摘要操作的实验上下文管理器。

```
 tf.summary.experimental.summary_scope(
    name,
    default_name='summary',
    values=None
)
 
```

This behaves similarly to [ `tf.name_scope` ](https://tensorflow.google.cn/api_docs/python/tf/name_scope), except that it returns a generatedsummary tag in addition to the scope name. The tag is structurally similar tothe scope name - derived from the user-provided name, prefixed with enclosingname scopes if any - but we relax the constraint that it be uniquified, aswell as the character set limitation (so the user-provided name can containcharacters not legal for scope names; in the scope name these are removed).

这使得summary标记对用户来说更加可预测和一致。

For example, to define a new summary op called  `my_op` :

```
 def my_op(name, my_value, step):
  with tf.summary.summary_scope(name, "MyOp", [my_value]) as (tag, scope):
    my_value = tf.convert_to_tensor(my_value)
    return tf.summary.write(tag, my_value, step=step)
 
```

#### 参数：
- **`name`** : string name for the summary.
- **`default_name`** : Optional; if provided, used as default name of the summary.
- **`values`** : Optional; passed as  `values`  parameter to name_scope.


#### 收益率：
A tuple  `(tag, scope)`  as described above.

