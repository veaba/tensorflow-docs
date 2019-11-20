[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/decode_gif)  
---  
  
Defined in generated file: `python/ops/gen_image_ops.py`

Decode the frame(s) of a GIF-encoded image to a uint8 tensor.

### Aliases:

  * [`tf.compat.v1.image.decode_gif`](/api_docs/python/tf/io/decode_gif)
  * [`tf.compat.v1.io.decode_gif`](/api_docs/python/tf/io/decode_gif)
  * [`tf.compat.v2.image.decode_gif`](/api_docs/python/tf/io/decode_gif)
  * [`tf.compat.v2.io.decode_gif`](/api_docs/python/tf/io/decode_gif)
  * [`tf.image.decode_gif`](/api_docs/python/tf/io/decode_gif)

    
    
    tf.io.decode_gif(
        contents,
        name=None
    )
    

GIF images with frame or transparency compression are not supported. On Linux
and MacOS systems, convert animated GIFs from compressed to uncompressed by
running:

    
    
    convert $src.gif -coalesce $dst.gif
    

This op also supports decoding JPEGs and PNGs, though it is cleaner to use
[`tf.image.decode_image`](https://tensorflow.google.cn/api_docs/python/tf/io/decode_image).

#### Args:

  * **`contents`** : A `Tensor` of type `string`. 0-D. The GIF-encoded image.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `uint8`.

