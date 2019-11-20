[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/preprocessing/image/apply_brightness_shift)  
---  
  
Performs a brightness shift.

### Aliases:

  * [`tf.compat.v1.keras.preprocessing.image.apply_brightness_shift`](/api_docs/python/tf/keras/preprocessing/image/apply_brightness_shift)
  * [`tf.compat.v2.keras.preprocessing.image.apply_brightness_shift`](/api_docs/python/tf/keras/preprocessing/image/apply_brightness_shift)

    
    
    tf.keras.preprocessing.image.apply_brightness_shift(
        x,
        brightness
    )
    

# Arguments

    
    
    x: Input tensor. Must be 3D.
    brightness: Float. The new brightness value.
    channel_axis: Index of axis for channels in the input tensor.
    

# Returns

    
    
    Numpy image tensor.
    

# Raises

    
    
    ValueError if `brightness_range` isn't a tuple.
    

