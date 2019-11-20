[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L267-L276)  
---  
  
Compare Tensors with element-wise comparison and thus be unhashable.

    
    
    tf.compat.v1.enable_tensor_equality()  
    

Comparing tensors with element-wise allows comparisons such as
tf.Variable(1.0) == 1.0. Element-wise equality implies that tensors are
unhashable. Thus tensors can no longer be directly used in sets or as a key in
a dictionary.

