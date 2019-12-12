根据预测和标签计算混淆矩阵。

```
 tf.math.confusion_matrix(
    labels,
    predictions,
    num_classes=None,
    weights=None,
    dtype=tf.dtypes.int32,
    name=None
)
 
```

The matrix columns represent the prediction labels and the rows represent thereal labels. The confusion matrix is always a 2-D array of shape  `[n, n]` ,where  `n`  is the number of valid labels for a given classification task. Bothprediction and labels must be 1-D arrays of the same shape in order for thisfunction to work.

If  `num_classes`  is  `None` , then  `num_classes`  will be set to one plus themaximum value in either predictions or labels. Class labels are expected tostart at 0. For example, if  `num_classes`  is 3, then the possible labelswould be  `[0, 1, 2]` .

If  `weights`  is not  `None` , then each prediction contributes itscorresponding weight to the total value of the confusion matrix cell.

#### 例如：


```
   tf.math.confusion_matrix([1, 2, 4], [2, 2, 4]) ==>
      [[0 0 0 0 0]
       [0 0 1 0 0]
       [0 0 1 0 0]
       [0 0 0 0 0]
       [0 0 0 0 1]]
 
```

Note that the possible labels are assumed to be  `[0, 1, 2, 3, 4]` ,resulting in a 5x5 confusion matrix.

#### 参数：
- **`labels`** : 1-D  `Tensor`  of real labels for the classification task.
- **`predictions`** : 1-D  `Tensor`  of predictions for a given classification.
- **`num_classes`** : The possible number of labels the classification task can         have. If this value is not provided, it will be calculated         using both predictions and labels array.
- **`weights`** : An optional  `Tensor`  whose shape matches  `predictions` .
- **`dtype`** : Data type of the confusion matrix.
- **`name`** : Scope name.


#### 返回：
A  `Tensor`  of type  `dtype`  with shape  `[n, n]`  representing the confusionmatrix, where  `n`  is the number of possible labels in the classificationtask.

#### 加薪：
- **`ValueError`** : If both predictions and labels are not 1-D vectors and havemismatched shapes, or if  `weights`  is not  `None`  and its shape doesn'tmatch  `predictions` .
