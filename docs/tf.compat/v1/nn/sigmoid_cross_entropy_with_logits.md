Computes sigmoid cross entropy given  `logits` .

```
 tf.compat.v1.nn.sigmoid_cross_entropy_with_logits(
    _sentinel=None,
    labels=None,
    logits=None,
    name=None
)
 
```

Measures the probability error in discrete classification tasks in which eachclass is independent and not mutually exclusive.  For instance, one couldperform multilabel classification where a picture can contain both an elephantand a dog at the same time.

For brevity, let  `x = logits` ,  `z = labels` .  The logistic loss is

```
   z * -log(sigmoid(x)) + (1 - z) * -log(1 - sigmoid(x))
= z * -log(1 / (1 + exp(-x))) + (1 - z) * -log(exp(-x) / (1 + exp(-x)))
= z * log(1 + exp(-x)) + (1 - z) * (-log(exp(-x)) + log(1 + exp(-x)))
= z * log(1 + exp(-x)) + (1 - z) * (x + log(1 + exp(-x))
= (1 - z) * x + log(1 + exp(-x))
= x - x * z + log(1 + exp(-x))
 
```

For x < 0, to avoid overflow in exp(-x), we reformulate the above

```
   x - x * z + log(1 + exp(-x))
= log(exp(x)) - x * z + log(1 + exp(-x))
= - x * z + log(1 + exp(x))
 
```

Hence, to ensure stability and avoid overflow, the implementation uses thisequivalent formulation

```
 max(x, 0) - x * z + log(1 + exp(-abs(x)))
 
```

 `logits`  and  `labels`  must have the same type and shape.

#### 参数：
- **`_sentinel`** : Used to prevent positional parameters. Internal, do not use.
- **`labels`** : A  `Tensor`  of the same type and shape as  `logits` .
- **`logits`** : A  `Tensor`  of type  `float32`  or  `float64` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of the same shape as  `logits`  with the componentwiselogistic losses.

#### 加薪：
- **`ValueError`** : If  `logits`  and  `labels`  do not have the same shape.
