

## Class  `DirichletMultinomial` 
Dirichlet-Multinomial compound distribution.

Inherits From: [ `Distribution` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/distributions/Distribution)

The Dirichlet-Multinomial distribution is parameterized by a (batch of)length- `K`   `concentration`  vectors ( `K > 1` ) and a  `total_count`  number oftrials, i.e., the number of trials per draw from the DirichletMultinomial. Itis defined over a (batch of) length- `K`  vector  `counts`  such that `tf.reduce_sum(counts, -1) = total_count` . The Dirichlet-Multinomial isidentically the Beta-Binomial distribution when  `K = 2` .

#### 数学细节
The Dirichlet-Multinomial is a distribution over  `K` -class counts, i.e., alength- `K`  vector of non-negative integer  `counts = n = [n_0, ..., n_{K-1}]` .

The probability mass function (pmf) is,

```
 pmf(n; alpha, N) = Beta(alpha + n) / (prod_j n_j!) / ZZ = Beta(alpha) / N! 
```

where:

-  `concentration = alpha = [alpha_0, ..., alpha_{K-1}]` ,  `alpha_j > 0` ,
-  `total_count = N` ,  `N`  a positive integer,
-  `N!`  is  `N`  factorial, and,
-  `Beta(x) = prod_j Gamma(x_j) / Gamma(sum_j x_j)`  is the[multivariate beta function](https://en.wikipedia.org/wiki/Beta_function#Multivariate_beta_function),and,
-  `Gamma`  is the [gamma function](https://en.wikipedia.org/wiki/Gamma_function).
Dirichlet-Multinomial is a [compound distribution](https://en.wikipedia.org/wiki/Compound_probability_distribution), i.e., itssamples are generated as follows.

1. Choose class probabilities:  `probs = [p_0,...,p_{K-1}] ~ Dir(concentration)` 
2. Draw integers:  `counts = [n_0,...,n_{K-1}] ~ Multinomial(total_count, probs)` 
The last  `concentration`  dimension parametrizes a single Dirichlet-Multinomialdistribution. When calling distribution functions (e.g.,  `dist.prob(counts)` ), `concentration` ,  `total_count`  and  `counts`  are broadcast to the same shape.The last dimension of  `counts`  corresponds single Dirichlet-Multinomialdistributions.

Distribution parameters are automatically broadcast in all functions; seeexamples for details.

#### 陷阱
The number of classes,  `K` , must not exceed:

- the largest integer representable by  `self.dtype` , i.e., `2**(mantissa_bits+1)`  (IEE754),
- the maximum  `Tensor`  index, i.e.,  `2**31-1` .
In other words,

```
 K <= min(2**31-1, {
  tf.float16: 2**11,
  tf.float32: 2**24,
  tf.float64: 2**53 }[param.dtype])
 
```


**Note:**  This condition is validated only when  `self.validate_args = True` .


#### 实例


```
 alpha = [1., 2., 3.]
n = 2.
dist = DirichletMultinomial(n, alpha)
 
```

Creates a 3-class distribution, with the 3rd class is most likely to bedrawn.The distribution functions can be evaluated on counts.

```
 # counts same shape as alpha.
counts = [0., 0., 2.]
dist.prob(counts)  # Shape []

# alpha will be broadcast to [[1., 2., 3.], [1., 2., 3.]] to match counts.
counts = [[1., 1., 0.], [1., 0., 1.]]
dist.prob(counts)  # Shape [2]

# alpha will be broadcast to shape [5, 7, 3] to match counts.
counts = [[...]]  # Shape [5, 7, 3]
dist.prob(counts)  # Shape [5, 7]
 
```

Creates a 2-batch of 3-class distributions.

```
 alpha = [[1., 2., 3.], [4., 5., 6.]]  # Shape [2, 3]
n = [3., 3.]
dist = DirichletMultinomial(n, alpha)

# counts will be broadcast to [[2., 1., 0.], [2., 1., 0.]] to match alpha.
counts = [2., 1., 0.]
dist.prob(counts)  # Shape [2]
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/dirichlet_multinomial.py#L167-L231)

```
 __init__(
    total_count,
    concentration,
    validate_args=False,
    allow_nan_stats=True,
    name='DirichletMultinomial'
)
 
```

Initialize a batch of DirichletMultinomial distributions. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed after 2019-01-01.Instructions for updating:The TensorFlow Distributions library has moved to TensorFlow Probability (https://github.com/tensorflow/probability). You should update all references to use [ `tfp.distributions` ](/probability/api_docs/python/tfp/distributions) instead of  `tf.distributions` .


#### 参数：
- **`total_count`** :  Non-negative floating point tensor, whose dtype is the sameas  `concentration` . The shape is broadcastable to  `[N1,..., Nm]`  with `m >= 0` . Defines this as a batch of  `N1 x ... x Nm`  differentDirichlet multinomial distributions. Its components should be equal tointeger values.
- **`concentration`** : Positive floating point tensor, whose dtype is thesame as  `n`  with shape broadcastable to  `[N1,..., Nm, K]`   `m >= 0` .Defines this as a batch of  `N1 x ... x Nm`  different  `K`  class Dirichletmultinomial distributions.
- **`validate_args`** : Python  `bool` , default  `False` . When  `True`  distributionparameters are checked for validity despite possibly degrading runtimeperformance. When  `False`  invalid inputs may silently render incorrectoutputs.
- **`allow_nan_stats`** : Python  `bool` , default  `True` . When  `True` , statistics(e.g., mean, mode, variance) use the value " `NaN` " to indicate theresult is undefined. When  `False` , an exception is raised if one ormore of the statistic's batch members are undefined.
- **`name`** : Python  `str`  name prefixed to Ops created by this class.


## 属性


###  `allow_nan_stats` 
Python  `bool`  describing behavior when a stat is undefined.

Stats return +/- infinity when it makes sense. E.g., the variance of aCauchy distribution is infinity. However, sometimes the statistic isundefined, e.g., if a distribution's pdf does not achieve a maximum withinthe support of the distribution, the mode is undefined. If the mean isundefined, then by definition the variance is undefined. E.g. the mean forStudent's T for df = 1 is undefined (no clear way to say it is either + or -infinity), so the variance = E[(X - mean)**2] is also undefined.

#### 返回：
- **`allow_nan_stats`** : Python  `bool` .


###  `batch_shape` 
Shape of a single sample from a single event index as a  `TensorShape` .

可能部分定义或未知。

The batch dimensions are indexes into independent, non-identicalparameterizations of this distribution.

#### 返回：
- **`batch_shape`** :  `TensorShape` , possibly unknown.


###  `concentration` 
浓度参数；该坐标的预期优先计数。

###  `dtype` 
The  `DType`  of  `Tensor` s handled by this  `Distribution` .

###  `event_shape` 
Shape of a single sample from a single batch as a  `TensorShape` .

可能部分定义或未知。

#### 返回：
- **`event_shape`** :  `TensorShape` , possibly unknown.


###  `name` 
Name prepended to all ops created by this  `Distribution` .

###  `parameters` 
Dictionary of parameters used to instantiate this  `Distribution` .

###  `reparameterization_type` 
描述如何重新参数化分布中的样本。

Currently this is one of the static instances[ `distributions.FULLY_REPARAMETERIZED` ](/probability/api_docs/python/tfp/distributions#FULLY_REPARAMETERIZED)or [ `distributions.NOT_REPARAMETERIZED` ](/probability/api_docs/python/tfp/distributions#NOT_REPARAMETERIZED).

#### 返回：
An instance of  `ReparameterizationType` .

###  `total_concentration` 
浓度参数最后一个维度的总和。

###  `total_count` 
用于构建样本的试验次数。

###  `validate_args` 
Python  `bool`  indicating possibly expensive checks are enabled.

## 方法


###  `batch_shape_tensor` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L637-L654)

```
 batch_shape_tensor(name='batch_shape_tensor')
 
```

Shape of a single sample from a single event index as a 1-D  `Tensor` .

The batch dimensions are indexes into independent, non-identicalparameterizations of this distribution.

#### 参数：
- **`name`** : name to give to the op


#### 返回：
- **`batch_shape`** :  `Tensor` .


###  `cdf` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L881-L898)

```
 cdf(
    value,
    name='cdf'
)
 
```

累积分布函数。

Given random variable  `X` , the cumulative distribution function  `cdf`  is:

```
 cdf(x) := P[X <= x] 
```

#### 参数：
- **`value`** :  `float`  or  `double`   `Tensor` .
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
- **`cdf`** : a  `Tensor`  of shape  `sample_shape(x) + self.batch_shape`  withvalues of type  `self.dtype` .


###  `copy` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L615-L631)

```
 copy(**override_parameters_kwargs)
 
```

创建分发的深层副本。


**Note:**  the copy distribution may continue to depend on the originalinitialization arguments.


#### 参数：
- **`**override_parameters_kwargs`** : String/value dictionary of initializationarguments to override with new values.


#### 返回：
- **`distribution`** : A new instance of  `type(self)`  initialized from the unionof self.parameters and override_parameters_kwargs, i.e., `dict(self.parameters, **override_parameters_kwargs)` .


###  `covariance` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L1094-L1131)

```
 covariance(name='covariance')
 
```

协方差。

Covariance is (possibly) defined only for non-scalar-event distributions.

For example, for a length- `k` , vector-valued distribution, it is calculatedas,

```
 Cov[i, j] = Covariance(X_i, X_j) = E[(X_i - E[X_i]) (X_j - E[X_j])] 
```

where  `Cov`  is a (batch of)  `k x k`  matrix,  `0 <= (i, j) < k` , and  `E` denotes expectation.

Alternatively, for non-vector, multivariate distributions (e.g.,matrix-valued, Wishart),  `Covariance`  shall return a (batch of) matricesunder some vectorization of the events, i.e.,

```
 Cov[i, j] = Covariance(Vec(X)_i, Vec(X)_j) = [as above] 
```

where  `Cov`  is a (batch of)  `k' x k'`  matrices, `0 <= (i, j) < k' = reduce_prod(event_shape)` , and  `Vec`  is some functionmapping indices of this distribution's event dimensions to indices of alength- `k'`  vector.

Additional documentation from  `DirichletMultinomial` :

每个批处理成员的协方差定义如下：

```
 Var(X_j) = n * alpha_j / alpha_0 * (1 - alpha_j / alpha_0) *(n + alpha_0) / (1 + alpha_0) 
```

where  `concentration = alpha`  and `total_concentration = alpha_0 = sum_j alpha_j` .

批处理中元素之间的协方差定义为：

```
 Cov(X_i, X_j) = -n * alpha_i * alpha_j / alpha_0 ** 2 *(n + alpha_0) / (1 + alpha_0) 
```

#### 参数：
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
- **`covariance`** : Floating-point  `Tensor`  with shape  `[B1, ..., Bn, k', k']` where the first  `n`  dimensions are batch coordinates and `k' = reduce_prod(self.event_shape)` .


###  `cross_entropy` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L1146-L1169)

```
 cross_entropy(
    other,
    name='cross_entropy'
)
 
```

计算（香农）交叉熵。

Denote this distribution ( `self` ) by  `P`  and the  `other`  distribution by `Q` . Assuming  `P, Q`  are absolutely continuous with respect toone another and permit densities  `p(x) dr(x)`  and  `q(x) dr(x)` , (Shanon)cross entropy is defined as:

```
 H[P, Q] = E_p[-log q(X)] = -int_F p(x) log q(x) dr(x) 
```

where  `F`  denotes the support of the random variable  `X ~ P` .

#### 参数：
- **`other`** : [ `tfp.distributions.Distribution` ](/probability/api_docs/python/tfp/distributions/Distribution) instance.
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
- **`cross_entropy`** :  `self.dtype`   `Tensor`  with shape  `[B1, ..., Bn]` representing  `n`  different calculations of (Shanon) cross entropy.


###  `entropy` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L982-L985)

```
 entropy(name='entropy')
 
```

nats中的香农熵。

###  `event_shape_tensor` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L677-L691)

```
 event_shape_tensor(name='event_shape_tensor')
 
```

Shape of a single sample from a single batch as a 1-D int32  `Tensor` .

#### 参数：
- **`name`** : name to give to the op


#### 返回：
- **`event_shape`** :  `Tensor` .


###  `is_scalar_batch` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L721-L733)

```
 is_scalar_batch(name='is_scalar_batch')
 
```

Indicates that  `batch_shape == []` .

#### 参数：
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
- **`is_scalar_batch`** :  `bool`  scalar  `Tensor` .


###  `is_scalar_event` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L707-L719)

```
 is_scalar_event(name='is_scalar_event')
 
```

Indicates that  `event_shape == []` .

#### 参数：
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
- **`is_scalar_event`** :  `bool`  scalar  `Tensor` .


###  `kl_divergence` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L1175-L1201)

```
 kl_divergence(
    other,
    name='kl_divergence'
)
 
```

Computes the Kullback--Leibler divergence.

Denote this distribution ( `self` ) by  `p`  and the  `other`  distribution by `q` . Assuming  `p, q`  are absolutely continuous with respect to referencemeasure  `r` , the KL divergence is defined as:

```
 KL[p, q] = E_p[log(p(X)/q(X))]         = -int_F p(x) log q(x) dr(x) + int_F p(x) log p(x) dr(x)         = H[p, q] - H[p] 
```

where  `F`  denotes the support of the random variable  `X ~ p` ,  `H[., .]` denotes (Shanon) cross entropy, and  `H[.]`  denotes (Shanon) entropy.

#### 参数：
- **`other`** : [ `tfp.distributions.Distribution` ](/probability/api_docs/python/tfp/distributions/Distribution) instance.
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
- **`kl_divergence`** :  `self.dtype`   `Tensor`  with shape  `[B1, ..., Bn]` representing  `n`  different calculations of the Kullback-Leiblerdivergence.


###  `log_cdf` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L842-L863)

```
 log_cdf(
    value,
    name='log_cdf'
)
 
```

对数累积分布函数。

Given random variable  `X` , the cumulative distribution function  `cdf`  is:

```
 log_cdf(x) := Log[ P[X <= x] ] 
```

Often, a numerical approximation can be used for  `log_cdf(x)`  that yieldsa more accurate answer than simply taking the logarithm of the  `cdf`  when `x << -1` .

#### 参数：
- **`value`** :  `float`  or  `double`   `Tensor` .
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
- **`logcdf`** : a  `Tensor`  of shape  `sample_shape(x) + self.batch_shape`  withvalues of type  `self.dtype` .


###  `log_prob` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L784-L795)

```
 log_prob(
    value,
    name='log_prob'
)
 
```

对数概率密度/质量函数。

Additional documentation from  `DirichletMultinomial` :

For each batch of counts, `value = [n_0, ..., n_{K-1}]` ,  `P[value]`  is the probability that aftersampling  `self.total_count`  draws from this Dirichlet-Multinomial distribution,the number of draws falling in class  `j`  is  `n_j` . Since this definition is[exchangeable](https://en.wikipedia.org/wiki/Exchangeable_random_variables);different sequences have the same counts so the probability includes acombinatorial coefficient.


**Note:**   `value`  must be a non-negative tensor with dtype  `self.dtype` , have nofractional components, and such that `tf.reduce_sum(value, -1) = self.total_count` . Its shape must be broadcastablewith  `self.concentration`  and  `self.total_count` .


#### 参数：
- **`value`** :  `float`  or  `double`   `Tensor` .
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
- **`log_prob`** : a  `Tensor`  of shape  `sample_shape(x) + self.batch_shape`  withvalues of type  `self.dtype` .


###  `log_survival_function` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L917-L939)

```
 log_survival_function(
    value,
    name='log_survival_function'
)
 
```

日志生存函数。

Given random variable  `X` , the survival function is defined:

```
 log_survival_function(x) = Log[ P[X > x] ]                         = Log[ 1 - P[X <= x] ]                         = Log[ 1 - cdf(x) ] 
```

Typically, different numerical approximations can be used for the logsurvival function, which are more accurate than  `1 - cdf(x)`  when  `x >> 1` .

#### 参数：
- **`value`** :  `float`  or  `double`   `Tensor` .
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
 `Tensor`  of shape  `sample_shape(x) + self.batch_shape`  with values of type   `self.dtype` .

###  `mean` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L991-L994)

```
 mean(name='mean')
 
```

卑鄙。

###  `mode` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L1137-L1140)

```
 mode(name='mode')
 
```

模式。

###  `param_shapes` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L497-L516)

```
 param_shapes(
    cls,
    sample_shape,
    name='DistributionParamShapes'
)
 
```

Shapes of parameters given the desired shape of a call to  `sample()` .

This is a class method that describes what key/value arguments are requiredto instantiate the given  `Distribution`  so that a particular shape isreturned for that instance's call to  `sample()` .

Subclasses should override class method  `_param_shapes` .

#### 参数：
- **`sample_shape`** :  `Tensor`  or python list/tuple. Desired shape of a call to `sample()` .
- **`name`** : name to prepend ops with.


#### 返回：
 `dict`  of parameter name to  `Tensor`  shapes.

###  `param_static_shapes` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L518-L555)

```
 param_static_shapes(
    cls,
    sample_shape
)
 
```

param_shapes with static (i.e.  `TensorShape` ) shapes.

This is a class method that describes what key/value arguments are requiredto instantiate the given  `Distribution`  so that a particular shape isreturned for that instance's call to  `sample()` . Assumes that the sample'sshape is known statically.

Subclasses should override class method  `_param_shapes`  to returnconstant-valued tensors when constant values are fed.

#### 参数：
- **`sample_shape`** :  `TensorShape`  or python list/tuple. Desired shape of a callto  `sample()` .


#### 返回：
 `dict`  of parameter name to  `TensorShape` .

#### 加薪：
- **`ValueError`** : if  `sample_shape`  is a  `TensorShape`  and is not fully defined.


###  `prob` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L813-L824)

```
 prob(
    value,
    name='prob'
)
 
```

概率密度/质量函数。

Additional documentation from  `DirichletMultinomial` :

For each batch of counts, `value = [n_0, ..., n_{K-1}]` ,  `P[value]`  is the probability that aftersampling  `self.total_count`  draws from this Dirichlet-Multinomial distribution,the number of draws falling in class  `j`  is  `n_j` . Since this definition is[exchangeable](https://en.wikipedia.org/wiki/Exchangeable_random_variables);different sequences have the same counts so the probability includes acombinatorial coefficient.


**Note:**   `value`  must be a non-negative tensor with dtype  `self.dtype` , have nofractional components, and such that `tf.reduce_sum(value, -1) = self.total_count` . Its shape must be broadcastablewith  `self.concentration`  and  `self.total_count` .


#### 参数：
- **`value`** :  `float`  or  `double`   `Tensor` .
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
- **`prob`** : a  `Tensor`  of shape  `sample_shape(x) + self.batch_shape`  withvalues of type  `self.dtype` .


###  `quantile` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L1006-L1023)

```
 quantile(
    value,
    name='quantile'
)
 
```

分位数函数。又称“逆CDF”或“百分点函数”。

Given random variable  `X`  and  `p in [0, 1]` , the  `quantile`  is:

```
 quantile(p) := x such that P[X <= x] == p 
```

#### 参数：
- **`value`** :  `float`  or  `double`   `Tensor` .
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
- **`quantile`** : a  `Tensor`  of shape  `sample_shape(x) + self.batch_shape`  withvalues of type  `self.dtype` .


###  `sample` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L752-L766)

```
 sample(
    sample_shape=(),
    seed=None,
    name='sample'
)
 
```

生成指定形状的示例。

Note that a call to  `sample()`  without arguments will generate a singlesample.

#### 参数：
- **`sample_shape`** : 0D or 1D  `int32`   `Tensor` . Shape of the generated samples.
- **`seed`** : Python integer seed for RNG
- **`name`** : name to give to the op.


#### 返回：
- **`samples`** : a  `Tensor`  with prepended dimensions  `sample_shape` .


###  `stddev` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L1061-L1088)

```
 stddev(name='stddev')
 
```

标准偏差。

Standard deviation is defined as,

```
 stddev = E[(X - E[X])**2]**0.5 
```

where  `X`  is the random variable associated with this distribution,  `E` denotes expectation, and  `stddev.shape = batch_shape + event_shape` .

#### 参数：
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
- **`stddev`** : Floating-point  `Tensor`  with shape identical to `batch_shape + event_shape` , i.e., the same shape as  `self.mean()` .


###  `survival_function` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L957-L976)

```
 survival_function(
    value,
    name='survival_function'
)
 
```

生存功能。

Given random variable  `X` , the survival function is defined:

```
 survival_function(x) = P[X > x]                     = 1 - P[X <= x]                     = 1 - cdf(x). 
```

#### 参数：
- **`value`** :  `float`  or  `double`   `Tensor` .
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
 `Tensor`  of shape  `sample_shape(x) + self.batch_shape`  with values of type   `self.dtype` .

###  `variance` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L1029-L1055)

```
 variance(name='variance')
 
```

方差。

Variance is defined as,

```
 Var = E[(X - E[X])**2] 
```

where  `X`  is the random variable associated with this distribution,  `E` denotes expectation, and  `Var.shape = batch_shape + event_shape` .

#### 参数：
- **`name`** : Python  `str`  prepended to names of ops created by this function.


#### 返回：
- **`variance`** : Floating-point  `Tensor`  with shape identical to `batch_shape + event_shape` , i.e., the same shape as  `self.mean()` .
