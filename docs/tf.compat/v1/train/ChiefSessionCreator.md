

## Class  `ChiefSessionCreator` 
为主管创建tf.compat.v1.session。

Inherits From: [ `SessionCreator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/SessionCreator)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L602-L624)

```
 __init__(
    scaffold=None,
    master='',
    config=None,
    checkpoint_dir=None,
    checkpoint_filename_with_path=None
)
 
```

初始化主会话创建者。

#### 参数：
- **`scaffold`** : A  `Scaffold`  used for gathering or building supportive ops. Ifnot specified a default one is created. It's used to finalize the graph.
- **`master`** :  `String`  representation of the TensorFlow master to use.
- **`config`** :  `ConfigProto`  proto used to configure the session.
- **`checkpoint_dir`** : A string.  Optional path to a directory where to restorevariables.
- **`checkpoint_filename_with_path`** : Full file name path to the checkpoint file.


## 方法


###  `create_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L637-L647)

```
 create_session()
 
```

