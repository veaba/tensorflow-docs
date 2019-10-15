(window.webpackJsonp=window.webpackJsonp||[]).push([[794],{982:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Split a SparseTensor into num_split tensors along axis. (deprecated arguments)")]),e._v(" "),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("tf.compat.v1.sparse.split")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" tf.compat.v1.sparse_split(\n    keyword_required=KeywordRequired(),\n    sp_input=None,\n    num_split=None,\n    axis=None,\n    name=None,\n    split_dim=None\n)\n")])])]),s("p",[e._v("If the sp_input.dense_shape[axis] is not an integer multiple of num_split each slice starting from 0:shape[axis] % num_split gets extra one dimension. For example, if axis = 1 and num_split = 2 and the input is:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" input_tensor = shape = [2, 7]\n[    a   d e  ]\n[b c          ]\n")])])]),s("p",[e._v("Graphically the output tensors are:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" output_tensor[0] =\n[    a   ]\n[b c     ]\n\noutput_tensor[1] =\n[ d e  ]\n[      ]\n")])])]),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("keyword_required")]),e._v(": Python 2 standin for * (temporary for argument reorder)")]),e._v(" "),s("li",[s("code",[e._v("sp_input")]),e._v(": The "),s("code",[e._v("SparseTensor")]),e._v(" to split.")]),e._v(" "),s("li",[s("code",[e._v("num_split")]),e._v(": A Python integer. The number of ways to split.")]),e._v(" "),s("li",[s("code",[e._v("axis")]),e._v(": A 0-D "),s("code",[e._v("int32")]),e._v(" "),s("code",[e._v("Tensor")]),e._v(". The dimension along which to split.")]),e._v(" "),s("li",[s("code",[e._v("name")]),e._v(": A "),s("code",[e._v("name")]),e._v(" for the operation (optional).")]),e._v(" "),s("li",[s("code",[e._v("split_dim")]),e._v(": Deprecated old "),s("code",[e._v("name")]),e._v(" for "),s("code",[e._v("axis")]),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[e._v("num_split SparseTensor objects resulting from splitting value.")]),e._v(" "),s("h4",{attrs:{id:"raises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("TypeError")]),e._v(": If "),s("code",[e._v("sp_input")]),e._v(" is not a "),s("code",[e._v("SparseTensor")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("ValueError")]),e._v(": If the deprecated "),s("code",[e._v("split_dim")]),e._v(" and "),s("code",[e._v("axis")]),e._v(" are both non None.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);