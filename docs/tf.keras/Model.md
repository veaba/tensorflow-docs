## Class Model

Model groups layers into an object with training and inference features.
### Aliases:
- Class `tf.compat.v1.keras.Model`
- Class `tf.compat.v1.keras.models.Model`
- Class `tf.compat.v2.keras.Model`
- Class `tf.compat.v2.keras.models.Model`
- Class `tf.keras.models.Model`
### Used in the guide:
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
- ``M``a``s``k``i``n``g`` ``a``n``d`` ``p``a``d``d``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
- ``S``a``v``e`` ``a``n``d`` ``s``e``r``i``a``l``i``z``e`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
- ``U``s``e`` ``a`` ``G``P``U``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``D``e``e``p``D``r``e``a``m``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``I``m``a``g``e`` ``s``e``g``m``e``n``t``a``t``i``o``n``
- ``L``o``a``d`` ``a`` ``p``a``n``d``a``s``.``D``a``t``a``F``r``a``m``e``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
- ``P``i``x``2``P``i``x``
- ``S``a``v``e`` ``a``n``d`` ``l``o``a``d`` ``a`` ``m``o``d``e``l`` ``u``s``i``n``g`` ``a`` ``d``i``s``t``r``i``b``u``t``i``o``n`` ``s``t``r``a``t``e``g``y``
- ``S``a``v``e`` ``a``n``d`` ``l``o``a``d`` ``m``o``d``e``l``s``

There are two ways to instantiate a Model:

1 - With the "functional API", where you start from Input, you chain layer calls to specify the model's forward pass, and finally you create your model from inputs and outputs:

```
 import tensorflow as tf

inputs = tf.keras.Input(shape=(3,))
x = tf.keras.layers.Dense(4, activation=tf.nn.relu)(inputs)
outputs = tf.keras.layers.Dense(5, activation=tf.nn.softmax)(x)
model = tf.keras.Model(inputs=inputs, outputs=outputs)
```

2 - By subclassing the Model class: in that case, you should define your layers in __init__ and you should implement the model's forward pass in call.

```
 import tensorflow as tf

class MyModel(tf.keras.Model):

  def __init__(self):
    super(MyModel, self).__init__()
    self.dense1 = tf.keras.layers.Dense(4, activation=tf.nn.relu)
    self.dense2 = tf.keras.layers.Dense(5, activation=tf.nn.softmax)

  def call(self, inputs):
    x = self.dense1(inputs)
    return self.dense2(x)

model = MyModel()
```

If you subclass Model, you can optionally have a training argument (boolean) in call, which you can use to specify a different behavior in training and inference:

```
 import tensorflow as tf

class MyModel(tf.keras.Model):

  def __init__(self):
    super(MyModel, self).__init__()
    self.dense1 = tf.keras.layers.Dense(4, activation=tf.nn.relu)
    self.dense2 = tf.keras.layers.Dense(5, activation=tf.nn.softmax)
    self.dropout = tf.keras.layers.Dropout(0.5)

  def call(self, inputs, training=False):
    x = self.dense1(inputs)
    if training:
      x = self.dropout(x, training=training)
    return self.dense2(x)

model = MyModel()
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L145-L159)


```
 __init__(
    *args,
    **kwargs
)
```
## Properties
### layers
### metrics_names

Returns the model's display labels for all outputs.
### run_eagerly

Settable attribute indicating whether the model should run eagerly.

Running eagerly means that your model will be run step by step, like Python code. Your model might run slower, but it should become easier for you to debug it by stepping into individual layer calls.

By default, we will attempt to compile your model to a static graph to deliver the best execution performance.
#### Returns:

Boolean, whether the model should run eagerly.
### sample_weights
### state_updates

Returns the updates from all layers that are stateful.

This is useful for separating training updates and state updates, e.g. when we need to update a layer's internal state during prediction.
#### Returns:

A list of update ops.
### stateful
## Methods
### compile
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L183-L400)


```
 compile(
    optimizer='rmsprop',
    loss=None,
    metrics=None,
    loss_weights=None,
    sample_weight_mode=None,
    weighted_metrics=None,
    target_tensors=None,
    distribute=None,
    **kwargs
)
```

