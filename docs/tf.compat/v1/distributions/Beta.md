## Class Beta
Beta distribution.
Inherits From: `Distribution`
The Beta distribution is defined over the `0, 1)` interval using parameters `concentration1` (aka "alpha") and `concentration0` (aka "beta").
#### Mathematical Details
The probability density function (pdf) is,

```
 pdf(x; alpha, beta) = x**(alpha - 1) (1 - x)**(beta - 1) / Z
Z = Gamma(alpha) Gamma(beta) / Gamma(alpha + beta)
```
where:
- `concentration1 = alpha`,
- `concentration0 = beta`,
- `Z` is the normalization constant, and,
- `Gamma` is the gamma function.
The concentration parameters represent mean total counts of a `1` or a `0`, i.e.,

```
 concentration1 = alpha = mean * total_concentration
concentration0 = beta  = (1. - mean) * total_concentration
```
where `mean` in `0, 1)` and `total_concentration` is a positive real number representing a `mean` `total_count = concentration1 + concentration0`.
Distribution parameters are automatically broadcast in all functions; see examples for details.
Samples of this distribution are reparameterized (pathwise differentiable). The derivatives are computed using the approach described in the paper
Michael Figurnov, Shakir Mohamed, Andriy Mnih. Implicit Reparameterization Gradients, 2018
#### Examples

```
 import tensorflow_probability as tfp
tfd = tfp.distributions

# Create a batch of three Beta distributions.
alpha = [1, 2, 3]
beta = [1, 2, 3]
dist = tfd.Beta(alpha, beta)

dist.sample([4, 5])  # Shape [4, 5, 3]

# `x` has three batch entries, each with two samples.
x = [[.1, .4, .5],
     [.2, .3, .5]]
# Calculate the probability of each pair of samples under the corresponding
# distribution in `dist`.
dist.prob(x)         # Shape [2, 3]
```

```
 # Create batch_shape=[2, 3] via parameter broadcast:
alpha = [[1.], [2]]      # Shape [2, 1]
beta = [3., 4, 5]        # Shape [3]
dist = tfd.Beta(alpha, beta)

# alpha broadcast as: [[1., 1, 1,],
#                      [2, 2, 2]]
# beta broadcast as:  [[3., 4, 5],
#                      [3, 4, 5]]
# batch_Shape [2, 3]
dist.sample([4, 5])  # Shape [4, 5, 2, 3]

x = [.2, .3, .5]
# x will be broadcast as [[.2, .3, .5],
#                         [.2, .3, .5]],
# thus matching batch_shape [2, 3].
dist.prob(x)         # Shape [2, 3]
```
Compute the gradients of samples w.r.t. the parameters:

```
 alpha = tf.constant(1.0)
beta = tf.constant(2.0)
dist = tfd.Beta(alpha, beta)
samples = dist.sample(5)  # Shape [5]
loss = tf.reduce_mean(tf.square(samples))  # Arbitrary loss function
# Unbiased stochastic gradients of the loss function
grads = tf.gradients(loss, [alpha, beta])
```
## __init__
View source

```
 __init__(
    concentration1=None,
    concentration0=None,
    validate_args=False,
    allow_nan_stats=True,
    name='Beta'
)
```
Initialize a batch of Beta distributions. (deprecated)
#### Args:
- `concentration1`: Positive floating-point `Tensor` indicating mean number of successes; aka "alpha". Implies `self.dtype` and `self.batch_shape`, i.e., `concentration1`.shape = [N1, N2, ..., Nm] = `self.batch_shape`.
- `concentration0`: Positive floating-point `Tensor` indicating mean number of failures; aka "beta". Otherwise has same semantics as `concentration1`.
- `validate_args`: Python `bool`, default `False`. When `True` distribution parameters are checked for validity despite possibly degrading runtime performance. When `False` invalid inputs may silently render incorrect outputs.
- `allow_nan_stats`: Python `bool`, default `True`. When `True`, statistics (e.g., mean, mode, variance) use the value "`NaN`" to indicate the result is undefined. When `False`, an exception is raised if one or more of the statistic's batch members are undefined.
- `name`: Python `str` `name` prefixed to Ops created by this class.
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
### concentration0
Concentration parameter associated with a `0` outcome.
### concentration1
Concentration parameter associated with a `1` outcome.
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
### reparameterization_type
Describes how samples from the distribution are reparameterized.
Currently this is one of the static instances `distributions.FULLY_REPARAMETERIZED` or `distributions.NOT_REPARAMETERIZED`.
#### Returns:
An instance of `ReparameterizationType`.
### total_concentration
Sum of concentration parameters.
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
Additional documentation from `Beta`:
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
