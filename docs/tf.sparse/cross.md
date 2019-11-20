[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/sparse/cross) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/sparse_ops.py#L518-L547)  
---|---  
  
Generates sparse cross from a list of sparse and dense tensors.

### Aliases:

  * [`tf.compat.v1.sparse.cross`](/api_docs/python/tf/sparse/cross)
  * [`tf.compat.v2.sparse.cross`](/api_docs/python/tf/sparse/cross)

    
    
    tf.sparse.cross(
        inputs,
        name=None
    )
    

For example, if the inputs are

    
    
    * inputs[0]: SparseTensor with shape = [2, 2]
      [0, 0]: "a"
      [1, 0]: "b"
      [1, 1]: "c"
    * inputs[1]: SparseTensor with shape = [2, 1]
      [0, 0]: "d"
      [1, 0]: "e"
    * inputs[2]: Tensor [["f"], ["g"]]
    

then the output will be:

    
    
    shape = [2, 2]
    [0, 0]: "a_X_d_X_f"
    [1, 0]: "b_X_e_X_g"
    [1, 1]: "c_X_e_X_g"
    

#### Args:

  * **`inputs`** : An iterable of `Tensor` or `SparseTensor`.
  * **`name`** : Optional name for the op.

#### Returns:

A `SparseTensor` of type `string`.