Configures the model for training.
#### Arguments:
- `optimizer`: String (name of `optimizer`) or `optimizer` instance. See `tf.keras.optimizers`.
- `loss`: String (name of objective function), objective function or `tf.losses.Loss` instance. See `tf.losses`. If the model has multiple outputs, you can use a different `loss` on each output by passing a dictionary or a list of `loss`es. The `loss` value that will be minimized by the model will then be the sum of all individual `loss`es.
- `metrics`: List of `metrics` to be evaluated by the model during training and testing. Typically you will use `metrics`=['accuracy']. To specify different `metrics` for different outputs of a multi-output model, you could also pass a dictionary, such as `metrics`={'output_a': 'accuracy', 'output_b': ['accuracy', 'mse']}. You can also pass a list (len = len(outputs)) of lists of `metrics` such as `metrics`=[['accuracy'], ['accuracy', 'mse']] or `metrics`=['accuracy', ['accuracy', 'mse']].
- `loss`_weights: Optional list or dictionary specifying scalar coefficients (Python floats) to weight the `loss` contributions of different model outputs. The `loss` value that will be minimized by the model will then be the weighted sum of all individual `loss`es, weighted by the `loss`_weights coefficients. If a list, it is expected to have a 1:1 mapping to the model's outputs. If a tensor, it is expected to map output names (strings) to scalar coefficients.
- `sample_weight_mode`: If you need to do timestep-wise sample weighting (2D weights), set this to `"temporal"`. `None` defaults to sample-wise weights (1D). If the model has multiple outputs, you can use a different `sample_weight_mode` on each output by passing a dictionary or a list of modes.
- `weighted_metrics`: List of `metrics` to be evaluated and weighted by sample_weight or class_weight during training and testing.
- `target_tensors`: By default, Keras will create placeholders for the model's target, which will be fed with the target data during training. If instead you would like to use your own target tensors (in turn, Keras will not expect external Numpy data for these targets at training time), you can specify them via the `target_tensors` argument. It can be a single tensor (for a single-output model), a list of tensors, or a dict mapping output names to target tensors.
- `distribute`: NOT SUPPORTED IN TF 2.0, please create and compile the model under distribution strategy scope instead of passing it to compile.
#### Raises:
- `ValueError`: In case of invalid arguments for `optimizer`, `loss`, `metrics` or `sample_weight_mode`.
### evaluate
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L730-L833)


```
 evaluate(
    x=None,
    y=None,
    batch_size=None,
    verbose=1,
    sample_weight=None,
    steps=None,
    callbacks=None,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False
)
```

Returns the loss value & metrics values for the model in test mode.

Computation is done in batches.
#### Arguments:
- `x`: Input data. It could be:
A Numpy array (or array-like), or a list of arrays (in case the model has multiple inputs).
A TensorFlow tensor, or a list of tensors (in case the model has multiple inputs).
A dict mapping input names to the corresponding array/tensors, if the model has named inputs.
A `tf.data` dataset.
A generator or `keras.utils.Sequence` instance.
- A Numpy array (or array-like), or a list of arrays (in case the model has multiple inputs).
- A TensorFlow tensor, or a list of tensors (in case the model has multiple inputs).
- A dict mapping input names to the corresponding array/tensors, if the model has named inputs.
- A `tf.data` dataset.
- A generator or `keras.utils.Sequence` instance.
- `y`: Target data. Like the input data `x`, it could be either Nump`y` arra`y`(s) or TensorFlow tensor(s). It should be consistent with `x` (`y`ou cannot have Nump`y` inputs and tensor targets, or inversel`y`). If `x` is a dataset, generator or `keras.utils.Sequence` instance, `y` should not be specified (since targets will be obtained from the iterator/dataset).
- `batch_size`: Integer or `None`. Number of samples per gradient update. If unspecified, `batch_size` will default to 32. Do not specif`y` the `batch_size` is `y`our data is in the form of s`y`mbolic tensors, dataset, generators, or `keras.utils.Sequence` instances (since the`y` generate batches).
- `verbose`: 0 or 1. Verbosit`y` mode. 0 = silent, 1 = progress bar.
- `sample_weight`: Optional Nump`y` arra`y` of weights for the test samples, used for weighting the loss function. You can either pass a flat (1D) Nump`y` arra`y` with the same length as the input samples (1:1 mapping between weights and samples), or in the case of temporal data, `y`ou can pass a 2D arra`y` with shape (`samples, sequence_length`), to appl`y` a different weight to ever`y` timestep of ever`y` sample. In this case `y`ou should make sure to specif`y` `sample_weight`_mode="temporal" in `compile`(). This argument is not supported when `x` is a dataset, instead pass sample weights as the third element of `x`.
- `steps`: Integer or `None`. Total number of `steps` (batches of samples) before declaring the evaluation round finished. Ignored with the default value of `None`. If `x` is a `tf.data` dataset and `steps` is `None`, 'evaluate' will run until the dataset is e`x`hausted. This argument is not supported with arra`y` inputs.
- `callbacks`: List of `keras.callbacks.Callback` instances. List of `callbacks` to appl`y` during evaluation. See `callbacks`.
- `max_queue_size`: Integer. Used for generator or `keras.utils.Sequence` input onl`y`. Ma`x`imum size for the generator queue. If unspecified, `max_queue_size` will default to 10.
- `workers`: Integer. Used for generator or `keras.utils.Sequence` input onl`y`. Ma`x`imum number of processes to spin up when using process-based threading. If unspecified, `workers` will default to 1. If 0, will e`x`ecute the generator on the main thread.
- `use_multiprocessing`: Boolean. Used for generator or `keras.utils.Sequence` input onl`y`. If `True`, use process-based threading. If unspecified, `use_multiprocessing` will default to `False`. Note that because this implementation relies on multiprocessing, `y`ou should not pass non-picklable arguments to the generator as the`y` can't be passed easil`y` to children processes.
#### Returns:

Scalar test loss (if the model has a single output and no metrics) or list of scalars (if the model has multiple outputs and/or metrics). The attribute model.metrics_names will give you the display labels for the scalar outputs.
#### Raises:
- `ValueError`: in case of invalid arguments.
### evaluate_generator
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L1299-L1364)


