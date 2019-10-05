## Class WorkerSessionCreator

Creates a tf.compat.v1.Session for a worker.
[SessionCreator](https://www.tensorflow.org/api_docs/python/tf/compat/v1/train/SessionCreator)Inherits From: 

## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L654-L672)


```
 __init__(
    scaffold=None,
    master='',
    config=None,
    max_wait_secs=(30 * 60)
)
```

Initializes a worker session creator.
#### Args:
- `scaffold`: A `Scaffold` used for gathering or building supportive ops. If not specified a default one is created. It's used to finalize the graph.
- `master`: `String` representation of the TensorFlow `master` to use.
- `config`: `ConfigProto` proto used to `config`ure the session.
- `max_wait_secs`: Maximum time to wait for the session to become available.
## Methods
### create_session
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L685-L688)


```
 create_session()
```
