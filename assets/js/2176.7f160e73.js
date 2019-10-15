(window.webpackJsonp=window.webpackJsonp||[]).push([[2176],{2364:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Returns a flat list from a given nested structure.")]),e._v(" "),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("tf.compat.v1.nest.flatten")])]),e._v(" "),s("li",[s("code",[e._v("tf.compat.v2.nest.flatten")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" tf.nest.flatten(\n    structure,\n    expand_composites=False\n)\n")])])]),s("h3",{attrs:{id:"used-in-the-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the guide:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("R")]),e._v("e"),s("code",[e._v("c")]),e._v("u"),s("code",[e._v("r")]),e._v("r"),s("code",[e._v("e")]),e._v("n"),s("code",[e._v("t")]),e._v(" "),s("code",[e._v("N")]),e._v("e"),s("code",[e._v("u")]),e._v("r"),s("code",[e._v("a")]),e._v("l"),s("code"),e._v("N"),s("code",[e._v("e")]),e._v("t"),s("code",[e._v("w")]),e._v("o"),s("code",[e._v("r")]),e._v("k"),s("code",[e._v("s")]),e._v(" "),s("code",[e._v("(")]),e._v("R"),s("code",[e._v("N")]),e._v("N"),s("code",[e._v(")")]),e._v(" "),s("code",[e._v("w")]),e._v("i"),s("code",[e._v("t")]),e._v("h"),s("code"),e._v("K"),s("code",[e._v("e")]),e._v("r"),s("code",[e._v("a")]),e._v("s``")])]),e._v(" "),s("p",[e._v("If nest is not a sequence, tuple, or dict, then returns a single-element list: [nest].")]),e._v(" "),s("p",[e._v("In the case of dict instances, the sequence consists of the values, sorted by key to ensure deterministic behavior. This is true also for OrderedDict instances: their sequence order is ignored, the sorting order of keys is used instead. The same convention is followed in pack_sequence_as. This correctly repacks dicts and OrderedDicts after they have been flattened, and also allows flattening an OrderedDict and then repacking it back using a corresponding plain dict, or vice-versa. Dictionaries with non-sortable keys cannot be flattened.")]),e._v(" "),s("p",[e._v("Users must not modify any collections used in nest while this function is running.")]),e._v(" "),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("structure")]),e._v(": an arbitrarily nested "),s("code",[e._v("structure")]),e._v(" or a scalar object. Note, numpy arrays are considered scalars.")]),e._v(" "),s("li",[s("code",[e._v("expand_composites")]),e._v(": If true, then composite tensors such as tf.SparseTensor and tf.RaggedTensor are expanded into their component tensors.")])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[e._v("A Python list, the flattened version of the input.")]),e._v(" "),s("h4",{attrs:{id:"raises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("TypeError")]),e._v(": The nest is or contains a dict with non-sortable keys.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);