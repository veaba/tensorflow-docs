## Class Constant
Initializer that generates tensors with constant values.
[Initializer](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/initializers/Initializer)Inherits From: 

### Aliases:
- Class tf.compat.v1.constant_initializer
- Class tf.compat.v1.initializers.constant
- Class tf.compat.v1.keras.initializers.constant
The resulting tensor is populated with values of type dtype, as specified by arguments value following the desired shape of the new tensor (see examples below).
The argument value can be a constant value, or a list of values of type dtype. If value is a list, then the length of the list must be less than or equal to the number of elements implied by the desired shape of the tensor. In the case where the total number of elements in value is less than the number of elements required by the tensor shape, the last element in value will be used to fill the remaining entries. If the total number of elements in value is greater than the number of elements required by the tensor shape, the initializer will raise a ValueError.
#### Args:
- value: A Python scalar, list or tuple of values, or a N-dimensional numpy array. All elements of the initialized variable will be set to the corresponding value in the value argument.
- dtype: Default data type, used if no dtype argument is provided when calling the initializer.
- verify_shape: Boolean that enables verification of the shape of value. If True, the initializer will throw an error if the shape of value is not compatible with the shape of the initialized tensor.
#### Raises:
- TypeError: If the input value is not one of the expected types.
#### Examples:
The following example can be rewritten using a numpy.ndarray instead of the value list, even reshaped, as shown in the two commented lines below the value list initialization.

```
   import numpy as np
    &gt;&gt;&gt; import tensorflow as tf
  
    <code></code>
  <code class="no-select nocode">  &gt;&gt;&gt; value = [0, 1, 2, 3, 4, 5, 6, 7]</code>
  <code class="no-select nocode">  &gt;&gt;&gt; # value = np.array(value)</code>
  <code class="no-select nocode">  &gt;&gt;&gt; # value = value.reshape([2, 4])</code>
  <code class="no-select nocode">  &gt;&gt;&gt; init = tf.compat.v1.constant_initializer(value)</code>
  <code class="no-select nocode"></code>
  <code class="no-select nocode">&gt;     </code>
  <code class="no-select nocode">  &gt;&gt;&gt; print(&#39;fitting shape:&#39;)</code>
  <code class="no-select nocode">  &gt;&gt;&gt; with tf.compat.v1.Session():</code>
  <code class="no-select nocode">  &gt;&gt;&gt;   x = tf.compat.v1.get_variable(&#39;x&#39;, shape=[2, 4], initializer=init)</code>
  <code class="no-select nocode">  &gt;&gt;&gt;   x.initializer.run()</code>
  <code class="no-select nocode">  &gt;&gt;&gt;   print(x.eval())</code>
  <code class="no-select nocode"></code>
  <code class="no-select nocode">&gt;     </code>
  <code class="no-select nocode">&gt;     fitting shape:</code>
  <code class="no-select nocode">&gt;     [[ 0.  1.  2.  3.]</code>
  <code class="no-select nocode">&gt;      [ 4.  5.  6.  7.]]</code>
  <code class="no-select nocode">&gt;     </code>
  <code class="no-select nocode">  &gt;&gt;&gt; print(&#39;larger shape:&#39;)</code>
  <code class="no-select nocode">  &gt;&gt;&gt; with tf.compat.v1.Session():</code>
  <code class="no-select nocode">  &gt;&gt;&gt;   x = tf.compat.v1.get_variable(&#39;x&#39;, shape=[3, 4], initializer=init)</code>
  <code class="no-select nocode">  &gt;&gt;&gt;   x.initializer.run()</code>
  <code class="no-select nocode">  &gt;&gt;&gt;   print(x.eval())</code>
  <code class="no-select nocode"></code>
  <code class="no-select nocode">&gt;     </code>
  <code class="no-select nocode">&gt;     larger shape:</code>
  <code class="no-select nocode">&gt;     [[ 0.  1.  2.  3.]</code>
  <code class="no-select nocode">&gt;      [ 4.  5.  6.  7.]</code>
  <code class="no-select nocode">&gt;      [ 7.  7.  7.  7.]]</code>
  <code class="no-select nocode">&gt;     </code>
  <code class="no-select nocode">  &gt;&gt;&gt; print(&#39;smaller shape:&#39;)</code>
  <code class="no-select nocode">  &gt;&gt;&gt; with tf.compat.v1.Session():</code>
  <code class="no-select nocode">  &gt;&gt;&gt;   x = tf.compat.v1.get_variable(&#39;x&#39;, shape=[2, 3], initializer=init)</code>
  <code class="no-select nocode"></code>
  <code class="no-select nocode">&gt;     </code>
  <code class="no-select nocode">&gt;     ValueError: Too many elements provided. Needed at most 6, but received 8</code>
  <code class="no-select nocode">&gt;     </code>
  <code class="no-select nocode">  &gt;&gt;&gt; print(&#39;shape verification:&#39;)</code>
  <code class="no-select nocode">  &gt;&gt;&gt; init_verify = tf.compat.v1.constant_initializer(value,</code>
  <code class="no-select nocode">  verify_shape=True)</code>
  <code class="no-select nocode">  &gt;&gt;&gt; with tf.compat.v1.Session():</code>
  <code class="no-select nocode">  &gt;&gt;&gt;   x = tf.compat.v1.get_variable(&#39;x&#39;, shape=[3, 4],</code>
  <code class="no-select nocode">  initializer=init_verify)</code>
  <code class="no-select nocode"></code>
  <code class="no-select nocode">&gt;     </code>
  <code class="no-select nocode">&gt;       TypeError: Expected Tensor&#39;s shape: (3, 4), got (8,).</code>
  <code class="no-select nocode"></code>
  <code class="no-select nocode">&lt;h2 id=&quot;__init__&quot;&gt;&lt;code&gt;__init__&lt;/code&gt;&lt;/h2&gt;</code>
  <code class="no-select nocode"></code>
  <code class="no-select nocode">&lt;a target=&quot;_blank&quot; href=&quot;https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L223-L236&quot;&gt;View source&lt;/a&gt;</code>
  <code class="no-select nocode"></code>
  <code class="no-select nocode"></code> python
  <strong>init</strong>(
      value=0,
      dtype=tf.dtypes.float32,
      verify_shape=False
  )
  
```
DEPRECATED FUNCTION ARGUMENTS (deprecated arguments)
## Methods
### __call__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L238-L244)


```
 __call__(
    shape,
    dtype=None,
    partition_info=None,
    verify_shape=None
)
```
Returns a tensor object initialized as specified by the initializer.
#### Args:
- shape: Shape of the tensor.
- dtype: Optional dtype of the tensor. If not provided use the initializer dtype.
- partition_info: Optional information about the possible partitioning of a tensor.
### from_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L78-L97)


```
 from_config(
    cls,
    config
)
```
Instantiates an initializer from a configuration dictionary.
#### Example:

```
 initializer = RandomUniform(-1, 1)
config = initializer.get_config()
initializer = RandomUniform.from_config(config)
```
#### Args:
- config: A Python dictionary. It will typically be the output of get_config.
#### Returns:
An Initializer instance.
### get_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L246-L251)


```
 get_config()
```
Returns the configuration of the initializer as a JSON-serializable dict.
#### Returns:
A JSON-serializable Python dict.
