

## Class  `AdamOptimizer` 
实现ADAM算法的优化器。

Inherits From: [ `Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Optimizer)

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
See [Kingma et al., 2014](http://arxiv.org/abs/1412.6980)([pdf](http://arxiv.org/pdf/1412.6980.pdf)).

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/adam.py#L39-L107)

```
 __init__(
    learning_rate=0.001,
    beta1=0.9,
    beta2=0.999,
    epsilon=1e-08,
    use_locking=False,
    name='Adam'
)
 
```

构造一个新的adam优化器。

#### 初始化：

m0:=0(Initialize initial 1st moment vector)

v0:=0(Initialize initial 2nd moment vector)
