

## Class  `Constant` 
Initializer that generates tensors with constant values.

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/initializers/Initializer)



### Aliases:

- Class [ `tf.compat.v1.constant_initializer` ](/api_docs/python/tf/compat/v1/keras/initializers/Constant)

- Class [ `tf.compat.v1.initializers.constant` ](/api_docs/python/tf/compat/v1/keras/initializers/Constant)

- Class [ `tf.compat.v1.keras.initializers.constant` ](/api_docs/python/tf/compat/v1/keras/initializers/Constant)

The resulting tensor is populated with values of type  `dtype` , as
specified by arguments  `value`  following the desired  `shape`  of the
new tensor (see examples below).

The argument  `value`  can be a constant value, or a list of values of type
 `dtype` . If  `value`  is a list, then the length of the list must be less
than or equal to the number of elements implied by the desired shape of the
tensor. In the case where the total number of elements in  `value`  is less
than the number of elements required by the tensor shape, the last element
in  `value`  will be used to fill the remaining entries. If the total number of
elements in  `value`  is greater than the number of elements required by the
tensor shape, the initializer will raise a  `ValueError` .



#### Args:

- **`value`** : A Python scalar, list or tuple of values, or a N-dimensional numpy
array. All elements of the initialized variable will be set to the
corresponding value in the  `value`  argument.

- **`dtype`** : Default data type, used if no  `dtype`  argument is provided when
calling the initializer.

- **`verify_shape`** : Boolean that enables verification of the shape of  `value` . If
 `True` , the initializer will throw an error if the shape of  `value`  is not
compatible with the shape of the initialized tensor.



#### Raises:

- **`TypeError`** : If the input  `value`  is not one of the expected types.



#### Examples:
The following example can be rewritten using a numpy.ndarray instead
of the  `value`  list, even reshaped, as shown in the two commented lines
below the  `value`  list initialization.




<devsite-code><pre class="lang-py" translate="no" dir="ltr" is-upgraded="">&nbsp;  `import numpy as np` <br>&nbsp;  `  &amp;gt;&amp;gt;&amp;gt; import tensorflow as tf` <br>&nbsp;  `` <br>&nbsp;  `   `` 
   `  &amp;gt;&amp;gt;&amp;gt; value = [0, 1, 2, 3, 4, 5, 6, 7]` 
   `  &amp;gt;&amp;gt;&amp;gt; # value = np.array(value)` 
   `  &amp;gt;&amp;gt;&amp;gt; # value = value.reshape([2, 4])` 
   `  &amp;gt;&amp;gt;&amp;gt; init = tf.compat.v1.constant_initializer(value)` 
   `` 
   `&amp;gt;     ` 
   `  &amp;gt;&amp;gt;&amp;gt; print(&amp;#39;fitting shape:&amp;#39;)` 
   `  &amp;gt;&amp;gt;&amp;gt; with tf.compat.v1.Session():` 
   `  &amp;gt;&amp;gt;&amp;gt;   x = tf.compat.v1.get_variable(&amp;#39;x&amp;#39;, shape=[2, 4], initializer=init)` 
   `  &amp;gt;&amp;gt;&amp;gt;   x.initializer.run()` 
   `  &amp;gt;&amp;gt;&amp;gt;   print(x.eval())` 
   `` 
   `&amp;gt;     ` 
   `&amp;gt;     fitting shape:` 
   `&amp;gt;     [[ 0.  1.  2.  3.]` 
   `&amp;gt;      [ 4.  5.  6.  7.]]` 
   `&amp;gt;     ` 
   `  &amp;gt;&amp;gt;&amp;gt; print(&amp;#39;larger shape:&amp;#39;)` 
   `  &amp;gt;&amp;gt;&amp;gt; with tf.compat.v1.Session():` 
   `  &amp;gt;&amp;gt;&amp;gt;   x = tf.compat.v1.get_variable(&amp;#39;x&amp;#39;, shape=[3, 4], initializer=init)` 
   `  &amp;gt;&amp;gt;&amp;gt;   x.initializer.run()` 
   `  &amp;gt;&amp;gt;&amp;gt;   print(x.eval())` 
   `` 
   `&amp;gt;     ` 
   `&amp;gt;     larger shape:` 
   `&amp;gt;     [[ 0.  1.  2.  3.]` 
   `&amp;gt;      [ 4.  5.  6.  7.]` 
   `&amp;gt;      [ 7.  7.  7.  7.]]` 
   `&amp;gt;     ` 
   `  &amp;gt;&amp;gt;&amp;gt; print(&amp;#39;smaller shape:&amp;#39;)` 
   `  &amp;gt;&amp;gt;&amp;gt; with tf.compat.v1.Session():` 
   `  &amp;gt;&amp;gt;&amp;gt;   x = tf.compat.v1.get_variable(&amp;#39;x&amp;#39;, shape=[2, 3], initializer=init)` 
   `` 
   `&amp;gt;     ` 
   `&amp;gt;     ValueError: Too many elements provided. Needed at most 6, but received 8` 
   `&amp;gt;     ` 
   `  &amp;gt;&amp;gt;&amp;gt; print(&amp;#39;shape verification:&amp;#39;)` 
   `  &amp;gt;&amp;gt;&amp;gt; init_verify = tf.compat.v1.constant_initializer(value,` 
   `  verify_shape=True)` 
   `  &amp;gt;&amp;gt;&amp;gt; with tf.compat.v1.Session():` 
   `  &amp;gt;&amp;gt;&amp;gt;   x = tf.compat.v1.get_variable(&amp;#39;x&amp;#39;, shape=[3, 4],` 
   `  initializer=init_verify)` 
   `` 
   `&amp;gt;     ` 
   `&amp;gt;       TypeError: Expected Tensor&amp;#39;s shape: (3, 4), got (8,).` 
   `` 
   `&amp;lt;h2 id=&amp;quot;__init__&amp;quot;&amp;gt;&amp;lt;code&amp;gt;__init__&amp;lt;/code&amp;gt;&amp;lt;/h2&amp;gt;` 
   `` 
   `&amp;lt;a target=&amp;quot;_blank&amp;quot; href=&amp;quot;https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L223-L236&amp;quot;&amp;gt;View source&amp;lt;/a&amp;gt;` 
   `` 
   ``  python</code><br>&nbsp;  `**init** (` <br>&nbsp;  `    value=0,` <br>&nbsp;  `    dtype=tf.dtypes.float32,` <br>&nbsp;  `    verify_shape=False` <br>&nbsp;  `)` <br>&nbsp; </pre></devsite-code>


DEPRECATED FUNCTION ARGUMENTS (deprecated arguments)


<aside class="warning">**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dtype)` . They will be removed in a future version.
Instructions for updating:
Call initializer instance with the dtype argument instead of passing it to the constructor</aside>

<aside class="warning">**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(verify_shape)` . They will be removed in a future version.
Instructions for updating:
Objects must now be the required shape or no shape can be specified</aside>


## Methods


###  `__call__` 
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

- **`shape`** : Shape of the tensor.

- **`dtype`** : Optional dtype of the tensor. If not provided use the initializer
dtype.

- **`partition_info`** : Optional information about the possible partitioning of a
tensor.



###  `from_config` 
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

- **`config`** : A Python dictionary. It will typically be the output of
 `get_config` .



#### Returns:
An Initializer instance.



###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L246-L251)



```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.



#### Returns:
A JSON-serializable Python dict.

