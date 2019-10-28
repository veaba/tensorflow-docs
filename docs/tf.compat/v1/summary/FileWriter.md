## Class FileWriter
Writes `Summary` protocol buffers to event files.
The `FileWriter` class provides a mechanism to create an event file in a given directory and add summaries and events to it. The class updates the file contents asynchronously. This allows a training program to call methods to add data to the file directly from the training loop, without slowing down training.
When constructed with a `tf.compat.v1.Session` parameter, a `FileWriter` instead forms a compatibility layer over new graph-based summaries (`tf.contrib.summary`) to facilitate the use of new summary writing with pre-existing code that expects a `FileWriter` instance.
## __init__
View source

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
Creates a `FileWriter`, optionally shared within the given session.
