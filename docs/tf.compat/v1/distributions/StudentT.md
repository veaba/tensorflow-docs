## Class StudentT
Student's t-distribution.
Inherits From: `Distribution`
This distribution has parameters: degree of freedom `df`, `loc`ation `loc`, and `scale`.
#### Mathematical details
The probability density function (pdf) is,

```
 pdf(x; df, mu, sigma) = (1 + y**2 / df)**(-0.5 (df + 1)) / Z
where,
y = (x - mu) / sigma
Z = abs(sigma) sqrt(df pi) Gamma(0.5 df) / Gamma(0.5 (df + 1))
```
where: * `loc = mu`, * `scale = sigma`, and, * `Z` is the normalization constant, and, * `Gamma` is the gamma function.
The StudentT distribution is a member of the location-scale family, i.e., it can be constructed as,

```
 X ~ StudentT(df, loc=0, scale=1)
Y = loc + scale * X
```
