[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/igammac)  
---  
  
Defined in generated file: `python/ops/gen_math_ops.py`

Compute the upper regularized incomplete Gamma function `Q(a, x)`.

### Aliases:

  * [`tf.compat.v1.igammac`](/api_docs/python/tf/math/igammac)
  * [`tf.compat.v1.math.igammac`](/api_docs/python/tf/math/igammac)
  * [`tf.compat.v2.math.igammac`](/api_docs/python/tf/math/igammac)

    
    
    tf.math.igammac(
        a,
        x,
        name=None
    )
    

The upper regularized incomplete Gamma function is defined as:

\\(Q(a, x) = Gamma(a, x) / Gamma(a) = 1 - P(a, x)\\)

where

\\(Gamma(a, x) = int_{x}^{\infty} t^{a-1} exp(-t) dt\\)

is the upper incomplete Gama function.

Note, above `P(a, x)` (`Igamma`) is the lower regularized complete Gamma
function.

#### Args:

  * **`a`** : A `Tensor`. Must be one of the following types: `float32`, `float64`.
  * **`x`** : A `Tensor`. Must have the same type as `a`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `a`.

