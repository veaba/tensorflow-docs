## Class PythonState

A mixin for putting Python state in an object-based checkpoint.
### Aliases:
- Class `tf.compat.v1.train.experimental.PythonState`
- Class `tf.compat.v2.train.experimental.PythonState`
[tf.train.Checkpoint](https://www.tensorflow.org/api_docs/python/tf/train/Checkpoint)This is an abstract class which allows extensions to TensorFlow's object-based checkpointing (see ). For example a wrapper for NumPy arrays:


```
 import io
import numpy

class NumpyWrapper(tf.train.experimental.PythonState):

  def __init__(self, array):
    self.array = array

  def serialize(self):
    string_file = io.BytesIO()
    try:
      numpy.save(string_file, self.array, allow_pickle=False)
      serialized = string_file.getvalue()
    finally:
      string_file.close()
    return serialized

  def deserialize(self, string_value):
    string_file = io.BytesIO(string_value)
    try:
      self.array = numpy.load(string_file, allow_pickle=False)
    finally:
      string_file.close()
```

Instances of NumpyWrapper are checkpointable objects, and will be saved and restored from checkpoints along with TensorFlow state like variables.

```
 root = tf.train.Checkpoint(numpy=NumpyWrapper(numpy.array([1.])))
save_path = root.save(prefix)
root.numpy.array *= 2.
assert [2.] == root.numpy.array
root.restore(save_path)
assert [1.] == root.numpy.array
```
## Methods
### deserialize
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/tracking/python_state.py#L81-L83)


```
 deserialize(string_value)
```

Callback to deserialize the object.
### serialize
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/tracking/python_state.py#L77-L79)


```
 serialize()
```

Callback to serialize the object. Returns a string.
