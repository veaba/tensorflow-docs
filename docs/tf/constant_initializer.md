

## Class  `constant_initializer` 
生成具有常量值的张量的初始值设定项。

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)

**别名** : [ `tf.compat.v2.constant_initializer` ](/api_docs/python/tf/constant_initializer), [ `tf.compat.v2.initializers.Constant` ](/api_docs/python/tf/constant_initializer), [ `tf.compat.v2.initializers.constant` ](/api_docs/python/tf/constant_initializer), [ `tf.compat.v2.keras.initializers.Constant` ](/api_docs/python/tf/constant_initializer), [ `tf.compat.v2.keras.initializers.constant` ](/api_docs/python/tf/constant_initializer), [ `tf.initializers.Constant` ](/api_docs/python/tf/constant_initializer), [ `tf.initializers.constant` ](/api_docs/python/tf/constant_initializer), [ `tf.keras.initializers.Constant` ](/api_docs/python/tf/constant_initializer), [ `tf.keras.initializers.constant` ](/api_docs/python/tf/constant_initializer)

### 在指南中使用：
- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)


### 在教程中使用：
- [Classification on imbalanced data](https://tensorflow.google.cn/tutorials/structured_data/imbalanced_data)
The resulting tensor is populated with values of type  `dtype` , asspecified by arguments  `value`  following the desired  `shape`  of thenew tensor (see examples below).

The argument  `value`  can be a constant value, or a list of values of type `dtype` . If  `value`  is a list, then the length of the list must be lessthan or equal to the number of elements implied by the desired shape of thetensor. In the case where the total number of elements in  `value`  is lessthan the number of elements required by the tensor shape, the last elementin  `value`  will be used to fill the remaining entries. If the total number ofelements in  `value`  is greater than the number of elements required by thetensor shape, the initializer will raise a  `ValueError` .

#### 参数：
- **`value`** : A Python scalar, list or tuple of values, or a N-dimensional numpyarray. All elements of the initialized variable will be set to thecorresponding value in the  `value`  argument.


#### 加薪：
- **`TypeError`** : If the input  `value`  is not one of the expected types.


#### 示例：
The following example can be rewritten using a numpy.ndarray insteadof the  `value`  list, even reshaped, as shown in the two commented linesbelow the  `value`  list initialization.


```
   import numpy as np 
     &amp;gt;&amp;gt;&amp;gt; import tensorflow as tf 
    
            &amp;gt;&amp;gt;&amp;gt; value = [0, 1, 2, 3, 4, 5, 6, 7]      &amp;gt;&amp;gt;&amp;gt; # value = np.array(value)      &amp;gt;&amp;gt;&amp;gt; # value = value.reshape([2, 4])      &amp;gt;&amp;gt;&amp;gt; init = tf.compat.v1.constant_initializer(value)        &amp;gt;           &amp;gt;&amp;gt;&amp;gt; print(&amp;#39;fitting shape:&amp;#39;)      &amp;gt;&amp;gt;&amp;gt; with tf.compat.v1.Session():      &amp;gt;&amp;gt;&amp;gt;   x = tf.compat.v1.get_variable(&amp;#39;x&amp;#39;, shape=[2, 4], initializer=init)      &amp;gt;&amp;gt;&amp;gt;   x.initializer.run()      &amp;gt;&amp;gt;&amp;gt;   print(x.eval())        &amp;gt;         &amp;gt;     fitting shape:    &amp;gt;     [[ 0.  1.  2.  3.]    &amp;gt;      [ 4.  5.  6.  7.]]    &amp;gt;           &amp;gt;&amp;gt;&amp;gt; print(&amp;#39;larger shape:&amp;#39;)      &amp;gt;&amp;gt;&amp;gt; with tf.compat.v1.Session():      &amp;gt;&amp;gt;&amp;gt;   x = tf.compat.v1.get_variable(&amp;#39;x&amp;#39;, shape=[3, 4], initializer=init)      &amp;gt;&amp;gt;&amp;gt;   x.initializer.run()      &amp;gt;&amp;gt;&amp;gt;   print(x.eval())        &amp;gt;         &amp;gt;     larger shape:    &amp;gt;     [[ 0.  1.  2.  3.]    &amp;gt;      [ 4.  5.  6.  7.]    &amp;gt;      [ 7.  7.  7.  7.]]    &amp;gt;           &amp;gt;&amp;gt;&amp;gt; print(&amp;#39;smaller shape:&amp;#39;)      &amp;gt;&amp;gt;&amp;gt; with tf.compat.v1.Session():      &amp;gt;&amp;gt;&amp;gt;   x = tf.compat.v1.get_variable(&amp;#39;x&amp;#39;, shape=[2, 3], initializer=init)        &amp;gt;         &amp;gt;       ValueError: Too many elements provided. Needed at most 6, but received 8        &amp;lt;h2 id=&amp;quot;__init__&amp;quot;&amp;gt;&amp;lt;code&amp;gt;__init__&amp;lt;/code&amp;gt;&amp;lt;/h2&amp;gt;        &amp;lt;a target=&amp;quot;_blank&amp;quot; href=&amp;quot;https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L190-L195&amp;quot;&amp;gt;View source&amp;lt;/a&amp;gt;          python</code>
   <strong>init</strong>(value=0) 
  
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L197-L212)

```
 __call__(
    shape,
    dtype=None
)
 
```

返回按初始值设定项指定初始化的张量对象。

#### 参数：
- **`shape`** : Shape of the tensor.
- **`dtype`** : Optional dtype of the tensor. If not provided the dtype of thetensor created will be the type of the inital value.


#### 加薪：
- **`TypeError`** : If the initializer cannot create a tensor of the requesteddtype.


###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L69-L89)

```
 from_config(
    cls,
    config
)
 
```

从配置字典实例化初始值设定项。

#### 示例：


```
 initializer = RandomUniform(-1, 1)
config = initializer.get_config()
initializer = RandomUniform.from_config(config)
 
```

#### 参数：
- **`config`** : A Python dictionary.It will typically be the output of  `get_config` .


#### 返回：
初始化器实例。

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L214-L215)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

