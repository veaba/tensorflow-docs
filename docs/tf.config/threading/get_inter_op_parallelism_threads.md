[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/config/threading/get_inter_op_parallelism_threads)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/config.py#L53-L63)  
---|---  
  
Get number of threads used for parallelism between independent operations.

### Aliases:

  * [`tf.compat.v1.config.threading.get_inter_op_parallelism_threads`](/api_docs/python/tf/config/threading/get_inter_op_parallelism_threads)
  * [`tf.compat.v2.config.threading.get_inter_op_parallelism_threads`](/api_docs/python/tf/config/threading/get_inter_op_parallelism_threads)

    
    
    tf.config.threading.get_inter_op_parallelism_threads()
    

Determines the number of threads used by independent non-blocking operations.
0 means the system picks an appropriate number.

#### Returns:

Number of parallel threads

