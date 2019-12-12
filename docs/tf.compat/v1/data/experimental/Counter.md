Creates a  `Dataset`  that counts from  `start`  in steps of size  `step` .

```
 tf.compat.v1.data.experimental.Counter(    start=0,    step=1,    dtype=tf.dtypes.int64) 
```

#### 例如：


```
 Dataset.count() == [0, 1, 2, ...)
Dataset.count(2) == [2, 3, ...)
Dataset.count(2, 5) == [2, 7, 12, ...)
Dataset.count(0, -1) == [0, -1, -2, ...)
Dataset.count(10, -1) == [10, 9, ...)
 
```

#### 参数：
- **`start`** : (Optional.) The starting value for the counter. Defaults to 0.
- **`step`** : (Optional.) The step size for the counter. Defaults to 1.
- **`dtype`** : (Optional.) The data type for counter elements. Defaults to[ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64).


#### 返回：
A  `Dataset`  of scalar  `dtype`  elements.

