从给定的嵌套结构返回平面列表。

**别名** : [ `tf.compat.v1.nest.flatten` ](/api_docs/python/tf/nest/flatten), [ `tf.compat.v2.nest.flatten` ](/api_docs/python/tf/nest/flatten)

```
 tf.nest.flatten(
    structure,
    expand_composites=False
)
 
```

### 在指南中使用：
- [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)
If nest is not a sequence, tuple, or dict, then returns a single-element list:[nest].

In the case of dict instances, the sequence consists of the values, sorted bykey to ensure deterministic behavior. This is true also for OrderedDictinstances: their sequence order is ignored, the sorting order of keys is usedinstead. The same convention is followed in pack_sequence_as. This correctlyrepacks dicts and OrderedDicts after they have been flattened, and also allowsflattening an OrderedDict and then repacking it back using a correspondingplain dict, or vice-versa. Dictionaries with non-sortable keys cannot beflattened.

Users must not modify any collections used in nest while this function isrunning.

#### 参数：
- **`structure`** : an arbitrarily nested structure or a scalar object. Note, numpyarrays are considered scalars.
- **`expand_composites`** : If true, then composite tensors such as tf.SparseTensorand tf.RaggedTensor are expanded into their component tensors.


#### 返回：
A Python list, the flattened version of the input.

#### 加薪：
- **`TypeError`** : The nest is or contains a dict with non-sortable keys.
