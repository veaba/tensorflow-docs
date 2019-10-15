(window.webpackJsonp=window.webpackJsonp||[]).push([[565],{753:function(e,s,t){"use strict";t.r(s);var o=t(0),a=Object(o.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Adds a Huber Loss term to the training procedure.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.compat.v1.losses.huber_loss(\n    labels,\n    predictions,\n    weights=1.0,\n    delta=1.0,\n    scope=None,\n    loss_collection=tf.GraphKeys.LOSSES,\n    reduction=Reduction.SUM_BY_NONZERO_WEIGHTS\n)\n")])])]),t("p",[e._v("For each value x in error=labels-predictions, the following is calculated:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   0.5 * x^2                  if |x| <= d\n  0.5 * d^2 + d * (|x| - d)  if |x| > d\n")])])]),t("p",[e._v("where d is delta.")]),e._v(" "),t("p",[e._v("See: https://en.wikipedia.org/wiki/Huber_loss")]),e._v(" "),t("p",[e._v("weights acts as a coefficient for the loss. If a scalar is provided, then the loss is simply scaled by the given value. If weights is a tensor of size [batch_size], then the total loss for each sample of the batch is rescaled by the corresponding element in the weights vector. If the shape of weights matches the shape of predictions, then the loss of each measurable element of predictions is scaled by the corresponding value of weights.")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("labels")]),e._v(": The ground truth output tensor, same dimensions as 'predictions'.")]),e._v(" "),t("li",[t("code",[e._v("predictions")]),e._v(": The predicted outputs.")]),e._v(" "),t("li",[t("code",[e._v("weights")]),e._v(": Optional "),t("code",[e._v("Tensor")]),e._v(" whose rank is either 0, or the same rank as "),t("code",[e._v("labels")]),e._v(", and must be broadcastable to "),t("code",[e._v("labels")]),e._v(" (i.e., all dimensions must be either "),t("code",[e._v("1")]),e._v(", or the same as the corresponding "),t("code",[e._v("losses")]),e._v(" dimension).")]),e._v(" "),t("li",[t("code",[e._v("delta")]),e._v(": "),t("code",[e._v("float")]),e._v(", the point where the huber loss function changes from a quadratic to linear.")]),e._v(" "),t("li",[t("code",[e._v("scope")]),e._v(": The "),t("code",[e._v("scope")]),e._v(" for the operations performed in computing the loss.")]),e._v(" "),t("li",[t("code",[e._v("loss_collection")]),e._v(": collection to which the loss will be added.")]),e._v(" "),t("li",[t("code",[e._v("reduction")]),e._v(": Type of "),t("code",[e._v("reduction")]),e._v(" to apply to loss.")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("Weighted loss float Tensor. If reduction is NONE, this has the same shape as labels; otherwise, it is scalar.")]),e._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ValueError")]),e._v(": If the shape of "),t("code",[e._v("predictions")]),e._v(" doesn't match that of "),t("code",[e._v("labels")]),e._v(" or if the shape of "),t("code",[e._v("weights")]),e._v(" is invalid. Also if "),t("code",[e._v("labels")]),e._v(" or "),t("code",[e._v("predictions")]),e._v(" is None.")])]),e._v(" "),t("h4",{attrs:{id:"eager-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eager-compatibility","aria-hidden":"true"}},[e._v("#")]),e._v(" Eager Compatibility")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/Model",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.keras.Model"),t("OutboundLink")],1),e._v("The loss_collection argument is ignored when executing eagerly. Consider holding on to the return value or collecting losses via a .")])])}),[],!1,null,null,null);s.default=a.exports}}]);