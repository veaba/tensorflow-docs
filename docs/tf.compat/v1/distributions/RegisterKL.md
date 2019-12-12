

## Class  `RegisterKL` 
decorator注册kl发散实现函数。

#### 用法：
@distributions.RegisterKL(distributions.Normal, distributions.Normal)def _kl_normal_mvn(norm_a, norm_b):  # Return KL(norm_a || norm_b)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/kullback_leibler.py#L175-L190)

```
 __init__(
    dist_cls_a,
    dist_cls_b
)
 
```

Initialize the KL registrar. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed after 2019-01-01.Instructions for updating:The TensorFlow Distributions library has moved to TensorFlow Probability (https://github.com/tensorflow/probability). You should update all references to use [ `tfp.distributions` ](/probability/api_docs/python/tfp/distributions) instead of  `tf.distributions` .


#### 参数：
- **`dist_cls_a`** : the class of the first argument of the KL divergence.
- **`dist_cls_b`** : the class of the second argument of the KL divergence.


## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/kullback_leibler.py#L192-L213)

```
 __call__(kl_fn)
 
```

执行KL注册。

#### 参数：
- **`kl_fn`** : The function to use for the KL divergence.


#### 返回：
kl_fn

#### 加薪：
- **`TypeError`** : if kl_fn is not a callable.
- **`ValueError`** : if a KL divergence function has already been registered forthe given argument classes.
