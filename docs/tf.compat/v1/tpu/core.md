[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu.py#L151-L161)  
---  
  
Returns the device name for a core in a replicated TPU computation.

    
    
    tf.compat.v1.tpu.core(num)
    

#### Args:

  * **`num`** : the virtual core number within each replica to which operators should be assigned.

#### Returns:

A device name, suitable for passing to
[`tf.device()`](https://tensorflow.google.cn/api_docs/python/tf/device).

