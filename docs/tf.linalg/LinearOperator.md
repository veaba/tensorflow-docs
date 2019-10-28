## Class LinearOperator
Base class defining a [batch of] linear operator[s].
Inherits From: `Module`
### Aliases:
- Class `tf.compat.v1.linalg.LinearOperator`
- Class `tf.compat.v2.linalg.LinearOperator`
Subclasses of `LinearOperator` provide access to common methods on a (batch) matrix, without the need to materialize the matrix. This allows:
- ``M``a``t``r``i``x`` ``f``r``e``e`` ``c``o``m``p``u``t``a``t``i``o``n``s``
- ``O``p``e``r``a``t``o``r``s`` ``t``h``a``t`` ``t``a``k``e`` ``a``d``v``a``n``t``a``g``e`` ``o``f`` ``s``p``e``c``i``a``l`` ``s``t``r``u``c``t``u``r``e``,`` ``w``h``i``l``e`` ``p``r``o``v``i``d``i``n``g`` ``a`` ``c``o``n``s``i``s``t``e``n``t`` ``A``P``I`` ``t``o`` ``u``s``e``r``s``.``
#### Subclassing
