在输入文件名处将内容写入文件。创建文件并递归

**别名** : [ `tf.compat.v1.io.write_file` ](/api_docs/python/tf/io/write_file), [ `tf.compat.v1.write_file` ](/api_docs/python/tf/io/write_file), [ `tf.compat.v2.io.write_file` ](/api_docs/python/tf/io/write_file)

```
 tf.io.write_file(
    filename,
    contents,
    name=None
)
 
```

创建目录（如果不存在）。

#### 参数：
- **`filename`** : A  `Tensor`  of type  `string` .scalar. The name of the file to which we write the contents.
- **`contents`** : A  `Tensor`  of type  `string` .scalar. The content to be written to the output file.
- **`name`** : A name for the operation (optional).


#### 返回：
创建的操作。

