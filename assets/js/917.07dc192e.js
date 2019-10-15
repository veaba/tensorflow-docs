(window.webpackJsonp=window.webpackJsonp||[]).push([[917],{1105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Applies noisy linear cosine decay to the learning rate.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.compat.v1.train.noisy_linear_cosine_decay(\n    learning_rate,\n    global_step,\n    decay_steps,\n    initial_variance=1.0,\n    variance_decay=0.55,\n    num_periods=0.5,\n    alpha=0.0,\n    beta=0.001,\n    name=None\n)\n")])])]),t("p",[e._v("See [Bello et al., ICML2017] Neural Optimizer Search with RL. https://arxiv.org/abs/1709.07417")]),e._v(" "),t("p",[e._v("For the idea of warm starts here controlled by num_periods, see [Loshchilov & Hutter, ICLR2016] SGDR: Stochastic Gradient Descent with Warm Restarts. https://arxiv.org/abs/1608.03983")]),e._v(" "),t("p",[e._v("Note that linear cosine decay is more aggressive than cosine decay and larger initial learning rates can typically be used.")]),e._v(" "),t("p",[e._v("When training a model, it is often recommended to lower the learning rate as the training progresses. This function applies a noisy linear cosine decay function to a provided initial learning rate. It requires a global_step value to compute the decayed learning rate. You can just pass a TensorFlow variable that you increment at each training step.")]),e._v(" "),t("p",[e._v("The function returns the decayed learning rate. It is computed as:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" global_step = min(global_step, decay_steps)\nlinear_decay = (decay_steps - global_step) / decay_steps)\ncosine_decay = 0.5 * (\n    1 + cos(pi * 2 * num_periods * global_step / decay_steps))\ndecayed = (alpha + linear_decay + eps_t) * cosine_decay + beta\ndecayed_learning_rate = learning_rate * decayed\n")])])]),t("p",[e._v("where eps_t is 0-centered gaussian noise with variance initial_variance / (1 + global_step) ** variance_decay")]),e._v(" "),t("h4",{attrs:{id:"example-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Example usage:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" decay_steps = 1000\nlr_decayed = noisy_linear_cosine_decay(\n  learning_rate, global_step, decay_steps)\n")])])]),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("learning_rate")]),e._v(": A scalar "),t("code",[e._v("float32")]),e._v(" or "),t("code",[e._v("float64")]),e._v(" Tensor or a Python number. The initial learning rate.")]),e._v(" "),t("li",[t("code",[e._v("global_step")]),e._v(": A scalar "),t("code",[e._v("int32")]),e._v(" or "),t("code",[e._v("int64")]),e._v(" "),t("code",[e._v("Tensor")]),e._v(" or a Python number. Global step to use for the decay computation.")]),e._v(" "),t("li",[t("code",[e._v("decay_steps")]),e._v(": A scalar "),t("code",[e._v("int32")]),e._v(" or "),t("code",[e._v("int64")]),e._v(" "),t("code",[e._v("Tensor")]),e._v(" or a Python number. Number of steps to decay over.")]),e._v(" "),t("li",[t("code",[e._v("initial_variance")]),e._v(": initial variance for the noise. See computation above.")]),e._v(" "),t("li",[t("code",[e._v("variance_decay")]),e._v(": decay for the noise's variance. See computation above.")]),e._v(" "),t("li",[t("code",[e._v("num_periods")]),e._v(": Number of periods in the cosine part of the decay. See computation above.")]),e._v(" "),t("li",[t("code",[e._v("alpha")]),e._v(": See computation above.")]),e._v(" "),t("li",[t("code",[e._v("beta")]),e._v(": See computation above.")]),e._v(" "),t("li",[t("code",[e._v("name")]),e._v(": String. Optional "),t("code",[e._v("name")]),e._v(" of the operation. Defaults to 'NoisyLinearCosineDecay'.")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A scalar Tensor of the same type as learning_rate. The decayed learning rate.")]),e._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ValueError")]),e._v(": if "),t("code",[e._v("global_step")]),e._v(" is not supplied.")])]),e._v(" "),t("h4",{attrs:{id:"eager-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eager-compatibility","aria-hidden":"true"}},[e._v("#")]),e._v(" Eager Compatibility")]),e._v(" "),t("p",[e._v("When eager execution is enabled, this function returns a function which in turn returns the decayed learning rate Tensor. This can be useful for changing the learning rate value across different invocations of optimizer functions.")])])}),[],!1,null,null,null);a.default=r.exports}}]);