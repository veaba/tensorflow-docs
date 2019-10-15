(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{770:function(e,t,o){"use strict";o.r(t);var s=o(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Computes the total number of false negatives.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(" tf.compat.v1.metrics.false_negatives(\n    labels,\n    predictions,\n    weights=None,\n    metrics_collections=None,\n    updates_collections=None,\n    name=None\n)\n")])])]),o("p",[e._v("If weights is None, weights default to 1. Use weights of 0 to mask values.")]),e._v(" "),o("h4",{attrs:{id:"args"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("labels")]),e._v(": The ground truth values, a "),o("code",[e._v("Tensor")]),e._v(" whose dimensions must match "),o("code",[e._v("predictions")]),e._v(". Will be cast to "),o("code",[e._v("bool")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("predictions")]),e._v(": The predicted values, a "),o("code",[e._v("Tensor")]),e._v(" of arbitrary dimensions. Will be cast to "),o("code",[e._v("bool")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("weights")]),e._v(": Optional "),o("code",[e._v("Tensor")]),e._v(" whose rank is either 0, or the same rank as "),o("code",[e._v("labels")]),e._v(", and must be broadcastable to "),o("code",[e._v("labels")]),e._v(" (i.e., all dimensions must be either "),o("code",[e._v("1")]),e._v(", or the same as the corresponding "),o("code",[e._v("labels")]),e._v(" dimension).")]),e._v(" "),o("li",[o("code",[e._v("metrics_collections")]),e._v(": An optional list of collections that the metric value variable should be added to.")]),e._v(" "),o("li",[o("code",[e._v("updates_collections")]),e._v(": An optional list of collections that the metric update ops should be added to.")]),e._v(" "),o("li",[o("code",[e._v("name")]),e._v(": An optional variable_scope "),o("code",[e._v("name")]),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"returns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("value_tensor")]),e._v(": A "),o("code",[e._v("Tensor")]),e._v(" representing the current value of the metric.")]),e._v(" "),o("li",[o("code",[e._v("update_op")]),e._v(": An operation that accumulates the error from a batch of data.")])]),e._v(" "),o("h4",{attrs:{id:"raises"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("ValueError")]),e._v(": If "),o("code",[e._v("weights")]),e._v(" is not "),o("code",[e._v("None")]),e._v(" and its shape doesn't match "),o("code",[e._v("values")]),e._v(", or if either "),o("code",[e._v("metrics_collections")]),e._v(" or "),o("code",[e._v("updates_collections")]),e._v(" are not a list or tuple.")]),e._v(" "),o("li",[o("code",[e._v("RuntimeError")]),e._v(": If eager execution is enabled.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);