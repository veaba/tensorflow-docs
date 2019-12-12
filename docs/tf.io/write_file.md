Writes contents to the file at input filename. Creates file and recursively

**Aliases** : [ `tf.compat.v1.io.write_file` ](/api_docs/python/tf/io/write_file), [ `tf.compat.v1.write_file` ](/api_docs/python/tf/io/write_file), [ `tf.compat.v2.io.write_file` ](/api_docs/python/tf/io/write_file)

```
 tf.io.write_file(
    filename,
    contents,
    name=None
)
 
```

creates directory if not existing.

#### Args:
- **`filename`** : A  `Tensor`  of type  `string` .scalar. The name of the file to which we write the contents.
- **`contents`** : A  `Tensor`  of type  `string` .scalar. The content to be written to the output file.
- **`name`** : A name for the operation (optional).


#### Returns:
The created Operation.

