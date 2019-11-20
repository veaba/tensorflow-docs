[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/array_ops.py#L3990-L4003)  
---  
  
Gather slices from params according to indices with leading batch dims.
(deprecated)

    
    
    tf.compat.v1.batch_gather(  
        params,  
        indices,  
        name=None  
    )  
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed after 2017-10-25.
Instructions for updating: `tf.batch_gather` is deprecated, please use
[`tf.gather`](https://tensorflow.google.cn/api_docs/python/tf/gather) with
`batch_dims=-1` instead.

