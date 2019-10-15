(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{759:function(e,s,t){"use strict";t.r(s);var a=t(0),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/nn/sparse_softmax_cross_entropy_with_logits",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.nn.sparse_softmax_cross_entropy_with_logits"),t("OutboundLink")],1),e._v("Cross-entropy loss using .")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.compat.v1.losses.sparse_softmax_cross_entropy(\n    labels,\n    logits,\n    weights=1.0,\n    scope=None,\n    loss_collection=tf.GraphKeys.LOSSES,\n    reduction=Reduction.SUM_BY_NONZERO_WEIGHTS\n)\n")])])]),t("p",[e._v("weights acts as a coefficient for the loss. If a scalar is provided, then the loss is simply scaled by the given value. If weights is a tensor of shape [batch_size], then the loss weights apply to each corresponding sample.")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("Weighted loss Tensor of the same type as logits. If reduction is NONE, this has the same shape as labels; otherwise, it is scalar.")]),e._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ValueError")]),e._v(": If the shapes of "),t("code",[e._v("logits")]),e._v(", "),t("code",[e._v("labels")]),e._v(", and "),t("code",[e._v("weights")]),e._v(" are incompatible, or if any of them are None.")])]),e._v(" "),t("h4",{attrs:{id:"eager-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eager-compatibility","aria-hidden":"true"}},[e._v("#")]),e._v(" Eager Compatibility")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/Model",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.keras.Model"),t("OutboundLink")],1),e._v("The loss_collection argument is ignored when executing eagerly. Consider holding on to the return value or collecting losses via a .")])])}),[],!1,null,null,null);s.default=r.exports}}]);