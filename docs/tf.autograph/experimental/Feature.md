[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/autograph/experimental/Feature) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/autograph/core/converter.py#L90-L139)  
---|---  
  
## Class `Feature`

This enumeration represents optional conversion options.

### Aliases:

  * Class [`tf.compat.v1.autograph.experimental.Feature`](/api_docs/python/tf/autograph/experimental/Feature)
  * Class [`tf.compat.v2.autograph.experimental.Feature`](/api_docs/python/tf/autograph/experimental/Feature)

These conversion options are experimental. They are subject to change without
notice and offer no guarantees.

_Example Usage_

    
    
    optionals= tf.autograph.experimental.Feature.EQUALITY_OPERATORS
    @tf.function(experimental_autograph_options=optionals)
    def f(i):
      if i == 0:  # EQUALITY_OPERATORS allows the use of == here.
        tf.print('i is zero')
    

#### Attributes:

  * **`ALL`** : Enable all features.
  * **`AUTO_CONTROL_DEPS`** : Insert of control dependencies in the generated code.
  * **`ASSERT_STATEMENTS`** : Convert Tensor-dependent assert statements to tf.Assert.
  * **`BUILTIN_FUNCTIONS`** : Convert builtin functions applied to Tensors to their TF counterparts.
  * **`EQUALITY_OPERATORS`** : Whether to convert the comparison operators, like equality. This is soon to be deprecated as support is being added to the Tensor class.
  * **`LISTS`** : Convert list idioms, like initializers, slices, append, etc.
  * **`NAME_SCOPES`** : Insert name scopes that name ops according to context, like the function they were defined in.

## Class Members

  * `ALL`
  * `ASSERT_STATEMENTS`
  * `AUTO_CONTROL_DEPS`
  * `BUILTIN_FUNCTIONS`
  * `EQUALITY_OPERATORS`
  * `LISTS`
  * `NAME_SCOPES`

