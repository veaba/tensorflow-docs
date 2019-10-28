## Class MapVectorizationOptions
Represents options for the MapVectorization optimization.
### Aliases:
- Class `tf.compat.v1.data.experimental.MapVectorizationOptions`
- Class `tf.compat.v2.data.experimental.MapVectorizationOptions`
## __init__
View source

```
 __init__()
```
Initialize self. See help(type(self)) for accurate signature.
## Properties
### enabled
Whether to vectorize map transformations. If None, defaults to False.
### use_choose_fastest
Whether to use ChooseFastestBranchDataset with this transformation. If True, the pipeline picks between the vectorized and original segment at runtime based on their iterations speed. If None, defaults to False.
## Methods
### __eq__
View source

```
 __eq__(other)
```
Return self==value.
### __ne__
View source

```
 __ne__(other)
```
Return self!=value.
