

## Class  `WorkerSessionCreator` 
为工作进程创建tf.compat.v1.session。

Inherits From: [ `SessionCreator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/SessionCreator)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L654-L672)

```
 __init__(
    scaffold=None,
    master='',
    config=None,
    max_wait_secs=(30 * 60)
)
 
```

初始化工作会话创建者。

#### 参数：
- **`scaffold`** : A  `Scaffold`  used for gathering or building supportive ops. Ifnot specified a default one is created. It's used to finalize the graph.
- **`master`** :  `String`  representation of the TensorFlow master to use.
- **`config`** :  `ConfigProto`  proto used to configure the session.
- **`max_wait_secs`** : Maximum time to wait for the session to become available.


## 方法


###  `create_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L685-L688)

```
 create_session()
 
```

