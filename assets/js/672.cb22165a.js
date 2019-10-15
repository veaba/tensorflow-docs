(window.webpackJsonp=window.webpackJsonp||[]).push([[672],{860:function(e,s,t){"use strict";t.r(s);var a=t(0),o=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Computes sparse softmax cross entropy between logits and labels.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.compat.v1.nn.sparse_softmax_cross_entropy_with_logits(\n    _sentinel=None,\n    labels=None,\n    logits=None,\n    name=None\n)\n")])])]),t("p",[e._v("Measures the probability error in discrete classification tasks in which the classes are mutually exclusive (each entry is in exactly one class). For example, each CIFAR-10 image is labeled with one and only one label: an image can be a dog or a truck, but not both.")]),e._v(" "),t("p",[e._v("NOTE: For this operation, the probability of a given label is considered exclusive. That is, soft classes are not allowed, and the labels vector must provide a single specific index for the true class for each row of logits (each minibatch entry). For soft softmax classification with a probability distribution for each entry, see softmax_cross_entropy_with_logits_v2.")]),e._v(" "),t("p",[e._v("WARNING: This op expects unscaled logits, since it performs a softmax on logits internally for efficiency. Do not call this op with the output of softmax, as it will produce incorrect results.")]),e._v(" "),t("p",[e._v("A common use case is to have logits of shape [batch_size, num_classes] and have labels of shape [batch_size], but higher dimensions are supported, in which case the dim-th dimension is assumed to be of size num_classes. logits must have the dtype of float16, float32, or float64, and labels must have the dtype of int32 or int64.")]),e._v(" "),t("p",[e._v("Note that to avoid confusion, it is required to pass only named arguments to this function.")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("_sentinel")]),e._v(": Used to prevent positional parameters. Internal, do not use.")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A Tensor of the same shape as labels and of the same type as logits with the softmax cross entropy loss.")]),e._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ValueError")]),e._v(": If logits are scalars (need to have rank >= 1) or if the rank of the labels is not equal to the rank of the logits minus one.")])])])}),[],!1,null,null,null);s.default=o.exports}}]);