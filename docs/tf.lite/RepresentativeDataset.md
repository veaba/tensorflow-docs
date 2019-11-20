[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/lite/RepresentativeDataset) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L112-L130)  
---|---  
  
## Class `RepresentativeDataset`

Representative dataset to evaluate optimizations.

### Aliases:

  * Class [`tf.compat.v1.lite.RepresentativeDataset`](/api_docs/python/tf/lite/RepresentativeDataset)
  * Class [`tf.compat.v2.lite.RepresentativeDataset`](/api_docs/python/tf/lite/RepresentativeDataset)

A representative dataset that can be used to evaluate optimizations by the
converter. E.g. converter can use these examples to estimate (min, max) ranges
by calibrating the model on inputs. This can allow converter to quantize a
converted floating point model.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L121-L130)

    
    
    __init__(input_gen)
    

Creates a representative dataset.

#### Args:

  * **`input_gen`** : an input generator that can be used to generate input samples for the model. This must be a callable object that returns an object that supports the `iter()` protocol (e.g. a generator function). The elements generated must have same type and shape as inputs to the model.

