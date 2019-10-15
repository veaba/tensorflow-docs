
Computes the singular value decompositions of one or more matrices.
### Aliases:
- `tf.compat.v1.linalg.svd`
- `tf.compat.v1.svd`
- `tf.compat.v2.linalg.svd`

```
 tf.linalg.svd(
    tensor,
    full_matrices=False,
    compute_uv=True,
    name=None
)
```

Computes the SVD of each inner matrix in tensor such that tensor[..., :, :] = u[..., :, :] * diag(s[..., :, :]) * transpose(conj(v[..., :, :]))

```
 # a is a tensor.
# s is a tensor of singular values.
# u is a tensor of left singular vectors.
# v is a tensor of right singular vectors.
s, u, v = svd(a)
s = svd(a, compute_uv=False)
```
#### Args:
- `tensor`:` ``Tensor`` `of` `shape` `[`.``.``.``,`` ``M``,`` ``N`]`.`` `Let` ``P`` `be` `the` `minimum` `of` ``M`` `and` ``N``.`
- `full_matrices`:` `If` `tr`u`e`,`` `comp`u`te` `f`u`ll-sized` ``u`` `and` ``v``.`` `If` `false` `(the` `defa`u`lt)`,`` `comp`u`te` `only` `the` `leading` ``P`` `sing`u`lar` ``v`ectors`.`` `Ignored` `if` ``compute_uv`` `is` ``False``.`
- `compute_uv`:` `If` ``True`` `then` `left` `and` `right` `sing`u`lar` ``v`ectors` `will` `be` `comp`u`ted` `and` `ret`u`rned` `in` ``u`` `and` ``v``,`` `respecti`v`ely`.`` `Otherwise`,`` `only` `the` `sing`u`lar` ``v`al`u`es` `will` `be` `comp`u`ted`,`` `which` `can` `be` `significantly` `faster`.`
- `name`:` `string`,`` `optional` ``name`` `of` `the` `operation`.`
#### Returns:
- `s`:` `Singular` `value`s``.`` `Shape` `i`s`` `[`.``.``.``,`` ``P`]`.`` `The` `value`s`` `are` ``s`orted` `in` `rever`s`e` `order` `of` `magnitude`,`` ``s`o` ``s`[`.``.``.``,`` `0]` `i`s`` `the` `large`s`t` `value`,`` ``s`[`.``.``.``,`` `1]` `i`s`` `the` ``s`econd` `large`s`t`,`` `etc`.`
- `u`:` `Left` ``s`ing`u`lar` `vector`s``.`` `If` ``full_matrices`` `i`s`` ``False`` `(defa`u`lt)` `then` ``s`hape` `i`s`` `[`.``.``.``,`` ``M``,`` ``P`];` `if` ``full_matrices`` `i`s`` ``True`` `then` ``s`hape` `i`s`` `[`.``.``.``,`` ``M``,`` ``M`]`.`` `Not` `ret`u`rned` `if` ``compute_uv`` `i`s`` ``False``.`
- `v`:` `Right` ``s`ing`u`lar` ``v`ector`s``.`` `If` ``full_matrices`` `i`s`` ``False`` `(defa`u`lt)` `then` ``s`hape` `i`s`` `[`.``.``.``,`` ``N``,`` ``P`]`.`` `If` ``full_matrices`` `i`s`` ``True`` `then` ``s`hape` `i`s`` `[`.``.``.``,`` ``N``,`` ``N`]`.`` ``N`ot` `ret`u`rned` `if` ``compute_uv`` `i`s`` ``False``.`
#### Numpy Compatibility

Mostly equivalent to numpy.linalg.svd, except that * The order of output arguments here is s, u, v when compute_uv is True, as opposed to u, s, v for numpy.linalg.svd. * full_matrices is False by default as opposed to True for numpy.linalg.svd. * tf.linalg.svd uses the standard definition of the SVD
, such that the left singular vectors of a are the columns of u, while the right singular vectors of a are the columns of v. On the other hand, numpy.linalg.svd returns the adjoint
as the third output argument.

```
 import tensorflow as tf
import numpy as np
s, u, v = tf.linalg.svd(a)
tf_a_approx = tf.matmul(u, tf.matmul(tf.linalg.diag(s), v, adjoint_b=True))
u, s, v_adj = np.linalg.svd(a, full_matrices=False)
np_a_approx = np.dot(u, np.dot(np.diag(s), v_adj))
# tf_a_approx and np_a_approx should be numerically close.
```
