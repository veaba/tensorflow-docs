(window.webpackJsonp=window.webpackJsonp||[]).push([[793],{981:function(e,t,s){"use strict";s.r(t);var n=s(0),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Computes the sum along sparse segments of a tensor.")]),e._v(" "),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("tf.compat.v1.sparse.segment_sum")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" tf.compat.v1.sparse_segment_sum(\n    data,\n    indices,\n    segment_ids,\n    name=None,\n    num_segments=None\n)\n")])])]),s("p",[s("a",{attrs:{href:"https://tensorflow.org/api_docs/python/tf/math#Segmentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("the section on segmentation"),s("OutboundLink")],1),e._v("Read  for an explanation of segments.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/segment_sum",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.math.segment_sum"),s("OutboundLink")],1),e._v("Like , but segment_ids can have rank less than data's first dimension, selecting a subset of dimension 0, specified by indices. segment_ids is allowed to have missing ids, in which case the output will be zeros at those indices. In those cases num_segments is used to determine the size of the output.")]),e._v(" "),s("h4",{attrs:{id:"for-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-example","aria-hidden":"true"}},[e._v("#")]),e._v(" For example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" c = tf.constant([[1,2,3,4], [-1,-2,-3,-4], [5,6,7,8]])\n\n# Select two rows, one segment.\ntf.sparse.segment_sum(c, tf.constant([0, 1]), tf.constant([0, 0]))\n# => [[0 0 0 0]]\n\n# Select two rows, two segment.\ntf.sparse.segment_sum(c, tf.constant([0, 1]), tf.constant([0, 1]))\n# => [[ 1  2  3  4]\n#     [-1 -2 -3 -4]]\n\n# With missing segment ids.\ntf.sparse.segment_sum(c, tf.constant([0, 1]), tf.constant([0, 2]),\n                      num_segments=4)\n# => [[ 1  2  3  4]\n#     [ 0  0  0  0]\n#     [-1 -2 -3 -4]\n#     [ 0  0  0  0]]\n\n# Select all rows, two segments.\ntf.sparse.segment_sum(c, tf.constant([0, 1, 2]), tf.constant([0, 0, 1]))\n# => [[0 0 0 0]\n#     [5 6 7 8]]\n\n# Which is equivalent to:\ntf.math.segment_sum(c, tf.constant([0, 0, 1]))\n")])])]),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("data")]),e._v(": A "),s("code",[e._v("Tensor")]),e._v(" with "),s("code",[e._v("data")]),e._v(" that will be assembled in the output.")]),e._v(" "),s("li",[s("code",[e._v("indices")]),e._v(": A 1-D "),s("code",[e._v("Tensor")]),e._v(" with "),s("code",[e._v("indices")]),e._v(" into "),s("code",[e._v("data")]),e._v(". Has same rank as "),s("code",[e._v("segment_ids")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("segment_ids")]),e._v(": A 1-D "),s("code",[e._v("Tensor")]),e._v(" with "),s("code",[e._v("indices")]),e._v(" into the output "),s("code",[e._v("Tensor")]),e._v(". Values should be sorted and can be repeated.")]),e._v(" "),s("li",[s("code",[e._v("name")]),e._v(": A "),s("code",[e._v("name")]),e._v(" for the operation (optional).")]),e._v(" "),s("li",[s("code",[e._v("num_segments")]),e._v(": An optional int32 scalar. Indicates the size of the output "),s("code",[e._v("Tensor")]),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[e._v("A tensor of the shape as data, except for dimension 0 which has size k, the number of segments specified via num_segments or inferred for the last element in segments_ids.")])])}),[],!1,null,null,null);t.default=a.exports}}]);