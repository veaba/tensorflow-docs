(window.webpackJsonp=window.webpackJsonp||[]).push([[1107],{1296:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"class-statsaggregator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class-statsaggregator","aria-hidden":"true"}},[t._v("#")]),t._v(" Class StatsAggregator")]),t._v(" "),e("p",[t._v("A stateful resource that aggregates statistics from one or more iterators.")]),t._v(" "),e("h3",{attrs:{id:"aliases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[t._v("#")]),t._v(" Aliases:")]),t._v(" "),e("ul",[e("li",[t._v("Class "),e("code",[t._v("tf.compat.v2.data.experimental.StatsAggregator")]),t._v(" "),e("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/data/Dataset",target:"_blank",rel:"noopener noreferrer"}},[t._v("tf.data.Dataset"),e("OutboundLink")],1),t._v("To record statistics, use one of the custom transformation functions defined in this module when defining your . All statistics will be aggregated by the StatsAggregator that is associated with a particular iterator (see below). For example, to record the latency of producing each element by iterating over a dataset:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' dataset = ...\ndataset = dataset.apply(tf.data.experimental.latency_stats("total_bytes"))\n')])])]),e("p",[e("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/data/Dataset",target:"_blank",rel:"noopener noreferrer"}},[t._v("tf.data.Dataset"),e("OutboundLink")],1),t._v("To associate a StatsAggregator with a  object, use the following pattern:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" aggregator = tf.data.experimental.StatsAggregator()\ndataset = ...\n\n# Apply `StatsOptions` to associate `dataset` with `aggregator`.\noptions = tf.data.Options()\noptions.experimental_stats.aggregator = aggregator\ndataset = dataset.with_options(options)\n")])])]),e("h2",{attrs:{id:"init"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("strong",[t._v("init")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/stats_aggregator.py#L63-L78",target:"_blank",rel:"noopener noreferrer"}},[t._v("View source"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" __init__()\n")])])]),e("p",[t._v("Initialize self. See help(type(self)) for accurate signature.")])])}),[],!1,null,null,null);a.default=r.exports}}]);