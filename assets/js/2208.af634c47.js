(window.webpackJsonp=window.webpackJsonp||[]).push([[2208],{2396:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/nn/ctc_loss",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.nn.ctc_loss"),a("OutboundLink")],1),e._v("Get unique labels and indices for batched labels for .")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("tf.compat.v1.nn.ctc_unique_labels")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.nn.ctc_unique_labels")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.nn.ctc_unique_labels(\n    labels,\n    name=None\n)\n")])])]),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/nn/ctc_loss",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.nn.ctc_loss"),a("OutboundLink")],1),e._v("For use with  optional argument unique: This op can be used to preprocess labels in input pipeline to for better speed/memory use computing the ctc loss on TPU.")]),e._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" Example:")]),e._v(" "),a("p",[e._v("ctc_unique_labels([[3, 4, 4, 3]]) -> unique labels padded with 0: [[3, 4, 0, 0]] indices of original labels in unique: [0, 1, 1, 0]")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("labels")]),e._v(": tensor of shape [batch_size, max_label_length] padded with 0.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": A "),a("code",[e._v("name")]),e._v(" for this "),a("code",[e._v("Op")]),e._v('. Defaults to "ctc_unique_'),a("code",[e._v("labels")]),e._v('".')])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("tuple of - unique labels, tensor of shape [batch_size, max_label_length] - indices into unique labels, shape [batch_size, max_label_length]")])])}),[],!1,null,null,null);t.default=n.exports}}]);