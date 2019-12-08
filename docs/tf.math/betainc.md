

Defined in generated file:  `python/ops/gen_math_ops.py` 

Compute the regularized incomplete beta integral Ix(a,b).



### Aliases:

- [ `tf.compat.v1.betainc` ](/api_docs/python/tf/math/betainc)

- [ `tf.compat.v1.math.betainc` ](/api_docs/python/tf/math/betainc)

- [ `tf.compat.v2.math.betainc` ](/api_docs/python/tf/math/betainc)



```
 tf.math.betainc(
    a,
    b,
    x,
    name=None
)
 
```

The regularized incomplete beta integral is defined as:

Ix(a,b)=B(x;a,b)B(a,b)

where

B(x;a,b)=∫x0ta−1(1−t)b−1dt

is the incomplete beta function and B(a,b) is the <em>complete</em>
beta function.



#### Args:

- **`a`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` .

- **`b`** : A  `Tensor` . Must have the same type as  `a` .

- **`x`** : A  `Tensor` . Must have the same type as  `a` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `a` .

