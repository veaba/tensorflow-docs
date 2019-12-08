



## Class  `Adam` 
Optimizer that implements the Adam algorithm.

Inherits From: [ `Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)



### Aliases:

- Class [ `tf.compat.v1.keras.optimizers.Adam` ](/api_docs/python/tf/keras/optimizers/Adam)

- Class [ `tf.compat.v2.keras.optimizers.Adam` ](/api_docs/python/tf/keras/optimizers/Adam)

- Class [ `tf.compat.v2.optimizers.Adam` ](/api_docs/python/tf/keras/optimizers/Adam)

- Class [ `tf.optimizers.Adam` ](/api_docs/python/tf/keras/optimizers/Adam)



### Used in the guide:

- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)

- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)

- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)

- [Eager execution](https://tensorflow.google.cn/guide/eager)

- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)



### Used in the tutorials:

- [CycleGAN](https://tensorflow.google.cn/tutorials/generative/cyclegan)

- [Distributed training with Keras](https://tensorflow.google.cn/tutorials/distribute/keras)

- [Custom training: basics](https://tensorflow.google.cn/tutorials/customization/custom_training)

- [Custom training with tf.distribute.Strategy](https://tensorflow.google.cn/tutorials/distribute/custom_training)

- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)

Adam optimization is a stochastic gradient descent method that is based on
adaptive estimation of first-order and second-order moments.
According to the paper
<a href="http://arxiv.org/abs/1412.6980">Adam: A Method for Stochastic Optimization. Kingma et al.,
2014</a>,
 the method is "<em>computationally efficient, has little memory
requirement, invariant to diagonal rescaling of gradients, and is well suited
for problems that are large in terms of data/parameters</em>".

For AMSGrad see <a href="https://openreview.net/pdf?id=ryQu7f-RZ">On The Convergence Of Adam And Beyond.
Reddi et al., 5-8</a>.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L48-L140)



```
 __init__(
    learning_rate=0.001,
    beta_1=0.9,
    beta_2=0.999,
    epsilon=1e-07,
    amsgrad=False,
    name='Adam',
    **kwargs
)
 
```

Construct a new Adam optimizer.

If amsgrad = False:
  Initialization:




m0:=0(Initialize initial 1st moment vector)

v0:=0(Initialize initial 2nd moment vector)

t:=0(Initialize timestep)


The update rule for  `variable`  with gradient  `g`  uses an optimization
  described at the end of section 2 of the paper:




t:=t+1<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="9.427ex" height="2.139ex" viewBox="0 -766.3 4059 921.2" role="img" focusable="false" style="vertical-align: -0.36ex;"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-74" x="0" y="0"></use><g transform="translate(639,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMATHI-74" x="1974" y="0"></use><use xlink:href="#MJMAIN-2B" x="2557" y="0"></use><use xlink:href="#MJMAIN-31" x="3558" y="0"></use></g></svg>

lrt:=learning\_rate∗√1−betat2/(1−betat1)<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="46.702ex" height="4.743ex" viewBox="0 -1326.8 20107.8 2042.1" role="img" focusable="false" style="vertical-align: -1.661ex;"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-6C" x="0" y="0"></use><g transform="translate(298,0)"><use xlink:href="#MJMATHI-72" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="638" y="-213"></use></g><g transform="translate(1383,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><g transform="translate(2718,0)"><use xlink:href="#MJMAIN-6C"></use><use xlink:href="#MJMAIN-65" x="278" y="0"></use><use xlink:href="#MJMAIN-61" x="723" y="0"></use><use xlink:href="#MJMAIN-72" x="1223" y="0"></use><use xlink:href="#MJMAIN-6E" x="1616" y="0"></use><use xlink:href="#MJMAIN-69" x="2172" y="0"></use><use xlink:href="#MJMAIN-6E" x="2451" y="0"></use><use xlink:href="#MJMAIN-67" x="3007" y="0"></use><use xlink:href="#MJMAIN-5C" x="3508" y="0"></use><use xlink:href="#MJMAIN-5F" x="4008" y="0"></use><use xlink:href="#MJMAIN-72" x="4509" y="0"></use><use xlink:href="#MJMAIN-61" x="4901" y="0"></use><use xlink:href="#MJMAIN-74" x="5402" y="0"></use><use xlink:href="#MJMAIN-65" x="5791" y="0"></use></g><use xlink:href="#MJMAIN-2217" x="9176" y="0"></use><g transform="translate(9899,0)"><use xlink:href="#MJSZ2-221A" x="0" y="15"></use><rect stroke="none" width="3964" height="60" x="1000" y="1106"></rect><g transform="translate(1000,0)"><use xlink:href="#MJMAIN-31" x="0" y="0"></use><use xlink:href="#MJMAIN-2212" x="722" y="0"></use><use xlink:href="#MJMATHI-62" x="1723" y="0"></use><use xlink:href="#MJMATHI-65" x="2152" y="0"></use><use xlink:href="#MJMATHI-74" x="2619" y="0"></use><g transform="translate(2980,0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="748" y="499"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-32" x="748" y="-435"></use></g></g></g><use xlink:href="#MJMAIN-2F" x="14863" y="0"></use><use xlink:href="#MJMAIN-28" x="15364" y="0"></use><use xlink:href="#MJMAIN-31" x="15753" y="0"></use><use xlink:href="#MJMAIN-2212" x="16476" y="0"></use><use xlink:href="#MJMATHI-62" x="17477" y="0"></use><use xlink:href="#MJMATHI-65" x="17906" y="0"></use><use xlink:href="#MJMATHI-74" x="18373" y="0"></use><g transform="translate(18734,0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="748" y="499"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="748" y="-435"></use></g><use xlink:href="#MJMAIN-29" x="19718" y="0"></use></g></svg>





<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="36.146ex" height="2.613ex" viewBox="0 -817.3 15562.8 1125" role="img" focusable="false" style="vertical-align: -0.715ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-6D" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="1242" y="-213"></use><g transform="translate(1511,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMATHI-62" x="2846" y="0"></use><use xlink:href="#MJMATHI-65" x="3276" y="0"></use><use xlink:href="#MJMATHI-74" x="3742" y="0"></use><g transform="translate(4104,0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="748" y="-213"></use></g><use xlink:href="#MJMAIN-2217" x="5309" y="0"></use><g transform="translate(6032,0)"><use xlink:href="#MJMATHI-6D" x="0" y="0"></use><g transform="translate(878,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2212" x="361" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="1140" y="0"></use></g></g><use xlink:href="#MJMAIN-2B" x="8393" y="0"></use><use xlink:href="#MJMAIN-28" x="9393" y="0"></use><use xlink:href="#MJMAIN-31" x="9783" y="0"></use><use xlink:href="#MJMAIN-2212" x="10506" y="0"></use><use xlink:href="#MJMATHI-62" x="11506" y="0"></use><use xlink:href="#MJMATHI-65" x="11936" y="0"></use><use xlink:href="#MJMATHI-74" x="12402" y="0"></use><g transform="translate(12764,0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="748" y="-213"></use></g><use xlink:href="#MJMAIN-29" x="13747" y="0"></use><use xlink:href="#MJMAIN-2217" x="14359" y="0"></use><use xlink:href="#MJMATHI-67" x="15082" y="0"></use></g></svg>

<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="37.631ex" height="2.613ex" viewBox="0 -817.3 16202.2 1125" role="img" focusable="false" style="vertical-align: -0.715ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="686" y="-213"></use><g transform="translate(1118,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMATHI-62" x="2453" y="0"></use><use xlink:href="#MJMATHI-65" x="2883" y="0"></use><use xlink:href="#MJMATHI-74" x="3349" y="0"></use><g transform="translate(3711,0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-32" x="748" y="-213"></use></g><use xlink:href="#MJMAIN-2217" x="4916" y="0"></use><g transform="translate(5639,0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><g transform="translate(485,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2212" x="361" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="1140" y="0"></use></g></g><use xlink:href="#MJMAIN-2B" x="7607" y="0"></use><use xlink:href="#MJMAIN-28" x="8607" y="0"></use><use xlink:href="#MJMAIN-31" x="8997" y="0"></use><use xlink:href="#MJMAIN-2212" x="9720" y="0"></use><use xlink:href="#MJMATHI-62" x="10720" y="0"></use><use xlink:href="#MJMATHI-65" x="11150" y="0"></use><use xlink:href="#MJMATHI-74" x="11616" y="0"></use><g transform="translate(11978,0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-32" x="748" y="-213"></use></g><use xlink:href="#MJMAIN-29" x="12961" y="0"></use><use xlink:href="#MJMAIN-2217" x="13573" y="0"></use><use xlink:href="#MJMATHI-67" x="14296" y="0"></use><use xlink:href="#MJMAIN-2217" x="14998" y="0"></use><use xlink:href="#MJMATHI-67" x="15721" y="0"></use></g></svg>

<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="41.286ex" height="2.85ex" viewBox="0 -817.3 17775.7 1226.9" role="img" focusable="false" style="vertical-align: -0.951ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><use xlink:href="#MJMATHI-61" x="485" y="0"></use><use xlink:href="#MJMATHI-72" x="1015" y="0"></use><use xlink:href="#MJMATHI-69" x="1466" y="0"></use><use xlink:href="#MJMATHI-61" x="1812" y="0"></use><use xlink:href="#MJMATHI-62" x="2341" y="0"></use><use xlink:href="#MJMATHI-6C" x="2771" y="0"></use><use xlink:href="#MJMATHI-65" x="3069" y="0"></use><g transform="translate(3813,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMATHI-76" x="5148" y="0"></use><use xlink:href="#MJMATHI-61" x="5634" y="0"></use><use xlink:href="#MJMATHI-72" x="6163" y="0"></use><use xlink:href="#MJMATHI-69" x="6615" y="0"></use><use xlink:href="#MJMATHI-61" x="6960" y="0"></use><use xlink:href="#MJMATHI-62" x="7490" y="0"></use><use xlink:href="#MJMATHI-6C" x="7919" y="0"></use><use xlink:href="#MJMATHI-65" x="8218" y="0"></use><use xlink:href="#MJMAIN-2212" x="8906" y="0"></use><use xlink:href="#MJMATHI-6C" x="9907" y="0"></use><g transform="translate(10206,0)"><use xlink:href="#MJMATHI-72" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="638" y="-213"></use></g><use xlink:href="#MJMAIN-2217" x="11235" y="0"></use><g transform="translate(11958,0)"><use xlink:href="#MJMATHI-6D" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="1242" y="-213"></use></g><use xlink:href="#MJMAIN-2F" x="13192" y="0"></use><use xlink:href="#MJMAIN-28" x="13692" y="0"></use><g transform="translate(14082,0)"><use xlink:href="#MJMAIN-221A" x="0" y="-136"></use><rect stroke="none" width="841" height="60" x="833" y="605"></rect><g transform="translate(833,0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="686" y="-213"></use></g></g><use xlink:href="#MJMAIN-2B" x="15979" y="0"></use><use xlink:href="#MJMATHI-3F5" x="16979" y="0"></use><use xlink:href="#MJMAIN-29" x="17386" y="0"></use></g></svg>


If amsgrad = True:
  Initialization:




<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="44.451ex" height="2.613ex" viewBox="0 -817.3 19138.5 1125" role="img" focusable="false" style="vertical-align: -0.715ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-6D" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-30" x="1242" y="-213"></use><g transform="translate(1610,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMAIN-30" x="2944" y="0"></use><g transform="translate(3445,0)"><use xlink:href="#MJMAIN-28"></use><use xlink:href="#MJMAIN-49" x="389" y="0"></use><use xlink:href="#MJMAIN-6E" x="751" y="0"></use><use xlink:href="#MJMAIN-69" x="1307" y="0"></use><use xlink:href="#MJMAIN-74" x="1586" y="0"></use><use xlink:href="#MJMAIN-69" x="1975" y="0"></use><use xlink:href="#MJMAIN-61" x="2254" y="0"></use><use xlink:href="#MJMAIN-6C" x="2754" y="0"></use><use xlink:href="#MJMAIN-69" x="3033" y="0"></use><use xlink:href="#MJMAIN-7A" x="3311" y="0"></use><use xlink:href="#MJMAIN-65" x="3756" y="0"></use><use xlink:href="#MJMAIN-69" x="4450" y="0"></use><use xlink:href="#MJMAIN-6E" x="4729" y="0"></use><use xlink:href="#MJMAIN-69" x="5285" y="0"></use><use xlink:href="#MJMAIN-74" x="5564" y="0"></use><use xlink:href="#MJMAIN-69" x="5953" y="0"></use><use xlink:href="#MJMAIN-61" x="6232" y="0"></use><use xlink:href="#MJMAIN-6C" x="6732" y="0"></use><use xlink:href="#MJMAIN-31" x="7261" y="0"></use><use xlink:href="#MJMAIN-73" x="7761" y="0"></use><use xlink:href="#MJMAIN-74" x="8156" y="0"></use><use xlink:href="#MJMAIN-6D" x="8795" y="0"></use><use xlink:href="#MJMAIN-6F" x="9629" y="0"></use><use xlink:href="#MJMAIN-6D" x="10129" y="0"></use><use xlink:href="#MJMAIN-65" x="10963" y="0"></use><use xlink:href="#MJMAIN-6E" x="11407" y="0"></use><use xlink:href="#MJMAIN-74" x="11964" y="0"></use><use xlink:href="#MJMAIN-76" x="12603" y="0"></use><use xlink:href="#MJMAIN-65" x="13132" y="0"></use><use xlink:href="#MJMAIN-63" x="13576" y="0"></use><use xlink:href="#MJMAIN-74" x="14021" y="0"></use><use xlink:href="#MJMAIN-6F" x="14410" y="0"></use><use xlink:href="#MJMAIN-72" x="14911" y="0"></use><use xlink:href="#MJMAIN-29" x="15303" y="0"></use></g></g></svg>

<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="44.302ex" height="2.613ex" viewBox="0 -817.3 19074.5 1125" role="img" focusable="false" style="vertical-align: -0.715ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-30" x="686" y="-213"></use><g transform="translate(1217,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMAIN-30" x="2551" y="0"></use><g transform="translate(3052,0)"><use xlink:href="#MJMAIN-28"></use><use xlink:href="#MJMAIN-49" x="389" y="0"></use><use xlink:href="#MJMAIN-6E" x="751" y="0"></use><use xlink:href="#MJMAIN-69" x="1307" y="0"></use><use xlink:href="#MJMAIN-74" x="1586" y="0"></use><use xlink:href="#MJMAIN-69" x="1975" y="0"></use><use xlink:href="#MJMAIN-61" x="2254" y="0"></use><use xlink:href="#MJMAIN-6C" x="2754" y="0"></use><use xlink:href="#MJMAIN-69" x="3033" y="0"></use><use xlink:href="#MJMAIN-7A" x="3311" y="0"></use><use xlink:href="#MJMAIN-65" x="3756" y="0"></use><use xlink:href="#MJMAIN-69" x="4450" y="0"></use><use xlink:href="#MJMAIN-6E" x="4729" y="0"></use><use xlink:href="#MJMAIN-69" x="5285" y="0"></use><use xlink:href="#MJMAIN-74" x="5564" y="0"></use><use xlink:href="#MJMAIN-69" x="5953" y="0"></use><use xlink:href="#MJMAIN-61" x="6232" y="0"></use><use xlink:href="#MJMAIN-6C" x="6732" y="0"></use><use xlink:href="#MJMAIN-32" x="7261" y="0"></use><use xlink:href="#MJMAIN-6E" x="7761" y="0"></use><use xlink:href="#MJMAIN-64" x="8318" y="0"></use><use xlink:href="#MJMAIN-6D" x="9124" y="0"></use><use xlink:href="#MJMAIN-6F" x="9958" y="0"></use><use xlink:href="#MJMAIN-6D" x="10458" y="0"></use><use xlink:href="#MJMAIN-65" x="11292" y="0"></use><use xlink:href="#MJMAIN-6E" x="11736" y="0"></use><use xlink:href="#MJMAIN-74" x="12293" y="0"></use><use xlink:href="#MJMAIN-76" x="12932" y="0"></use><use xlink:href="#MJMAIN-65" x="13461" y="0"></use><use xlink:href="#MJMAIN-63" x="13905" y="0"></use><use xlink:href="#MJMAIN-74" x="14350" y="0"></use><use xlink:href="#MJMAIN-6F" x="14739" y="0"></use><use xlink:href="#MJMAIN-72" x="15240" y="0"></use><use xlink:href="#MJMAIN-29" x="15632" y="0"></use></g></g></svg>

<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="47.551ex" height="2.613ex" viewBox="0 -817.3 20473.1 1125" role="img" focusable="false" style="vertical-align: -0.715ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-68" x="686" y="-213"></use><use xlink:href="#MJMATHI-61" x="993" y="0"></use><g transform="translate(1522,0)"><use xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-30" x="511" y="-213"></use></g><g transform="translate(2615,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMAIN-30" x="3950" y="0"></use><g transform="translate(4451,0)"><use xlink:href="#MJMAIN-28"></use><use xlink:href="#MJMAIN-49" x="389" y="0"></use><use xlink:href="#MJMAIN-6E" x="751" y="0"></use><use xlink:href="#MJMAIN-69" x="1307" y="0"></use><use xlink:href="#MJMAIN-74" x="1586" y="0"></use><use xlink:href="#MJMAIN-69" x="1975" y="0"></use><use xlink:href="#MJMAIN-61" x="2254" y="0"></use><use xlink:href="#MJMAIN-6C" x="2754" y="0"></use><use xlink:href="#MJMAIN-69" x="3033" y="0"></use><use xlink:href="#MJMAIN-7A" x="3311" y="0"></use><use xlink:href="#MJMAIN-65" x="3756" y="0"></use><use xlink:href="#MJMAIN-69" x="4450" y="0"></use><use xlink:href="#MJMAIN-6E" x="4729" y="0"></use><use xlink:href="#MJMAIN-69" x="5285" y="0"></use><use xlink:href="#MJMAIN-74" x="5564" y="0"></use><use xlink:href="#MJMAIN-69" x="5953" y="0"></use><use xlink:href="#MJMAIN-61" x="6232" y="0"></use><use xlink:href="#MJMAIN-6C" x="6732" y="0"></use><use xlink:href="#MJMAIN-32" x="7261" y="0"></use><use xlink:href="#MJMAIN-6E" x="7761" y="0"></use><use xlink:href="#MJMAIN-64" x="8318" y="0"></use><use xlink:href="#MJMAIN-6D" x="9124" y="0"></use><use xlink:href="#MJMAIN-6F" x="9958" y="0"></use><use xlink:href="#MJMAIN-6D" x="10458" y="0"></use><use xlink:href="#MJMAIN-65" x="11292" y="0"></use><use xlink:href="#MJMAIN-6E" x="11736" y="0"></use><use xlink:href="#MJMAIN-74" x="12293" y="0"></use><use xlink:href="#MJMAIN-76" x="12932" y="0"></use><use xlink:href="#MJMAIN-65" x="13461" y="0"></use><use xlink:href="#MJMAIN-63" x="13905" y="0"></use><use xlink:href="#MJMAIN-74" x="14350" y="0"></use><use xlink:href="#MJMAIN-6F" x="14739" y="0"></use><use xlink:href="#MJMAIN-72" x="15240" y="0"></use><use xlink:href="#MJMAIN-29" x="15632" y="0"></use></g></g></svg>

<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="25.654ex" height="2.613ex" viewBox="0 -817.3 11045.6 1125" role="img" focusable="false" style="vertical-align: -0.715ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-74" x="0" y="0"></use><g transform="translate(639,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMAIN-30" x="1974" y="0"></use><g transform="translate(2474,0)"><use xlink:href="#MJMAIN-28"></use><use xlink:href="#MJMAIN-49" x="389" y="0"></use><use xlink:href="#MJMAIN-6E" x="751" y="0"></use><use xlink:href="#MJMAIN-69" x="1307" y="0"></use><use xlink:href="#MJMAIN-74" x="1586" y="0"></use><use xlink:href="#MJMAIN-69" x="1975" y="0"></use><use xlink:href="#MJMAIN-61" x="2254" y="0"></use><use xlink:href="#MJMAIN-6C" x="2754" y="0"></use><use xlink:href="#MJMAIN-69" x="3033" y="0"></use><use xlink:href="#MJMAIN-7A" x="3311" y="0"></use><use xlink:href="#MJMAIN-65" x="3756" y="0"></use><use xlink:href="#MJMAIN-74" x="4450" y="0"></use><use xlink:href="#MJMAIN-69" x="4840" y="0"></use><use xlink:href="#MJMAIN-6D" x="5118" y="0"></use><use xlink:href="#MJMAIN-65" x="5952" y="0"></use><use xlink:href="#MJMAIN-73" x="6396" y="0"></use><use xlink:href="#MJMAIN-74" x="6791" y="0"></use><use xlink:href="#MJMAIN-65" x="7180" y="0"></use><use xlink:href="#MJMAIN-70" x="7625" y="0"></use><use xlink:href="#MJMAIN-29" x="8181" y="0"></use></g></g></svg>


The update rule for  `variable`  with gradient  `g`  uses an optimization
  described at the end of section 2 of the paper:




<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="9.427ex" height="2.139ex" viewBox="0 -766.3 4059 921.2" role="img" focusable="false" style="vertical-align: -0.36ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-74" x="0" y="0"></use><g transform="translate(639,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMATHI-74" x="1974" y="0"></use><use xlink:href="#MJMAIN-2B" x="2557" y="0"></use><use xlink:href="#MJMAIN-31" x="3558" y="0"></use></g></svg>

<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="46.702ex" height="4.743ex" viewBox="0 -1326.8 20107.8 2042.1" role="img" focusable="false" style="vertical-align: -1.661ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-6C" x="0" y="0"></use><g transform="translate(298,0)"><use xlink:href="#MJMATHI-72" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="638" y="-213"></use></g><g transform="translate(1383,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><g transform="translate(2718,0)"><use xlink:href="#MJMAIN-6C"></use><use xlink:href="#MJMAIN-65" x="278" y="0"></use><use xlink:href="#MJMAIN-61" x="723" y="0"></use><use xlink:href="#MJMAIN-72" x="1223" y="0"></use><use xlink:href="#MJMAIN-6E" x="1616" y="0"></use><use xlink:href="#MJMAIN-69" x="2172" y="0"></use><use xlink:href="#MJMAIN-6E" x="2451" y="0"></use><use xlink:href="#MJMAIN-67" x="3007" y="0"></use><use xlink:href="#MJMAIN-5C" x="3508" y="0"></use><use xlink:href="#MJMAIN-5F" x="4008" y="0"></use><use xlink:href="#MJMAIN-72" x="4509" y="0"></use><use xlink:href="#MJMAIN-61" x="4901" y="0"></use><use xlink:href="#MJMAIN-74" x="5402" y="0"></use><use xlink:href="#MJMAIN-65" x="5791" y="0"></use></g><use xlink:href="#MJMAIN-2217" x="9176" y="0"></use><g transform="translate(9899,0)"><use xlink:href="#MJSZ2-221A" x="0" y="15"></use><rect stroke="none" width="3964" height="60" x="1000" y="1106"></rect><g transform="translate(1000,0)"><use xlink:href="#MJMAIN-31" x="0" y="0"></use><use xlink:href="#MJMAIN-2212" x="722" y="0"></use><use xlink:href="#MJMATHI-62" x="1723" y="0"></use><use xlink:href="#MJMATHI-65" x="2152" y="0"></use><use xlink:href="#MJMATHI-74" x="2619" y="0"></use><g transform="translate(2980,0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="748" y="499"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-32" x="748" y="-435"></use></g></g></g><use xlink:href="#MJMAIN-2F" x="14863" y="0"></use><use xlink:href="#MJMAIN-28" x="15364" y="0"></use><use xlink:href="#MJMAIN-31" x="15753" y="0"></use><use xlink:href="#MJMAIN-2212" x="16476" y="0"></use><use xlink:href="#MJMATHI-62" x="17477" y="0"></use><use xlink:href="#MJMATHI-65" x="17906" y="0"></use><use xlink:href="#MJMATHI-74" x="18373" y="0"></use><g transform="translate(18734,0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="748" y="499"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="748" y="-435"></use></g><use xlink:href="#MJMAIN-29" x="19718" y="0"></use></g></svg>





<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="36.146ex" height="2.613ex" viewBox="0 -817.3 15562.8 1125" role="img" focusable="false" style="vertical-align: -0.715ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-6D" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="1242" y="-213"></use><g transform="translate(1511,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMATHI-62" x="2846" y="0"></use><use xlink:href="#MJMATHI-65" x="3276" y="0"></use><use xlink:href="#MJMATHI-74" x="3742" y="0"></use><g transform="translate(4104,0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="748" y="-213"></use></g><use xlink:href="#MJMAIN-2217" x="5309" y="0"></use><g transform="translate(6032,0)"><use xlink:href="#MJMATHI-6D" x="0" y="0"></use><g transform="translate(878,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2212" x="361" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="1140" y="0"></use></g></g><use xlink:href="#MJMAIN-2B" x="8393" y="0"></use><use xlink:href="#MJMAIN-28" x="9393" y="0"></use><use xlink:href="#MJMAIN-31" x="9783" y="0"></use><use xlink:href="#MJMAIN-2212" x="10506" y="0"></use><use xlink:href="#MJMATHI-62" x="11506" y="0"></use><use xlink:href="#MJMATHI-65" x="11936" y="0"></use><use xlink:href="#MJMATHI-74" x="12402" y="0"></use><g transform="translate(12764,0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="748" y="-213"></use></g><use xlink:href="#MJMAIN-29" x="13747" y="0"></use><use xlink:href="#MJMAIN-2217" x="14359" y="0"></use><use xlink:href="#MJMATHI-67" x="15082" y="0"></use></g></svg>

<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="37.631ex" height="2.613ex" viewBox="0 -817.3 16202.2 1125" role="img" focusable="false" style="vertical-align: -0.715ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="686" y="-213"></use><g transform="translate(1118,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMATHI-62" x="2453" y="0"></use><use xlink:href="#MJMATHI-65" x="2883" y="0"></use><use xlink:href="#MJMATHI-74" x="3349" y="0"></use><g transform="translate(3711,0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-32" x="748" y="-213"></use></g><use xlink:href="#MJMAIN-2217" x="4916" y="0"></use><g transform="translate(5639,0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><g transform="translate(485,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2212" x="361" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="1140" y="0"></use></g></g><use xlink:href="#MJMAIN-2B" x="7607" y="0"></use><use xlink:href="#MJMAIN-28" x="8607" y="0"></use><use xlink:href="#MJMAIN-31" x="8997" y="0"></use><use xlink:href="#MJMAIN-2212" x="9720" y="0"></use><use xlink:href="#MJMATHI-62" x="10720" y="0"></use><use xlink:href="#MJMATHI-65" x="11150" y="0"></use><use xlink:href="#MJMATHI-74" x="11616" y="0"></use><g transform="translate(11978,0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-32" x="748" y="-213"></use></g><use xlink:href="#MJMAIN-29" x="12961" y="0"></use><use xlink:href="#MJMAIN-2217" x="13573" y="0"></use><use xlink:href="#MJMATHI-67" x="14296" y="0"></use><use xlink:href="#MJMAIN-2217" x="14998" y="0"></use><use xlink:href="#MJMATHI-67" x="15721" y="0"></use></g></svg>

<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="25.647ex" height="2.613ex" viewBox="0 -817.3 11042.3 1125" role="img" focusable="false" style="vertical-align: -0.715ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-68" x="686" y="-213"></use><use xlink:href="#MJMATHI-61" x="993" y="0"></use><g transform="translate(1522,0)"><use xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="511" y="-213"></use></g><g transform="translate(2517,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMATHI-6D" x="3852" y="0"></use><use xlink:href="#MJMATHI-61" x="4730" y="0"></use><use xlink:href="#MJMATHI-78" x="5260" y="0"></use><use xlink:href="#MJMAIN-28" x="5832" y="0"></use><g transform="translate(6222,0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-68" x="686" y="-213"></use></g><use xlink:href="#MJMATHI-61" x="7215" y="0"></use><g transform="translate(7744,0)"><use xlink:href="#MJMATHI-74" x="0" y="0"></use><g transform="translate(361,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2212" x="361" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="1140" y="0"></use></g></g><use xlink:href="#MJMAIN-2C" x="9366" y="0"></use><g transform="translate(9811,0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="686" y="-213"></use></g><use xlink:href="#MJMAIN-29" x="10652" y="0"></use></g></svg>

<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="44.534ex" height="2.85ex" viewBox="0 -919.2 19174.4 1226.9" role="img" focusable="false" style="vertical-align: -0.715ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><use xlink:href="#MJMATHI-61" x="485" y="0"></use><use xlink:href="#MJMATHI-72" x="1015" y="0"></use><use xlink:href="#MJMATHI-69" x="1466" y="0"></use><use xlink:href="#MJMATHI-61" x="1812" y="0"></use><use xlink:href="#MJMATHI-62" x="2341" y="0"></use><use xlink:href="#MJMATHI-6C" x="2771" y="0"></use><use xlink:href="#MJMATHI-65" x="3069" y="0"></use><g transform="translate(3813,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMATHI-76" x="5148" y="0"></use><use xlink:href="#MJMATHI-61" x="5634" y="0"></use><use xlink:href="#MJMATHI-72" x="6163" y="0"></use><use xlink:href="#MJMATHI-69" x="6615" y="0"></use><use xlink:href="#MJMATHI-61" x="6960" y="0"></use><use xlink:href="#MJMATHI-62" x="7490" y="0"></use><use xlink:href="#MJMATHI-6C" x="7919" y="0"></use><use xlink:href="#MJMATHI-65" x="8218" y="0"></use><use xlink:href="#MJMAIN-2212" x="8906" y="0"></use><use xlink:href="#MJMATHI-6C" x="9907" y="0"></use><g transform="translate(10206,0)"><use xlink:href="#MJMATHI-72" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="638" y="-213"></use></g><use xlink:href="#MJMAIN-2217" x="11235" y="0"></use><g transform="translate(11958,0)"><use xlink:href="#MJMATHI-6D" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="1242" y="-213"></use></g><use xlink:href="#MJMAIN-2F" x="13192" y="0"></use><use xlink:href="#MJMAIN-28" x="13692" y="0"></use><g transform="translate(14082,0)"><use xlink:href="#MJMAIN-221A" x="0" y="-44"></use><rect stroke="none" width="2239" height="60" x="833" y="697"></rect><g transform="translate(833,0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-68" x="686" y="-213"></use><use xlink:href="#MJMATHI-61" x="993" y="0"></use><g transform="translate(1522,0)"><use xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="511" y="-213"></use></g></g></g><use xlink:href="#MJMAIN-2B" x="17377" y="0"></use><use xlink:href="#MJMATHI-3F5" x="18378" y="0"></use><use xlink:href="#MJMAIN-29" x="18784" y="0"></use></g></svg>


The default value of 1e-7 for epsilon might not be a good default in
general. For example, when training an Inception network on ImageNet a
current good choice is 1.0 or 0.1. Note that since AdamOptimizer uses the
formulation just before Section 2.1 of the Kingma and Ba paper rather than
the formulation in Algorithm 1, the "epsilon" referred to here is "epsilon
hat" in the paper.

The sparse implementation of this algorithm (used when the gradient is an
IndexedSlices object, typically because of [ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather) or an embedding
lookup in the forward pass) does apply momentum to variable slices even if
they were not used in the forward pass (meaning they have a gradient equal
to zero). Momentum decay (beta1) is also applied to the entire momentum
accumulator. This means that the sparse behavior is equivalent to the dense
behavior (in contrast to some momentum implementations which ignore momentum
unless a variable slice was actually used).



#### Args:

- **`learning_rate`** : A Tensor or a floating point value.  The learning rate.

- **`beta_1`** : A float value or a constant float tensor. The exponential decay
rate for the 1st moment estimates.

- **`beta_2`** : A float value or a constant float tensor. The exponential decay
rate for the 2nd moment estimates.

- **`epsilon`** : A small constant for numerical stability. This epsilon is
"epsilon hat" in the Kingma and Ba paper (in the formula just before
Section 2.1), not the epsilon in Algorithm 1 of the paper.

- **`amsgrad`** : boolean. Whether to apply AMSGrad variant of this algorithm from
the paper "On the Convergence of Adam and beyond".

- **`name`** : Optional name for the operations created when applying gradients.
Defaults to "Adam".  @compatibility(eager) When eager execution is
enabled,  `learning_rate` ,  `beta_1` ,  `beta_2` , and  `epsilon`  can each be
a callable that takes no arguments and returns the actual value to use.
This can be useful for changing these values across different
invocations of optimizer functions. @end_compatibility

- **`**kwargs`** : keyword arguments. Allowed to be { `clipnorm` ,  `clipvalue` ,  `lr` ,
 `decay` }.  `clipnorm`  is clip gradients by norm;  `clipvalue`  is clip
gradients by value,  `decay`  is included for backward compatibility to
allow time inverse decay of learning rate.  `lr`  is included for backward
compatibility, recommended to use  `learning_rate`  instead.



## Properties


###  `iterations` 
Variable. The number of training steps this Optimizer has run.



###  `weights` 
Returns variables of this Optimizer based on the order created.



## Methods


###  `add_slot` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L567-L594)



```
 add_slot(
    var,
    slot_name,
    initializer='zeros'
)
 
```

Add a new slot variable for  `var` .



###  `add_weight` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L768-L808)



```
 add_weight(
    name,
    shape,
    dtype=None,
    initializer='zeros',
    trainable=None,
    synchronization=tf.VariableSynchronization.AUTO,
    aggregation=tf.compat.v1.VariableAggregation.NONE
)
 
```



###  `apply_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L408-L441)



