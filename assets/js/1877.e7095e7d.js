(window.webpackJsonp=window.webpackJsonp||[]).push([[1877],{2068:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-truenegatives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-truenegatives","aria-hidden":"true"}},[e._v("#")]),e._v(" Class TrueNegatives")]),e._v(" "),a("p",[e._v("Calculates the number of true negatives.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[e._v("Class "),a("code",[e._v("tf.compat.v1.keras.metrics.TrueNegatives")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.keras.metrics.TrueNegatives")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.metrics.TrueNegatives")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.metrics.TrueNegatives")])])]),e._v(" "),a("h3",{attrs:{id:"used-in-the-tutorials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-tutorials","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the tutorials:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("C")]),e._v("l"),a("code",[e._v("a")]),e._v("s"),a("code",[e._v("s")]),e._v("i"),a("code",[e._v("f")]),e._v("i"),a("code",[e._v("c")]),e._v("a"),a("code",[e._v("t")]),e._v("i"),a("code",[e._v("o")]),e._v("n"),a("code"),e._v("o"),a("code",[e._v("n")]),e._v(" "),a("code",[e._v("i")]),e._v("m"),a("code",[e._v("b")]),e._v("a"),a("code",[e._v("l")]),e._v("a"),a("code",[e._v("n")]),e._v("c"),a("code",[e._v("e")]),e._v("d"),a("code"),e._v("d"),a("code",[e._v("a")]),e._v("t"),a("code",[e._v("a")])])]),e._v(" "),a("p",[e._v("For example, if y_true is [0, 1, 0, 0] and y_pred is [1, 1, 0, 0] then the true negatives value is 2. If the weights were specified as [0, 0, 1, 0] then the true negatives value would be 1.")]),e._v(" "),a("p",[e._v("If sample_weight is given, calculates the sum of the weights of true negatives. This metric creates one local variable, accumulator that is used to keep track of the number of true negatives.")]),e._v(" "),a("p",[e._v("If sample_weight is None, weights default to 1. Use sample_weight of 0 to mask values.")]),e._v(" "),a("h4",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" m = tf.keras.metrics.TrueNegatives()\nm.update_state([0, 1, 0, 0], [1, 1, 0, 0])\nprint('Final result: ', m.result().numpy())  # Final result: 2\n")])])]),a("p",[e._v("Usage with tf.keras API:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" model = tf.keras.Model(inputs, outputs)\nmodel.compile('sgd', loss='mse', metrics=[tf.keras.metrics.TrueNegatives()])\n")])])]),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1034-L1050",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    thresholds=None,\n    name=None,\n    dtype=None\n)\n")])])]),a("p",[e._v("Creates a TrueNegatives instance.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("thresholds")]),e._v(": (Optional) Defaults to 0.5. A float value or a python list/tuple of float threshold values in [0, 1]. A threshold is compared with prediction values to determine the truth value of predictions (i.e., above the threshold is "),a("code",[e._v("true")]),e._v(", below is "),a("code",[e._v("false")]),e._v("). One metric value is generated for each threshold value.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": (Optional) string "),a("code",[e._v("name")]),e._v(" of the metric instance.")]),e._v(" "),a("li",[a("code",[e._v("dtype")]),e._v(": (Optional) data type of the metric result.")])]),e._v(" "),a("h2",{attrs:{id:"new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("new")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L144-L160",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __new__(\n    cls,\n    *args,\n    **kwargs\n)\n")])])]),a("p",[e._v("Create and return a new object. See help(type) for accurate signature.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"reset-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-states","aria-hidden":"true"}},[e._v("#")]),e._v(" reset_states")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L892-L895",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" reset_states()\n")])])]),a("p",[e._v("Resets all of the metric state variables.")]),e._v(" "),a("p",[e._v("This function is called between epochs/steps, when a metric is evaluated during training.")]),e._v(" "),a("h3",{attrs:{id:"result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result","aria-hidden":"true"}},[e._v("#")]),e._v(" result")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L885-L890",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" result()\n")])])]),a("p",[e._v("Computes and returns the metric value tensor.")]),e._v(" "),a("p",[e._v("Result computation is an idempotent operation that simply calculates the metric value using the state variables.")]),e._v(" "),a("h3",{attrs:{id:"update-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-state","aria-hidden":"true"}},[e._v("#")]),e._v(" update_state")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L865-L883",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" update_state(\n    y_true,\n    y_pred,\n    sample_weight=None\n)\n")])])]),a("p",[e._v("Accumulates the given confusion matrix condition statistics.")]),e._v(" "),a("h4",{attrs:{id:"args-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("y_true")]),e._v(": The ground truth values.")]),e._v(" "),a("li",[a("code",[e._v("y_pred")]),e._v(": The predicted values.")]),e._v(" "),a("li",[a("code",[e._v("sample_weight")]),e._v(": Optional weighting of each example. Defaults to 1. Can be a "),a("code",[e._v("Tensor")]),e._v(" whose rank is either 0, or the same rank as "),a("code",[e._v("y_true")]),e._v(", and must be broadcastable to "),a("code",[e._v("y_true")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("Update op.")])])}),[],!1,null,null,null);t.default=r.exports}}]);