Prints a list of tensors. (deprecated)



```
 tf.compat.v1.Print(
    input_,
    data,
    message=None,
    first_n=None,
    summarize=None,
    name=None
)
 
```


<aside class="warning">**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed after 2018-08-20.
Instructions for updating:
Use tf.print instead of tf.Print. Note that tf.print returns a no-output operator that directly prints the output. Outside of defuns or eager mode, this operator will not be executed unless it is directly specified in session.run or used as a control dependency for other operators. This is only a concern in graph mode. Below is an example of how to ensure tf.print executes in graph mode:</aside>
This is an identity op (behaves like [ `tf.identity` ](https://tensorflow.google.cn/api_docs/python/tf/identity)) with the side effect
of printing  `data`  when evaluating.


<aside class="note">**Note:**  This op prints to the standard error. It is not currently compatible
  with jupyter notebook (printing to the notebook <em>server's</em> output, not into
  the notebook).</aside>


#### Args:

- **`input_`** : A tensor passed through this op.

- **`data`** : A list of tensors to print out when op is evaluated.

- **`message`** : A string, prefix of the error message.

- **`first_n`** : Only log  `first_n`  number of times. Negative numbers log always;
this is the default.

- **`summarize`** : Only print this many entries of each tensor. If None, then a
maximum of 3 elements are printed per input tensor.

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type and contents as  `input_` .


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `sess = tf.compat.v1.Session()<br>with sess.as_default():<br>&nbsp; &nbsp; tensor = tf.range(10)<br>&nbsp; &nbsp; print_op = tf.print(tensor)<br>&nbsp; &nbsp; with tf.control_dependencies([print_op]):<br>&nbsp; &nbsp; &nbsp; out = tf.add(tensor, tensor)<br>&nbsp; &nbsp; sess.run(out)<br>Additionally, to use tf.print in python 2.7, users must make sure to import<br>the following:<br>` </pre></devsite-code>
 `from __future__ import print_function` 

