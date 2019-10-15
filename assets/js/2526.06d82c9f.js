(window.webpackJsonp=window.webpackJsonp||[]).push([[2526],{2717:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Construct an identity matrix, or a batch of matrices.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("tf.compat.v1.eye")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v1.linalg.eye")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.eye")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.linalg.eye")])]),e._v(" "),a("li",[a("code",[e._v("tf.linalg.eye")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.eye(\n    num_rows,\n    num_columns=None,\n    batch_shape=None,\n    dtype=tf.dtypes.float32,\n    name=None\n)\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' # Construct one identity matrix.\ntf.eye(2)\n==> [[1., 0.],\n     [0., 1.]]\n\n# Construct a batch of 3 identity matricies, each 2 x 2.\n# batch_identity[i, :, :] is a 2 x 2 identity matrix, i = 0, 1, 2.\nbatch_identity = tf.eye(2, batch_shape=[3])\n\n# Construct one 2 x 3 "identity" matrix\ntf.eye(2, num_columns=3)\n==> [[ 1.,  0.,  0.],\n     [ 0.,  1.,  0.]]\n')])])]),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("num_rows")]),e._v(": Non-negative "),a("code",[e._v("int32")]),e._v(" scalar "),a("code",[e._v("Tensor")]),e._v(" giving the number of rows in each batch matrix.")]),e._v(" "),a("li",[a("code",[e._v("num_columns")]),e._v(": Optional non-negative "),a("code",[e._v("int32")]),e._v(" scalar "),a("code",[e._v("Tensor")]),e._v(" giving the number of columns in each batch matrix. Defaults to "),a("code",[e._v("num_rows")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("batch_shape")]),e._v(": A list or tuple of Python integers or a 1-D "),a("code",[e._v("int32")]),e._v(" "),a("code",[e._v("Tensor")]),e._v(". If provided, the returned "),a("code",[e._v("Tensor")]),e._v(" will have leading batch dimensions of this shape.")]),e._v(" "),a("li",[a("code",[e._v("dtype")]),e._v(": The type of an element in the resulting "),a("code",[e._v("Tensor")])]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": A "),a("code",[e._v("name")]),e._v(" for this "),a("code",[e._v("Op")]),e._v('. Defaults to "eye".')])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("Tensor")]),e._v(" of shape "),a("code",[e._v("batch_shape + [num_rows, num_columns]")])])])}),[],!1,null,null,null);t.default=s.exports}}]);