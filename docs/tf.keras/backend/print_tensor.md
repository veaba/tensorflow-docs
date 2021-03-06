Prints  `message`  and the tensor value when evaluated.

**别名** : [ `tf.compat.v1.keras.backend.print_tensor` ](/api_docs/python/tf/keras/backend/print_tensor), [ `tf.compat.v2.keras.backend.print_tensor` ](/api_docs/python/tf/keras/backend/print_tensor)

```
 tf.keras.backend.print_tensor(
    x,
    message=''
)
 
```

Note that  `print_tensor`  returns a new tensor identical to  `x` which should be used in the following code. Otherwise theprint operation is not taken into account during evaluation.

#### 示例：


```
    x = K.print_tensor(x, message=&amp;quot;x is: &amp;quot;) 
   
```


#### 参数：
- **`x`** : Tensor to print.
- **`message`** : Message to print jointly with the tensor.


#### 返回：
The same tensor  `x` , unchanged.

