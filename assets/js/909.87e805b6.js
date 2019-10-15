(window.webpackJsonp=window.webpackJsonp||[]).push([[909],{1097:function(e,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Applies inverse time decay to the initial learning rate.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.compat.v1.train.inverse_time_decay(\n    learning_rate,\n    global_step,\n    decay_steps,\n    decay_rate,\n    staircase=False,\n    name=None\n)\n")])])]),t("p",[e._v("When training a model, it is often recommended to lower the learning rate as the training progresses. This function applies an inverse decay function to a provided initial learning rate. It requires an global_step value to compute the decayed learning rate. You can just pass a TensorFlow variable that you increment at each training step.")]),e._v(" "),t("p",[e._v("The function returns the decayed learning rate. It is computed as:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" decayed_learning_rate = learning_rate / (1 + decay_rate * global_step /\ndecay_step)\n")])])]),t("p",[e._v("or, if staircase is True, as:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" decayed_learning_rate = learning_rate / (1 + decay_rate * floor(global_step /\ndecay_step))\n")])])]),t("p",[e._v("Example: decay 1/t with a rate of 0.5:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" ...\nglobal_step = tf.Variable(0, trainable=False)\nlearning_rate = 0.1\ndecay_steps = 1.0\ndecay_rate = 0.5\nlearning_rate = tf.compat.v1.train.inverse_time_decay(learning_rate,\nglobal_step,\ndecay_steps, decay_rate)\n\n# Passing global_step to minimize() will increment it at each step.\nlearning_step = (\n    tf.compat.v1.train.GradientDescentOptimizer(learning_rate)\n    .minimize(...my loss..., global_step=global_step)\n)\n")])])]),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("learning_rate")]),e._v(": A scalar "),t("code",[e._v("float32")]),e._v(" or "),t("code",[e._v("float64")]),e._v(" "),t("code",[e._v("Tensor")]),e._v(" or a Python number. The initial learning rate.")]),e._v(" "),t("li",[t("code",[e._v("global_step")]),e._v(": A Python number. Global step to use for the decay computation. Must not be negative.")]),e._v(" "),t("li",[t("code",[e._v("decay_steps")]),e._v(": How often to apply decay.")]),e._v(" "),t("li",[t("code",[e._v("decay_rate")]),e._v(": A Python number. The decay rate.")]),e._v(" "),t("li",[t("code",[e._v("staircase")]),e._v(": Whether to apply decay in a discrete "),t("code",[e._v("staircase")]),e._v(", as opposed to continuous, fashion.")]),e._v(" "),t("li",[t("code",[e._v("name")]),e._v(": String. Optional "),t("code",[e._v("name")]),e._v(" of the operation. Defaults to 'InverseTimeDecay'.")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A scalar Tensor of the same type as learning_rate. The decayed learning rate.")]),e._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ValueError")]),e._v(": if "),t("code",[e._v("global_step")]),e._v(" is not supplied.")])]),e._v(" "),t("h4",{attrs:{id:"eager-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eager-compatibility","aria-hidden":"true"}},[e._v("#")]),e._v(" Eager Compatibility")]),e._v(" "),t("p",[e._v("When eager execution is enabled, this function returns a function which in turn returns the decayed learning rate Tensor. This can be useful for changing the learning rate value across different invocations of optimizer functions.")])])}),[],!1,null,null,null);a.default=r.exports}}]);