

## Class  `Distribution` 
一般概率分布基类。

 `Distribution`  is a base class for constructing and organizing properties(e.g., mean, variance) of random variables (e.g, Bernoulli, Gaussian).

#### 子类化
Subclasses are expected to implement a leading-underscore version of thesame-named function. The argument signature should be identical except forthe omission of  `name="..."` . For example, to enable  `log_prob(value,name="log_prob")`  a subclass should implement  `_log_prob(value)` .

Subclasses can append to public-level docstrings by providingdocstrings for their method specializations. For example:

```
 @util.AppendDocstring("Some other details.")
def _log_prob(self, value):
  ...
 
```

would add the string "Some other details." to the  `log_prob`  functiondocstring. This is implemented as a simple decorator to avoid pythonlinter complaining about missing Args/Returns/Raises sections in thepartial docstrings.

#### Broadcasting, batching, and shapes
All distributions support batches of independent distributions of that type.The batch shape is determined by broadcasting together the parameters.

The shape of arguments to  `__init__` ,  `cdf` ,  `log_cdf` ,  `prob` , and `log_prob`  reflect this broadcasting, as does the return value of  `sample`  and `sample_n` .

 `sample_n_shape = [n] + batch_shape + event_shape` , where  `sample_n_shape`  isthe shape of the  `Tensor`  returned from  `sample_n` ,  `n`  is the number ofsamples,  `batch_shape`  defines how many independent distributions there are,and  `event_shape`  defines the shape of samples from each of those independentdistributions. Samples are independent along the  `batch_shape`  dimensions, butnot necessarily so along the  `event_shape`  dimensions (depending on theparticulars of the underlying distribution).

Using the  `Uniform`  distribution as an example:

```
 minval = 3.0
maxval = [[4.0, 6.0],
          [10.0, 12.0]]

# Broadcasting:
# This instance represents 4 Uniform distributions. Each has a lower bound at
# 3.0 as the `minval` parameter was broadcasted to match `maxval`'s shape.
u = Uniform(minval, maxval)

# `event_shape` is `TensorShape([])`.
event_shape = u.event_shape
# `event_shape_t` is a `Tensor` which will evaluate to [].
event_shape_t = u.event_shape_tensor()

# Sampling returns a sample per distribution. `samples` has shape
# [5, 2, 2], which is [n] + batch_shape + event_shape, where n=5,
# batch_shape=[2, 2], and event_shape=[].
samples = u.sample_n(5)

# The broadcasting holds across methods. Here we use `cdf` as an example. The
# same holds for `log_cdf` and the likelihood functions.

# `cum_prob` has shape [2, 2] as the `value` argument was broadcasted to the
# shape of the `Uniform` instance.
cum_prob_broadcast = u.cdf(4.0)

# `cum_prob`'s shape is [2, 2], one per distribution. No broadcasting
# occurred.
cum_prob_per_dist = u.cdf([[4.0, 5.0],
                           [6.0, 7.0]])

# INVALID as the `value` argument is not broadcastable to the distribution's
# shape.
cum_prob_invalid = u.cdf([4.0, 5.0, 6.0])
 
```

#### 形状
There are three important concepts associated with TensorFlow Distributionsshapes:

- Event shape describes the shape of a single draw from the distribution;it may be dependent across dimensions. For scalar distributions, the eventshape is  `[]` . For a 5-dimensional MultivariateNormal, the event shape is `[5]` .
- Batch shape describes independent, not identically distributed draws, aka a"collection" or "bunch" of distributions.
- Sample shape describes independent, identically distributed draws of batchesfrom the distribution family.
The event shape and the batch shape are properties of a Distribution object,whereas the sample shape is associated with a specific call to  `sample`  or `log_prob` .

For detailed usage examples of TensorFlow Distributions shapes, see[this tutorial](https://github.com/tensorflow/probability/blob/master/tensorflow_probability/examples/jupyter_notebooks/Understanding_TensorFlow_Distributions_Shapes.ipynb)

#### 导致未定义统计或分布的参数值。
Some distributions do not have well-defined statistics for all initializationparameter values. For example, the beta distribution is parameterized bypositive real numbers  `concentration1`  and  `concentration0` , and does not havewell-defined mode if  `concentration1 < 1`  or  `concentration0 < 1` .

The user is given the option of raising an exception or returning  `NaN` .

```
 a = tf.exp(tf.matmul(logits, weights_a))
b = tf.exp(tf.matmul(logits, weights_b))

# Will raise exception if ANY batch member has a < 1 or b < 1.
dist = distributions.beta(a, b, allow_nan_stats=False)
mode = dist.mode().eval()

# Will return NaN for batch members with either a < 1 or b < 1.
dist = distributions.beta(a, b, allow_nan_stats=True)  # Default behavior
mode = dist.mode().eval()
 
```

In all cases, an exception is raised if *invalid* parameters are passed, e.g.

```
 # Will raise an exception if any Op is run.
negative_a = -1.0 * a  # beta distribution by definition has a > 0.
dist = distributions.beta(negative_a, b, allow_nan_stats=True)
dist.mean().eval()
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L417-L477)

```
 __init__(
    dtype,
    reparameterization_type,
    validate_args,
    allow_nan_stats,
    parameters=None,
    graph_parents=None,
    name=None
)
 
```

Constructs the  `Distribution` . (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed after 2019-01-01.Instructions for updating:The TensorFlow Distributions library has moved to TensorFlow Probability (https://github.com/tensorflow/probability). You should update all references to use [ `tfp.distributions` ](/probability/api_docs/python/tfp/distributions) instead of  `tf.distributions` .
**This is a private method for subclass use.** 

#### 参数：
- **`dtype`** : The type of the event samples.  `None`  implies no type-enforcement.
- **`reparameterization_type`** : Instance of  `ReparameterizationType` .If [ `distributions.FULLY_REPARAMETERIZED` ](/probability/api_docs/python/tfp/distributions#FULLY_REPARAMETERIZED), this `Distribution`  can be reparameterized in terms of some standarddistribution with a function whose Jacobian is constant for the supportof the standard distribution. If [ `distributions.NOT_REPARAMETERIZED` ](/probability/api_docs/python/tfp/distributions#NOT_REPARAMETERIZED),then no such reparameterization is available.
- **`validate_args`** : Python  `bool` , default  `False` . When  `True`  distributionparameters are checked for validity despite possibly degrading runtimeperformance. When  `False`  invalid inputs may silently render incorrectoutputs.
- **`allow_nan_stats`** : Python  `bool` , default  `True` . When  `True` , statistics(e.g., mean, mode, variance) use the value " `NaN` " to indicate theresult is undefined. When  `False` , an exception is raised if one ormore of the statistic's batch members are undefined.
- **`parameters`** : Python  `dict`  of parameters used to instantiate this `Distribution` .
- **`graph_parents`** : Python  `list`  of graph prerequisites of this `Distribution` .
- **`name`** : Python  `str`  name prefixed to Ops created by this class. Default:subclass name.


#### 加薪：
- **`ValueError`** : if any member of graph_parents is  `None`  or not a  `Tensor` .


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
 @classmethod
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
 @classmethod
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
