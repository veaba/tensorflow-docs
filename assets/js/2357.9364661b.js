(window.webpackJsonp=window.webpackJsonp||[]).push([[2357],{2545:function(e,s,a){"use strict";a.r(s);var t=a(0),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Slice a SparseTensor based on the start and `size.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("tf.compat.v1.sparse.slice")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v1.sparse_slice")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.sparse.slice")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.sparse.slice(\n    sp_input,\n    start,\n    size,\n    name=None\n)\n")])])]),a("p",[e._v("For example, if the input is")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" input_tensor = shape = [2, 7]\n[    a   d e  ]\n[b c          ]\n")])])]),a("p",[e._v("Graphically the output tensors are:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" sparse.slice([0, 0], [2, 4]) = shape = [2, 4]\n[    a  ]\n[b c    ]\n\nsparse.slice([0, 4], [2, 3]) = shape = [2, 3]\n[ d e  ]\n[      ]\n")])])]),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("sp_input")]),e._v(": The "),a("code",[e._v("SparseTensor")]),e._v(" to split.")]),e._v(" "),a("li",[a("code",[e._v("start")]),e._v(": 1-D. tensor represents the "),a("code",[e._v("start")]),e._v(" of the slice.")]),e._v(" "),a("li",[a("code",[e._v("size")]),e._v(": 1-D. tensor represents the "),a("code",[e._v("size")]),e._v(" of the slice.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": A "),a("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A SparseTensor objects resulting from splicing.")]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("TypeError")]),e._v(": If "),a("code",[e._v("sp_input")]),e._v(" is not a "),a("code",[e._v("SparseTensor")]),e._v(".")])])])}),[],!1,null,null,null);s.default=r.exports}}]);