```
 apply_gradients(
    grads_and_vars,
    name=None
)
 
```

Apply gradients to variables.

This is the second part of  `minimize()` . It returns an  `Operation`  that
applies gradients.



#### Args:

- **`grads_and_vars`** : List of (gradient, variable) pairs.

- **`name`** : Optional name for the returned operation.  Default to the name
passed to the  `Optimizer`  constructor.



#### Returns:
An  `Operation`  that applies the specified gradients. If  `global_step` 
was not None, that operation also increments  `global_step` .



#### Raises:

- **`TypeError`** : If  `grads_and_vars`  is malformed.

- **`ValueError`** : If none of the variables have gradients.



###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L698-L721)



```
 from_config(
    cls,
    config,
    custom_objects=None
)
 
```

Creates an optimizer from its config.

This method is the reverse of  `get_config` ,
capable of instantiating the same optimizer from the config
dictionary.



#### Arguments:

- **`config`** : A Python dictionary, typically the output of get_config.

- **`custom_objects`** : A Python dictionary mapping names to additional Python
objects used to create this optimizer, such as a function used for a
hyperparameter.



#### Returns:
An optimizer instance.



###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L261-L271)



```
 get_config()
 
```

Returns the config of the optimimizer.

An optimizer config is a Python dictionary (serializable)
containing the configuration of an optimizer.
The same optimizer can be reinstantiated later
(without any saved state) from this configuration.



