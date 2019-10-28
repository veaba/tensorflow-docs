## Class Multinomial
Multinomial distribution.
Inherits From: `Distribution`
This Multinomial distribution is parameterized by `probs`, a (batch of) length-`K` `prob` (`prob`ability) vectors (`K` > 1) such that tf.reduce_sum(`probs`, -1) = 1, and a `total_count` number of trials, i.e., the number of trials per draw from the Multinomial. It is defined over a (batch of) length-`K` vector `counts` such that tf.reduce_sum(`counts`, -1) = `total_count`. The Multinomial is identically the Binomial distribution when `K` = 2.
#### Mathematical Details
The Multinomial is a distribution over `K`-class counts, i.e., a length-`K` vector of non-negative integer `counts = n = [n_0, ..., n_{K-1}]`.
The probability mass function (pmf) is,

```
 pmf(n; pi, N) = prod_j (pi_j)**n_j / Z
Z = (prod_j n_j!) / N!
```
where: * `probs = pi = [pi_0, ..., pi_{K-1}]`, `pi_j > 0`, `sum_j pi_j = 1`, * `total_count = N`, `N` a positive integer, * `Z` is the normalization constant, and, * `N`! denotes `N` factorial.
Distribution parameters are automatically broadcast in all functions; see examples for details.
#### Pitfalls
