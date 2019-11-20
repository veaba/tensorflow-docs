[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L283-L431)  
---  
  
## Class `FileWriter`

Writes `Summary` protocol buffers to event files.

The `FileWriter` class provides a mechanism to create an event file in a given
directory and add summaries and events to it. The class updates the file
contents asynchronously. This allows a training program to call methods to add
data to the file directly from the training loop, without slowing down
training.

When constructed with a
[`tf.compat.v1.Session`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session)
parameter, a `FileWriter` instead forms a compatibility layer over new graph-
based summaries (`tf.contrib.summary`) to facilitate the use of new summary
writing with pre-existing code that expects a `FileWriter` instance.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L298-L370)

    
    
    __init__(
        logdir,
        graph=None,
        max_queue=10,
        flush_secs=120,
        graph_def=None,
        filename_suffix=None,
        session=None
    )
    

Creates a `FileWriter`, optionally shared within the given session.

Typically, constructing a file writer creates a new event file in `logdir`.
This event file will contain `Event` protocol buffers constructed when you
call one of the following functions: `add_summary()`, `add_session_log()`,
`add_event()`, or `add_graph()`.

If you pass a `Graph` to the constructor it is added to the event file. (This
is equivalent to calling `add_graph()` later).

TensorBoard will pick the graph from the file and display it graphically so
you can interactively explore the graph you built. You will usually pass the
graph from the session in which you launched it:

    
    
    ...create a graph...
    # Launch the graph in a session.
    sess = tf.compat.v1.Session()
    # Create a summary writer, add the 'graph' to the event file.
    writer = tf.compat.v1.summary.FileWriter(<some-directory>, sess.graph)
    

The `session` argument to the constructor makes the returned `FileWriter` a
compatibility layer over new graph-based summaries (`tf.contrib.summary`).
Crucially, this means the underlying writer resource and events file will be
shared with any other `FileWriter` using the same `session` and `logdir`, and
with any `tf.contrib.summary.SummaryWriter` in this session using the the same
shared resource name (which by default scoped to the logdir). If no such
resource exists, one will be created using the remaining arguments to this
constructor, but if one already exists those arguments are ignored. In either
case, ops will be added to `session.graph` to control the underlying file
writer resource. See `tf.contrib.summary` for more details.

#### Args:

  * **`logdir`** : A string. Directory where event file will be written.
  * **`graph`** : A `Graph` object, such as `sess.graph`.
  * **`max_queue`** : Integer. Size of the queue for pending events and summaries.
  * **`flush_secs`** : Number. How often, in seconds, to flush the pending events and summaries to disk.
  * **`graph_def`** : DEPRECATED: Use the `graph` argument instead.
  * **`filename_suffix`** : A string. Every event file's name is suffixed with `suffix`.
  * **`session`** : A [`tf.compat.v1.Session`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) object. See details above.

#### Raises:

  * **`RuntimeError`** : If called with eager execution enabled.

#### Eager Compatibility

`FileWriter` is not compatible with eager execution. To write TensorBoard
summaries under eager execution, use `tf.contrib.summary` instead.

## Methods

### `__enter__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L372-L374)

    
    
    __enter__()
    

Make usable with "with" statement.

### `__exit__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L376-L378)

    
    
    __exit__(
        unused_type,
        unused_value,
        unused_traceback
    )
    

Make usable with "with" statement.

### `add_event`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L394-L401)

    
    
    add_event(event)
    

Adds an event to the event file.

#### Args:

  * **`event`** : An `Event` protocol buffer.

### `add_graph`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L163-L214)

    
    
    add_graph(
        graph,
        global_step=None,
        graph_def=None
    )
    

Adds a `Graph` to the event file.

The graph described by the protocol buffer will be displayed by TensorBoard.
Most users pass a graph in the constructor instead.

#### Args:

  * **`graph`** : A `Graph` object, such as `sess.graph`.
  * **`global_step`** : Number. Optional global step counter to record with the graph.
  * **`graph_def`** : DEPRECATED. Use the `graph` parameter instead.

#### Raises:

  * **`ValueError`** : If both graph and graph_def are passed to the method.

### `add_meta_graph`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L229-L249)

    
    
    add_meta_graph(
        meta_graph_def,
        global_step=None
    )
    

Adds a `MetaGraphDef` to the event file.

The `MetaGraphDef` allows running the given graph via
`saver.import_meta_graph()`.

#### Args:

  * **`meta_graph_def`** : A `MetaGraphDef` object, often as returned by `saver.export_meta_graph()`.
  * **`global_step`** : Number. Optional global step counter to record with the graph.

#### Raises:

  * **`TypeError`** : If both `meta_graph_def` is not an instance of `MetaGraphDef`.

### `add_run_metadata`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L251-L273)

    
    
    add_run_metadata(
        run_metadata,
        tag,
        global_step=None
    )
    

Adds a metadata information for a single session.run() call.

#### Args:

  * **`run_metadata`** : A `RunMetadata` protobuf object.
  * **`tag`** : The tag name for this metadata.
  * **`global_step`** : Number. Optional global step counter to record with the StepStats.

#### Raises:

  * **`ValueError`** : If the provided tag was already used for this type of event.

### `add_session_log`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L144-L156)

    
    
    add_session_log(
        session_log,
        global_step=None
    )
    

Adds a `SessionLog` protocol buffer to the event file.

This method wraps the provided session in an `Event` protocol buffer and adds
it to the event file.

#### Args:

  * **`session_log`** : A `SessionLog` protocol buffer.
  * **`global_step`** : Number. Optional global step value to record with the summary.

### `add_summary`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L101-L142)

    
    
    add_summary(
        summary,
        global_step=None
    )
    

Adds a `Summary` protocol buffer to the event file.

This method wraps the provided summary in an `Event` protocol buffer and adds
it to the event file.

You can pass the result of evaluating any summary op, using `tf.Session.run`
or
[`tf.Tensor.eval`](https://tensorflow.google.cn/api_docs/python/tf/Tensor#eval),
to this function. Alternatively, you can pass a
[`tf.compat.v1.Summary`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Summary)
protocol buffer that you populate with your own data. The latter is commonly
done to report evaluation results in event files.

#### Args:

  * **`summary`** : A `Summary` protocol buffer, optionally serialized as a string.
  * **`global_step`** : Number. Optional global step value to record with the summary.

### `close`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L414-L420)

    
    
    close()
    

Flushes the event file to disk and close the file.

Call this method when you do not need the summary writer anymore.

### `flush`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L403-L412)

    
    
    flush()
    

Flushes the event file to disk.

Call this method to make sure that all pending events have been written to
disk.

### `get_logdir`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L380-L382)

    
    
    get_logdir()
    

Returns the directory where event file will be written.

### `reopen`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer.py#L422-L431)

    
    
    reopen()
    

Reopens the EventFileWriter.

Can be called after `close()` to add more events in the same directory. The
events will go into a new events file.

Does nothing if the EventFileWriter was not closed.

