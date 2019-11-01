![](https://tensorflow.google.cn/images/tf_logo_32px.png)
Clips tensor values to a specified min and max.

### Aliases:

<li><a>`tf.compat.v1.clip_by_value`</a></li><li><a>`tf.compat.v2.clip_by_value`</a></li>

```
tf</span><span class="pun">.
```

### Used in the tutorials:

<li>[DeepDream]()</li><li>[Adversarial example using FGSM]()</li><li>[Neural style transfer]()</li>

Given a tensor `t`, this operation returns a tensor of the same type andshape as `t` with its values clipped to `clip_value_min` and `clip_value_max`.Any values less than `clip_value_min` are set to `clip_value_min`. Any valuesgreater than `clip_value_max` are set to `clip_value_max`.

**Note:** `clip_value_min` needs to be smaller or equal to `clip_value_max` forcorrect results.

#### For example:

```
A </span><span class="pun">=</span><span class="pln"> tf</span><span class="pun">.</span><span class="pln">constant</span><span class="pun">([[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span><span class="pln"> </span><span class="lit">13</span><span class="pun">],</span><span class="pln"> </span><span class="pun">[</span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">21</span><span class="pun">,</span><span class="pln"> </span><span class="lit">13</span><span class="pun">]])</span><span class="pln"><br>B </span><span class="pun">=</span><span class="pln"> tf</span><span class="pun">.</span><span class="pln">clip_by_value</span><span class="pun">(</span><span class="pln">A</span><span class="pun">,</span><span class="pln"> clip_value_min</span><span class="pun">=</span><span class="lit">0</span><span class="pun">,</span><span class="pln"> clip_value_max</span><span class="pun">=</span><span class="lit">3</span><span class="pun">)</span><span class="pln"> </span><span class="com"># [[1, 3, 3],[3, 3, 3]]</span><span class="pln"><br>C </span><span class="pun">=</span><span class="pln"> tf</span><span class="pun">.</span><span class="pln">clip_by_value</span><span class="pun">(</span><span class="pln">A</span><span class="pun">,</span><span class="pln"> clip_value_min</span><span class="pun">=</span><span class="lit">0.</span><span class="pun">,</span><span class="pln"> clip_value_max</span><span class="pun">=</span><span class="lit">3.
```

#### Args:

<li><b>`t`</b>: A `Tensor` or `IndexedSlices`.</li><li><b>`clip_value_min`</b>: A 0-D (scalar) `Tensor`, or a `Tensor` with the same shapeas `t`. The minimum value to clip by.</li><li><b>`clip_value_max`</b>: A 0-D (scalar) `Tensor`, or a `Tensor` with the same shapeas `t`. The maximum value to clip by.</li><li><b>`name`</b>: A name for the operation (optional).</li>

#### Returns:

A clipped `Tensor` or `IndexedSlices`.

#### Raises:

<li><b>`ValueError`</b>: If the clip tensors would trigger array broadcastingthat would make the returned tensor larger than the input.</li><li><b>`TypeError`</b>: If dtype of the input is `int32` and dtype ofthe `clip_value_min' or`clip_value_max`is`float32`</li>
