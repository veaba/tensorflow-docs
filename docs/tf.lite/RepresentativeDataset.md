

## Class  `RepresentativeDataset` 
Representative dataset to evaluate optimizations.

**Aliases** : [ `tf.compat.v1.lite.RepresentativeDataset` ](/api_docs/python/tf/lite/RepresentativeDataset), [ `tf.compat.v2.lite.RepresentativeDataset` ](/api_docs/python/tf/lite/RepresentativeDataset)

A representative dataset that can be used to evaluate optimizations by theconverter. E.g. converter can use these examples to estimate (min, max) rangesby calibrating the model on inputs. This can allow converter to quantize aconverted floating point model.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L121-L130)

```
 __init__(input_gen)
 
```

Creates a representative dataset.

#### Args:
- **`input_gen`** : an input generator that can be used to generate input samplesfor the model. This must be a callable object that returns an objectthat supports the  `iter()`  protocol (e.g. a generator function). Theelements generated must have same type and shape as inputs to the model.
