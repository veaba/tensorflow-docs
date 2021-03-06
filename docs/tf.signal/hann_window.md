Generate a [Hann window](https://en.wikipedia.org/wiki/Window_function#Hann_and_Hamming_windows).

**别名** : [ `tf.compat.v1.signal.hann_window` ](/api_docs/python/tf/signal/hann_window), [ `tf.compat.v2.signal.hann_window` ](/api_docs/python/tf/signal/hann_window)

```
 tf.signal.hann_window(
    window_length,
    periodic=True,
    dtype=tf.dtypes.float32,
    name=None
)
 
```

#### 参数：
- **`window_length`** : A scalar  `Tensor`  indicating the window length to generate.
- **`periodic`** : A bool  `Tensor`  indicating whether to generate a periodic orsymmetric window. Periodic windows are typically used for spectralanalysis while symmetric windows are typically used for digitalfilter design.
- **`dtype`** : The data type to produce. Must be a floating point type.
- **`name`** : An optional name for the operation.


#### 返回：
A  `Tensor`  of shape  `[window_length]`  of type  `dtype` .

#### 加薪：
- **`ValueError`** : If  `dtype`  is not a floating point type.
