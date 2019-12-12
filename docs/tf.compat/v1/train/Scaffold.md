

## Class  `Scaffold` 
用于创建或收集训练模型通常需要的片段的结构。

### 在指南中使用：
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)
When you build a model for training you usually need ops to initializevariables, a  `Saver`  to checkpoint them, an op to collect summaries forthe visualizer, and so on.

Various libraries built on top of the core TensorFlow library take care ofcreating some or all of these pieces and storing them in well knowncollections in the graph.  The  `Scaffold`  class helps pick these pieces fromthe graph collections, creating and adding them to the collections if needed.

If you call the scaffold constructor without any arguments, it will pickpieces from the collections, creating default ones if needed when `scaffold.finalize()`  is called.  You can pass arguments to the constructor toprovide your own pieces.  Pieces that you pass to the constructor are notadded to the graph collections.

The following pieces are directly accessible as attributes of the  `Scaffold` object:

-  `saver` : A [ `tf.compat.v1.train.Saver` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Saver) object taking care of saving thevariables.Picked from and stored into the  `SAVERS`  collection in the graph by default.
-  `init_op` : An op to run to initialize the variables.  Picked from andstored into the  `INIT_OP`  collection in the graph by default.
-  `ready_op` : An op to verify that the variables are initialized.  Pickedfrom and stored into the  `READY_OP`  collection in the graph by default.
-  `ready_for_local_init_op` : An op to verify that global state has beeninitialized and it is alright to run  `local_init_op` .  Picked from andstored into the  `READY_FOR_LOCAL_INIT_OP`  collection in the graph bydefault. This is needed when the initialization of local variables dependson the values of global variables.
-  `local_init_op` : An op to initialize the local variables.  Pickedfrom and stored into the  `LOCAL_INIT_OP`  collection in the graph by default.
-  `summary_op` : An op to run and merge the summaries in the graph.  Pickedfrom and stored into the  `SUMMARY_OP`  collection in the graph by default.
您还可以将以下附加部分传递给构造函数：

-  `init_feed_dict` : A session feed dictionary that should be used whenrunning the init op.
-  `init_fn` : A callable to run after the init op to perform additionalinitializations.  The callable will be called as `init_fn(scaffold, session)` .


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L107-L182)

```
 __init__(
    init_op=None,
    init_feed_dict=None,
    init_fn=None,
    ready_op=None,
    ready_for_local_init_op=None,
    local_init_op=None,
    summary_op=None,
    saver=None,
    copy_from_scaffold=None
)
 
```

创建脚手架。

#### 参数：
- **`init_op`** : Optional op for initializing variables.
- **`init_feed_dict`** : Optional session feed dictionary to use when running theinit_op.
- **`init_fn`** : Optional function to use to initialize the model after runningthe init_op.  Will be called as  `init_fn(scaffold, session)` .
- **`ready_op`** : Optional op to verify that the variables are initialized.  Mustreturn an empty 1D string tensor when the variables are initialized, ora non-empty 1D string tensor listing the names of the non-initializedvariables.
- **`ready_for_local_init_op`** : Optional op to verify that the global variablesare initialized and  `local_init_op`  can be run. Must return an empty 1Dstring tensor when the global variables are initialized, or a non-empty1D string tensor listing the names of the non-initialized globalvariables.
- **`local_init_op`** : Optional op to initialize local variables.
- **`summary_op`** : Optional op to gather all summaries.  Must return a scalarstring tensor containing a serialized  `Summary`  proto.
- **`saver`** : Optional [ `tf.compat.v1.train.Saver` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Saver) object to use to save andrestore variables.  May also be a [ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint) object, in whichcase object-based checkpoints are saved. This will also load someobject-based checkpoints saved from elsewhere, but that loading may befragile since it uses fixed keys rather than performing a fullgraph-based match. For example if a variable has two paths from the `Checkpoint`  object because two  `Model`  objects share the  `Layer`  objectthat owns it, removing one  `Model`  may change the keys and breakcheckpoint loading through this API, whereas a graph-based match wouldmatch the variable through the other  `Model` .
- **`copy_from_scaffold`** : Optional scaffold object to copy fields from. Itsfields will be overwritten by the provided fields in this function.


## 属性


###  `init_feed_dict` 


###  `init_fn` 


###  `init_op` 


###  `local_init_op` 


###  `ready_for_local_init_op` 


###  `ready_op` 


###  `saver` 


###  `summary_op` 


## 方法


###  `default_local_init_op` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L292-L308)

```
 @staticmethod
default_local_init_op()
 
```

返回对默认本地初始化操作进行分组的操作。

This op is used during session initialization when a Scaffold isinitialized without specifying the local_init_op arg. It includes[ `tf.compat.v1.local_variables_initializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/local_variables_initializer),[ `tf.compat.v1.tables_initializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/tables_initializer), and alsoinitializes local session resources.

#### 返回：
默认的scaffold局部初始化操作。

###  `finalize` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L184-L241)

```
 finalize()
 
```

根据需要创建操作并完成图形。

###  `get_or_default` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L275-L290)

```
 @staticmethod
get_or_default(
    arg_name,
    collection_key,
    default_constructor
)
 
```

从缓存获取或创建默认操作。

