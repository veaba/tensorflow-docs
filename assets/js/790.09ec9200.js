(window.webpackJsonp=window.webpackJsonp||[]).push([[790],{978:function(e,s,t){"use strict";t.r(s);var r=t(0),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Computes the sum of elements across dimensions of a SparseTensor. (deprecated arguments)")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("tf.compat.v1.sparse.reduce_sum_sparse")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.compat.v1.sparse_reduce_sum_sparse(\n    sp_input,\n    axis=None,\n    keepdims=None,\n    reduction_axes=None,\n    keep_dims=None\n)\n")])])]),t("p",[t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/reduce_sum",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.reduce_sum()"),t("OutboundLink")],1),e._v("This Op takes a SparseTensor and is the sparse counterpart to . In contrast to SparseReduceSum, this Op returns a SparseTensor.")]),e._v(" "),t("p",[e._v("Reduces sp_input along the dimensions given in reduction_axes. Unless keepdims is true, the rank of the tensor is reduced by 1 for each entry in reduction_axes. If keepdims is true, the reduced dimensions are retained with length 1.")]),e._v(" "),t("p",[e._v("If reduction_axes has no entries, all dimensions are reduced, and a tensor with a single element is returned. Additionally, the axes can be negative, which are interpreted according to the indexing rules in Python.")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("sp_input")]),e._v(": The SparseTensor to reduce. Should have numeric type.")]),e._v(" "),t("li",[t("code",[e._v("axis")]),e._v(": The dimensions to reduce; list or scalar. If "),t("code",[e._v("None")]),e._v(" (the default), reduces all dimensions.")]),e._v(" "),t("li",[t("code",[e._v("keepdims")]),e._v(": If true, retain reduced dimensions with length 1.")]),e._v(" "),t("li",[t("code",[e._v("reduction_axes")]),e._v(": Deprecated name of "),t("code",[e._v("axis")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("keep_dims")]),e._v(": Deprecated alias for "),t("code",[e._v("keepdims")]),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("The reduced SparseTensor.")])])}),[],!1,null,null,null);s.default=a.exports}}]);