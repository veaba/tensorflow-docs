[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu.py#L136-L148)  
---  
  
Shuts down a running a distributed TPU system.

    
    
    tf.compat.v1.tpu.shutdown_system(job=None)
    

#### Args:

  * **`job`** : The job (the XXX in TensorFlow device specification /job:XXX) that contains the TPU devices that will be shutdown. If job=None it is assumed there is only one job in the TensorFlow flock, and an error will be returned if this assumption does not hold.

