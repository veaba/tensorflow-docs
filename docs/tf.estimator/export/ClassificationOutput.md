[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/estimator/export/ClassificationOutput)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L102-L167)  
---|---  
  
## Class `ClassificationOutput`

Represents the output of a classification head.

Inherits From:
[`ExportOutput`](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ExportOutput)

### Aliases:

  * Class [`tf.compat.v1.estimator.export.ClassificationOutput`](/api_docs/python/tf/estimator/export/ClassificationOutput)
  * Class [`tf.compat.v2.estimator.export.ClassificationOutput`](/api_docs/python/tf/estimator/export/ClassificationOutput)

Either classes or scores or both must be set.

The classes `Tensor` must provide string labels, not integer class IDs.

If only classes is set, it is interpreted as providing top-k results in
descending order.

If only scores is set, it is interpreted as providing a score for every class
in order of class ID.

If both classes and scores are set, they are interpreted as zipped, so each
score corresponds to the class at the same index. Clients should not depend on
the order of the entries.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L120-L148)

    
    
    __init__(
        scores=None,
        classes=None
    )
    

Constructor for `ClassificationOutput`.

#### Args:

  * **`scores`** : A float `Tensor` giving scores (sometimes but not always interpretable as probabilities) for each class. May be `None`, but only if `classes` is set. Interpretation varies-- see class doc.
  * **`classes`** : A string `Tensor` giving predicted class labels. May be `None`, but only if `scores` is set. Interpretation varies-- see class doc.

#### Raises:

  * **`ValueError`** : if neither classes nor scores is set, or one of them is not a `Tensor` with the correct dtype.

## Properties

### `classes`

### `scores`

## Methods

### `as_signature_def`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L158-L167)

    
    
    as_signature_def(receiver_tensors)
    

Generate a SignatureDef proto for inclusion in a MetaGraphDef.

The SignatureDef will specify outputs as described in this ExportOutput, and
will use the provided receiver_tensors as inputs.

#### Args:

  * **`receiver_tensors`** : a `Tensor`, or a dict of string to `Tensor`, specifying input nodes that will be fed.

