Computes recall@k of top-k predictions with respect to sparse labels.

```
 tf.compat.v1.metrics.recall_at_top_k(    labels,    predictions_idx,    k=None,    class_id=None,    weights=None,    metrics_collections=None,    updates_collections=None,    name=None) 
```

Differs from  `recall_at_k`  in that predictions must be in the form of top  `k` class indices, whereas  `recall_at_k`  expects logits. Refer to  `recall_at_k` for more details.

#### 参数：
- **`labels`** :  `int64`   `Tensor`  or  `SparseTensor`  with shape[D1, ... DN, num_labels] or [D1, ... DN], where the latter impliesnum_labels=1. N >= 1 and num_labels is the number of target classes forthe associated prediction. Commonly, N=1 and  `labels`  has shape[batch_size, num_labels]. [D1, ... DN] must match  `predictions` . Valuesshould be in range [0, num_classes), where num_classes is the lastdimension of  `predictions` . Values outside this range always counttowards  `false_negative_at_<k>` .
- **`predictions_idx`** : Integer  `Tensor`  with shape [D1, ... DN, k] where N >= 1.Commonly, N=1 and predictions has shape [batch size, k]. The finaldimension contains the top  `k`  predicted class indices. [D1, ... DN] mustmatch  `labels` .
- **`k`** : Integer, k for @k metric. Only used for the default op name.
- **`class_id`** : Integer class ID for which we want binary metrics. This should bein range [0, num_classes), where num_classes is the last dimension of `predictions` . If class_id is outside this range, the method returns NAN.
- **`weights`** :  `Tensor`  whose rank is either 0, or n-1, where n is the rank of `labels` . If the latter, it must be broadcastable to  `labels`  (i.e., alldimensions must be either  `1` , or the same as the corresponding  `labels` dimension).
- **`metrics_collections`** : An optional list of collections that values shouldbe added to.
- **`updates_collections`** : An optional list of collections that updates shouldbe added to.
- **`name`** : Name of new update operation, and namespace for other dependent ops.


#### 返回：
- **`recall`** : Scalar  `float64`   `Tensor`  with the value of  `true_positives`  dividedby the sum of  `true_positives`  and  `false_negatives` .
- **`update_op`** :  `Operation`  that increments  `true_positives`  and `false_negatives`  variables appropriately, and whose value matches `recall` .


#### 加薪：
- **`ValueError`** : If  `weights`  is not  `None`  and its shape doesn't match `predictions` , or if either  `metrics_collections`  or  `updates_collections` are not a list or tuple.
