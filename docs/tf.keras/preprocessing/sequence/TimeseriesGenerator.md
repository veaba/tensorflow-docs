[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/preprocessing/sequence/TimeseriesGenerator)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/preprocessing/sequence.py#L35-L89)  
---|---  
  
## Class `TimeseriesGenerator`

Utility class for generating batches of temporal data.

Inherits From:
[`Sequence`](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence)

### Aliases:

  * Class [`tf.compat.v1.keras.preprocessing.sequence.TimeseriesGenerator`](/api_docs/python/tf/keras/preprocessing/sequence/TimeseriesGenerator)
  * Class [`tf.compat.v2.keras.preprocessing.sequence.TimeseriesGenerator`](/api_docs/python/tf/keras/preprocessing/sequence/TimeseriesGenerator)

This class takes in a sequence of data-points gathered at equal intervals,
along with time series parameters such as stride, length of history, etc., to
produce batches for training/validation.

# Arguments

    
    
    data: Indexable generator (such as list or Numpy array)
        containing consecutive data points (timesteps).
        The data should be at 2D, and axis 0 is expected
        to be the time dimension.
    targets: Targets corresponding to timesteps in `data`.
        It should have same length as `data`.
    length: Length of the output sequences (in number of timesteps).
    sampling_rate: Period between successive individual timesteps
        within sequences. For rate `r`, timesteps
        `data[i]`, `data[i-r]`, ... `data[i - length]`
        are used for create a sample sequence.
    stride: Period between successive output sequences.
        For stride `s`, consecutive output samples would
        be centered around `data[i]`, `data[i+s]`, `data[i+2*s]`, etc.
    start_index: Data points earlier than `start_index` will not be used
        in the output sequences. This is useful to reserve part of the
        data for test or validation.
    end_index: Data points later than `end_index` will not be used
        in the output sequences. This is useful to reserve part of the
        data for test or validation.
    shuffle: Whether to shuffle output samples,
        or instead draw them in chronological order.
    reverse: Boolean: if `true`, timesteps in each output sample will be
        in reverse chronological order.
    batch_size: Number of timeseries samples in each batch
        (except maybe the last one).
    

# Returns

    
    
    A [Sequence](/utils/#sequence) instance.
    

# Examples

    
    
    from keras.preprocessing.sequence import TimeseriesGenerator
    import numpy as np
    data = np.array([[i] for i in range(50)])
    targets = np.array([[i] for i in range(50)])
    data_gen = TimeseriesGenerator(data, targets,
                                   length=10, sampling_rate=2,
                                   batch_size=2)
    assert len(data_gen) == 20
    batch_0 = data_gen[0]
    x, y = batch_0
    assert np.array_equal(x,
                          np.array([[[0], [2], [4], [6], [8]],
                                    [[1], [3], [5], [7], [9]]]))
    assert np.array_equal(y,
                          np.array([[10], [11]]))
    

## `__init__`

    
    
    __init__(
        data,
        targets,
        length,
        sampling_rate=1,
        stride=1,
        start_index=0,
        end_index=None,
        shuffle=False,
        reverse=False,
        batch_size=128
    )
    

Initialize self. See help(type(self)) for accurate signature.

## Methods

### `__getitem__`

    
    
    __getitem__(index)
    

### `__iter__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L403-L406)

    
    
    __iter__()
    

Create a generator that iterate over the Sequence.

### `__len__`

    
    
    __len__()
    

### `get_config`

    
    
    get_config()
    

Returns the TimeseriesGenerator configuration as Python dictionary.

# Returns

    
    
    A Python dictionary with the TimeseriesGenerator configuration.
    

### `on_epoch_end`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L398-L401)

    
    
    on_epoch_end()
    

Method called at the end of every epoch.

### `to_json`

    
    
    to_json(**kwargs)
    

Returns a JSON string containing the timeseries generator configuration. To
load a generator from a JSON string, use
`keras.preprocessing.sequence.timeseries_generator_from_json(json_string)`.

# Arguments

    
    
    **kwargs: Additional keyword arguments
        to be passed to `json.dumps()`.
    

# Returns

    
    
    A JSON string containing the tokenizer configuration.
    

