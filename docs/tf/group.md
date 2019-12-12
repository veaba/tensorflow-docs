创建对多个操作进行分组的操作。

**别名** : [ `tf.compat.v1.group` ](/api_docs/python/tf/group), [ `tf.compat.v2.group` ](/api_docs/python/tf/group)

```
 tf.group(
    *inputs,
    **kwargs
)
 
```

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)
When this op finishes, all ops in  `inputs`  have finished. This op has nooutput.

See also [ `tf.tuple` ](https://tensorflow.google.cn/api_docs/python/tf/tuple) and[ `tf.control_dependencies` ](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies).

#### 参数：
- **`*inputs`** : Zero or more tensors to group.
- **`name`** : A name for this operation (optional).


#### 返回：
执行其所有输入的操作。

#### 加薪：
- **`ValueError`** : If an unknown keyword argument is provided.
