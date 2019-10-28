Loads the MNIST dataset.
### Aliases:
- `tf.compat.v1.keras.datasets.mnist.load_data`
- `tf.compat.v2.keras.datasets.mnist.load_data`

```
 tf.keras.datasets.mnist.load_data(path='mnist.npz')
```
### Used in the guide:
- ``S``a``v``e`` ``a``n``d`` ``s``e``r``i``a``l``i``z``e`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``K``e``r``a``s`` ``c``u``s``t``o``m`` ``c``a``l``l``b``a``c``k``s``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``S``a``v``e`` ``a``n``d`` ``l``o``a``d`` ``a`` ``m``o``d``e``l`` ``u``s``i``n``g`` ``a`` ``d``i``s``t``r``i``b``u``t``i``o``n`` ``s``t``r``a``t``e``g``y``
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``V``a``r``i``a``t``i``o``n``a``l`` ``A``u``t``o``e``n``c``o``d``e``r``
- ``D``e``e``p`` ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``G``e``n``e``r``a``t``i``v``e`` ``A``d``v``e``r``s``a``r``i``a``l`` ``N``e``t``w``o``r``k``
- ``S``a``v``e`` ``a``n``d`` ``l``o``a``d`` ``m``o``d``e``l``s``
#### Arguments:
- `path`: `path` where to cache the dataset locally (relative to ~/.keras/datasets).
#### Returns:
Tuple of Numpy arrays: (x_train, y_train), (x_test, y_test).
#### License:
Yann LeCun and Corinna Cortes hold the copyright of MNIST dataset, which is a derivative work from original NIST datasets. MNIST dataset is made available under the terms of the Creative Commons Attribution-Share Alike 3.0 license.
