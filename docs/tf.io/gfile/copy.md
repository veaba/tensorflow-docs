Copies data from  `src`  to  `dst` .

**别名** : [ `tf.compat.v1.io.gfile.copy` ](/api_docs/python/tf/io/gfile/copy), [ `tf.compat.v2.io.gfile.copy` ](/api_docs/python/tf/io/gfile/copy)

```
 tf.io.gfile.copy(
    src,
    dst,
    overwrite=False
)
 
```

#### 参数：
- **`src`** : string, name of the file whose contents need to be copied
- **`dst`** : string, name of the file to which to copy to
- **`overwrite`** : boolean, if false it's an error for  `dst`  to be occupied by anexisting file.


#### 加薪：
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If the operation fails.
