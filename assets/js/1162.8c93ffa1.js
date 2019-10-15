(window.webpackJsonp=window.webpackJsonp||[]).push([[1162],{1351:function(e,s,a){"use strict";a.r(s);var t=a(0),i=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Assert tensor shapes and dimension size relationships between tensors.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("tf.compat.v2.debugging.assert_shapes")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.debugging.assert_shapes(\n    shapes,\n    data=None,\n    summarize=None,\n    message=None,\n    name=None\n)\n")])])]),a("p",[e._v("This Op checks that a collection of tensors shape relationships satisfies given constraints.")]),e._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" Example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.assert_shapes([\n  (x: ('N', 'Q')),\n  (y: ('N', 'D')),\n  (param: ('Q',)),\n  (scalar: ()),\n])\n")])])]),a("p",[e._v("If x, y, param or scalar does not have a shape that satisfies all specified constraints, message, as well as the first summarize entries of the first encountered violating tensor are printed, and InvalidArgumentError is raised.")]),e._v(" "),a("p",[e._v("Size entries in the specified shapes are checked against other entries by their hash, except: - a size entry is interpreted as an explicit size if it can be parsed as an integer primitive. - a size entry is interpreted as any size if it is None or '.'.")]),e._v(" "),a("p",[e._v("If the first entry of a shape is ... (type Ellipsis) or '*' that indicates a variable number of outer dimensions of unspecified size, i.e. the constraint applies to the inner-most dimensions only.")]),e._v(" "),a("p",[e._v("Scalar tensors and specified shapes of length zero (excluding the 'inner-most' prefix) are both treated as having a single dimension of size one.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("shapes")]),e._v(": dictionary with ("),a("code",[e._v("Tensor")]),e._v(" to shape) items. A shape must be an iterable.")]),e._v(" "),a("li",[a("code",[e._v("data")]),e._v(": The tensors to print out if the condition is False. Defaults to error message and first few entries of the violating tensor.")]),e._v(" "),a("li",[a("code",[e._v("summarize")]),e._v(": Print this many entries of the tensor.")]),e._v(" "),a("li",[a("code",[e._v("message")]),e._v(": A string to prefix to the default "),a("code",[e._v("message")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": A "),a("code",[e._v("name")]),e._v(' for this operation (optional). Defaults to "assert_'),a("code",[e._v("shapes")]),e._v('".')])]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": If static checks determine any shape constraint is violated.")])])])}),[],!1,null,null,null);s.default=i.exports}}]);