Converts input which is a  `PathLike`  object to  `str`  type.

**别名** : [ `tf.compat.v1.compat.path_to_str` ](/api_docs/python/tf/compat/path_to_str), [ `tf.compat.v2.compat.path_to_str` ](/api_docs/python/tf/compat/path_to_str)

```
 tf.compat.path_to_str(path)
 
```

Converts from any python constant representation of a  `PathLike`  object toa string. If the input is not a  `PathLike`  object, simply returns the input.

#### 参数：
- **`path`** : An object that can be converted to path representation.


#### 返回：
A  `str`  object.

#### 用法：
In case a simplified  `str`  version of the path is needed from an `os.PathLike`  object

#### 示例：


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

