Returns the list of input tensors necessary to compute  `tensor` .

**别名** : [ `tf.compat.v1.keras.utils.get_source_inputs` ](/api_docs/python/tf/keras/utils/get_source_inputs), [ `tf.compat.v2.keras.utils.get_source_inputs` ](/api_docs/python/tf/keras/utils/get_source_inputs)

```
 tf.keras.utils.get_source_inputs(
    tensor,
    layer=None,
    node_index=None
)
 
```

Output will always be a list of tensors(potentially with 1 element).

#### 参数：
- **`tensor`** : The tensor to start from.
- **`layer`** : Origin layer of the tensor. Will bedetermined via tensor._keras_history if not provided.
- **`node_index`** : Origin node index of the tensor.


#### 返回：
输入张量列表。

