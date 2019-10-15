(window.webpackJsonp=window.webpackJsonp||[]).push([[2278],{2466:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Stacks a list of rank-R tensors into one rank-(R+1) RaggedTensor.")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("tf.compat.v1.ragged.stack")])]),e._v(" "),t("li",[t("code",[e._v("tf.compat.v2.ragged.stack")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.ragged.stack(\n    values,\n    axis=0,\n    name=None\n)\n")])])]),t("p",[e._v("Given a list of tensors or ragged tensors with the same rank R (R >= axis), returns a rank-R+1 RaggedTensor result such that result[i0...iaxis] is [value[i0...iaxis] for value in values].")]),e._v(" "),t("h4",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" Example:")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("values")]),e._v(": A list of "),t("code",[e._v("tf.Tensor")]),e._v(" or "),t("code",[e._v("tf.RaggedTensor")]),e._v(". May not be empty. All "),t("code",[e._v("values")]),e._v(" must have the same rank and the same dtype; but unlike "),t("code",[e._v("tf.stack")]),e._v(", they can have arbitrary dimension sizes.")]),e._v(" "),t("li",[t("code",[e._v("axis")]),e._v(": A python integer, indicating the dimension along which to stack. (Note: Unlike "),t("code",[e._v("tf.stack")]),e._v(", the "),t("code",[e._v("axis")]),e._v(" parameter must be statically known.) Negative "),t("code",[e._v("values")]),e._v(" are supported only if the rank of at least one "),t("code",[e._v("values")]),e._v(" value is statically known.")]),e._v(" "),t("li",[t("code",[e._v("name")]),e._v(": A "),t("code",[e._v("name")]),e._v(" prefix for the returned tensor (optional).")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A RaggedTensor with rank R+1. result.ragged_rank=1+max(axis, max(rt.ragged_rank for rt in values])).")]),e._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ValueError")]),e._v(": If "),t("code",[e._v("values")]),e._v(" is empty, if "),t("code",[e._v("axis")]),e._v(" is out of bounds or if the input tensors have different ranks.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);