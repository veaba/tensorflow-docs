Computes a weighted cross entropy. (deprecated arguments)

```
 tf.compat.v1.nn.weighted_cross_entropy_with_logits(
    labels=None,
    logits=None,
    pos_weight=None,
    name=None,
    targets=None
)
 
```


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(targets)` . They will be removed in a future version.Instructions for updating:targets is deprecated, use labels instead
This is like  `sigmoid_cross_entropy_with_logits()`  except that  `pos_weight` ,allows one to trade off recall and precision by up- or down-weighting thecost of a positive error relative to a negative error.

The usual cross-entropy cost is defined as:

```
 labels * -log(sigmoid(logits)) +
    (1 - labels) * -log(1 - sigmoid(logits))
 
```

A value  `pos_weight > 1`  decreases the false negative count, hence increasingthe recall.Conversely setting  `pos_weight < 1`  decreases the false positive count andincreases the precision.This can be seen from the fact that  `pos_weight`  is introduced as amultiplicative coefficient for the positive labels termin the loss expression:

```
 labels * -log(sigmoid(logits)) * pos_weight +
    (1 - labels) * -log(1 - sigmoid(logits))
 
```

For brevity, let  `x = logits` ,  `z = labels` ,  `q = pos_weight` .The loss is:

```
   qz * -log(sigmoid(x)) + (1 - z) * -log(1 - sigmoid(x))
= qz * -log(1 / (1 + exp(-x))) + (1 - z) * -log(exp(-x) / (1 + exp(-x)))
= qz * log(1 + exp(-x)) + (1 - z) * (-log(exp(-x)) + log(1 + exp(-x)))
= qz * log(1 + exp(-x)) + (1 - z) * (x + log(1 + exp(-x))
= (1 - z) * x + (qz +  1 - z) * log(1 + exp(-x))
= (1 - z) * x + (1 + (q - 1) * z) * log(1 + exp(-x))
 
```

Setting  `l = (1 + (q - 1) * z)` , to ensure stability and avoid overflow,the implementation uses

```
 (1 - z) * x + l * (log(1 + exp(-abs(x))) + max(-x, 0))
 
```

 `logits`  and  `labels`  must have the same type and shape.

#### 参数：
- **`labels`** : A  `Tensor`  of the same type and shape as  `logits` .
- **`logits`** : A  `Tensor`  of type  `float32`  or  `float64` .
- **`pos_weight`** : A coefficient to use on the positive examples.
- **`name`** : A name for the operation (optional).
- **`targets`** : Deprecated alias for labels.


#### 返回：
A  `Tensor`  of the same shape as  `logits`  with the componentwiseweighted logistic losses.

#### 加薪：
- **`ValueError`** : If  `logits`  and  `labels`  do not have the same shape.
