## Class Bernoulli
Bernoulli distribution.
Inherits From: `Distribution`
The Bernoulli distribution with `probs` parameter, i.e., the probability of a `1` outcome (vs a `0` outcome).
## __init__
View source

```
 __init__(
    logits=None,
    probs=None,
    dtype=tf.dtypes.int32,
    validate_args=False,
    allow_nan_stats=True,
    name='Bernoulli'
)
```
Construct Bernoulli distributions. (deprecated)
#### Args:
- `logits`: An N-D `Tensor` representing the log-odds of a `1` event. Each entry in the `Tensor` parametrizes an independent Bernoulli distribution where the probability of an event is sigmoid(`logits`). Only one of `logits` or `probs` should be passed in.
- `probs`: An N-D `Tensor` representing the probability of a `1` event. Each entry in the `Tensor` parameterizes an independent Bernoulli distribution. Only one of `logits` or `probs` should be passed in.
- `dtype`: The type of the event samples. Default: `int32`.
- `validate_args`: Python `bool`, default `False`. When `True` distribution parameters are checked for validity despite possibly degrading runtime performance. When `False` invalid inputs may silently render incorrect outputs.
- `allow_nan_stats`: Python `bool`, default `True`. When `True`, statistics (e.g., mean, mode, variance) use the value "`NaN`" to indicate the result is undefined. When `False`, an exception is raised if one or more of the statistic's batch members are undefined.
- `name`: Python `str` `name` prefixed to Ops created by this class.
#### Raises:
- `ValueError`: If p and logits are passed, or if neither are passed.
## Properties
### allow_nan_stats
Python `bool` describing behavior when a stat is undefined.
Stats return +/- infinity when it makes sense. E.g., the variance of a Cauchy distribution is infinity. However, sometimes the statistic is undefined, e.g., if a distribution's pdf does not achieve a maximum within the support of the distribution, the mode is undefined. If the mean is undefined, then by definition the variance is undefined. E.g. the mean for Student's T for df = 1 is undefined (no clear way to say it is either + or - infinity), so the variance = E[(X - mean)**2] is also undefined.
#### Returns:
- `allow_nan_stats`: Python `bool`.
### batch_shape
Shape of a single sample from a single event index as a `TensorShape`.
May be partially defined or unknown.
The batch dimensions are indexes into independent, non-identical parameterizations of this distribution.
#### Returns:
- `batch_shape`: `TensorShape`, possibly unknown.
### dtype
The `DType` of `Tensor`s handled by this `Distribution`.
### event_shape
Shape of a single sample from a single batch as a `TensorShape`.
May be partially defined or unknown.
#### Returns:
- `event_shape`: `TensorShape`, possibly unknown.
### logits
Log-odds of a `1` outcome (vs `0`).
### name
Name prepended to all ops created by this `Distribution`.
### parameters
Dictionary of parameters used to instantiate this `Distribution`.
### probs
Probability of a `1` outcome (vs `0`).
### reparameterization_type
Describes how samples from the distribution are reparameterized.
Currently this is one of the static instances `distributions.FULLY_REPARAMETERIZED` or `distributions.NOT_REPARAMETERIZED`.
#### Returns:
An instance of `ReparameterizationType`.
### validate_args
Python `bool` indicating possibly expensive checks are enabled.
## Methods
### batch_shape_tensor
View source

```
 batch_shape_tensor(name='batch_shape_tensor')
```
Shape of a single sample from a single event index as a 1-D `Tensor`.
The batch dimensions are indexes into independent, non-identical parameterizations of this distribution.
#### Args:
- `name`: `name` to give to the op
#### Returns:
- `batch_shape`: `Tensor`.
### cdf
View source

```
 cdf(
    value,
    name='cdf'
)
```
Cumulative distribution function.
Given random variable `X`, the cumulative distribution function `cdf` is:

```
 cdf(x) := P[X <= x]
```
#### Args:
- `value`: `float` or `double` `Tensor`.
- `name`: Python `str` prepended to `name`s of ops created by this function.
#### Returns:
- `cdf`: a `Tensor` of shape sample_shape(x) + self.batch_shape with values of type ``.
### copy
View source

```
 copy(**override_parameters_kwargs)
```
Creates a deep copy of the distribution.
#### Args:
#### Returns:
### covariance
View source

```
 covariance(name='covariance')
```
Covariance.
Covariance is (possibly) defined only for non-scalar-event distributions.
For example, for a length-`k`, vector-valued distribution, it is calculated as,

```
 Cov[i, j] = Covariance(X_i, X_j) = E[(X_i - E[X_i]) (X_j - E[X_j])]
```
where `Cov` is a (batch of) `k x k` matrix, 0 <= (i, j) < k, and `` denotes expectation.
Alternatively, for non-vector, multivariate distributions (e.g., matrix-valued, Wishart), `Covariance` shall return a (batch of) matrices under some vectorization of the events, i.e.,

```
 Cov[i, j] = Covariance(Vec(X)_i, Vec(X)_j) = [as above]
```
