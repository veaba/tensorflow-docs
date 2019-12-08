Transposes a tensor and returns it.



### Aliases:

- [ `tf.compat.v1.keras.backend.transpose` ](/api_docs/python/tf/keras/backend/transpose)

- [ `tf.compat.v2.keras.backend.transpose` ](/api_docs/python/tf/keras/backend/transpose)



```
 tf.keras.backend.transpose(x)
 
```



#### Arguments:

- **`x`** : Tensor or variable.



#### Returns:
A tensor.



#### Examples:


```
 <pre>
 var = K.variable([[1, 2, 3], [4, 5, 6]]) 
     &amp;gt;&amp;gt;&amp;gt; K.eval(var) 
     array([[ 1.,  2.,  3.], 
            [ 4.,  5.,  6.]], dtype=float32) 
     &amp;gt;&amp;gt;&amp;gt; var_transposed = K.transpose(var) 
     &amp;gt;&amp;gt;&amp;gt; K.eval(var_transposed) 
     array([[ 1.,  4.], 
            [ 2.,  5.], 
            [ 3.,  6.]], dtype=float32) 

```



```
     >>> input = K.placeholder((2, 3))
    >>> input
    <tf.Tensor 'Placeholder_11:0' shape=(2, 3) dtype=float32>
    >>> input_transposed = K.transpose(input)
    >>> input_transposed
    <tf.Tensor 'transpose_4:0' shape=(3, 2) dtype=float32>

 
```

