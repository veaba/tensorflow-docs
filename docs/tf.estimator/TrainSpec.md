[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/estimator/TrainSpec) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/training.py)  
---|---  
  
## Class `TrainSpec`

Configuration for the "train" part for the `train_and_evaluate` call.

### Aliases:

  * Class [`tf.compat.v1.estimator.TrainSpec`](/api_docs/python/tf/estimator/TrainSpec)
  * Class [`tf.compat.v2.estimator.TrainSpec`](/api_docs/python/tf/estimator/TrainSpec)

### Used in the guide:

  * [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)

### Used in the tutorials:

  * [Multi-worker training with Estimator](https://tensorflow.google.cn/tutorials/distribute/multi_worker_with_estimator)

`TrainSpec` determines the input data for the training, as well as the
duration. Optional hooks run at various stages of training.

## `__new__`

[View
source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/training.py)

    
    
    @staticmethod
    __new__(
        cls,
        input_fn,
        max_steps=None,
        hooks=None
    )
    

Creates a validated `TrainSpec` instance.

#### Args:

  * **`input_fn`** : A function that provides input data for training as minibatches. See [Premade Estimators](https://tensorflow.org/guide/premade_estimators#create_input_functions) for more information. The function should construct and return one of the following:

    * A 'tf.data.Dataset' object: Outputs of `Dataset` object must be a tuple (features, labels) with same constraints as below.
    * A tuple (features, labels): Where features is a `Tensor` or a dictionary of string feature name to `Tensor` and labels is a `Tensor` or a dictionary of string label name to `Tensor`.
  * **`max_steps`** : Int. Positive number of total steps for which to train model. If `None`, train forever. The training `input_fn` is not expected to generate `OutOfRangeError` or `StopIteration` exceptions. See the `train_and_evaluate` stop condition section for details.

  * **`hooks`** : Iterable of `tf.train.SessionRunHook` objects to run on all workers (including chief) during training.

#### Returns:

A validated `TrainSpec` object.

#### Raises:

  * **`ValueError`** : If any of the input arguments is invalid.
  * **`TypeError`** : If any of the arguments is not of the expected type.

## Properties

### `input_fn`

### `max_steps`

### `hooks`

