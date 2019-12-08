Returns the tensor value of the given variable in the checkpoint.



### Aliases:

- [ `tf.compat.v1.train.load_variable` ](/api_docs/python/tf/train/load_variable)

- [ `tf.compat.v2.train.load_variable` ](/api_docs/python/tf/train/load_variable)



```
 tf.train.load_variable(
    ckpt_dir_or_file,
    name
)
 
```



#### Args:

- **`ckpt_dir_or_file`** : Directory with checkpoints file or path to checkpoint.

- **`name`** : Name of the variable to return.



#### Returns:
A numpy  `ndarray`  with a copy of the value of this variable.

