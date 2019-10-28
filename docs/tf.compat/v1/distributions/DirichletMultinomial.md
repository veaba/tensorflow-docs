## Class DirichletMultinomial
Dirichlet-Multinomial compound distribution.
Inherits From: `Distribution`
The Dirichlet-Multinomial distribution is parameterized by a (batch of) length-`K` `concentration` vectors (`K` > 1) and a `total_count` number of trials, i.e., the number of trials per draw from the DirichletMultinomial. It is defined over a (batch of) length-`K` vector `counts` such that tf.reduce_sum(`counts`, -1) = `total_count`. The Dirichlet-Multinomial is identically the Beta-Binomial distribution when `K` = 2.
#### Mathematical Details
The Dirichlet-Multinomial is a distribution over `K`-class counts, i.e., a length-`K` vector of non-negative integer `counts = n = [n_0, ..., n_{K-1}]`.
The probability mass function (pmf) is,

```
 pmf(n; alpha, N) = Beta(alpha + n) / (prod_j n_j!) / Z
Z = Beta(alpha) / N!
```
where:
- `concentration = alpha = [alpha_0, ..., alpha_{K-1}]`, `alpha_j > 0`,
- `total_count = N`, `N` a positive integer,
- `N!` is `N` factorial, and,
Dirichlet-Multinomial is a compound distribution, i.e., its samples are generated as follows.
