(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{222:function(e,t,n){"use strict";n.r(t);var i=n(0),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Compatibility utility required to allow for both V1 and V2 behavior in TF.")]),e._v(" "),n("h3",{attrs:{id:"aliases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("tf.compat.v1.compat.dimension_at_index")])]),e._v(" "),n("li",[n("code",[e._v("tf.compat.v1.dimension_at_index")])]),e._v(" "),n("li",[n("code",[e._v("tf.compat.v2.compat.dimension_at_index")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" tf.compat.dimension_at_index(\n    shape,\n    index\n)\n")])])]),n("p",[e._v("Until the release of TF 2.0, we need the legacy behavior of TensorShape to coexist with the new behavior. This utility is a bridge between the two.")]),e._v(" "),n("p",[e._v("If you want to retrieve the Dimension instance corresponding to a certain index in a TensorShape instance, use this utility, like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" # If you had this in your V1 code:\ndim = tensor_shape[i]\n\n# Use `dimension_at_index` as direct replacement compatible with both V1 & V2:\ndim = dimension_at_index(tensor_shape, i)\n\n# Another possibility would be this, but WARNING: it only works if the\n# tensor_shape instance has a defined rank.\ndim = tensor_shape.dims[i]  # `dims` may be None if the rank is undefined!\n\n# In native V2 code, we recommend instead being more explicit:\nif tensor_shape.rank is None:\n  dim = Dimension(None)\nelse:\n  dim = tensor_shape.dims[i]\n\n# Being more explicit will save you from the following trap (present in V1):\n# you might do in-place modifications to `dim` and expect them to be reflected\n# in `tensor_shape[i]`, but they would not be (as the Dimension object was\n# instantiated on the fly.\n")])])]),n("h4",{attrs:{id:"arguments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("shape")]),e._v(": A TensorShape instance.")]),e._v(" "),n("li",[n("code",[e._v("index")]),e._v(": An integer "),n("code",[e._v("index")]),e._v(".")])]),e._v(" "),n("h4",{attrs:{id:"returns"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),n("p",[e._v("A dimension object.")])])}),[],!1,null,null,null);t.default=a.exports}}]);