## Class Dirichlet
Dirichlet distribution.
Inherits From: `Distribution`
The Dirichlet distribution is defined over the `k-1)`-simplex using a positive, length-`k` vector `concentration` (`k` > 1). The Dirichlet is identically the Beta distribution when `k` = 2.
#### Mathematical Details
The Dirichlet is a distribution over the open `k-1)`-simplex, i.e.,

```
 S^{k-1} = { (x_0, ..., x_{k-1}) in R^k : sum_j x_j = 1 and all_j x_j > 0 }.
```
The probability density function (pdf) is,

```
 pdf(x; alpha) = prod_j x_j**(alpha_j - 1) / Z
Z = prod_j Gamma(alpha_j) / Gamma(sum_j alpha_j)
```
where:
- x in S^{k-1}, i.e., the `k-1)`-simplex,
- `concentration = alpha = [alpha_0, ..., alpha_{k-1}]`, `alpha_j > 0`,
- `Z` is the normalization constant aka the multivariate beta function, and,
- `Gamma` is the gamma function.
The `concentration` represents mean total counts of class occurrence, i.e.,

```
 concentration = alpha = mean * total_concentration
```
where `mean` in S^{k-1} and `total_concentration` is a positive real number representing a `mean` total count.
Distribution parameters are automatically broadcast in all functions; see examples for details.
Samples of this distribution are reparameterized (pathwise differentiable). The derivatives are computed using the approach described in the paper
Michael Figurnov, Shakir Mohamed, Andriy Mnih. Implicit Reparameterization Gradients, 2018
#### Examples

```
 import tensorflow_probability as tfp
tfd = tfp.distributions

# Create a single trivariate Dirichlet, with the 3rd class being three times
# more frequent than the first. I.e., batch_shape=[], event_shape=[3].
alpha = [1., 2, 3]
dist = tfd.Dirichlet(alpha)

dist.sample([4, 5])  # shape: [4, 5, 3]

# x has one sample, one batch, three classes:
x = [.2, .3, .5]   # shape: [3]
dist.prob(x)       # shape: []

# x has two samples from one batch:
x = [[.1, .4, .5],
     [.2, .3, .5]]
dist.prob(x)         # shape: [2]

# alpha will be broadcast to shape [5, 7, 3] to match x.
x = [[...]]   # shape: [5, 7, 3]
dist.prob(x)  # shape: [5, 7]
```

```
 # Create batch_shape=[2], event_shape=[3]:
alpha = [[1., 2, 3],
         [4, 5, 6]]   # shape: [2, 3]
dist = tfd.Dirichlet(alpha)

dist.sample([4, 5])  # shape: [4, 5, 2, 3]

x = [.2, .3, .5]
# x will be broadcast as [[.2, .3, .5],
#                         [.2, .3, .5]],
# thus matching batch_shape [2, 3].
dist.prob(x)         # shape: [2]
```
Compute the gradients of samples w.r.t. the parameters:

```
 alpha = tf.constant([1.0, 2.0, 3.0])
dist = tfd.Dirichlet(alpha)
samples = dist.sample(5)  # Shape [5, 3]
loss = tf.reduce_mean(tf.square(samples))  # Arbitrary loss function
# Unbiased stochastic gradients of the loss function
grads = tf.gradients(loss, alpha)
```
## __init__
View source

```
 __init__(
    concentration,
    validate_args=False,
    allow_nan_stats=True,
    name='Dirichlet'
)
```
Initialize a batch of Dirichlet distributions. (deprecated)
#### Args:
- `concentration`: Positive floating-point `Tensor` indicating mean number of class occurrences; aka "alpha". Implies `self.dtype`, and `self.batch_shape`, `self.event_shape`, i.e., if `concentration`.shape = [N1, N2, ..., Nm, k] then `batch_shape = [N1, N2, ..., Nm]` and `event_shape = [k]`.
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
### concentration
Concentration parameter; expected counts for that coordinate.
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
Sum of last dim of concentration parameter.
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
