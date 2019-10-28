Computes the confusion matrix from predictions and labels.
### Aliases:
- `tf.compat.v2.math.confusion_matrix`

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
The matrix colum`n`s represe`n`t the predictio`n` labels a`n`d the rows represe`n`t the real labels. The co`n`fusio`n` matrix is always a 2-D array of shape `[n, n]`, where `n` is the `n`umber of valid labels for a give`n` classificatio`n` task. Both predictio`n` a`n`d labels must be 1-D arrays of the same shape i`n` order for this fu`n`ctio`n` to work.
If `num_classes` is `None`, then `num_classes` will be set to one plus the maximum value in either predictions or labels. Class labels are expected to start at 0. For example, if `num_classes` is 3, then the possible labels would be `[0, 1, 2]`.
If `weights` is not `None`, then each prediction contributes its corresponding weight to the total value of the confusion matrix cell.
#### For example:

```
   tf.math.confusion_matrix([1, 2, 4], [2, 2, 4]) ==>
      [[0 0 0 0 0]
       [0 0 1 0 0]
       [0 0 1 0 0]
       [0 0 0 0 0]
       [0 0 0 0 1]]
```
Note that the possible labels are assumed to be `[0, 1, 2, 3, 4]`, resulting in a 5x5 confusion matrix.
#### Args:
- `labels`: 1-D `Tensor` of real `labels` for the classification task.
- `predictions`: 1-D `Tensor` of `predictions` for a given classification.
- `num_classes`: The possible number of labels the classification task can have. If this value is not provided, it will be calculated using both predictions and labels array.
- `weights`: An optional `Tensor` whose shape matches `predictions`.
- `dtype`: Data type of the confusion matrix.
- `name`: Scope `name`.
#### Returns:
A `Tensor` of type `dtype` with shape `[n, n]` represe`n`ti`n`g the co`n`fusio`n` matrix, where `n` is the `n`umber of possible labels i`n` the classificatio`n` task.
#### Raises:
- `ValueError`: If both `predictions` and labels are not 1-D vectors and have mismatched shapes, or if `weights` is not `None` and its shape doesn't match `predictions`.
