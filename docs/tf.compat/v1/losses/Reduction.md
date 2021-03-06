

## Class  `Reduction` 
减少损失的类型。

包含以下值：

-  `NONE` : Un-reduced weighted losses with the same shape as input.
-  `SUM` : Scalar sum of weighted losses.
-  `MEAN` : Scalar  `SUM`  divided by sum of weights. DEPRECATED.
-  `SUM_OVER_BATCH_SIZE` : Scalar  `SUM`  divided by number of elements in losses.
-  `SUM_OVER_NONZERO_WEIGHTS` : Scalar  `SUM`  divided by number of non-zeroweights. DEPRECATED.
-  `SUM_BY_NONZERO_WEIGHTS` : Same as  `SUM_OVER_NONZERO_WEIGHTS` . DEPRECATED.


## 方法


###  `all` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/losses/losses_impl.py#L59-L67)

```
 @classmethod
all(cls)
 
```

###  `validate` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/losses/losses_impl.py#L69-L72)

```
 @classmethod
validate(
    cls,
    key
)
 
```

## Class 成员
-  `MEAN = 'weighted_mean'`  []()
-  `NONE = 'none'`  []()
-  `SUM = 'weighted_sum'`  []()
-  `SUM_BY_NONZERO_WEIGHTS = 'weighted_sum_by_nonzero_weights'`  []()
-  `SUM_OVER_BATCH_SIZE = 'weighted_sum_over_batch_size'`  []()
-  `SUM_OVER_NONZERO_WEIGHTS = 'weighted_sum_by_nonzero_weights'`  []()
