Computes softmax cross entropy between  `logits`  and  `labels` .

```
 tf.nn.softmax_cross_entropy_with_logits(
    labels,
    logits,
    axis=-1,
    name=None
)
 
```

### 在指南中使用：
- [Distributed training with TensorFlow](https://tensorflow.google.cn/guide/distributed_training)
Measures the probability error in discrete classification tasks in which theclasses are mutually exclusive (each entry is in exactly one class).  Forexample, each CIFAR-10 image is labeled with one and only one label: an imagecan be a dog or a truck, but not both.

**NOTE:**   While the classes are mutually exclusive, their probabilitiesneed not be.  All that is required is that each row of  `labels`  isa valid probability distribution.  If they are not, the computation of thegradient will be incorrect.

If using exclusive  `labels`  (wherein one and onlyone class is true at a time), see  `sparse_softmax_cross_entropy_with_logits` .

**WARNING:**  This op expects unscaled logits, since it performs a  `softmax` on  `logits`  internally for efficiency.  Do not call this op with theoutput of  `softmax` , as it will produce incorrect results.

A common use case is to have logits and labels of shape `[batch_size, num_classes]` , but higher dimensions are supported, withthe  `axis`  argument specifying the class dimension.

 `logits`  and  `labels`  must have the same dtype (either  `float16` ,  `float32` ,or  `float64` ).

Backpropagation will happen into both  `logits`  and  `labels` .  To disallowbackpropagation into  `labels` , pass label tensors through [ `tf.stop_gradient` ](https://tensorflow.google.cn/api_docs/python/tf/stop_gradient)before feeding it to this function.

**Note that to avoid confusion, it is required to pass only named arguments tothis function.** 

#### 参数：
- **`labels`** : Each vector along the class dimension should hold a validprobability distribution e.g. for the case in which labels are of shape `[batch_size, num_classes]` , each row of  `labels[i]`  must be a validprobability distribution.
- **`logits`** : Per-label activations, typically a linear output. These activationenergies are interpreted as unnormalized log probabilities.
- **`axis`** : The class dimension. Defaulted to -1 which is the last dimension.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  that contains the softmax cross entropy loss. Its type is thesame as  `logits`  and its shape is the same as  `labels`  except that it doesnot have the last dimension of  `labels` .