#### Returns:
Python dictionary.



###  `get_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L374-L406)



```
 get_gradients(
    loss,
    params
)
 
```

Returns gradients of  `loss`  with respect to  `params` .



#### Arguments:

- **`loss`** : Loss tensor.

- **`params`** : List of variables.



#### Returns:
List of gradient tensors.



#### Raises:

- **`ValueError`** : In case any gradient cannot be computed (e.g. if gradient
function not implemented).



###  `get_slot` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L596-L599)



```
 get_slot(
    var,
    slot_name
)
 
```



###  `get_slot_names` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L563-L565)



```
 get_slot_names()
 
```

A list of names for this optimizer's slots.



###  `get_updates` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L499-L506)



```
 get_updates(
    loss,
    params
)
 
```



###  `get_weights` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L743-L745)



```
 get_weights()
 
```



###  `minimize` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L290-L319)



```
 minimize(
    loss,
    var_list,
    grad_loss=None,
    name=None
)
 
```

Minimize  `loss`  by updating  `var_list` .

This method simply computes gradient using [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape) and calls
 `apply_gradients()` . If you want to process the gradient before applying
then call [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape) and  `apply_gradients()`  explicitly instead
of using this function.



#### Args:

- **`loss`** : A callable taking no arguments which returns the value to minimize.

- **`var_list`** : list or tuple of  `Variable`  objects to update to minimize
 `loss` , or a callable returning the list or tuple of  `Variable`  objects.
Use callable when the variable list would otherwise be incomplete before
 `minimize`  since the variables are created at the first time  `loss`  is
called.

- **`grad_loss`** : Optional. A  `Tensor`  holding the gradient computed for  `loss` .

- **`name`** : Optional name for the returned operation.



#### Returns:
An Operation that updates the variables in  `var_list` .  If  `global_step` 
was not  `None` , that operation also increments  `global_step` .



#### Raises:

- **`ValueError`** : If some of the variables are not  `Variable`  objects.



###  `set_weights` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L174-L182)



```
 set_weights(weights)
 
```



###  `variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L734-L736)



```
 variables()
 
```

Returns variables of this Optimizer based on the order created.

