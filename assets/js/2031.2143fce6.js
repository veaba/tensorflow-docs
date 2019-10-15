(window.webpackJsonp=window.webpackJsonp||[]).push([[2031],{2222:function(t,a,e){"use strict";e.r(a);var n=e(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Compute the trace of a tensor x.")]),t._v(" "),e("h3",{attrs:{id:"aliases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[t._v("#")]),t._v(" Aliases:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("tf.compat.v1.linalg.trace")])]),t._v(" "),e("li",[e("code",[t._v("tf.compat.v1.trace")])]),t._v(" "),e("li",[e("code",[t._v("tf.compat.v2.linalg.trace")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" tf.linalg.trace(\n    x,\n    name=None\n)\n")])])]),e("p",[t._v("trace(x) returns the sum along the main diagonal of each inner-most matrix in x. If x is of rank k with shape [I, J, K, ..., L, M, N], then output is a tensor of rank k-2 with dimensions [I, J, K, ..., L] where")]),t._v(" "),e("p",[t._v("output[i, j, k, ..., l] = trace(x[i, j, i, ..., l, :, :])")]),t._v(" "),e("h4",{attrs:{id:"for-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-example","aria-hidden":"true"}},[t._v("#")]),t._v(" For example:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" x = tf.constant([[1, 2], [3, 4]])\ntf.linalg.trace(x)  # 5\n\nx = tf.constant([[1, 2, 3],\n                 [4, 5, 6],\n                 [7, 8, 9]])\ntf.linalg.trace(x)  # 15\n\nx = tf.constant([[[1, 2, 3],\n                  [4, 5, 6],\n                  [7, 8, 9]],\n                 [[-1, -2, -3],\n                  [-4, -5, -6],\n                  [-7, -8, -9]]])\ntf.linalg.trace(x)  # [15, -15]\n")])])]),e("h4",{attrs:{id:"args"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[t._v("#")]),t._v(" Args:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("x")]),t._v(": tensor.")]),t._v(" "),e("li",[e("code",[t._v("name")]),t._v(": A "),e("code",[t._v("name")]),t._v(" for the operation (optional).")])]),t._v(" "),e("h4",{attrs:{id:"returns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[t._v("#")]),t._v(" Returns:")]),t._v(" "),e("p",[t._v("The trace of input tensor.")])])}),[],!1,null,null,null);a.default=r.exports}}]);