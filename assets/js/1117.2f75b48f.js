(window.webpackJsonp=window.webpackJsonp||[]).push([[1117],{1306:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("A transformation that enumerates the elements of a dataset. (deprecated)")]),t._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[t._v("#")]),t._v(" Aliases:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("tf.compat.v1.data.experimental.enumerate_dataset")])]),t._v(" "),a("li",[a("code",[t._v("tf.compat.v2.data.experimental.enumerate_dataset")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" tf.data.experimental.enumerate_dataset(start=0)\n")])])]),a("p",[t._v("It is similar to python's enumerate. For example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" # NOTE: The following examples use `{ ... }` to represent the\n# contents of a dataset.\na = { 1, 2, 3 }\nb = { (7, 8), (9, 10) }\n\n# The nested structure of the `datasets` argument determines the\n# structure of elements in the resulting dataset.\na.apply(tf.data.experimental.enumerate_dataset(start=5))\n=> { (5, 1), (6, 2), (7, 3) }\nb.apply(tf.data.experimental.enumerate_dataset())\n=> { (0, (7, 8)), (1, (9, 10)) }\n")])])]),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[t._v("#")]),t._v(" Args:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("start")]),t._v(": A "),a("code",[t._v("tf.int64")]),t._v(" scalar "),a("code",[t._v("tf.Tensor")]),t._v(", representing the "),a("code",[t._v("start")]),t._v(" value for enumeration.")])]),t._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[t._v("#")]),t._v(" Returns:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/data/Dataset#apply",target:"_blank",rel:"noopener noreferrer"}},[t._v("tf.data.Dataset.apply"),a("OutboundLink")],1),t._v("A Dataset transformation function, which can be passed to .")])])}),[],!1,null,null,null);e.default=r.exports}}]);