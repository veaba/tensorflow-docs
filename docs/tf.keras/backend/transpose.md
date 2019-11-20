[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/transpose) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L1907-L1940)  
---|---  
  
Transposes a tensor and returns it.

### Aliases:

  * [`tf.compat.v1.keras.backend.transpose`](/api_docs/python/tf/keras/backend/transpose)
  * [`tf.compat.v2.keras.backend.transpose`](/api_docs/python/tf/keras/backend/transpose)

    
    
    tf.keras.backend.transpose(x)
    

#### Arguments:

  * **`x`** : Tensor or variable.

#### Returns:

A tensor.

#### Examples:

    
    
    <pre class="devsite-click-to-copy prettyprint lang-py">
    <code class="devsite-terminal" data-terminal-prefix="&gt;&gt;&gt;">var = K.variable([[1, 2, 3], [4, 5, 6]])</code>
    <code class="no-select nocode">    &gt;&gt;&gt; K.eval(var)</code>
    <code class="no-select nocode">    array([[ 1.,  2.,  3.],</code>
    <code class="no-select nocode">           [ 4.,  5.,  6.]], dtype=float32)</code>
    <code class="no-select nocode">    &gt;&gt;&gt; var_transposed = K.transpose(var)</code>
    <code class="no-select nocode">    &gt;&gt;&gt; K.eval(var_transposed)</code>
    <code class="no-select nocode">    array([[ 1.,  4.],</code>
    <code class="no-select nocode">           [ 2.,  5.],</code>
    <code class="no-select nocode">           [ 3.,  6.]], dtype=float32)</code>
    </pre>
    
    
    
        >>> input = K.placeholder((2, 3))
        >>> input
        <tf.Tensor 'Placeholder_11:0' shape=(2, 3) dtype=float32>
        >>> input_transposed = K.transpose(input)
        >>> input_transposed
        <tf.Tensor 'transpose_4:0' shape=(3, 2) dtype=float32>
    
    

