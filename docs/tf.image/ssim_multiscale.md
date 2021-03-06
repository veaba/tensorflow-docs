Computes the MS-SSIM between img1 and img2.

**别名** : [ `tf.compat.v1.image.ssim_multiscale` ](/api_docs/python/tf/image/ssim_multiscale), [ `tf.compat.v2.image.ssim_multiscale` ](/api_docs/python/tf/image/ssim_multiscale)

```
 tf.image.ssim_multiscale(
    img1,
    img2,
    max_val,
    power_factors=_MSSSIM_WEIGHTS,
    filter_size=11,
    filter_sigma=1.5,
    k1=0.01,
    k2=0.03
)
 
```

This function assumes that  `img1`  and  `img2`  are image batches, i.e. the lastthree dimensions are [height, width, channels].


**Note:**  The true SSIM is only defined on grayscale.  This function does notperform any colorspace transform.  (If input is already YUV, then it willcompute YUV SSIM average.)
Original paper: Wang, Zhou, Eero P. Simoncelli, and Alan C. Bovik. "Multiscalestructural similarity for image quality assessment." Signals, Systems andComputers, 2004.

#### 参数：
- **`img1`** : First image batch.
- **`img2`** : Second image batch. Must have the same rank as img1.
- **`max_val`** : The dynamic range of the images (i.e., the difference between themaximum the and minimum allowed values).
- **`power_factors`** : Iterable of weights for each of the scales. The number ofscales used is the length of the list. Index 0 is the unscaledresolution's weight and each increasing scale corresponds to the imagebeing downsampled by 2.  Defaults to (0.0448, 0.2856, 0.3001, 0.2363,0.1333), which are the values obtained in the original paper.
- **`filter_size`** : Default value 11 (size of gaussian filter).
- **`filter_sigma`** : Default value 1.5 (width of gaussian filter).
- **`k1`** : Default value 0.01
- **`k2`** : Default value 0.03 (SSIM is less sensitivity to K2 for lower values, soit would be better if we taken the values in range of 0< K2 <0.4).


#### 返回：
A tensor containing an MS-SSIM value for each image in batch.  The valuesare in range [0, 1].  Returns a tensor with shape:broadcast(img1.shape[:-3], img2.shape[:-3]).

