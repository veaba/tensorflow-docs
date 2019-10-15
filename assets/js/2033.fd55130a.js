(window.webpackJsonp=window.webpackJsonp||[]).push([[2033],{2224:function(a,e,t){"use strict";t.r(e);var s=t(0),o=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Multiplies tridiagonal matrix by matrix.")]),a._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[a._v("#")]),a._v(" Aliases:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("tf.compat.v1.linalg.tridiagonal_matmul")])]),a._v(" "),t("li",[t("code",[a._v("tf.compat.v2.linalg.tridiagonal_matmul")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" tf.linalg.tridiagonal_matmul(\n    diagonals,\n    rhs,\n    diagonals_format='compact',\n    name=None\n)\n")])])]),t("p",[a._v("diagonals is representation of 3-diagonal NxN matrix, which depends on diagonals_format.")]),a._v(" "),t("p",[a._v("In matrix format, diagonals must be a tensor of shape [..., M, M], with two inner-most dimensions representing the square tridiagonal matrices. Elements outside of the three diagonals will be ignored.")]),a._v(" "),t("p",[a._v("If sequence format, diagonals is list or tuple of three tensors: [superdiag, maindiag, subdiag], each having shape [..., M]. Last element of superdiag first element of subdiag are ignored.")]),a._v(" "),t("p",[a._v("In compact format the three diagonals are brought together into one tensor of shape [..., 3, M], with last two dimensions containing superdiagonals, diagonals, and subdiagonals, in order. Similarly to sequence format, elements diagonals[..., 0, M-1] and diagonals[..., 2, 0] are ignored.")]),a._v(" "),t("p",[a._v("The sequence format is recommended as the one with the best performance.")]),a._v(" "),t("p",[a._v("rhs is matrix to the right of multiplication. It has shape [..., M, N].")]),a._v(" "),t("h4",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[a._v("#")]),a._v(" Example:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" superdiag = tf.constant([-1, -1, 0], dtype=tf.float64)\nmaindiag = tf.constant([2, 2, 2], dtype=tf.float64)\nsubdiag = tf.constant([0, -1, -1], dtype=tf.float64)\ndiagonals = [superdiag, maindiag, subdiag]\nrhs = tf.constant([[1, 1], [1, 1], [1, 1]], dtype=tf.float64)\nx = tf.linalg.tridiagonal_matmul(diagonals, rhs, diagonals_format='sequence')\n")])])]),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[a._v("#")]),a._v(" Args:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("diagonals")]),a._v(": A "),t("code",[a._v("Tensor")]),a._v(" or tuple of "),t("code",[a._v("Tensor")]),a._v("s describing left-hand sides. The shape depends of "),t("code",[a._v("diagonals")]),a._v("_format, see description above. Must be "),t("code",[a._v("float32")]),a._v(", "),t("code",[a._v("float64")]),a._v(", "),t("code",[a._v("complex64")]),a._v(", or "),t("code",[a._v("complex128")]),a._v(".")]),a._v(" "),t("li",[t("code",[a._v("rhs")]),a._v(": A "),t("code",[a._v("Tensor")]),a._v(" of shape [..., M, N] and with the same dtype as "),t("code",[a._v("diagonals")]),a._v(".")]),a._v(" "),t("li",[t("code",[a._v("diagonals")]),a._v("_format: one of "),t("code",[a._v("sequence")]),a._v(", or "),t("code",[a._v("compact")]),a._v(". Default is "),t("code",[a._v("compact")]),a._v(".")]),a._v(" "),t("li",[t("code",[a._v("name")]),a._v(": A "),t("code",[a._v("name")]),a._v(" to give this "),t("code",[a._v("Op")]),a._v(" (optional).")])]),a._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[a._v("#")]),a._v(" Returns:")]),a._v(" "),t("p",[a._v("A Tensor of shape [..., M, N] containing the result of multiplication.")]),a._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[a._v("#")]),a._v(" Raises:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("ValueError")]),a._v(": An unsupported type is provided as input, or when the input tensors have incorrect shapes.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);