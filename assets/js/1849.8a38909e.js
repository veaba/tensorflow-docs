(window.webpackJsonp=window.webpackJsonp||[]).push([[1849],{2040:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-cosinesimilarity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-cosinesimilarity","aria-hidden":"true"}},[e._v("#")]),e._v(" Class CosineSimilarity")]),e._v(" "),a("p",[e._v("Computes the cosine similarity between the labels and predictions.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[e._v("Class "),a("code",[e._v("tf.compat.v1.keras.metrics.CosineSimilarity")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.keras.metrics.CosineSimilarity")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.metrics.CosineSimilarity")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.metrics.CosineSimilarity")]),e._v(" "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cosine_similarity",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosine Similarity"),a("OutboundLink")],1),e._v("cosine similarity = (a . b) / ||a|| ||b||")])]),e._v(" "),a("p",[e._v("For example, if y_true is [0, 1, 1], and y_pred is [1, 0, 1], the cosine similarity is 0.5.")]),e._v(" "),a("p",[e._v("This metric keeps the average cosine similarity between predictions and labels over a stream of data.")]),e._v(" "),a("h4",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" m = tf.keras.metrics.CosineSimilarity(axis=1)\nm.update_state([[0., 1.], [1., 1.]], [[1., 0.], [1., 1.]])\n# l2_norm(y_true) = [[0., 1.], [1./1.414], 1./1.414]]]\n# l2_norm(y_pred) = [[1., 0.], [1./1.414], 1./1.414]]]\n# l2_norm(y_true) . l2_norm(y_pred) = [[0., 0.], [0.5, 0.5]]\n# result = mean(sum(l2_norm(y_true) . l2_norm(y_pred), axis=1))\n       = ((0. + 0.) +  (0.5 + 0.5)) / 2\n\nprint('Final result: ', m.result().numpy())  # Final result: 0.5\n")])])]),a("p",[e._v("Usage with tf.keras API:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" model = tf.keras.Model(inputs, outputs)\nmodel.compile(\n    'sgd',\n    loss='mse',\n    metrics=[tf.keras.metrics.CosineSimilarity(axis=1)])\n")])])]),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1908-L1918",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    name='cosine_similarity',\n    dtype=None,\n    axis=-1\n)\n")])])]),a("p",[e._v("Creates a CosineSimilarity instance.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("name")]),e._v(": (Optional) string "),a("code",[e._v("name")]),e._v(" of the metric instance.")]),e._v(" "),a("li",[a("code",[e._v("dtype")]),e._v(": (Optional) data type of the metric result.")]),e._v(" "),a("li",[a("code",[e._v("axis")]),e._v(": (Optional) Defaults to -1. The dimension along which the cosine similarity is computed.")])]),e._v(" "),a("h2",{attrs:{id:"new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("new")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L144-L160",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __new__(\n    cls,\n    *args,\n    **kwargs\n)\n")])])]),a("p",[e._v("Create and return a new object. See help(type) for accurate signature.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"reset-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-states","aria-hidden":"true"}},[e._v("#")]),e._v(" reset_states")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L203-L209",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" reset_states()\n")])])]),a("p",[e._v("Resets all of the metric state variables.")]),e._v(" "),a("p",[e._v("This function is called between epochs/steps, when a metric is evaluated during training.")]),e._v(" "),a("h3",{attrs:{id:"result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result","aria-hidden":"true"}},[e._v("#")]),e._v(" result")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L361-L371",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" result()\n")])])]),a("p",[e._v("Computes and returns the metric value tensor.")]),e._v(" "),a("p",[e._v("Result computation is an idempotent operation that simply calculates the metric value using the state variables.")]),e._v(" "),a("h3",{attrs:{id:"update-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-state","aria-hidden":"true"}},[e._v("#")]),e._v(" update_state")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L558-L583",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" update_state(\n    y_true,\n    y_pred,\n    sample_weight=None\n)\n")])])]),a("p",[e._v("Accumulates metric statistics.")]),e._v(" "),a("p",[e._v("y_true and y_pred should have the same shape.")]),e._v(" "),a("h4",{attrs:{id:"args-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("y_true")]),e._v(": The ground truth values.")]),e._v(" "),a("li",[a("code",[e._v("y_pred")]),e._v(": The predicted values.")]),e._v(" "),a("li",[a("code",[e._v("sample_weight")]),e._v(": Optional weighting of each example. Defaults to 1. Can be a "),a("code",[e._v("Tensor")]),e._v(" whose rank is either 0, or the same rank as "),a("code",[e._v("y_true")]),e._v(", and must be broadcastable to "),a("code",[e._v("y_true")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("Update op.")])])}),[],!1,null,null,null);t.default=r.exports}}]);