Adds two tensors, at least one of each is a  `SparseTensor` .

```
 tf.sparse.add(    a,    b,    threshold=0) 
```

If one  `SparseTensor`  and one  `Tensor`  are passed in, returns a  `Tensor` .  Ifboth arguments are  `SparseTensor` s, this returns a  `SparseTensor` .  The orderof arguments does not matter.  Use vanilla [ `tf.add()` ](https://tensorflow.google.cn/api_docs/python/tf/math/add) for adding two dense `Tensor` s.

两个操作数的形状必须匹配：不支持广播。

The indices of any input  `SparseTensor`  are assumed ordered in standardlexicographic order.  If this is not the case, before this step run `SparseReorder`  to restore index ordering.

If both arguments are sparse, we perform "clipping" as follows.  By default,if two values sum to zero at some index, the output  `SparseTensor`  would stillinclude that particular location in its index, storing a zero in thecorresponding value slot.  To override this, callers can specify  `threshold` ,indicating that if the sum has a magnitude strictly smaller than  `threshold` ,its corresponding value and index would then not be included.  In particular, `threshold == 0.0`  (default) means everything is kept and actual thresholdinghappens only for a positive value.

For example, suppose the logical sum of two sparse operands is (densified):

```
 [       2]
[.1     0]
[ 6   -.2]
 
```

Then,

-  `threshold == 0`  (the default): all 5 index/value pairs will bereturned.
-  `threshold == 0.11` : only .1 and 0 will vanish, and the remaining threeindex/value pairs will be returned.
-  `threshold == 0.21` : .1, 0, and -.2 will vanish.


#### 参数：
- **`a`** : The first operand;  `SparseTensor`  or  `Tensor` .
- **`b`** : The second operand;  `SparseTensor`  or  `Tensor` . At least one operandmust be sparse.
- **`threshold`** : A 0-D  `Tensor` . The magnitude threshold that determines if anoutput value/index pair takes space. Its dtype should match that of thevalues if they are real; if the latter are complex64/complex128, then thedtype should be float32/float64, correspondingly.


#### 返回：
A  `SparseTensor`  or a  `Tensor` , representing the sum.

#### 加薪：
- **`TypeError`** : If both  `a`  and  `b`  are  `Tensor` s.  Use [ `tf.add()` ](https://tensorflow.google.cn/api_docs/python/tf/math/add) instead.
