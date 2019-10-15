(window.webpackJsonp=window.webpackJsonp||[]).push([[2351],{2539:function(e,s,a){"use strict";a.r(s);var t=a(0),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Resets the shape of a SparseTensor with indices and values unchanged.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("tf.compat.v1.sparse.reset_shape")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v1.sparse_reset_shape")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.sparse.reset_shape")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.sparse.reset_shape(\n    sp_input,\n    new_shape=None\n)\n")])])]),a("p",[e._v("If new_shape is None, returns a copy of sp_input with its shape reset to the tight bounding box of sp_input. This will be a shape consisting of all zeros if sp_input has no values.")]),e._v(" "),a("p",[e._v("If new_shape is provided, then it must be larger or equal in all dimensions compared to the shape of sp_input. When this condition is met, the returned SparseTensor will have its shape reset to new_shape and its indices and values unchanged from that of sp_input.")]),e._v(" "),a("h4",{attrs:{id:"for-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-example","aria-hidden":"true"}},[e._v("#")]),e._v(" For example:")]),e._v(" "),a("p",[e._v("Consider a sp_input with shape [2, 3, 5]:")]),e._v(" "),a("ul",[a("li",[e._v("It is an error to set "),a("code",[e._v("new_shape")]),e._v(" as [3, 7] since this represents a rank-2 tensor while "),a("code",[e._v("sp_input")]),e._v(" is rank-3. This is either a ValueError during graph construction (if both shapes are known) or an OpError during run time.")]),e._v(" "),a("li",[e._v("Setting "),a("code",[e._v("new_shape")]),e._v(" as [2, 3, 6] will be fine as this shape is larger or equal in every dimension compared to the original shape [2, 3, 5].")]),e._v(" "),a("li",[e._v("On the other hand, setting "),a("code",[e._v("new_shape")]),e._v(" as [2, 3, 4] is also an error: The third dimension is smaller than the original shape 2, 3, 5.")]),e._v(" "),a("li",[e._v("If "),a("code",[e._v("new_shape")]),e._v(" is None, the returned SparseTensor will have a shape [2, 3, 4], which is the tight bounding box of "),a("code",[e._v("sp_input")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("sp_input")]),e._v(": The input "),a("code",[e._v("SparseTensor")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("new_shape")]),e._v(": None or a vector representing the new shape for the returned "),a("code",[e._v("SparseTensor")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A SparseTensor indices and values unchanged from input_sp. Its shape is new_shape if that is set. Otherwise it is the tight bounding box of input_sp")]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("TypeError")]),e._v(": If "),a("code",[e._v("sp_input")]),e._v(" is not a "),a("code",[e._v("SparseTensor")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("ValueError")]),e._v(": If "),a("code",[e._v("new_shape")]),e._v(" represents a tensor with a different rank from that of "),a("code",[e._v("sp_input")]),e._v(" (if shapes are known when graph is constructed).")]),e._v(" "),a("li",[a("code",[e._v("ValueError")]),e._v(": If "),a("code",[e._v("new_shape")]),e._v(" is determined during graph build to have dimension sizes that are too small.")]),e._v(" "),a("li",[a("code",[e._v("OpError")]),e._v(": - If "),a("code",[e._v("new_shape")]),e._v(" has dimension sizes that are too small.\nIf shapes are not known during graph construction time, and during run time it is found out that the ranks do not match.")]),e._v(" "),a("li",[e._v("If shapes are not known during graph construction time, and during run time it is found out that the ranks do not match.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);