## Class Conv3DTranspose
Transposed convolution layer (sometimes called Deconvolution).
Inherits From: `Conv3D`
### Aliases:
- Class `tf.compat.v1.keras.layers.Conv3DTranspose`
- Class `tf.compat.v1.keras.layers.Convolution3DTranspose`
- Class `tf.compat.v2.keras.layers.Conv3DTranspose`
- Class `tf.compat.v2.keras.layers.Convolution3DTranspose`
- Class `tf.keras.layers.Convolution3DTranspose`
The need for transposed convolutions generally arises from the desire to use a transformation going in the opposite direction of a normal convolution, i.e., from something that has the shape of the output of some convolution to something that has the shape of its input while maintaining a connectivity pattern that is compatible with said convolution.
