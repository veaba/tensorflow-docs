Converts input which is a  `PathLike`  object to  `str`  type.



### Aliases:

- [ `tf.compat.v1.compat.path_to_str` ](/api_docs/python/tf/compat/path_to_str)

- [ `tf.compat.v2.compat.path_to_str` ](/api_docs/python/tf/compat/path_to_str)



```
 tf.compat.path_to_str(path)
 
```

Converts from any python constant representation of a  `PathLike`  object to
a string. If the input is not a  `PathLike`  object, simply returns the input.



#### Args:

- **`path`** : An object that can be converted to path representation.



#### Returns:
A  `str`  object.



#### Usage:
In case a simplified  `str`  version of the path is needed from an
 `os.PathLike`  object



#### Examples:


```
 >>> tf.compat.path_to_str('C:\XYZ\tensorflow\./.././tensorflow')
'C:\XYZ\tensorflow\./.././tensorflow' # Windows OS
>>> tf.compat.path_to_str(Path('C:\XYZ\tensorflow\./.././tensorflow'))
'C:\XYZ\tensorflow\..\tensorflow' # Windows OS
>>> tf.compat.path_to_str(Path('./corpus'))
'corpus' # Linux OS
>>> tf.compat.path_to_str('./.././Corpus')
'./.././Corpus' # Linux OS
>>> tf.compat.path_to_str(Path('./.././Corpus'))
'../Corpus' # Linux OS
>>> tf.compat.path_to_str(Path('./..////../'))
'../..' # Linux OS

 
```

