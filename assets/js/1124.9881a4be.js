(window.webpackJsonp=window.webpackJsonp||[]).push([[1124],{1313:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Creates a Dataset from another Dataset and silently ignores any errors.")]),t._v(" "),e("h3",{attrs:{id:"aliases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[t._v("#")]),t._v(" Aliases:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("tf.compat.v1.data.experimental.ignore_errors")])]),t._v(" "),e("li",[e("code",[t._v("tf.compat.v2.data.experimental.ignore_errors")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" tf.data.experimental.ignore_errors()\n")])])]),e("p",[t._v("Use this transformation to produce a dataset that contains the same elements as the input, but silently drops any elements that caused an error. For example:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' dataset = tf.data.Dataset.from_tensor_slices([1., 2., 0., 4.])\n\n# Computing `tf.debugging.check_numerics(1. / 0.)` will raise an\nInvalidArgumentError.\ndataset = dataset.map(lambda x: tf.debugging.check_numerics(1. / x, "error"))\n\n# Using `ignore_errors()` will drop the element that causes an error.\ndataset =\n    dataset.apply(tf.data.experimental.ignore_errors())  # ==> {1., 0.5, 0.2}\n')])])]),e("h4",{attrs:{id:"returns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[t._v("#")]),t._v(" Returns:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/data/Dataset#apply",target:"_blank",rel:"noopener noreferrer"}},[t._v("tf.data.Dataset.apply"),e("OutboundLink")],1),t._v("A Dataset transformation function, which can be passed to .")])])}),[],!1,null,null,null);a.default=s.exports}}]);