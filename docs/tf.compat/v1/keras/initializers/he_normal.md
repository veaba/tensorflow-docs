他是正常的初始化程序。

```
 tf.compat.v1.keras.initializers.he_normal(seed=None)
 
```

It draws samples from a truncated normal distribution centered on 0with standard deviation (after truncation) given by `stddev = sqrt(2 / fan_in)`  where  `fan_in`  is the number ofinput units in the weight tensor.

#### 参数：
- **`seed`** : A Python integer. Used to seed the random generator.


#### 返回：
初始值设定项。

#### 参考文献：
[He et al., 2015](https://www.cv-foundation.org/openaccess/content_iccv_2015/html/He_Delving_Deep_into_ICCV_2015_paper.html)

# pylint: disable=line-too-long
([pdf](https://www.cv-foundation.org/openaccess/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf))

