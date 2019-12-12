

## Class  `PythonState` 
A mixin for putting Python state in an object-based checkpoint.

**别名** : [ `tf.compat.v1.train.experimental.PythonState` ](/api_docs/python/tf/train/experimental/PythonState), [ `tf.compat.v2.train.experimental.PythonState` ](/api_docs/python/tf/train/experimental/PythonState)

This is an abstract class which allows extensions to TensorFlow's object-basedcheckpointing (see [ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint)). For example a wrapper for NumPyarrays:

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

Instances of  `NumpyWrapper`  are checkpointable objects, and will be saved andrestored from checkpoints along with TensorFlow state like variables.

```
 root = tf.train.Checkpoint(numpy=NumpyWrapper(numpy.array([1.])))
save_path = root.save(prefix)
root.numpy.array *= 2.
assert [2.] == root.numpy.array
root.restore(save_path)
assert [1.] == root.numpy.array
 
```

## 方法


###  `deserialize` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/tracking/python_state.py#L81-L83)

```
 deserialize(string_value)
 
```

回调以反序列化对象。

###  `serialize` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/tracking/python_state.py#L77-L79)

```
 serialize()
 
```

回调以序列化对象。返回字符串。

