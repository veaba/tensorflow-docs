

## Class  `FileWriter` 
Writes  `Summary`  protocol buffers to event files.

The  `FileWriter`  class provides a mechanism to create an event file in agiven directory and add summaries and events to it. The class updates thefile contents asynchronously. This allows a training program to call methodsto add data to the file directly from the training loop, without slowing downtraining.

When constructed with a [ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) parameter, a  `FileWriter` instead forms a compatibility layer over new graph-based summaries( `tf.contrib.summary` ) to facilitate the use of new summary writing withpre-existing code that expects a  `FileWriter`  instance.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L298-L370)

```
 __init__(
    logdir,
    graph=None,
    max_queue=10,
    flush_secs=120,
    graph_def=None,
    filename_suffix=None,
    session=None
)
 
```

Creates a  `FileWriter` , optionally shared within the given session.

Typically, constructing a file writer creates a new event file in  `logdir` .This event file will contain  `Event`  protocol buffers constructed when youcall one of the following functions:  `add_summary()` ,  `add_session_log()` , `add_event()` , or  `add_graph()` .

If you pass a  `Graph`  to the constructor it is added tothe event file. (This is equivalent to calling  `add_graph()`  later).

TensorBoard will pick the graph from the file and display it graphically soyou can interactively explore the graph you built. You will usually passthe graph from the session in which you launched it:

```
 ...create a graph...
# Launch the graph in a session.
sess = tf.compat.v1.Session()
# Create a summary writer, add the 'graph' to the event file.
writer = tf.compat.v1.summary.FileWriter(<some-directory>, sess.graph)
 
```

The  `session`  argument to the constructor makes the returned  `FileWriter`  acompatibility layer over new graph-based summaries ( `tf.contrib.summary` ).Crucially, this means the underlying writer resource and events file willbe shared with any other  `FileWriter`  using the same  `session`  and  `logdir` ,and with any  `tf.contrib.summary.SummaryWriter`  in this session using thethe same shared resource name (which by default scoped to the logdir). Ifno such resource exists, one will be created using the remaining argumentsto this constructor, but if one already exists those arguments are ignored.In either case, ops will be added to  `session.graph`  to control theunderlying file writer resource. See  `tf.contrib.summary`  for more details.

#### 参数：
- **`logdir`** : A string. Directory where event file will be written.
- **`graph`** : A  `Graph`  object, such as  `sess.graph` .
- **`max_queue`** : Integer. Size of the queue for pending events and summaries.
- **`flush_secs`** : Number. How often, in seconds, to flush thepending events and summaries to disk.
- **`graph_def`** : DEPRECATED: Use the  `graph`  argument instead.
- **`filename_suffix`** : A string. Every event file's name is suffixed with `suffix` .
- **`session`** : A [ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) object. See details above.


#### 加薪：
- **`RuntimeError`** : If called with eager execution enabled.


#### 迫切的兼容性
 `FileWriter`  is not compatible with eager execution. To write TensorBoardsummaries under eager execution, use  `tf.contrib.summary`  instead.

## 方法


###  `__enter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L372-L374)

```
 __enter__()
 
```

使用“with”语句。

###  `__exit__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L376-L378)

```
 __exit__(
    unused_type,
    unused_value,
    unused_traceback
)
 
```

使用“with”语句。

###  `add_event` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L394-L401)

```
 add_event(event)
 
```

将事件添加到事件文件。

#### 参数：
- **`event`** : An  `Event`  protocol buffer.


###  `add_graph` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L163-L214)

```
 add_graph(
    graph,
    global_step=None,
    graph_def=None
)
 
```

Adds a  `Graph`  to the event file.

The graph described by the protocol buffer will be displayed byTensorBoard. Most users pass a graph in the constructor instead.

#### 参数：
- **`graph`** : A  `Graph`  object, such as  `sess.graph` .
- **`global_step`** : Number. Optional global step counter to record with thegraph.
- **`graph_def`** : DEPRECATED. Use the  `graph`  parameter instead.


#### 加薪：
- **`ValueError`** : If both graph and graph_def are passed to the method.


###  `add_meta_graph` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L229-L249)

```
 add_meta_graph(
    meta_graph_def,
    global_step=None
)
 
```

Adds a  `MetaGraphDef`  to the event file.

The  `MetaGraphDef`  allows running the given graph via `saver.import_meta_graph()` .

#### 参数：
- **`meta_graph_def`** : A  `MetaGraphDef`  object, often as returned by `saver.export_meta_graph()` .
- **`global_step`** : Number. Optional global step counter to record with thegraph.


#### 加薪：
- **`TypeError`** : If both  `meta_graph_def`  is not an instance of  `MetaGraphDef` .


###  `add_run_metadata` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L251-L273)

```
 add_run_metadata(
    run_metadata,
    tag,
    global_step=None
)
 
```

为单个session.run（）调用添加元数据信息。

#### 参数：
- **`run_metadata`** : A  `RunMetadata`  protobuf object.
- **`tag`** : The tag name for this metadata.
- **`global_step`** : Number. Optional global step counter to record with theStepStats.


#### 加薪：
- **`ValueError`** : If the provided tag was already used for this type of event.


###  `add_session_log` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L144-L156)

```
 add_session_log(
    session_log,
    global_step=None
)
 
```

Adds a  `SessionLog`  protocol buffer to the event file.

This method wraps the provided session in an  `Event`  protocol bufferand adds it to the event file.

#### 参数：
- **`session_log`** : A  `SessionLog`  protocol buffer.
- **`global_step`** : Number. Optional global step value to record with thesummary.


###  `add_summary` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L101-L142)

```
 add_summary(
    summary,
    global_step=None
)
 
```

Adds a  `Summary`  protocol buffer to the event file.

This method wraps the provided summary in an  `Event`  protocol bufferand adds it to the event file.

You can pass the result of evaluating any summary op, using `tf.Session.run`  or[ `tf.Tensor.eval` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor#eval), to thisfunction. Alternatively, you can pass a [ `tf.compat.v1.Summary` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Summary) protocolbuffer that you populate with your own data. The latter iscommonly done to report evaluation results in event files.

#### 参数：
- **`summary`** : A  `Summary`  protocol buffer, optionally serialized as a string.
- **`global_step`** : Number. Optional global step value to record with thesummary.


###  `close` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L414-L420)

```
 close()
 
```

将事件文件刷新到磁盘并关闭该文件。

当不再需要摘要编写器时调用此方法。

###  `flush` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L403-L412)

```
 flush()
 
```

将事件文件刷新到磁盘。

Call this method to make sure that all pending events have been written todisk.

###  `get_logdir` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L380-L382)

```
 get_logdir()
 
```

返回将写入事件文件的目录。

###  `reopen` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L422-L431)

```
 reopen()
 
```

重新打开EventFileWriter。

Can be called after  `close()`  to add more events in the same directory.The events will go into a new events file.

如果EventFileWriter未关闭，则不执行任何操作。

