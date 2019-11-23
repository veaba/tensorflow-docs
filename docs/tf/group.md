
Create an op that groups multiple operations.


### Aliases:
- [ `tf.compat.v1.group` ](/api_docs/python/tf/group)
- [ `tf.compat.v2.group` ](/api_docs/python/tf/group)


```
tf.group(
    *inputs,
    **kwargs
)

```



### Used in the guide:
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)

When this op finishes, all ops in  `inputs`  have finished. This op has nooutput.

See also [ `tf.tuple` ](https://tensorflow.google.cn/api_docs/python/tf/tuple) and[ `tf.control_dependencies` ](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies).


#### Args:
- **`*inputs`** : Zero or more tensors to group.
- **`name`** : A name for this operation (optional).


#### Returns:

An Operation that executes all its inputs.


#### Raises:
- **`ValueError`** : If an unknown keyword argument is provided.
