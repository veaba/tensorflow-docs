(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{783:function(e,t,o){"use strict";o.r(t);var s=o(0),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Computes the precision of the predictions with respect to the labels.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(" tf.compat.v1.metrics.precision(\n    labels,\n    predictions,\n    weights=None,\n    metrics_collections=None,\n    updates_collections=None,\n    name=None\n)\n")])])]),o("p",[e._v("The precision function creates two local variables, true_positives and false_positives, that are used to compute the precision. This value is ultimately returned as precision, an idempotent operation that simply divides true_positives by the sum of true_positives and false_positives.")]),e._v(" "),o("p",[e._v("For estimation of the metric over a stream of data, the function creates an update_op operation that updates these variables and returns the precision. update_op weights each prediction by the corresponding value in weights.")]),e._v(" "),o("p",[e._v("If weights is None, weights default to 1. Use weights of 0 to mask values.")]),e._v(" "),o("h4",{attrs:{id:"args"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("labels")]),e._v(": The ground truth values, a "),o("code",[e._v("Tensor")]),e._v(" whose dimensions must match "),o("code",[e._v("predictions")]),e._v(". Will be cast to "),o("code",[e._v("bool")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("predictions")]),e._v(": The predicted values, a "),o("code",[e._v("Tensor")]),e._v(" of arbitrary dimensions. Will be cast to "),o("code",[e._v("bool")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("weights")]),e._v(": Optional "),o("code",[e._v("Tensor")]),e._v(" whose rank is either 0, or the same rank as "),o("code",[e._v("labels")]),e._v(", and must be broadcastable to "),o("code",[e._v("labels")]),e._v(" (i.e., all dimensions must be either "),o("code",[e._v("1")]),e._v(", or the same as the corresponding "),o("code",[e._v("labels")]),e._v(" dimension).")]),e._v(" "),o("li",[o("code",[e._v("metrics_collections")]),e._v(": An optional list of collections that "),o("code",[e._v("precision")]),e._v(" should be added to.")]),e._v(" "),o("li",[o("code",[e._v("updates_collections")]),e._v(": An optional list of collections that "),o("code",[e._v("update_op")]),e._v(" should be added to.")]),e._v(" "),o("li",[o("code",[e._v("name")]),e._v(": An optional variable_scope "),o("code",[e._v("name")]),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"returns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("precision")]),e._v(": Scalar float "),o("code",[e._v("Tensor")]),e._v(" with the value of "),o("code",[e._v("true_positives")]),e._v(" divided by the sum of "),o("code",[e._v("true_positives")]),e._v(" and "),o("code",[e._v("false_positives")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("update_op")]),e._v(": "),o("code",[e._v("Operation")]),e._v(" that increments "),o("code",[e._v("true_positives")]),e._v(" and "),o("code",[e._v("false_positives")]),e._v(" variables appropriately and whose value matches "),o("code",[e._v("precision")]),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"raises"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("ValueError")]),e._v(": If "),o("code",[e._v("predictions")]),e._v(" and "),o("code",[e._v("labels")]),e._v(" have mismatched shapes, or if "),o("code",[e._v("weights")]),e._v(" is not "),o("code",[e._v("None")]),e._v(" and its shape doesn't match "),o("code",[e._v("predictions")]),e._v(", or if either "),o("code",[e._v("metrics_collections")]),e._v(" or "),o("code",[e._v("updates_collections")]),e._v(" are not a list or tuple.")]),e._v(" "),o("li",[o("code",[e._v("RuntimeError")]),e._v(": If eager execution is enabled.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);