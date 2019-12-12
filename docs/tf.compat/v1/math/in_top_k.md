

Says whether the targets are in the top  `K`  predictions.

```
 tf.compat.v1.math.in_top_k(
    predictions,
    targets,
    k,
    name=None
)
 
```

This outputs a  `batch_size`  bool array, an entry  `out[i]`  is  `true`  if theprediction for the target class is finite (not inf, -inf, or nan) and amongthe top  `k`  predictions among all predictions for example  `i` . Note that thebehavior of  `InTopK`  differs from the  `TopK`  op in its handling of ties; ifmultiple classes have the same prediction value and straddle the top- `k` boundary, all of those classes are considered to be in the top  `k` .

More formally, let

predictionsi be the predictions for all classes for example  `i` ,  targetsi be the target class for example  `i` ,  outi be the output for example  `i` ,


outi=predictionsi,targetsi∈TopKIncludingTies(predictionsi)


#### 参数：
- **`predictions`** : A  `Tensor`  of type  `float32` .A  `batch_size`  x  `classes`  tensor.
- **`targets`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .A  `batch_size`  vector of class ids.
- **`k`** : An  `int` . Number of top elements to look at for computing precision.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `bool` . Computed Precision at  `k`  as a  `bool Tensor` .

