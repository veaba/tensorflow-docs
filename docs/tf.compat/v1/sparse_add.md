Adds two tensors, at least one of each is a  `SparseTensor` . (deprecated arguments)

```
 tf.compat.v1.sparse_add(
    a,
    b,
    threshold=None,
    thresh=None
)
 
```


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(thresh)` . They will be removed in a future version.Instructions for updating:thresh is deprecated, use threshold instead
If one  `SparseTensor`  and one  `Tensor`  are passed in, returns a  `Tensor` .  Ifboth arguments are  `SparseTensor` s, this returns a  `SparseTensor` .  The orderof arguments does not matter.  Use vanilla [ `tf.add()` ](https://tensorflow.google.cn/api_docs/python/tf/math/add) for adding two dense `Tensor` s.

The shapes of the two operands must match: broadcasting is not supported.

The indices of any input  `SparseTensor`  are assumed ordered in standardlexicographic order.  If this is not the case, before this step run `SparseReorder`  to restore index ordering.

If both arguments are sparse, we perform "clipping" as follows.  By default,if two values sum to zero at some index, the output  `SparseTensor`  would stillinclude that particular location in its index, storing a zero in thecorresponding value slot.  To override this, callers can specify  `thresh` ,indicating that if the sum has a magnitude strictly smaller than  `thresh` , itscorresponding value and index would then not be included.  In particular, `thresh == 0.0`  (default) means everything is kept and actual thresholdinghappens only for a positive value.

For example, suppose the logical sum of two sparse operands is (densified):

```
 [       2]
[.1     0]
[ 6   -.2]
 
```

Then,

-  `thresh == 0`  (the default): all 5 index/value pairs will be returned.
-  `thresh == 0.11` : only .1 and 0 will vanish, and the remaining threeindex/value pairs will be returned.
-  `thresh == 0.21` : .1, 0, and -.2 will vanish.


#### Args:
- **`a`** : The first operand;  `SparseTensor`  or  `Tensor` .
- **`b`** : The second operand;  `SparseTensor`  or  `Tensor` . At least one operandmust be sparse.
- **`threshold`** : An optional 0-D  `Tensor`  (defaults to  `0` ). The magnitudethreshold that determines if an output value/index pair takes space. Itsdtype should match that of the values if they are real; if the latter arecomplex64/complex128, then the dtype should be float32/float64,correspondingly.
- **`thresh`** : Deprecated alias for  `threshold` .


#### Returns:
A  `SparseTensor`  or a  `Tensor` , representing the sum.

#### Raises:
- **`TypeError`** : If both  `a`  and  `b`  are  `Tensor` s.  Use [ `tf.add()` ](https://tensorflow.google.cn/api_docs/python/tf/math/add) instead.
