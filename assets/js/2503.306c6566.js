(window.webpackJsonp=window.webpackJsonp||[]).push([[2503],{2694:function(e,a,s){"use strict";s.r(a);var t=s(0),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Computes the shape of a broadcast given symbolic shapes.")]),e._v(" "),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("tf.compat.v1.broadcast_dynamic_shape")])]),e._v(" "),s("li",[s("code",[e._v("tf.compat.v2.broadcast_dynamic_shape")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" tf.broadcast_dynamic_shape(\n    shape_x,\n    shape_y\n)\n")])])]),s("p",[e._v("When shape_x and shape_y are Tensors representing shapes (i.e. the result of calling tf.shape on another Tensor) this computes a Tensor which is the shape of the result of a broadcasting op applied in tensors of shapes shape_x and shape_y.\nFor example, if shape_x is [1, 2, 3] and shape_y is [5, 1, 3], the result is a Tensor whose value is [5, 2, 3].\nThis is useful when validating the result of a broadcasting operation when the tensors do not have statically known shapes.")]),e._v(" "),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("shape_x")]),e._v(": A rank 1 integer "),s("code",[e._v("Tensor")]),e._v(", representing the shape of x.")]),e._v(" "),s("li",[s("code",[e._v("shape_y")]),e._v(": A rank 1 integer "),s("code",[e._v("Tensor")]),e._v(", representing the shape of y.")])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[e._v("A rank 1 integer "),s("code",[e._v("Tensor")]),e._v(" representing the broadcasted shape.")])])}),[],!1,null,null,null);a.default=r.exports}}]);