A placeholder op that passes through  `input`  when its output is not fed.

```
 tf.compat.v1.placeholder_with_default(    input,    shape,    name=None) 
```

#### 参数：
- **`input`** : A  `Tensor` . The default value to produce when output is not fed.
- **`shape`** : A [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) or list of  `int` s. The (possibly partial) shape ofthe tensor.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

