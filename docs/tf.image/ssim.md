计算img1和img2之间的ssim索引。

**别名** : [ `tf.compat.v1.image.ssim` ](/api_docs/python/tf/image/ssim), [ `tf.compat.v2.image.ssim` ](/api_docs/python/tf/image/ssim)

```
 tf.image.ssim(
    img1,
    img2,
    max_val,
    filter_size=11,
    filter_sigma=1.5,
    k1=0.01,
    k2=0.03
)
 
```

This function is based on the standard SSIM implementation from:Wang, Z., Bovik, A. C., Sheikh, H. R., &amp; Simoncelli, E. P. (2004). Imagequality assessment: from error visibility to structural similarity. IEEEtransactions on image processing.


**Note:**  The true SSIM is only defined on grayscale.  This function does notperform any colorspace transform.  (If input is already YUV, then it willcompute YUV SSIM average.)


#### 详细信息：
- 11x11 Gaussian filter of width 1.5 is used.
- k1 = 0.01, k2 = 0.03 as in the original paper.
由于筛选器的大小，图像大小必须至少为11x11。

#### 示例：


```
     # Read images from file.
    im1 = tf.decode_png('path/to/im1.png')
    im2 = tf.decode_png('path/to/im2.png')
    # Compute SSIM over tf.uint8 Tensors.
    ssim1 = tf.image.ssim(im1, im2, max_val=255, filter_size=11,
                          filter_sigma=1.5, k1=0.01, k2=0.03)

    # Compute SSIM over tf.float32 Tensors.
    im1 = tf.image.convert_image_dtype(im1, tf.float32)
    im2 = tf.image.convert_image_dtype(im2, tf.float32)
    ssim2 = tf.image.ssim(im1, im2, max_val=1.0, filter_size=11,
                          filter_sigma=1.5, k1=0.01, k2=0.03)
    # ssim1 and ssim2 both have type tf.float32 and are almost equal.
 
```

#### 参数：
- **`img1`** : First image batch.
- **`img2`** : Second image batch.
- **`max_val`** : The dynamic range of the images (i.e., the difference between themaximum the and minimum allowed values).
- **`filter_size`** : Default value 11 (size of gaussian filter).
- **`filter_sigma`** : Default value 1.5 (width of gaussian filter).
- **`k1`** : Default value 0.01
- **`k2`** : Default value 0.03 (SSIM is less sensitivity to K2 for lower values, soit would be better if we taken the values in range of 0< K2 <0.4).


#### 返回：
A tensor containing an SSIM value for each image in batch.  Returned SSIMvalues are in range (-1, 1], when pixel values are non-negative. Returnsa tensor with shape: broadcast(img1.shape[:-3], img2.shape[:-3]).

