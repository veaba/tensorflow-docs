

## Class  `constant_initializer` 

Initializer that generates tensors with constant values.

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)


### Aliases:
- Class [ `tf.compat.v2.constant_initializer` ](/api_docs/python/tf/constant_initializer)
- Class [ `tf.compat.v2.initializers.Constant` ](/api_docs/python/tf/constant_initializer)
- Class [ `tf.compat.v2.initializers.constant` ](/api_docs/python/tf/constant_initializer)
- Class [ `tf.compat.v2.keras.initializers.Constant` ](/api_docs/python/tf/constant_initializer)
- Class [ `tf.compat.v2.keras.initializers.constant` ](/api_docs/python/tf/constant_initializer)
- Class [ `tf.initializers.Constant` ](/api_docs/python/tf/constant_initializer)
- Class [ `tf.initializers.constant` ](/api_docs/python/tf/constant_initializer)
- Class [ `tf.keras.initializers.Constant` ](/api_docs/python/tf/constant_initializer)
- Class [ `tf.keras.initializers.constant` ](/api_docs/python/tf/constant_initializer)


### Used in the guide:
- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)


### Used in the tutorials:
- [Classification on imbalanced data](https://tensorflow.google.cn/tutorials/structured_data/imbalanced_data)

The resulting tensor is populated with values of type  `dtype` , asspecified by arguments  `value`  following the desired  `shape`  of thenew tensor (see examples below).

The argument  `value`  can be a constant value, or a list of values of type `dtype` . If  `value`  is a list, then the length of the list must be lessthan or equal to the number of elements implied by the desired shape of thetensor. In the case where the total number of elements in  `value`  is lessthan the number of elements required by the tensor shape, the last elementin  `value`  will be used to fill the remaining entries. If the total number ofelements in  `value`  is greater than the number of elements required by thetensor shape, the initializer will raise a  `ValueError` .


#### Args:
- **`value`** : A Python scalar, list or tuple of values, or a N-dimensional numpyarray. All elements of the initialized variable will be set to thecorresponding value in the  `value`  argument.


#### Raises:
- **`TypeError`** : If the input  `value`  is not one of the expected types.


#### Examples:

The following example can be rewritten using a numpy.ndarray insteadof the  `value`  list, even reshaped, as shown in the two commented linesbelow the  `value`  list initialization.




```
  <code class="devsite-terminal" data-terminal-prefix=">>>" dir="ltr">import numpy as np</code>
  <code class="no-select nocode" dir="ltr">  &amp;gt;&amp;gt;&amp;gt; import tensorflow as tf</code>
  <code class="no-select nocode" dir="ltr"></code>
  <code class="no-select nocode" dir="ltr">  <code></code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt; value = [0, 1, 2, 3, 4, 5, 6, 7]</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt; # value = np.array(value)</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt; # value = value.reshape([2, 4])</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt; init = tf.compat.v1.constant_initializer(value)</code>  <code class="no-select nocode"></code>  <code class="no-select nocode">&amp;gt;





     </code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt; print(&amp;#39;fitting shape:&amp;#39;)</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt; with tf.compat.v1.Session():</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt;   x = tf.compat.v1.get_variable(&amp;#39;x&amp;#39;, shape=[2, 4], initializer=init)</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt;   x.initializer.run()</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt;   print(x.eval())</code>  <code class="no-select nocode"></code>  <code class="no-select nocode">&amp;gt;





     </code>  <code class="no-select nocode">&amp;gt;





     fitting shape:</code>  <code class="no-select nocode">&amp;gt;





     [[ 0.  1.  2.  3.]</code>  <code class="no-select nocode">&amp;gt;





      [ 4.  5.  6.  7.]]</code>  <code class="no-select nocode">&amp;gt;





     </code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt; print(&amp;#39;larger shape:&amp;#39;)</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt; with tf.compat.v1.Session():</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt;   x = tf.compat.v1.get_variable(&amp;#39;x&amp;#39;, shape=[3, 4], initializer=init)</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt;   x.initializer.run()</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt;   print(x.eval())</code>  <code class="no-select nocode"></code>  <code class="no-select nocode">&amp;gt;





     </code>  <code class="no-select nocode">&amp;gt;





     larger shape:</code>  <code class="no-select nocode">&amp;gt;





     [[ 0.  1.  2.  3.]</code>  <code class="no-select nocode">&amp;gt;





      [ 4.  5.  6.  7.]</code>  <code class="no-select nocode">&amp;gt;





      [ 7.  7.  7.  7.]]</code>  <code class="no-select nocode">&amp;gt;





     </code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt; print(&amp;#39;smaller shape:&amp;#39;)</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt; with tf.compat.v1.Session():</code>  <code class="no-select nocode">  &amp;gt;&amp;gt;&amp;gt;   x = tf.compat.v1.get_variable(&amp;#39;x&amp;#39;, shape=[2, 3], initializer=init)</code>  <code class="no-select nocode"></code>  <code class="no-select nocode">&amp;gt;





     </code>  <code class="no-select nocode">&amp;gt;





       ValueError: Too many elements provided. Needed at most 6, but received 8</code>  <code class="no-select nocode"></code>  <code class="no-select nocode">&amp;lt;h2 id=&amp;quot;__init__&amp;quot;&amp;gt;&amp;lt;code&amp;gt;__init__&amp;lt;/code&amp;gt;&amp;lt;/h2&amp;gt;</code>  <code class="no-select nocode"></code>  <code class="no-select nocode">&amp;lt;a target=&amp;quot;_blank&amp;quot; href=&amp;quot;https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L190-L195&amp;quot;&amp;gt;View source&amp;lt;/a&amp;gt;
```




Initialize self.  See help(type(self)) for accurate signature.


## Methods


###  `__call__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L197-L212)


```
__call__(
    shape,
    dtype=None
)

```


Returns a tensor object initialized as specified by the initializer.


#### Args:
- **`shape`** : Shape of the tensor.
- **`dtype`** : Optional dtype of the tensor. If not provided the dtype of thetensor created will be the type of the inital value.


#### Raises:
- **`TypeError`** : If the initializer cannot create a tensor of the requesteddtype.


###  `from_config` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L69-L89)


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
- **`config`** : A Python dictionary.It will typically be the output of  `get_config` .


#### Returns:

An Initializer instance.


###  `get_config` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L214-L215)


```
get_config()

```


Returns the configuration of the initializer as a JSON-serializable dict.


#### Returns:

A JSON-serializable Python dict.
