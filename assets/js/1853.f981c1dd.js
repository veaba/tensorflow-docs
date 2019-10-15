(window.webpackJsonp=window.webpackJsonp||[]).push([[1853],{2044:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-kldivergence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-kldivergence","aria-hidden":"true"}},[e._v("#")]),e._v(" Class KLDivergence")]),e._v(" "),a("p",[e._v("Computes Kullback-Leibler divergence metric between y_true and y_pred.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[e._v("Class "),a("code",[e._v("tf.compat.v1.keras.metrics.KLDivergence")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.keras.metrics.KLDivergence")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.metrics.KLDivergence")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.metrics.KLDivergence")])])]),e._v(" "),a("p",[e._v("metric = y_true * log(y_true / y_pred)")]),e._v(" "),a("h4",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" m = tf.keras.metrics.KLDivergence()\nm.update_state([.4, .9, .2], [.5, .8, .12])\nprint('Final result: ', m.result().numpy())  # Final result: -0.043\n")])])]),a("p",[e._v("Usage with tf.keras API:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" model = tf.keras.Model(inputs, outputs)\nmodel.compile('sgd', metrics=[tf.keras.metrics.KLDivergence()])\n")])])]),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2247-L2249",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    name='kullback_leibler_divergence',\n    dtype=None\n)\n")])])]),a("p",[e._v("Creates a MeanMetricWrapper instance.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("h2",{attrs:{id:"new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("new")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L144-L160",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __new__(\n    cls,\n    *args,\n    **kwargs\n)\n")])])]),a("p",[e._v("Create and return a new object. See help(type) for accurate signature.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"reset-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-states","aria-hidden":"true"}},[e._v("#")]),e._v(" reset_states")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L203-L209",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" reset_states()\n")])])]),a("p",[e._v("Resets all of the metric state variables.")]),e._v(" "),a("p",[e._v("This function is called between epochs/steps, when a metric is evaluated during training.")]),e._v(" "),a("h3",{attrs:{id:"result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result","aria-hidden":"true"}},[e._v("#")]),e._v(" result")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L361-L371",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" result()\n")])])]),a("p",[e._v("Computes and returns the metric value tensor.")]),e._v(" "),a("p",[e._v("Result computation is an idempotent operation that simply calculates the metric value using the state variables.")]),e._v(" "),a("h3",{attrs:{id:"update-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-state","aria-hidden":"true"}},[e._v("#")]),e._v(" update_state")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L558-L583",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" update_state(\n    y_true,\n    y_pred,\n    sample_weight=None\n)\n")])])]),a("p",[e._v("Accumulates metric statistics.")]),e._v(" "),a("p",[e._v("y_true and y_pred should have the same shape.")]),e._v(" "),a("h4",{attrs:{id:"args-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("y_true")]),e._v(": The ground truth values.")]),e._v(" "),a("li",[a("code",[e._v("y_pred")]),e._v(": The predicted values.")]),e._v(" "),a("li",[a("code",[e._v("sample_weight")]),e._v(": Optional weighting of each example. Defaults to 1. Can be a "),a("code",[e._v("Tensor")]),e._v(" whose rank is either 0, or the same rank as "),a("code",[e._v("y_true")]),e._v(", and must be broadcastable to "),a("code",[e._v("y_true")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("Update op.")])])}),[],!1,null,null,null);t.default=s.exports}}]);