```
 evaluate_generator(
    generator,
    steps=None,
    callbacks=None,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False,
    verbose=0
)
```

Evaluates the model on a data generator.

The generator should return the same kind of data as accepted by test_on_batch.
#### Arguments:
- `generator`: Generator yielding tuples (inputs, targets) or (inputs, targets, sample_weights) or an instance of `keras.utils.Sequence` object in order to avoid duplicate data when using multiprocessing.
- `steps`: Total number of `steps` (batches of samples) to yield from `generator` before stopping. Optional for `Sequence`: if unspecified, will use the len(`generator`) as a number of `steps`.
- `callbacks`: List of `keras.callbacks.Callback` instances. List of `callbacks` to apply during evaluation. See `callbacks`.
- `max_queue_size`: maximum size for the `generator` queue
- `workers`: Integer. Maximum number of processes to spin up when using process-based threading. If unspecified, `workers` will default to 1. If 0, will execute the `generator` on the main thread.
- `use_multiprocessing`: Boolean. If `True`, use process-based threading. If unspecified, `use_multiprocessing` will default to `False`. Note that because this implementation relies on multiprocessing, you should not pass non-picklable arguments to the `generator` as they can't be passed easily to children processes.
- `verbose`: Verbosity mode, 0 or 1.
#### Returns:

Scalar test loss (if the model has a single output and no metrics) or list of scalars (if the model has multiple outputs and/or metrics). The attribute model.metrics_names will give you the display labels for the scalar outputs.
#### Raises:
- `ValueError`: in case of invalid arguments.
#### Raises:
- `ValueError`: In case the generator yields data in an invalid format.
### fit
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L535-L728)


```
 fit(
    x=None,
    y=None,
    batch_size=None,
    epochs=1,
    verbose=1,
    callbacks=None,
    validation_split=0.0,
    validation_data=None,
    shuffle=True,
    class_weight=None,
    sample_weight=None,
    initial_epoch=0,
    steps_per_epoch=None,
    validation_steps=None,
    validation_freq=1,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False,
    **kwargs
)
```

