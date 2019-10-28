## Class Reduction
Types of loss reduction.
Contains the following values:
- `NONE`: Un-reduced weighted losses with the same shape as input.
- `SUM`: Scalar sum of weighted losses.
- `MEAN`: Scalar `SUM` divided by sum of weights. DEPRECATED.
- `SUM_OVER_BATCH_SIZE`: Scalar `SUM` divided by number of elements in losses.
- `SUM_OVER_NONZERO_WEIGHTS`: Scalar `SUM` divided by number of non-zero weights. DEPRECATED.
- `SUM_BY_NONZERO_WEIGHTS`: Same as `SUM_OVER_NONZERO_WEIGHTS`. DEPRECATED.
## Methods
### all
View source

```
 @classmethod
all(cls)
```
### validate
View source

```
 @classmethod
validate(
    cls,
    key
)
```
## Class Members
- `MEAN = 'weighted_mean'`
- `NONE = 'none'`
- `SUM = 'weighted_sum'`
- `SUM_BY_NONZERO_WEIGHTS = 'weighted_sum_by_nonzero_weights'`
- `SUM_OVER_BATCH_SIZE = 'weighted_sum_over_batch_size'`
- `SUM_OVER_NONZERO_WEIGHTS = 'weighted_sum_by_nonzero_weights'`
