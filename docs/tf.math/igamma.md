

Defined in generated file:  `python/ops/gen_math_ops.py` 

Compute the lower regularized incomplete Gamma function  `P(a, x)` .



### Aliases:

- [ `tf.compat.v1.igamma` ](/api_docs/python/tf/math/igamma)

- [ `tf.compat.v1.math.igamma` ](/api_docs/python/tf/math/igamma)

- [ `tf.compat.v2.math.igamma` ](/api_docs/python/tf/math/igamma)



```
 tf.math.igamma(
    a,
    x,
    name=None
)
 
```

The lower regularized incomplete Gamma function is defined as:

P(a,x)=gamma(a,x)/Gamma(a)=1−Q(a,x)

where

gamma(a,x)=intx0ta−1exp(−t)dt

is the lower incomplete Gamma function.

Note, above  `Q(a, x)`  ( `Igammac` ) is the upper regularized complete
Gamma function.



#### Args:

- **`a`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` .

- **`x`** : A  `Tensor` . Must have the same type as  `a` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `a` .

