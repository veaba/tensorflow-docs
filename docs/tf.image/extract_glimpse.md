从输入张量中提取一瞥。

```
 tf.image.extract_glimpse(    input,    size,    offsets,    centered=True,    normalized=True,    noise='uniform',    name=None) 
```

Returns a set of windows called glimpses extracted at location `offsets`  from the input tensor. If the windows only partiallyoverlaps the inputs, the non overlapping areas will be filled withrandom noise.

The result is a 4-D tensor of shape  `[batch_size, glimpse_height,glimpse_width, channels]` . The channels and batch dimensions are thesame as that of the input tensor. The height and width of the outputwindows are specified in the  `size`  parameter.

The argument  `normalized`  and  `centered`  controls how the windows are built:

- If the coordinates are normalized but not centered, 0.0 and 1.0correspond to the minimum and maximum of each height and widthdimension.
- If the coordinates are both normalized and centered, they range from-1.0 to 1.0. The coordinates (-1.0, -1.0) correspond to the upperleft corner, the lower right corner is located at (1.0, 1.0) and thecenter is at (0, 0).
- If the coordinates are not normalized they are interpreted asnumbers of pixels.


#### 参数：
- **`input`** : A  `Tensor`  of type  `float32` . A 4-D float tensor of shape `[batch_size, height, width, channels]` .
- **`size`** : A  `Tensor`  of type  `int32` . A 1-D tensor of 2 elements containing thesize of the glimpses to extract.  The glimpse height must be specifiedfirst, following by the glimpse width.
- **`offsets`** : A  `Tensor`  of type  `float32` . A 2-D integer tensor of shape `[batch_size, 2]`  containing the y, x locations of the center of eachwindow.
- **`centered`** : An optional  `bool` . Defaults to  `True` . indicates if the offsetcoordinates are centered relative to the image, in which case the (0, 0)offset is relative to the center of the input images. If false, the (0,0)offset corresponds to the upper left corner of the input images.
- **`normalized`** : An optional  `bool` . Defaults to  `True` . indicates if the offsetcoordinates are normalized.
- **`noise`** : An optional  `string` . Defaults to  `uniform` . indicates if the noiseshould be  `uniform`  (uniform distribution),  `gaussian`  (gaussiandistribution), or  `zero`  (zero padding).
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `float32` .

#### 用法示例：


```
 BATCH_SIZE = 1
IMAGE_HEIGHT = 3
IMAGE_WIDTH = 3
CHANNELS = 1
GLIMPSE_SIZE = (2, 2)
image = tf.reshape(tf.range(9, delta=1, dtype=tf.float32),
  shape=(BATCH_SIZE, IMAGE_HEIGHT, IMAGE_WIDTH, CHANNELS))
output = tf.image.extract_glimpse(image, size=GLIMPSE_SIZE,
  offsets=[[1, 1]], centered=False, normalized=False)
 ```
 
```

