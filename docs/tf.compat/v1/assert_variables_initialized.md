[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variables.py#L3288-L3328)  
---  
  
Returns an Op to check if variables are initialized.

    
    
    tf.compat.v1.assert_variables_initialized(var_list=None)
    

NOTE: This function is obsolete and will be removed in 6 months. Please change
your implementation to use `report_uninitialized_variables()`.

When run, the returned Op will raise the exception `FailedPreconditionError`
if any of the variables has not yet been initialized.

**Note:** This function is implemented by trying to fetch the values of the
variables. If one of the variables is not initialized a message may be logged
by the C++ runtime. This is expected.

#### Args:

  * **`var_list`** : List of `Variable` objects to check. Defaults to the value of `global_variables().`

#### Returns:

An Op, or None if there are no variables.

**NOTE** The output of this function should be used. If it is not, a warning
will be logged. To mark the output as used, call its .mark_used() method.

