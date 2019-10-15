(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{751:function(e,s,t){"use strict";t.r(s);var a=t(0),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Returns a tensor whose value represents the total loss.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.compat.v1.losses.get_total_loss(\n    add_regularization_losses=True,\n    name='total_loss',\n    scope=None\n)\n")])])]),t("p",[e._v("In particular, this adds any losses you have added with tf.add_loss() to any regularization losses that have been added by regularization parameters on layers constructors e.g. tf.layers. Be very sure to use this if you are constructing a loss_op manually. Otherwise regularization arguments on tf.layers methods will not function.")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("add_regularization_losses")]),e._v(": A boolean indicating whether or not to use the regularization losses in the sum.")]),e._v(" "),t("li",[t("code",[e._v("name")]),e._v(": The "),t("code",[e._v("name")]),e._v(" of the returned tensor.")]),e._v(" "),t("li",[t("code",[e._v("scope")]),e._v(": An optional "),t("code",[e._v("scope")]),e._v(" "),t("code",[e._v("name")]),e._v(" for filtering the losses to return. Note that this filters the losses added with "),t("code",[e._v("tf.add_loss")]),e._v("() as well as the regularization losses to that "),t("code",[e._v("scope")]),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A Tensor whose value represents the total loss.")]),e._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ValueError")]),e._v(": if "),t("code",[e._v("losses")]),e._v(" is not iterable.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);