Trains the model for a fixed number of epochs (iterations on a dataset).
#### Arguments:
- `x`: Input data. It could be:
A Numpy array (or array-like), or a list of arrays (in case the model has multiple inputs).
A TensorFlow tensor, or a list of tensors (in case the model has multiple inputs).
A dict mapping input names to the corresponding array/tensors, if the model has named inputs.
A `tf.data` dataset. Should return a tuple of either (`inputs, targets`) or (`inputs, targets`, sample_weights).
A generator or `keras.utils.Sequence` returning (`inputs, targets`) or (`inputs, targets`, sample weights).
- A Numpy array (or array-like), or a list of arrays (in case the model has multiple inputs).
- A TensorFlow tensor, or a list of tensors (in case the model has multiple inputs).
- A dict mapping input names to the corresponding array/tensors, if the model has named inputs.
- A `tf.data` dataset. Should return a tuple of either (`inputs, targets`) or (`inputs, targets`, sample_weights).
- A generator or `keras.utils.Sequence` returning (`inputs, targets`) or (`inputs, targets`, sample weights).
- `y`: Target data. Like the input data `x`, it could be either Nump`y` arra`y`(s) or TensorFlow tensor(s). It should be consistent with `x` (`y`ou cannot have Nump`y` inputs and tensor targets, or inversel`y`). If `x` is a dataset, generator, or `keras.utils.Sequence` instance, `y` should not be specified (since targets will be obtained from `x`).
- `batch_size`: Integer or `None`. Number of samples per gradient update. If unspecified, `batch_size` will default to 32. Do not specif`y` the `batch_size` if `y`our data is in the form of s`y`mbolic tensors, datasets, generators, or `keras.utils.Sequence` instances (since the`y` generate batches).
- `epochs`: Integer. Number of `epochs` to train the model. An epoch is an iteration over the entire `x` and `y` data provided. Note that in conjunction with `initial_epoch`, `epochs` is to be understood as "final epoch". The model is not trained for a number of iterations given b`y` `epochs`, but merel`y` until the epoch of inde`x` `epochs` is reached.
- `verbose`: 0, 1, or 2. Verbosit`y` mode. 0 = silent, 1 = progress bar, 2 = one line per epoch. Note that the progress bar is not particularl`y` useful when logged to a file, so `verbose`=2 is recommended when not running interactivel`y` (eg, in a production environment).
- `callbacks`: List of `keras.callbacks.Callback` instances. List of `callbacks` to appl`y` during training. See `tf.keras.callbacks`.
- `validation_split`: Float between 0 and 1. Fraction of the training data to be used as validation data. The model will set apart this fraction of the training data, will not train on it, and will evaluate the loss and an`y` model metrics on this data at the end of each epoch. The validation data is selected from the last samples in the `x` and `y` data provided, before shuffling. This argument is not supported when `x` is a dataset, generator or `keras.utils.Sequence` instance.
- `validation_data`: Data on which to evaluate the loss and an`y` model metrics at the end of each epoch. The model will not be trained on this data. `validation_data` will override `validation_split`. `validation_data` could be:
tuple (`x`_val, `y`_val) of Nump`y` arra`y`s or tensors
tuple (`x`_val, `y`_val, val_sample_weights) of Nump`y` arra`y`s
dataset For the first two cases, `batch_size` must be provided. For the last case, `validation_steps` must be provided.
- tuple (`x`_val, `y`_val) of Nump`y` arra`y`s or tensors
- tuple (`x`_val, `y`_val, val_sample_weights) of Nump`y` arra`y`s
- dataset For the first two cases, `batch_size` must be provided. For the last case, `validation_steps` must be provided.
- `shuffle`: Boolean (whether to `shuffle` the training data before each epoch) or str (for 'batch'). 'batch' is a special option for dealing with the limitations of HDF5 data; it `shuffle`s in batch-sized chunks. Has no effect when `steps_per_epoch` is not `None`.
- `class_weight`: Optional dictionar`y` mapping class indices (integers) to a weight (float) value, used for weighting the loss function (during training onl`y`). This can be useful to tell the model to "pa`y` more attention" to samples from an under-represented class.
- `sample_weight`: Optional Nump`y` arra`y` of weights for the training samples, used for weighting the loss function (during training onl`y`). You can either pass a flat (1D) Nump`y` arra`y` with the same length as the input samples (1:1 mapping between weights and samples), or in the case of temporal data, `y`ou can pass a 2D arra`y` with shape (`samples, sequence_length`), to appl`y` a different weight to ever`y` timestep of ever`y` sample. In this case `y`ou should make sure to specif`y` `sample_weight`_mode="temporal" in `compile`(). This argument is not supported when `x` is a dataset, generator, or `keras.utils.Sequence` instance, instead provide the `sample_weight`s as the third element of `x`.
- `initial_epoch`: Integer. Epoch at which to start training (useful for resuming a previous training run).
- `steps_per_epoch`: Integer or `None`. Total number of steps (batches of samples) before declaring one epoch finished and starting the ne`x`t epoch. When training with input tensors such as TensorFlow data tensors, the default `None` is equal to the number of samples in `y`our dataset divided b`y` the batch size, or 1 if that cannot be determined. If `x` is a `tf.data` dataset, and '`steps_per_epoch`' is `None`, the epoch will run until the input dataset is e`x`hausted. This argument is not supported with arra`y` inputs.
- `validation_steps`: Onl`y` relevant if `validation_data` is provided and is a `tf.data` dataset. Total number of steps (batches of samples) to draw before stopping when performing validation at the end of ever`y` epoch. If `validation_data` is a `tf.data` dataset and '`validation_steps`' is `None`, validation will run until the `validation_data` dataset is e`x`hausted.
- `validation_freq`: Onl`y` relevant if validation data is provided. Integer or `collections_abc.Container` instance (e.g. list, tuple, etc.). If an integer, specifies how man`y` training `epochs` to run before a new validation run is performed, e.g. `validation_freq`=2 runs validation ever`y` 2 `epochs`. If a Container, specifies the `epochs` on which to run validation, e.g. `validation_freq`=[1, 2, 10] runs validation at the end of the 1st, 2nd, and 10th `epochs`.
- `max_queue_size`: Integer. Used for generator or `keras.utils.Sequence` input onl`y`. Ma`x`imum size for the generator queue. If unspecified, `max_queue_size` will default to 10.
- `workers`: Integer. Used for generator or `keras.utils.Sequence` input onl`y`. Ma`x`imum number of processes to spin up when using process-based threading. If unspecified, `workers` will default to 1. If 0, will e`x`ecute the generator on the main thread.
- `use_multiprocessing`: Boolean. Used for generator or `keras.utils.Sequence` input onl`y`. If `True`, use process-based threading. If unspecified, `use_multiprocessing` will default to `False`. Note that because this implementation relies on multiprocessing, `y`ou should not pass non-picklable arguments to the generator as the`y` can't be passed easil`y` to children processes.
#### Returns:

A History object. Its History.history attribute is a record of training loss values and metrics values at successive epochs, as well as validation loss values and validation metrics values (if applicable).
#### Raises:
- `RuntimeError`: If the model was never compiled.
- `ValueError`: In case of mismatch between the provided input data and what the model expects.
### fit_generator
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L1163-L1297)


```
 fit_generator(
    generator,
    steps_per_epoch=None,
    epochs=1,
    verbose=1,
    callbacks=None,
    validation_data=None,
    validation_steps=None,
    validation_freq=1,
    class_weight=None,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False,
    shuffle=True,
    initial_epoch=0
)
```

Fits the model on data yielded batch-by-batch by a Python generator.

