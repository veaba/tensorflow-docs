(window.webpackJsonp=window.webpackJsonp||[]).push([[795],{983:function(e,s,a){"use strict";a.r(s);var t=a(0),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Converts a sparse representation into a dense tensor. (deprecated)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.compat.v1.sparse_to_dense(\n    sparse_indices,\n    output_shape,\n    sparse_values,\n    default_value=0,\n    validate_indices=True,\n    name=None\n)\n")])])]),a("p",[e._v("Builds an array dense with shape output_shape such that")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" # If sparse_indices is scalar\ndense[i] = (i == sparse_indices ? sparse_values : default_value)\n\n# If sparse_indices is a vector, then for each i\ndense[sparse_indices[i]] = sparse_values[i]\n\n# If sparse_indices is an n by d matrix, then for each i in [0, n)\ndense[sparse_indices[i][0], ..., sparse_indices[i][d-1]] = sparse_values[i]\n")])])]),a("p",[e._v("All other values in dense are set to default_value. If sparse_values is a scalar, all sparse indices are set to this single value.")]),e._v(" "),a("p",[e._v("Indices should be sorted in lexicographic order, and indices must not contain any repeats. If validate_indices is True, these properties are checked during execution.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("sparse_indices")]),e._v(": A 0-D, 1-D, or 2-D "),a("code",[e._v("Tensor")]),e._v(" of type "),a("code",[e._v("int32")]),e._v(" or "),a("code",[e._v("int64")]),e._v(". "),a("code",[e._v("sparse_indices")]),e._v("[i] contains the complete index where sparse_values[i] will be placed.")]),e._v(" "),a("li",[a("code",[e._v("output_shape")]),e._v(": A 1-D "),a("code",[e._v("Tensor")]),e._v(" of the same type as "),a("code",[e._v("sparse_indices")]),e._v(". Shape of the dense output tensor.")]),e._v(" "),a("li",[a("code",[e._v("sparse_values")]),e._v(": A 0-D or 1-D "),a("code",[e._v("Tensor")]),e._v(". Values corresponding to each row of "),a("code",[e._v("sparse_indices")]),e._v(", or a scalar value to be used for all sparse indices.")]),e._v(" "),a("li",[a("code",[e._v("default_value")]),e._v(": A 0-D "),a("code",[e._v("Tensor")]),e._v(" of the same type as "),a("code",[e._v("sparse_values")]),e._v(". Value to set for indices not specified in "),a("code",[e._v("sparse_indices")]),e._v(". Defaults to zero.")]),e._v(" "),a("li",[a("code",[e._v("validate_indices")]),e._v(": A boolean value. If True, indices are checked to make sure they are sorted in lexicographic order and that there are no repeats.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": A "),a("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("Dense Tensor of shape output_shape. Has the same type as sparse_values.")])])}),[],!1,null,null,null);s.default=r.exports}}]);