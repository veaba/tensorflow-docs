## Class LinearOperatorCirculant2D
`LinearOperator` acting like a block circulant matrix.
### Aliases:
- Class `tf.compat.v1.linalg.LinearOperatorCirculant2D`
- Class `tf.compat.v2.linalg.LinearOperatorCirculant2D`
This operator acts like a `b`lock circulant matrix `A` with shape `[B1,...,Bb, N, N]` for some `b >= 0`. The first `b` indices index a `b`atch mem`b`er. For every `b`atch index `i1,...,ib)`, `A`[i1,...,i`b`, : :] is an `N x N` matrix. This matrix `A` is not materialized, `b`ut for purposes of `b`roadcasting this shape will `b`e relevant.
#### Description in terms of block circulant matrices
If `A` is block circulant, with block sizes `N0, N1` (N0 * N1 = N): `A` has a block circulant structure, composed of `N0 x N0` blocks, with each block an `N1 x N1` circulant matrix.
For example, with `W`, `X`, `Y`, `Z` each circulant,

```
 A = |W Z Y X|
    |X W Z Y|
    |Y X W Z|
    |Z Y X W|
```
Note that `A` itself will not in general be circulant.
#### Description in terms of the frequency spectrum
There is an equivalent description in terms of the [batch] spectrum `H` and Fourier transforms. `H`ere we consider `A.shape = [N, N]` and ignore batch dimensions.
If `H.shape = [N0, N1]`, (N0 * N1 = N): Loosely speaking, matrix m`u`ltiplication is eq`u`al to the action of a Fo`u`rier m`u`ltiplier: `A u = IDFT2[ H DFT2[u] ]`. Precisely speaking, given `[N, R]` matrix `u`, let `DFT2[u]` be the `[N0, N1, R]` `Tensor` defined by re-shaping `u` to `[N0, N1, R]` and taking a two dimensional DFT across the first two dimensions. Let `IDFT2` be the inverse of `DFT2`. Matrix m`u`ltiplication may be expressed col`u`mnwise:
