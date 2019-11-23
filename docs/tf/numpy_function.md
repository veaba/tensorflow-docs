
Wraps a python function and uses it as a TensorFlow op.


### Aliases:
- [ `tf.compat.v1.numpy_function` ](/api_docs/python/tf/numpy_function)
- [ `tf.compat.v2.numpy_function` ](/api_docs/python/tf/numpy_function)


```
tf.numpy_function(
    func,
    inp,
    Tout,
    name=None
)

```



### Used in the tutorials:
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)

Given a python function  `func` , which takes numpy arrays as itsarguments and returns numpy arrays as its outputs, wrap this function as anoperation in a TensorFlow graph. The following snippet constructs a simpleTensorFlow graph that invokes the  `np.sinh()`  NumPy function as a operationin the graph:


```
def my_func(x):
  # x will be a numpy array with the contents of the placeholder below
  return np.sinh(x)
input = tf.compat.v1.placeholder(tf.float32)
y = tf.compat.v1.numpy_function(my_func, [input], tf.float32)

```


**N.B.**  The [ `tf.compat.v1.numpy_function()` ](https://tensorflow.google.cn/api_docs/python/tf/numpy_function) operation has the following knownlimitations:
- <p>The body of the function (i.e.  `func` ) will not be serialized in a `GraphDef` . Therefore, you should not use this function if you need toserialize your model and restore it in a different environment.</p>
- <p>The operation must run in the same address space as the Python programthat calls [ `tf.compat.v1.numpy_function()` ](https://tensorflow.google.cn/api_docs/python/tf/numpy_function). If you are using distributedTensorFlow, youmust run a [ `tf.distribute.Server` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Server) in the same process as the program thatcalls[ `tf.compat.v1.numpy_function()` ](https://tensorflow.google.cn/api_docs/python/tf/numpy_function) and you must pin the created operation to a devicein thatserver (e.g. using  `with tf.device():` ).</p>


#### Args:
- **`func`** : A Python function, which accepts  `ndarray`  objects as arguments andreturns a list of  `ndarray`  objects (or a single  `ndarray` ). This functionmust accept as many arguments as there are tensors in  `inp` , and theseargument types will match the corresponding [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) objects in  `inp` .The returns  `ndarray` s must match the number and types defined  `Tout` .Important Note: Input and output numpy  `ndarray` s of  `func`  are notguaranteed to be copies. In some cases their underlying memory will beshared with the corresponding TensorFlow tensors. In-place modificationor storing  `func`  input or return values in python datastructureswithout explicit (np.)copy can have non-deterministic consequences.
- **`inp`** : A list of  `Tensor`  objects.
- **`Tout`** : A list or tuple of tensorflow data types or a single tensorflow datatype if there is only one, indicating what  `func`  returns.
- **`stateful`** : (Boolean.) If True, the function should be considered stateful. Ifa function is stateless, when given the same input it will return the sameoutput and have no observable side effects. Optimizations such as commonsubexpression elimination are only performed on stateless operations.
- **`name`** : A name for the operation (optional).


#### Returns:

A list of  `Tensor`  or a single  `Tensor`  which  `func`  computes.
