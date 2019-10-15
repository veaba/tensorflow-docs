(window.webpackJsonp=window.webpackJsonp||[]).push([[1846],{2037:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-categoricalaccuracy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-categoricalaccuracy","aria-hidden":"true"}},[e._v("#")]),e._v(" Class CategoricalAccuracy")]),e._v(" "),a("p",[e._v("Calculates how often predictions matches labels.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[e._v("Class "),a("code",[e._v("tf.compat.v1.keras.metrics.CategoricalAccuracy")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.keras.metrics.CategoricalAccuracy")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.metrics.CategoricalAccuracy")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.metrics.CategoricalAccuracy")])])]),e._v(" "),a("h3",{attrs:{id:"used-in-the-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the guide:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("K")]),e._v("e"),a("code",[e._v("r")]),e._v("a"),a("code",[e._v("s")]),e._v(" "),a("code",[e._v("o")]),e._v("v"),a("code",[e._v("e")]),e._v("r"),a("code",[e._v("v")]),e._v("i"),a("code",[e._v("e")]),e._v("w``")]),e._v(" "),a("li",[a("code",[e._v("T")]),e._v("r"),a("code",[e._v("a")]),e._v("i"),a("code",[e._v("n")]),e._v(" "),a("code",[e._v("a")]),e._v("n"),a("code",[e._v("d")]),e._v(" "),a("code",[e._v("e")]),e._v("v"),a("code",[e._v("a")]),e._v("l"),a("code",[e._v("u")]),e._v("a"),a("code",[e._v("t")]),e._v("e"),a("code"),e._v("w"),a("code",[e._v("i")]),e._v("t"),a("code",[e._v("h")]),e._v(" "),a("code",[e._v("K")]),e._v("e"),a("code",[e._v("r")]),e._v("a"),a("code",[e._v("s")])])]),e._v(" "),a("p",[e._v("For example, if y_true is [[0, 0, 1], [0, 1, 0]] and y_pred is [[0.1, 0.9, 0.8], [0.05, 0.95, 0]] then the categorical accuracy is 1/2 or .5. If the weights were specified as [0.7, 0.3] then the categorical accuracy would be .3. You can provide logits of classes as y_pred, since argmax of logits and probabilities are same.")]),e._v(" "),a("p",[e._v("This metric creates two local variables, total and count that are used to compute the frequency with which y_pred matches y_true. This frequency is ultimately returned as categorical accuracy: an idempotent operation that simply divides total by count.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/one_hot",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.one_hot"),a("OutboundLink")],1),e._v("y_pred and y_true should be passed in as vectors of probabilities, rather than as labels. If necessary, use  to expand y_true as a vector.")]),e._v(" "),a("p",[e._v("If sample_weight is None, weights default to 1. Use sample_weight of 0 to mask values.")]),e._v(" "),a("h4",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" m = tf.keras.metrics.CategoricalAccuracy()\nm.update_state([[0, 0, 1], [0, 1, 0]], [[0.1, 0.9, 0.8], [0.05, 0.95, 0]])\nprint('Final result: ', m.result().numpy())  # Final result: 0.5\n")])])]),a("p",[e._v("Usage with tf.keras API:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" model = tf.keras.Model(inputs, outputs)\nmodel.compile(\n  'sgd',\n  loss='mse',\n  metrics=[tf.keras.metrics.CategoricalAccuracy()])\n")])])]),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L714-L722",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    name='categorical_accuracy',\n    dtype=None\n)\n")])])]),a("p",[e._v("Creates a CategoricalAccuracy instance.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("name")]),e._v(": (Optional) string "),a("code",[e._v("name")]),e._v(" of the metric instance.")]),e._v(" "),a("li",[a("code",[e._v("dtype")]),e._v(": (Optional) data type of the metric result.")])]),e._v(" "),a("h2",{attrs:{id:"new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("new")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L144-L160",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __new__(\n    cls,\n    *args,\n    **kwargs\n)\n")])])]),a("p",[e._v("Create and return a new object. See help(type) for accurate signature.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"reset-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-states","aria-hidden":"true"}},[e._v("#")]),e._v(" reset_states")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L203-L209",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" reset_states()\n")])])]),a("p",[e._v("Resets all of the metric state variables.")]),e._v(" "),a("p",[e._v("This function is called between epochs/steps, when a metric is evaluated during training.")]),e._v(" "),a("h3",{attrs:{id:"result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result","aria-hidden":"true"}},[e._v("#")]),e._v(" result")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L361-L371",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" result()\n")])])]),a("p",[e._v("Computes and returns the metric value tensor.")]),e._v(" "),a("p",[e._v("Result computation is an idempotent operation that simply calculates the metric value using the state variables.")]),e._v(" "),a("h3",{attrs:{id:"update-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-state","aria-hidden":"true"}},[e._v("#")]),e._v(" update_state")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L558-L583",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" update_state(\n    y_true,\n    y_pred,\n    sample_weight=None\n)\n")])])]),a("p",[e._v("Accumulates metric statistics.")]),e._v(" "),a("p",[e._v("y_true and y_pred should have the same shape.")]),e._v(" "),a("h4",{attrs:{id:"args-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("y_true")]),e._v(": The ground truth values.")]),e._v(" "),a("li",[a("code",[e._v("y_pred")]),e._v(": The predicted values.")]),e._v(" "),a("li",[a("code",[e._v("sample_weight")]),e._v(": Optional weighting of each example. Defaults to 1. Can be a "),a("code",[e._v("Tensor")]),e._v(" whose rank is either 0, or the same rank as "),a("code",[e._v("y_true")]),e._v(", and must be broadcastable to "),a("code",[e._v("y_true")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("Update op.")])])}),[],!1,null,null,null);t.default=s.exports}}]);