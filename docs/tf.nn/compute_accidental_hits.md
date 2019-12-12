Compute the position ids in  `sampled_candidates`  matching  `true_classes` .

**别名** : [ `tf.compat.v1.nn.compute_accidental_hits` ](/api_docs/python/tf/nn/compute_accidental_hits), [ `tf.compat.v2.nn.compute_accidental_hits` ](/api_docs/python/tf/nn/compute_accidental_hits)

```
 tf.nn.compute_accidental_hits(    true_classes,    sampled_candidates,    num_true,    seed=None,    name=None) 
```

In Candidate Sampling, this operation facilitates virtually removingsampled classes which happen to match target classes.  This is donein Sampled Softmax and Sampled Logistic.

See our [Candidate Sampling AlgorithmsReference](http://tensorflow.google.cn/extras/candidate_sampling.pdf).

We presuppose that the  `sampled_candidates`  are unique.

We call it an 'accidental hit' when one of the target classesmatches one of the sampled classes.  This operation reportsaccidental hits as triples  `(index, id, weight)` , where  `index` represents the row number in  `true_classes` ,  `id`  represents theposition in  `sampled_candidates` , and weight is  `-FLOAT_MAX` .

The result of this op should be passed through a  `sparse_to_dense` operation, then added to the logits of the sampled classes. Thisremoves the contradictory effect of accidentally sampling the truetarget classes as noise classes for the same example.

#### 参数：
- **`true_classes`** : A  `Tensor`  of type  `int64`  and shape  `[batch_size,num_true]` . The target classes.
- **`sampled_candidates`** : A tensor of type  `int64`  and shape  `[num_sampled]` .The sampled_candidates output of CandidateSampler.
- **`num_true`** : An  `int` .  The number of target classes per training example.
- **`seed`** : An  `int` . An operation-specific seed. Default is 0.
- **`name`** : A name for the operation (optional).


#### 返回：
- **`indices`** : A  `Tensor`  of type  `int32`  and shape  `[num_accidental_hits]` .Values indicate rows in  `true_classes` .
- **`ids`** : A  `Tensor`  of type  `int64`  and shape  `[num_accidental_hits]` .Values indicate positions in  `sampled_candidates` .
- **`weights`** : A  `Tensor`  of type  `float`  and shape  `[num_accidental_hits]` .Each value is  `-FLOAT_MAX` .
