## Class Categorical
Categorical distribution.
Inherits From: `Distribution`
The Categorical distribution is parameterized by either probabilities or log-probabilities of a set of `K` classes. It is defined over the integers `{0, 1, ..., K}`.
The Categorical distribution is closely related to the `OneHotCategorical` and `Multinomial` distributions. The Categorical distribution can be intuited as generating samples according to argmax{ `OneHotCategorical`(probs) } itself being identical to argmax{ `Multinomial`(probs, total_count=1) }.
#### Mathematical Details
The probability mass function (pmf) is,

```
 pmf(k; pi) = prod_j pi_j**[k == j]
```
#### Pitfalls
