[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/array_ops.py#L4385-L4405)  
---  
  
Please use
[`tf.quantization.quantize`](https://tensorflow.google.cn/api_docs/python/tf/quantization/quantize)
instead.

    
    
    tf.compat.v1.quantize_v2(
        input,
        min_range,
        max_range,
        T,
        mode='MIN_COMBINED',
        name=None,
        round_mode='HALF_AWAY_FROM_ZERO'
    )
    

