A transformation that stops dataset iteration based on a  `predicate` .

**Aliases** : [ `tf.compat.v1.data.experimental.take_while` ](/api_docs/python/tf/data/experimental/take_while), [ `tf.compat.v2.data.experimental.take_while` ](/api_docs/python/tf/data/experimental/take_while)

```
 tf.data.experimental.take_while(predicate)
 
```

#### Args:
- **`predicate`** : A function that maps a nested structure of tensors (having shapesand types defined by  `self.output_shapes`  and  `self.output_types` ) to ascalar [ `tf.bool` ](https://tensorflow.google.cn/api_docs/python/tf#bool) tensor.


#### Returns:
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

