

## Class  `Generator` 
Random-number generator.

**别名** : [ `tf.compat.v1.random.experimental.Generator` ](/api_docs/python/tf/random/experimental/Generator), [ `tf.compat.v2.random.experimental.Generator` ](/api_docs/python/tf/random/experimental/Generator)

It uses Variable to manage its internal state, and allows choosing anRandom-Number-Generation (RNG) algorithm.

CPU, GPU and TPU with the same algorithm and seed will generate the sameinteger random numbers. Float-point results (such as the output of  `normal` )may have small numerical discrepancies between CPU and GPU.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L182-L214)

```
 __init__(
    copy_from=None,
    state=None,
    alg=None
)
 
```

创建生成器。

The new generator will be initialized by one of the following ways, withdecreasing precedence:(1) If  `copy_from`  is not None, the new generator is initialized by copying    information from another generator.(3) If  `state`  and  `alg`  are not None (they must be set together), the new    generator is initialized by a state.

#### 参数：
- **`copy_from`** : a generator to be copied from.
- **`state`** : a vector of dtype STATE_TYPE representing the initial state of theRNG, whose length and semantics are algorithm-specific.
- **`alg`** : the RNG algorithm. Possible values are RNG_ALG_PHILOX for thePhilox algorithm and RNG_ALG_THREEFRY for the ThreeFryalgorithm (see paper 'Parallel Random Numbers: As Easy as 1, 2, 3'[https://www.thesalmons.org/john/random123/papers/random123sc11.pdf]).


## 属性


###  `algorithm` 
rng算法。

###  `key` 
The 'key' part of the state of a counter-based RNG.

For a counter-base RNG algorithm such as Philox and ThreeFry (asdescribed in paper 'Parallel Random Numbers: As Easy as 1, 2, 3'[https://www.thesalmons.org/john/random123/papers/random123sc11.pdf]),the RNG state consists of two parts: counter and key. The output isgenerated via the formula: output=hash(key, counter), i.e. a hashing ofthe counter parametrized by the key. Two RNGs with two different keys canbe thought as generating two independent random-number streams (a streamis formed by increasing the counter).

#### 返回：
A scalar which is the 'key' part of the state, if the RNG algorithm is  counter-based; otherwise it raises a ValueError.

###  `state` 
RNG的内部状态。

## 方法


###  `binomial` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L533-L581)

```
 binomial(
    shape,
    counts,
    probs,
    dtype=tf.dtypes.int32,
    name=None
)
 
```

从二项式分布中输出随机值。

The generated values follow a binomial distribution with specified count andprobability of success parameters.

#### 示例：


```
 counts = [10., 20.]
# Probability of success.
probs = [0.8, 0.9]

rng = tf.random.experimental.Generator.from_seed(seed=234)
binomial_samples = rng.binomial(shape=[2], counts=counts, probs=probs)
 
```

#### 参数：
- **`shape`** : A 1-D integer Tensor or Python array. The shape of the outputtensor.
- **`counts`** : A 0/1-D Tensor or Python value. The counts of the binomialdistribution.  Must be broadcastable with the leftmost dimensiondefined by  `shape` .
- **`probs`** : A 0/1-D Tensor or Python value. The probability of success for thebinomial distribution.  Must be broadcastable with the leftmostdimension defined by  `shape` .
- **`dtype`** : The type of the output. Default: tf.int32
- **`name`** : A name for the operation (optional).


#### 返回：
- **`samples`** : A Tensor of the specified shape filled with random binomialvalues.  For each i, each samples[i, ...] is an independent draw fromthe binomial distribution on counts[i] trials with probability ofsuccess probs[i].


###  `from_key_counter` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L276-L299)

```
 @classmethod
from_key_counter(
    cls,
    key,
    counter,
    alg
)
 
```

从键和计数器创建生成器。

This constructor only applies if the algorithm is a counter-based algorithm.See method  `key`  for the meaning of "key" and "counter".

#### 参数：
- **`key`** : the key for the RNG, a scalar of type STATE_TYPE.
- **`counter`** : a vector of dtype STATE_TYPE representing the initial counter forthe RNG, whose length is algorithm-specific.,
- **`alg`** : the RNG algorithm. If None, it will be auto-selected. See `__init__`  for its possible values.


#### 返回：
新发电机。

###  `from_non_deterministic_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L256-L274)

```
 @classmethod
from_non_deterministic_state(
    cls,
    alg=None
)
 
```

Creates a generator by non-deterministically initializing its state.

The source of the non-determinism will be platform- and time-dependent.

#### 参数：
- **`alg`** : (optional) the RNG algorithm. If None, it will be auto-selected. See `__init__`  for its possible values.


#### 返回：
新发电机。

###  `from_seed` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L231-L254)

```
 @classmethod
from_seed(
    cls,
    seed,
    alg=None
)
 
```

从种子创建生成器。

A seed is a 1024-bit unsigned integer represented either as a Pythoninteger or a vector of integers. Seeds shorter than 1024-bit will bepadded. The padding, the internal structure of a seed and the way a seedis converted to a state are all opaque (unspecified). The only semanticsspecification of seeds is that two different seeds are likely to producetwo independent generators (but no guarantee).

#### 参数：
- **`seed`** : the seed for the RNG.
- **`alg`** : (optional) the RNG algorithm. If None, it will be auto-selected. See `__init__`  for its possible values.


#### 返回：
新发电机。

###  `from_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L216-L229)

```
 @classmethod
from_state(
    cls,
    state,
    alg
)
 
```

从状态创建生成器。

See  `__init__`  for description of  `state`  and  `alg` .

#### 参数：
- **`state`** : the new state.
- **`alg`** : the RNG algorithm.


#### 返回：
新发电机。

###  `make_seeds` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L592-L620)

```
 make_seeds(count=1)
 
```

为无状态随机操作生成种子。

#### 例如：


```
 seeds = get_global_generator().make_seeds(count=10)
for i in range(10):
  seed = seeds[:, i]
  numbers = stateless_random_normal(shape=[2, 3], seed=seed)
  ...
 
```

#### 参数：
- **`count`** : the number of seed pairs (note that stateless random ops need apair of seeds to invoke).


#### 返回：
A tensor of shape [2, count] and dtype int64.

###  `normal` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L392-L414)

```
 normal(
    shape,
    mean=0.0,
    stddev=1.0,
    dtype=tf.dtypes.float32,
    name=None
)
 
```

从正态分布输出随机值。

#### 参数：
- **`shape`** : A 1-D integer Tensor or Python array. The shape of the outputtensor.
- **`mean`** : A 0-D Tensor or Python value of type  `dtype` . The mean of the normaldistribution.
- **`stddev`** : A 0-D Tensor or Python value of type  `dtype` . The standarddeviation of the normal distribution.
- **`dtype`** : The type of the output.
- **`name`** : A name for the operation (optional).


#### 返回：
由随机法值填充的指定形状的张量。

###  `reset` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L301-L311)

```
 reset(state)
 
```

按新状态重置生成器。

See  `__init__`  for the meaning of "state".

#### 参数：
- **`state`** : the new state.


###  `reset_from_key_counter` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L324-L340)

```
 reset_from_key_counter(
    key,
    counter
)
 
```

Resets the generator by a new key-counter pair.

See  `from_key_counter`  for the meaning of "key" and "counter".

#### 参数：
- **`key`** : the new key.
- **`counter`** : the new counter.


###  `reset_from_seed` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L313-L322)

```
 reset_from_seed(seed)
 
```

使用新种子重置生成器。

See  `from_seed`  for the meaning of "seed".

#### 参数：
- **`seed`** : the new seed.


###  `skip` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L379-L388)

```
 skip(delta)
 
```

Advance the counter of a counter-based RNG.

#### 参数：
- **`delta`** : the amount of advancement. The state of the RNG after `skip(n)`  will be the same as that after  `normal([n])` (or any other distribution). The actual increment added to thecounter is an unspecified implementation detail.


###  `split` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L622-L670)

```
 split(count=1)
 
```

Returns a list of independent  `Generator`  objects.

Two generators are independent of each other in the sense that therandom-number streams they generate don't have statistically detectablecorrelations. The new generators are also independent of the old one.The old generator's state will be changed (like other random-numbergenerating methods), so two calls of  `split`  will return differentnew generators.

#### 例如：


```
 gens = get_global_generator().split(count=10)
for gen in gens:
  numbers = gen.normal(shape=[2, 3])
  # ...
gens2 = get_global_generator().split(count=10)
# gens2 will be different from gens
 
```

The new generators will be put on the current device (possible differentfrom the old generator's), for example:

```
 with tf.device("/device:CPU:0"):
  gen = Generator(seed=1234)  # gen is on CPU
with tf.device("/device:GPU:0"):
  gens = gen.split(count=10)  # gens are on GPU
 
```

#### 参数：
- **`count`** : the number of generators to return.


#### 返回：
A list (length  `count` ) of  `Generator`  objects independent of each other.The new generators have the same RNG algorithm as the old one.

###  `truncated_normal` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L420-L452)

```
 truncated_normal(
    shape,
    mean=0.0,
    stddev=1.0,
    dtype=tf.dtypes.float32,
    name=None
)
 
```

从截断正态分布输出随机值。

The generated values follow a normal distribution with specified mean andstandard deviation, except that values whose magnitude is more than2 standard deviations from the mean are dropped and re-picked.

#### 参数：
- **`shape`** : A 1-D integer Tensor or Python array. The shape of the outputtensor.
- **`mean`** : A 0-D Tensor or Python value of type  `dtype` . The mean of thetruncated normal distribution.
- **`stddev`** : A 0-D Tensor or Python value of type  `dtype` . The standarddeviation of the normal distribution, before truncation.
- **`dtype`** : The type of the output.
- **`name`** : A name for the operation (optional).


#### 返回：
A tensor of the specified shape filled with random truncated normal  values.

###  `uniform` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L458-L509)

```
 uniform(
    shape,
    minval=0,
    maxval=None,
    dtype=tf.dtypes.float32,
    name=None
)
 
```

从均匀分布中输出随机值。

The generated values follow a uniform distribution in the range `[minval, maxval)` . The lower bound  `minval`  is included in the range, whilethe upper bound  `maxval`  is excluded. (For float numbers especiallylow-precision types like bfloat16, because ofrounding, the result may sometimes include  `maxval` .)

For floats, the default range is  `[0, 1)` .  For ints, at least  `maxval`  mustbe specified explicitly.

In the integer case, the random integers are slightly biased unless `maxval - minval`  is an exact power of two.  The bias is small for values of `maxval - minval`  significantly smaller than the range of the output (either `2**32`  or  `2**64` ).

#### 参数：
- **`shape`** : A 1-D integer Tensor or Python array. The shape of the outputtensor.
- **`minval`** : A 0-D Tensor or Python value of type  `dtype` . The lower bound onthe range of random values to generate.  Defaults to 0.
- **`maxval`** : A 0-D Tensor or Python value of type  `dtype` . The upper bound onthe range of random values to generate.  Defaults to 1 if  `dtype`  isfloating point.
- **`dtype`** : The type of the output.
- **`name`** : A name for the operation (optional).


#### 返回：
由随机均匀值填充的指定形状的张量。

#### 加薪：
- **`ValueError`** : If  `dtype`  is integral and  `maxval`  is not specified.


###  `uniform_full_int` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L511-L531)

```
 uniform_full_int(
    shape,
    dtype=tf.dtypes.uint64,
    name=None
)
 
```

整数类型的整个范围上的均匀分布。

The other method  `uniform`  only covers the range [minval, maxval), whichcannot be  `dtype` 's full range because  `maxval`  is of type  `dtype` .

#### 参数：
- **`shape`** : the shape of the output.
- **`dtype`** : (optional) the integer type, default to uint64.
- **`name`** : (optional) the name of the node.


#### 返回：
所需形状的随机数张量。