The generator is run in parallel to the model, for efficiency. For instance, this allows you to do real-time data augmentation on images on CPU in parallel to training your model on GPU.
[keras.utils.Sequence](https://www.tensorflow.org/api_docs/python/tf/keras/utils/Sequence)The use of  guarantees the ordering and guarantees the single use of every input per epoch when using use_multiprocessing=True.

#### Arguments:
- `generator`: A `generator` or an instance of `Sequence` (`keras.utils.Sequence`) object in order to avoid duplicate data when using multiprocessing. The output of the `generator` must be either
a tuple (`inputs, targets`)
a tuple (`inputs, targets`, sample_weights). This tuple (a single output of the `generator`) makes a single batch. Therefore, all arrays in this tuple must have the same length (equal to the size of this batch). Different batches may have different sizes. For example, the last batch of the epoch is commonly smaller than the others, if the size of the dataset is not divisible by the batch size. The `generator` is expected to loop over its data indefinitely. An epoch finishes when `steps_per_epoch` batches have been seen by the model.
- a tuple (`inputs, targets`)
- a tuple (`inputs, targets`, sample_weights). This tuple (a single output of the `generator`) makes a single batch. Therefore, all arrays in this tuple must have the same length (equal to the size of this batch). Different batches may have different sizes. For example, the last batch of the epoch is commonly smaller than the others, if the size of the dataset is not divisible by the batch size. The `generator` is expected to loop over its data indefinitely. An epoch finishes when `steps_per_epoch` batches have been seen by the model.
- `steps_per_epoch`: Total number of steps (batches of samples) to yield from `generator` before declaring one epoch finished and starting the next epoch. It should typically be equal to the number of samples of your dataset divided by the batch size. Optional for `Sequence`: if unspecified, will use the len(`generator`) as a number of steps.
- `epochs`: Integer, total number of iterations on the data.
- `verbose`: Verbosity mode, 0, 1, or 2.
- `callbacks`: List of `callbacks` to be called during training.
- `validation_data`: This can be either
a `generator` for the validation data
a tuple (`inputs, targets`)
a tuple (`inputs, targets`, sample_weights).
- a `generator` for the validation data
- a tuple (`inputs, targets`)
- a tuple (`inputs, targets`, sample_weights).
- `validation_steps`: Only relevant if `validation_data` is a `generator`. Total number of steps (batches of samples) to yield from `generator` before stopping. Optional for `Sequence`: if unspecified, will use the len(`validation_data`) as a number of steps.
- `validation_freq`: Only relevant if validation data is provided. Integer or `collections_abc.Container` instance (e.g. list, tuple, etc.). If an integer, specifies how many training `epochs` to run before a new validation run is performed, e.g. `validation_freq`=2 runs validation every 2 `epochs`. If a Container, specifies the `epochs` on which to run validation, e.g. `validation_freq`=[1, 2, 10] runs validation at the end of the 1st, 2nd, and 10th `epochs`.
- `class_weight`: Dictionary mapping class indices to a weight for the class.
- `max_queue_size`: Integer. Maximum size for the `generator` queue. If unspecified, `max_queue_size` will default to 10.
- `workers`: Integer. Maximum number of processes to spin up when using process-based threading. If unspecified, `workers` will default to 1. If 0, will execute the `generator` on the main thread.
- `use_multiprocessing`: Boolean. If `True`, use process-based threading. If unspecified, `use_multiprocessing` will default to `False`. Note that because this implementation relies on multiprocessing, you should not pass non-picklable arguments to the `generator` as they can't be passed easily to children processes.
- `shuffle`: Boolean. Whether to `shuffle` the order of the batches at the beginning of each epoch. Only used with instances of `Sequence` (`keras.utils.Sequence`). Has no effect when `steps_per_epoch` is not `None`.
- `initial_epoch`: Epoch at which to start training (useful for resuming a previous training run)
#### Returns:

A History object.
#### Example:

```
     def generate_arrays_from_file(path):
        while 1:
            f = open(path)
            for line in f:
                # create numpy arrays of input data
                # and labels, from each line in the file
                x1, x2, y = process_line(line)
                yield ({'input_1': x1, 'input_2': x2}, {'output': y})
            f.close()

    model.fit_generator(generate_arrays_from_file('/my_file.txt'),
                        steps_per_epoch=10000, epochs=10)
```

Raises: ValueError: In case the generator yields data in an invalid format.
### get_layer
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L508-L539)


```
 get_layer(
    name=None,
    index=None
)
```

Retrieves a layer based on either its name (unique) or index.

If name and index are both provided, index will take precedence. Indices are based on order of horizontal graph traversal (bottom-up).
#### Arguments:
- `name`: String, `name` of layer.
- `index`: Integer, `index` of layer.
#### Returns:

A layer instance.
#### Raises:
- `ValueError`: In case of invalid layer name or index.
### load_weights
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L174-L181)


```
 load_weights(
    filepath,
    by_name=False
)
```

Loads all layer weights, either from a TensorFlow or an HDF5 file.
### predict
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L835-L909)


```
 predict(
    x,
    batch_size=None,
    verbose=0,
    steps=None,
    callbacks=None,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False
)
```

Generates output predictions for the input samples.

