Solves systems of linear eqns  `A X = RHS` , given Cholesky factorizations.

**Aliases** : [ `tf.compat.v1.cholesky_solve` ](/api_docs/python/tf/linalg/cholesky_solve), [ `tf.compat.v1.linalg.cholesky_solve` ](/api_docs/python/tf/linalg/cholesky_solve), [ `tf.compat.v2.linalg.cholesky_solve` ](/api_docs/python/tf/linalg/cholesky_solve)

```
 tf.linalg.cholesky_solve(
    chol,
    rhs,
    name=None
)
 
```

```
 # Solve 10 separate 2x2 linear systems:
A = ... # shape 10 x 2 x 2
RHS = ... # shape 10 x 2 x 1
chol = tf.linalg.cholesky(A)  # shape 10 x 2 x 2
X = tf.linalg.cholesky_solve(chol, RHS)  # shape 10 x 2 x 1
# tf.matmul(A, X) ~ RHS
X[3, :, 0]  # Solution to the linear system A[3, :, :] x = RHS[3, :, 0]

# Solve five linear systems (K = 5) for every member of the length 10 batch.
A = ... # shape 10 x 2 x 2
RHS = ... # shape 10 x 2 x 5
...
X[3, :, 2]  # Solution to the linear system A[3, :, :] x = RHS[3, :, 2]
 
```

#### Args:
- **`chol`** :  A  `Tensor` .  Must be  `float32`  or  `float64` , shape is  `[..., M, M]` .Cholesky factorization of  `A` , e.g.  `chol = tf.linalg.cholesky(A)` .For that reason, only the lower triangular parts (including the diagonal)of the last two dimensions of  `chol`  are used.  The strictly upper part isassumed to be zero and not accessed.
- **`rhs`** :  A  `Tensor` , same type as  `chol` , shape is  `[..., M, K]` .
- **`name`** :  A name to give this  `Op` .  Defaults to  `cholesky_solve` .


#### Returns:
Solution to  `A x = rhs` , shape  `[..., M, K]` .

