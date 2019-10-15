(window.webpackJsonp=window.webpackJsonp||[]).push([[1122],{1311:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("A transformation that groups elements and performs a reduction.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("tf.compat.v1.data.experimental.group_by_reducer")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.data.experimental.group_by_reducer")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.data.experimental.group_by_reducer(\n    key_func,\n    reducer\n)\n")])])]),a("p",[e._v("This transformation maps element of a dataset to a key using key_func and groups the elements by key. The reducer is used to process each group; its init_func is used to initialize state for each group when it is created, the reduce_func is used to update the state every time an element is mapped to the matching group, and the finalize_func is used to map the final state to an output value.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("key_func")]),e._v(": A function mapping a nested structure of tensors (having shapes and types defined by "),a("code",[e._v("self.output_shapes")]),e._v(" and "),a("code",[e._v("self.output_types")]),e._v(") to a scalar "),a("code",[e._v("tf.int64")]),e._v(" tensor.")]),e._v(" "),a("li",[a("code",[e._v("reducer")]),e._v(": An instance of "),a("code",[e._v("Reducer")]),e._v(", which captures the reduction logic using the "),a("code",[e._v("init_func")]),e._v(", "),a("code",[e._v("reduce_func")]),e._v(", and "),a("code",[e._v("finalize_func")]),e._v(" functions.")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/data/Dataset#apply",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.data.Dataset.apply"),a("OutboundLink")],1),e._v("A Dataset transformation function, which can be passed to .")])])}),[],!1,null,null,null);t.default=r.exports}}]);