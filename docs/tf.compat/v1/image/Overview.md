[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/compat/v1/image)  
---  
  
Image processing and decoding ops.

See the [Images](https://tensorflow.org/api_guides/python/image) guide.

## Classes

[`class
ResizeMethod`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/ResizeMethod)

## Functions

[`adjust_brightness(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/adjust_brightness):
Adjust the brightness of RGB or Grayscale images.

[`adjust_contrast(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/adjust_contrast):
Adjust contrast of RGB or grayscale images.

[`adjust_gamma(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/adjust_gamma):
Performs Gamma Correction on the input image.

[`adjust_hue(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/adjust_hue):
Adjust hue of RGB images.

[`adjust_jpeg_quality(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/adjust_jpeg_quality):
Adjust jpeg encoding quality of an RGB image.

[`adjust_saturation(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/adjust_saturation):
Adjust saturation of RGB images.

[`central_crop(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/central_crop):
Crop the central region of the image(s).

[`combined_non_max_suppression(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/combined_non_max_suppression):
Greedily selects a subset of bounding boxes in descending order of score.

[`convert_image_dtype(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/convert_image_dtype):
Convert `image` to `dtype`, scaling its values if needed.

[`crop_and_resize(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/crop_and_resize):
Extracts crops from the input image tensor and resizes them.

[`crop_to_bounding_box(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/crop_to_bounding_box):
Crops an image to a specified bounding box.

[`decode_and_crop_jpeg(...)`](https://tensorflow.google.cn/api_docs/python/tf/io/decode_and_crop_jpeg):
Decode and Crop a JPEG-encoded image to a uint8 tensor.

[`decode_bmp(...)`](https://tensorflow.google.cn/api_docs/python/tf/io/decode_bmp):
Decode the first frame of a BMP-encoded image to a uint8 tensor.

[`decode_gif(...)`](https://tensorflow.google.cn/api_docs/python/tf/io/decode_gif):
Decode the frame(s) of a GIF-encoded image to a uint8 tensor.

[`decode_image(...)`](https://tensorflow.google.cn/api_docs/python/tf/io/decode_image):
Function for `decode_bmp`, `decode_gif`, `decode_jpeg`, and `decode_png`.

[`decode_jpeg(...)`](https://tensorflow.google.cn/api_docs/python/tf/io/decode_jpeg):
Decode a JPEG-encoded image to a uint8 tensor.

[`decode_png(...)`](https://tensorflow.google.cn/api_docs/python/tf/io/decode_png):
Decode a PNG-encoded image to a uint8 or uint16 tensor.

[`draw_bounding_boxes(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/draw_bounding_boxes):
Draw bounding boxes on a batch of images.

[`encode_jpeg(...)`](https://tensorflow.google.cn/api_docs/python/tf/io/encode_jpeg):
JPEG-encode an image.

[`encode_png(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/encode_png):
PNG-encode an image.

[`extract_glimpse(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/extract_glimpse):
Extracts a glimpse from the input tensor.

[`extract_image_patches(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/extract_image_patches):
Extract `patches` from `images` and put them in the "depth" output dimension.

[`extract_jpeg_shape(...)`](https://tensorflow.google.cn/api_docs/python/tf/io/extract_jpeg_shape):
Extract the shape information of a JPEG-encoded image.

[`extract_patches(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/extract_patches):
Extract `patches` from `images`.

[`flip_left_right(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/flip_left_right):
Flip an image horizontally (left to right).

[`flip_up_down(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/flip_up_down):
Flip an image vertically (upside down).

[`grayscale_to_rgb(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/grayscale_to_rgb):
Converts one or more images from Grayscale to RGB.

[`hsv_to_rgb(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/hsv_to_rgb):
Convert one or more images from HSV to RGB.

[`image_gradients(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/image_gradients):
Returns image gradients (dy, dx) for each color channel.

[`is_jpeg(...)`](https://tensorflow.google.cn/api_docs/python/tf/io/is_jpeg):
Convenience function to check if the 'contents' encodes a JPEG image.

[`non_max_suppression(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/non_max_suppression):
Greedily selects a subset of bounding boxes in descending order of score.

[`non_max_suppression_overlaps(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/non_max_suppression_overlaps):
Greedily selects a subset of bounding boxes in descending order of score.

[`non_max_suppression_padded(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/non_max_suppression_padded):
Greedily selects a subset of bounding boxes in descending order of score.

[`non_max_suppression_with_scores(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/non_max_suppression_with_scores):
Greedily selects a subset of bounding boxes in descending order of score.

[`pad_to_bounding_box(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/pad_to_bounding_box):
Pad `image` with zeros to the specified `height` and `width`.

[`per_image_standardization(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/per_image_standardization):
Linearly scales each image in `image` to have mean 0 and variance 1.

[`psnr(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/psnr):
Returns the Peak Signal-to-Noise Ratio between a and b.

[`random_brightness(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/random_brightness):
Adjust the brightness of images by a random factor.

[`random_contrast(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/random_contrast):
Adjust the contrast of an image or images by a random factor.

[`random_crop(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/random_crop):
Randomly crops a tensor to a given size.

[`random_flip_left_right(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/random_flip_left_right):
Randomly flip an image horizontally (left to right).

[`random_flip_up_down(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/random_flip_up_down):
Randomly flips an image vertically (upside down).

[`random_hue(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/random_hue):
Adjust the hue of RGB images by a random factor.

[`random_jpeg_quality(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/random_jpeg_quality):
Randomly changes jpeg encoding quality for inducing jpeg noise.

[`random_saturation(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/random_saturation):
Adjust the saturation of RGB images by a random factor.

[`resize(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/resize):
Resize `images` to `size` using the specified `method`.

[`resize_area(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/resize_area):
Resize `images` to `size` using area interpolation.

[`resize_bicubic(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/resize_bicubic)

[`resize_bilinear(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/resize_bilinear)

[`resize_image_with_crop_or_pad(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/resize_with_crop_or_pad):
Crops and/or pads an image to a target width and height.

[`resize_image_with_pad(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/resize_image_with_pad):
Resizes and pads an image to a target width and height.

[`resize_images(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/resize):
Resize `images` to `size` using the specified `method`.

[`resize_nearest_neighbor(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/resize_nearest_neighbor)

[`resize_with_crop_or_pad(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/resize_with_crop_or_pad):
Crops and/or pads an image to a target width and height.

[`rgb_to_grayscale(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/rgb_to_grayscale):
Converts one or more images from RGB to Grayscale.

[`rgb_to_hsv(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/rgb_to_hsv):
Converts one or more images from RGB to HSV.

[`rgb_to_yiq(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/rgb_to_yiq):
Converts one or more images from RGB to YIQ.

[`rgb_to_yuv(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/rgb_to_yuv):
Converts one or more images from RGB to YUV.

[`rot90(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/rot90):
Rotate image(s) counter-clockwise by 90 degrees.

[`sample_distorted_bounding_box(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/sample_distorted_bounding_box):
Generate a single randomly distorted bounding box for an image. (deprecated)

[`sobel_edges(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/sobel_edges):
Returns a tensor holding Sobel edge maps.

[`ssim(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/ssim):
Computes SSIM index between img1 and img2.

[`ssim_multiscale(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/ssim_multiscale):
Computes the MS-SSIM between img1 and img2.

[`total_variation(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/total_variation):
Calculate and return the total variation for one or more images.

[`transpose(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/transpose):
Transpose image(s) by swapping the height and width dimension.

[`transpose_image(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/transpose):
Transpose image(s) by swapping the height and width dimension.

[`yiq_to_rgb(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/yiq_to_rgb):
Converts one or more images from YIQ to RGB.

[`yuv_to_rgb(...)`](https://tensorflow.google.cn/api_docs/python/tf/image/yuv_to_rgb):
Converts one or more images from YUV to RGB.

