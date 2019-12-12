从张量创建一个numpy-ndarray。

**别名** : [ `tf.compat.v1.make_ndarray` ](/api_docs/python/tf/make_ndarray), [ `tf.compat.v2.make_ndarray` ](/api_docs/python/tf/make_ndarray)

```
 tf.make_ndarray(tensor)
 
```

创建一个与张量具有相同形状和数据的numpy ndarray。

#### 参数：
- **`tensor`** : A TensorProto.


#### 返回：
具有张量内容的numpy数组。

#### 加薪：
- **`TypeError`** : if tensor has unsupported type.
