[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/metrics_impl.py#L3506-L3525)  
---  
  
Renamed to `precision_at_k`, please use that method instead. (deprecated)

    
    
    tf.compat.v1.metrics.sparse_precision_at_k(
        labels,
        predictions,
        k,
        class_id=None,
        weights=None,
        metrics_collections=None,
        updates_collections=None,
        name=None
    )
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use precision_at_k instead

