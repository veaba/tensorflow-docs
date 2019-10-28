## Class Gamma
Gamma distribution.
Inherits From: `Distribution`
The Gamma distribution is defined over positive real numbers using parameters `concentration` (aka "alpha") and `rate` (aka "beta").
#### Mathematical Details
The probability density function (pdf) is,

```
 pdf(x; alpha, beta, x > 0) = x**(alpha - 1) exp(-x beta) / Z
Z = Gamma(alpha) beta**(-alpha)
```
where:
- `concentration = alpha`, `alpha > 0`,
- `rate = beta`, `beta > 0`,
- `Z` is the normalizing constant, and,
- `Gamma` is the gamma function.
The cumulative density function (cdf) is,

```
 cdf(x; alpha, beta, x > 0) = GammaInc(alpha, beta x) / Gamma(alpha)
```
where `GammaInc` is the lower incomplete Gamma function.
The parameters can be intuited via their relationship to mean and stddev,

```
 concentration = alpha = (mean / stddev)**2
rate = beta = mean / stddev**2 = concentration / mean
```
Distribution parameters are automatically broadcast in all functions; see examples for details.
Samples of this distribution are reparameterized (pathwise differentiable). The derivatives are computed using the approach described in the paper
Michael Figurnov, Shakir Mohamed, Andriy Mnih. Implicit Reparameterization Gradients, 2018
#### Examples

```
 import tensorflow_probability as tfp
tfd = tfp.distributions

dist = tfd.Gamma(concentration=3.0, rate=2.0)
dist2 = tfd.Gamma(concentration=[3.0, 4.0], rate=[2.0, 3.0])
```
Compute the gradients of samples w.r.t. the parameters:

```
 concentration = tf.constant(3.0)
rate = tf.constant(2.0)
dist = tfd.Gamma(concentration, rate)
samples = dist.sample(5)  # Shape [5]
loss = tf.reduce_mean(tf.square(samples))  # Arbitrary loss function
# Unbiased stochastic gradients of the loss function
grads = tf.gradients(loss, [concentration, rate])
```
## __init__
View source

```
 __init__(
    concentration,
    rate,
    validate_args=False,
    allow_nan_stats=True,
    name='Gamma'
)
```
Construct Gamma with `concentration` and `rate` parameters. (deprecated)
The parameters `concentration` and `rate` must be shaped in a way that supports broadcasting (e.g. `concentration` + `rate` is a valid operation).
#### Args:
- `concentration`: Floating point tensor, the `concentration` params of the distribution(s). Must contain only positive values.
- `rate`: Floating point tensor, the inverse scale params of the distribution(s). Must contain only positive values.
- `validate_args`: Python `bool`, default `False`. When `True` distribution parameters are checked for validity despite possibly degrading runtime performance. When `False` invalid inputs may silently render incorrect outputs.
- `allow_nan_stats`: Python `bool`, default `True`. When `True`, statistics (e.g., mean, mode, variance) use the value "`NaN`" to indicate the result is undefined. When `False`, an exception is raised if one or more of the statistic's batch members are undefined.
- `name`: Python `str` `name` prefixed to Ops created by this class.
#### Raises:
- `TypeError`: if `concentration` and `rate` are different dtypes.
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
### concentration
Concentration parameter.
### dtype
The `DType` of `Tensor`s handled by this `Distribution`.
### event_shape
Shape of a single sample from a single batch as a `TensorShape`.
May be partially defined or unknown.
#### Returns:
- `event_shape`: `TensorShape`, possibly unknown.
### name
Name prepended to all ops created by this `Distribution`.
### parameters
Dictionary of parameters used to instantiate this `Distribution`.
### rate
Rate parameter.
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
