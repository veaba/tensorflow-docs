停止渐变计算。

**别名** : [ `tf.compat.v1.stop_gradient` ](/api_docs/python/tf/stop_gradient), [ `tf.compat.v2.stop_gradient` ](/api_docs/python/tf/stop_gradient)

```
 tf.stop_gradient(
    input,
    name=None
)
 
```

When executed in a graph, this op outputs its input tensor as-is.

When building ops to compute gradients, this op prevents the contribution ofits inputs to be taken into account.  Normally, the gradient generator adds opsto a graph to compute the derivatives of a specified 'loss' by recursivelyfinding out inputs that contributed to its computation.  If you insert this opin the graph it inputs are masked from the gradient generator.  They are nottaken into account for computing gradients.

This is useful any time you want to compute a value with TensorFlow but needto pretend that the value was a constant. Some examples include:

- The *EM* algorithm where the *M-step* should not involve backpropagationthrough the output of the *E-step*.
- Contrastive divergence training of Boltzmann machines where, whendifferentiating the energy function, the training must not backpropagatethrough the graph that generated the samples from the model.
- Adversarial training, where no backprop should happen through the adversarialexample generation process.


#### 参数：
- **`input`** : A  `Tensor` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