Computation is done in batches.
#### Arguments:
- `x`: Input samples. It could be:
A Numpy array (or array-like), or a list of arrays (in case the model has multiple inputs).
A TensorFlow tensor, or a list of tensors (in case the model has multiple inputs).
A `tf.data` dataset.
A generator or `keras.utils.Sequence` instance.
- A Numpy array (or array-like), or a list of arrays (in case the model has multiple inputs).
- A TensorFlow tensor, or a list of tensors (in case the model has multiple inputs).
- A `tf.data` dataset.
- A generator or `keras.utils.Sequence` instance.
- `batch_size`: Integer or `None`. Number of samples per gradient update. If unspecified, `batch_size` will default to 32. Do not specify the `batch_size` is your data is in the form of symbolic tensors, dataset, generators, or `keras.utils.Sequence` instances (since they generate batches).
- `verbose`: Verbosity mode, 0 or 1.
- `steps`: Total number of `steps` (batches of samples) before declaring the `predict`ion round finished. Ignored with the default value of `None`. If `x` is a `tf.data` dataset and `steps` is `None`, `predict` will run until the input dataset is e`x`hausted.
- `callbacks`: List of `keras.callbacks.Callback` instances. List of `callbacks` to apply during `predict`ion. See `callbacks`.
- `max_queue_size`: Integer. Used for generator or `keras.utils.Sequence` input only. Ma`x`imum size for the generator queue. If unspecified, `max_queue_size` will default to 10.
- `workers`: Integer. Used for generator or `keras.utils.Sequence` input only. Ma`x`imum number of processes to spin up when using process-based threading. If unspecified, `workers` will default to 1. If 0, will e`x`ecute the generator on the main thread.
- `use_multiprocessing`: Boolean. Used for generator or `keras.utils.Sequence` input only. If `True`, use process-based threading. If unspecified, `use_multiprocessing` will default to `False`. Note that because this implementation relies on multiprocessing, you should not pass non-picklable arguments to the generator as they can't be passed easily to children processes.
#### Returns:

Numpy array(s) of predictions.
#### Raises:
- `ValueError`: In case of mismatch between the provided input data and the model's expectations, or in case a stateful model receives a number of samples that is not a multiple of the batch size.
### predict_generator
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L1366-L1421)


```
 predict_generator(
    generator,
    steps=None,
    callbacks=None,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False,
    verbose=0
)
```

Generates predictions for the input samples from a data generator.

The generator should return the same kind of data as accepted by predict_on_batch.
#### Arguments:
- `generator`: Generator yielding batches of input samples or an instance of `keras.utils.Sequence` object in order to avoid duplicate data when using multiprocessing.
- `steps`: Total number of `steps` (batches of samples) to yield from `generator` before stopping. Optional for `Sequence`: if unspecified, will use the len(`generator`) as a number of `steps`.
- `callbacks`: List of `keras.callbacks.Callback` instances. List of `callbacks` to apply during prediction. See `callbacks`.
- `max_queue_size`: Maximum size for the `generator` queue.
- `workers`: Integer. Maximum number of processes to spin up when using process-based threading. If unspecified, `workers` will default to 1. If 0, will execute the `generator` on the main thread.
- `use_multiprocessing`: Boolean. If `True`, use process-based threading. If unspecified, `use_multiprocessing` will default to `False`. Note that because this implementation relies on multiprocessing, you should not pass non-picklable arguments to the `generator` as they can't be passed easily to children processes.
- `verbose`: verbosity mode, 0 or 1.
#### Returns:

Numpy array(s) of predictions.
#### Raises:
- `ValueError`: In case the generator yields data in an invalid format.
### predict_on_batch
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L1115-L1161)


```
 predict_on_batch(x)
```

Returns predictions for a single batch of samples.
#### Arguments:
- `x`: Input data. It could be:
A Numpy array (or array-like), or a list of arrays (in case the model has multiple inputs).
A TensorFlow tensor, or a list of tensors (in case the model has multiple inputs).
A `tf.data` dataset.
- A Numpy array (or array-like), or a list of arrays (in case the model has multiple inputs).
- A TensorFlow tensor, or a list of tensors (in case the model has multiple inputs).
- A `tf.data` dataset.
#### Returns:

Numpy array(s) of predictions.
#### Raises:
- `ValueError`: In case of mismatch between given number of inputs and expectations of the model.
### reset_metrics
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L911-L919)


```
 reset_metrics()
```

Resets the state of metrics.
### reset_states
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L446-L449)


```
 reset_states()
```
### save
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L923-L975)


```
 save(
    filepath,
    overwrite=True,
    include_optimizer=True,
    save_format=None,
    signatures=None,
    options=None
)
```

Saves the model to Tensorflow SavedModel or a single HDF5 file.
#### The savefile includes:
- ``T``h``e`` ``m``o``d``e``l`` ``a``r``c``h``i``t``e``c``t``u``r``e``,`` ``a``l``l``o``w``i``n``g`` ``t``o`` ``r``e``-``i``n``s``t``a``n``t``i``a``t``e`` ``t``h``e`` ``m``o``d``e``l``.``
- ``T``h``e`` ``m``o``d``e``l`` ``w``e``i``g``h``t``s``.``
- ``T``h``e`` ``s``t``a``t``e`` ``o``f`` ``t``h``e`` ``o``p``t``i``m``i``z``e``r``,`` ``a``l``l``o``w``i``n``g`` ``t``o`` ``r``e``s``u``m``e`` ``t``r``a``i``n``i``n``g`` ``e``x``a``c``t``l``y`` ``w``h``e``r``e`` ``y``o``u`` ``l``e``f``t`` ``o``f``f``.``

