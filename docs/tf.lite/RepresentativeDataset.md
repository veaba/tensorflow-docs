## Class RepresentativeDataset
Representative dataset to evaluate optimizations.
### Aliases:
- Class `tf.compat.v1.lite.RepresentativeDataset`
- Class `tf.compat.v2.lite.RepresentativeDataset`
A representative dataset that can be used to evaluate optimizations by the converter. E.g. converter can use these examples to estimate (min, max) ranges by calibrating the model on inputs. This can allow converter to quantize a converted floating point model.
## __init__
View source

```
 __init__(input_gen)
```
Creates a representative dataset.
#### Args:
