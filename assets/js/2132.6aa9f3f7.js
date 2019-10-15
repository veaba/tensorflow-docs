(window.webpackJsonp=window.webpackJsonp||[]).push([[2132],{2320:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Computes the Euclidean norm of elements across dimensions of a tensor.")]),e._v(" "),r("h3",{attrs:{id:"aliases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("tf.compat.v1.math.reduce_euclidean_norm")])]),e._v(" "),r("li",[r("code",[e._v("tf.compat.v2.math.reduce_euclidean_norm")])])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" tf.math.reduce_euclidean_norm(\n    input_tensor,\n    axis=None,\n    keepdims=False,\n    name=None\n)\n")])])]),r("p",[e._v("Reduces input_tensor along the dimensions given in axis. Unless keepdims is true, the rank of the tensor is reduced by 1 for each entry in axis. If keepdims is true, the reduced dimensions are retained with length 1.")]),e._v(" "),r("p",[e._v("If axis is None, all dimensions are reduced, and a tensor with a single element is returned.")]),e._v(" "),r("h4",{attrs:{id:"for-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-example","aria-hidden":"true"}},[e._v("#")]),e._v(" For example:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" x = tf.constant([[1, 2, 3], [1, 1, 1]])\ntf.reduce_euclidean_norm(x)  # sqrt(17)\ntf.reduce_euclidean_norm(x, 0)  # [sqrt(2), sqrt(5), sqrt(10)]\ntf.reduce_euclidean_norm(x, 1)  # [sqrt(14), sqrt(3)]\ntf.reduce_euclidean_norm(x, 1, keepdims=True)  # [[sqrt(14)], [sqrt(3)]]\ntf.reduce_euclidean_norm(x, [0, 1])  # sqrt(17)\n")])])]),r("h4",{attrs:{id:"args"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("input_tensor")]),e._v(": The tensor to reduce. Should have numeric type.")])]),e._v(" "),r("h4",{attrs:{id:"returns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("The reduced tensor, of the same dtype as the input_tensor.")])])}),[],!1,null,null,null);t.default=a.exports}}]);