This allows you to save the entirety of the state of a model in a single file.
[keras.models.load_model](https://www.tensorflow.org/api_docs/python/tf/keras/models/load_model)Saved models can be reinstantiated via . The model returned by load_model is a compiled model ready to be used (unless the saved model was never compiled in the first place).

#### Arguments:
[tf.keras.experimental.export_saved_model](https://www.tensorflow.org/api_docs/python/tf/keras/experimental/export_saved_model)filepath: String, path to SavedModel or H5 file to save the model. overwrite: Whether to silently overwrite any existing file at the target location, or provide the user with a manual prompt. include_optimizer: If True, save optimizer's state together. save_format: Either 'tf' or 'h5', indicating whether to save the model to Tensorflow SavedModel or HDF5. The default is currently 'h5', but will switch to 'tf' in TensorFlow 2.0. The 'tf' option is currently disabled (use  instead).

- `signatures`: Signatures to save with the SavedModel. Applicable to the 'tf' format only. Please see the `signatures` argument in `tf.saved_model.save` for details.
- `options`: Optional `tf.saved_model.SaveOptions` object that specifies `options` for saving to SavedModel.
#### Example:

```
 from keras.models import load_model

model.save('my_model.h5')  # creates a HDF5 file 'my_model.h5'
del model  # deletes the existing model

# returns a compiled model
# identical to the previous one
model = load_model('my_model.h5')
```
### save_weights
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L977-L1096)


```
 save_weights(
    filepath,
    overwrite=True,
    save_format=None
)
```

Saves all layer weights.

Either saves in HDF5 or in TensorFlow format based on the save_format argument.

When saving in HDF5 format, the weight file has: - layer_names (attribute), a list of strings (ordered names of model layers). - For every layer, a group named layer.name - For every such layer group, a group attribute weight_names, a list of strings (ordered names of weights tensor of the layer). - For every weight in the layer, a dataset storing the weight value, named after the weight tensor.
[tf.train.Checkpoint](https://www.tensorflow.org/api_docs/python/tf/train/Checkpoint)When saving in TensorFlow format, all objects referenced by the network are saved in the same format as , including any Layer instances or Optimizer instances assigned to object attributes. For networks constructed from inputs and outputs using tf.keras.Model(inputs, outputs), Layer instances used by the network are tracked/saved automatically. For user-defined classes which inherit from tf.keras.Model, Layer instances must be assigned to object attributes, typically in the constructor. See the documentation of  and tf.keras.Model for details.

[tf.train.Checkpoint](https://www.tensorflow.org/api_docs/python/tf/train/Checkpoint)While the formats are the same, do not mix save_weights and . Checkpoints saved by Model.save_weights should be loaded using Model.load_weights. Checkpoints saved using .save should be restored using the corresponding .restore. Prefer  over save_weights for training checkpoints.

[Model.save](https://www.tensorflow.org/api_docs/python/tf/keras/Model#save)The TensorFlow format matches objects and variables by starting at a root object, self for save_weights, and greedily matching attribute names. For  this is the Model, and for Checkpoint.save this is the Checkpoint even if the Checkpoint has a model attached. This means saving a tf.keras.Model using save_weights and loading into a tf.train.Checkpoint with a Model attached (or vice versa) will not match the Model's variables. See the guide to training checkpoints for details on the TensorFlow format.

#### Arguments:
- `filepath`: String, path to the file to save the weights to. When saving in TensorFlow format, this is the prefix used for checkpoint files (multiple files are generated). Note that the '.h5' suffix causes weights to be saved in HDF5 format.
- `overwrite`: Whether to silently `overwrite` any existing file at the target location, or provide the user with a manual prompt.
- `save_format`: Either 'tf' or 'h5'. A `filepath` ending in '.h5' or '.keras' will default to HDF5 if `save_format` is `None`. Otherwise `None` defaults to 'tf'.
#### Raises:
- `ImportError`: If h5py is not available when attempting to save in HDF5 format.
- `ValueError`: For invalid/unknown format arguments.
### summary
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L1238-L1265)


```
 summary(
    line_length=None,
    positions=None,
    print_fn=None
)
```

Prints a string summary of the network.
#### Arguments:
- `line_length`: Total length of printed lines (e.g. set this to adapt the display to different terminal window sizes).
- `positions`:` `Relative` `or` `absolute` ``positions`` `of` `log` `elements` `in` `each` `line`.`` `If` `not` `provided`,`` `defaults` `to` `[`.``3``3``,`` ``.``5``5``,`` ``.``6``7``,`` ``1``.`]`.`
- `print_fn`:` `Print` `function` `to` `use`.`` `Defaults` `to` ``print``.`` `It` `will` `be` `called` `on` `each` `line` `of` `the` `summary`.`` `You` `can` `set` `it` `to` `a` `custom` `function` `in` `order` `to` `capture` `the` `string` `summary`.`
#### Raises:
- `ValueError`: if `summary`() is called before the model is built.
### test_on_batch
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L1027-L1113)


```
 test_on_batch(
    x,
    y=None,
    sample_weight=None,
    reset_metrics=True
)
```

Test the model on a single batch of samples.
#### Arguments:
- `x`: Input data. It could be:
A Numpy array (or array-like), or a list of arrays (in case the model has multiple inputs).
A TensorFlow tensor, or a list of tensors (in case the model has multiple inputs).
A dict mapping input names to the corresponding array/tensors, if the model has named inputs.
A `tf.data` dataset.
- A Numpy array (or array-like), or a list of arrays (in case the model has multiple inputs).
- A TensorFlow tensor, or a list of tensors (in case the model has multiple inputs).
- A dict mapping input names to the corresponding array/tensors, if the model has named inputs.
- A `tf.data` dataset.
- `y`: Target data. Like the input data `x`, it could be either Nump`y` arra`y`(s) or TensorFlow tensor(s). It should be consistent with `x` (`y`ou cannot have Nump`y` inputs and tensor targets, or inversel`y`). If `x` is a dataset `y` should not be specified (since targets will be obtained from the iterator).
- `sample_weight`: Optional arra`y` of the same length as `x`, containing weights to appl`y` to the model's loss for each sample. In the case of temporal data, `y`ou can pass a 2D arra`y` with shape (samples, sequence_length), to appl`y` a different weight to ever`y` timestep of ever`y` sample. In this case `y`ou should make sure to specif`y` `sample_weight`_mode="temporal" in compile(). This argument is not supported when `x` is a dataset.
- `reset_metrics`: If `True`, the metrics returned will be onl`y` for this batch. If `False`, the metrics will be statefull`y` accumulated across batches.
#### Returns:

Scalar test loss (if the model has a single output and no metrics) or list of scalars (if the model has multiple outputs and/or metrics). The attribute model.metrics_names will give you the display labels for the scalar outputs.
#### Raises:
- `ValueError`: In case of invalid user-provided arguments.
### to_json
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L1196-L1211)


```
 to_json(**kwargs)
```

Returns a JSON string containing the network configuration.
[keras.models.model_from_json(json_string, custom_objects={})](https://www.tensorflow.org/api_docs/python/tf/keras/models/model_from_json)To load a network from a JSON save file, use .

#### Arguments:
#### Returns:

A JSON string.
### to_yaml
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L1213-L1236)


```
 to_yaml(**kwargs)
```

Returns a yaml string containing the network configuration.
[keras.models.model_from_yaml(yaml_string, custom_objects={})](https://www.tensorflow.org/api_docs/python/tf/keras/models/model_from_yaml)To load a network from a yaml save file, use .


custom_objects should be a dictionary mapping the names of custom losses / layers / etc to the corresponding functions / classes.
#### Arguments:
#### Returns:

A YAML string.
#### Raises:
- `ImportError`: if yaml module is not found.
### train_on_batch
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L921-L1025)


```
 train_on_batch(
    x,
    y=None,
    sample_weight=None,
    class_weight=None,
    reset_metrics=True
)
```

Runs a single gradient update on a single batch of data.
#### Arguments:
- `x`: Input data. It could be:
A Numpy array (or array-like), or a list of arrays (in case the model has multiple inputs).
A TensorFlow tensor, or a list of tensors (in case the model has multiple inputs).
A dict mapping input names to the corresponding array/tensors, if the model has named inputs.
A `tf.data` dataset.
- A Numpy array (or array-like), or a list of arrays (in case the model has multiple inputs).
- A TensorFlow tensor, or a list of tensors (in case the model has multiple inputs).
- A dict mapping input names to the corresponding array/tensors, if the model has named inputs.
- A `tf.data` dataset.
- `y`: Target data. Like the input data `x`, it could be either Nump`y` arra`y`(s) or TensorFlow tensor(s). It should be consistent with `x` (`y`ou cannot have Nump`y` inputs and tensor targets, or inversel`y`). If `x` is a dataset, `y` should not be specified (since targets will be obtained from the iterator).
- `sample_weight`: Optional arra`y` of the same length as `x`, containing weights to appl`y` to the model's loss for each sample. In the case of temporal data, `y`ou can pass a 2D arra`y` with shape (samples, sequence_length), to appl`y` a different weight to ever`y` timestep of ever`y` sample. In this case `y`ou should make sure to specif`y` `sample_weight`_mode="temporal" in compile(). This argument is not supported when `x` is a dataset.
- `class_weight`: Optional dictionar`y` mapping class indices (integers) to a weight (float) to appl`y` to the model's loss for the samples from this class during training. This can be useful to tell the model to "pa`y` more attention" to samples from an under-represented class.
- `reset_metrics`: If `True`, the metrics returned will be onl`y` for this batch. If `False`, the metrics will be statefull`y` accumulated across batches.
#### Returns:

Scalar training loss (if the model has a single output and no metrics) or list of scalars (if the model has multiple outputs and/or metrics). The attribute model.metrics_names will give you the display labels for the scalar outputs.
#### Raises:
- `ValueError`: In case of invalid user-provided arguments.
