[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/bfloat16.py#L71-L80)  
---  
  
Scope class for bfloat16 variables so that the model uses custom getter.

    
    
    tf.compat.v1.tpu.bfloat16_scope()
    

This enables variables to be read as bfloat16 type when using get_variable.

