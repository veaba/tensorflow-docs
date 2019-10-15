(window.webpackJsonp=window.webpackJsonp||[]).push([[2131],{2319:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v('Computes the "logical or" of elements across dimensions of a tensor.')]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("tf.compat.v2.math.reduce_any")])]),e._v(" "),t("li",[t("code",[e._v("tf.compat.v2.reduce_any")])]),e._v(" "),t("li",[t("code",[e._v("tf.reduce_any")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.math.reduce_any(\n    input_tensor,\n    axis=None,\n    keepdims=False,\n    name=None\n)\n")])])]),t("p",[e._v("Reduces input_tensor along the dimensions given in axis. Unless keepdims is true, the rank of the tensor is reduced by 1 for each entry in axis. If keepdims is true, the reduced dimensions are retained with length 1.")]),e._v(" "),t("p",[e._v("If axis is None, all dimensions are reduced, and a tensor with a single element is returned.")]),e._v(" "),t("h4",{attrs:{id:"for-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-example","aria-hidden":"true"}},[e._v("#")]),e._v(" For example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" x = tf.constant([[True,  True], [False, False]])\ntf.reduce_any(x)  # True\ntf.reduce_any(x, 0)  # [True, True]\ntf.reduce_any(x, 1)  # [True, False]\n")])])]),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("input_tensor")]),e._v(": The boolean tensor to reduce.")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("The reduced tensor.")]),e._v(" "),t("h4",{attrs:{id:"numpy-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#numpy-compatibility","aria-hidden":"true"}},[e._v("#")]),e._v(" Numpy Compatibility")]),e._v(" "),t("p",[e._v("Equivalent to np.any")])])}),[],!1,null,null,null);a.default=r.exports}}]);