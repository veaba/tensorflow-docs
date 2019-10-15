(window.webpackJsonp=window.webpackJsonp||[]).push([[1858],{2049:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-meaniou"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-meaniou","aria-hidden":"true"}},[e._v("#")]),e._v(" Class MeanIoU")]),e._v(" "),a("p",[e._v("Computes the mean Intersection-Over-Union metric.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/metrics/Metric",target:"_blank",rel:"noopener noreferrer"}},[e._v("Metric"),a("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[e._v("Class "),a("code",[e._v("tf.compat.v1.keras.metrics.MeanIoU")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.keras.metrics.MeanIoU")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.metrics.MeanIoU")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.metrics.MeanIoU")])])]),e._v(" "),a("p",[e._v("Mean Intersection-Over-Union is a common evaluation metric for semantic image segmentation, which first computes the IOU for each semantic class and then computes the average over classes. IOU is defined as follows: IOU = true_positive / (true_positive + false_positive + false_negative). The predictions are accumulated in a confusion matrix, weighted by sample_weight and the metric is then calculated from it.")]),e._v(" "),a("p",[e._v("If sample_weight is None, weights default to 1. Use sample_weight of 0 to mask values.")]),e._v(" "),a("h4",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" m = tf.keras.metrics.MeanIoU(num_classes=2)\nm.update_state([0, 0, 1, 1], [0, 1, 0, 1])\n\n  # cm = [[1, 1],\n          [1, 1]]\n  # sum_row = [2, 2], sum_col = [2, 2], true_positives = [1, 1]\n  # iou = true_positives / (sum_row + sum_col - true_positives))\n  # result = (1 / (2 + 2 - 1) + 1 / (2 + 2 - 1)) / 2 = 0.33\nprint('Final result: ', m.result().numpy())  # Final result: 0.33\n")])])]),a("p",[e._v("Usage with tf.keras API:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" model = tf.keras.Model(inputs, outputs)\nmodel.compile(\n  'sgd',\n  loss='mse',\n  metrics=[tf.keras.metrics.MeanIoU(num_classes=2)])\n")])])]),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2291-L2310",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    num_classes,\n    name=None,\n    dtype=None\n)\n")])])]),a("p",[e._v("Creates a MeanIoU instance.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("num_classes")]),e._v(": The possible number of labels the prediction task can have. This value must be provided, since a confusion matrix of dimension = ["),a("code",[e._v("num_classes")]),e._v(", "),a("code",[e._v("num_classes")]),e._v("] will be allocated.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": (Optional) string "),a("code",[e._v("name")]),e._v(" of the metric instance.")]),e._v(" "),a("li",[a("code",[e._v("dtype")]),e._v(": (Optional) data type of the metric result.")])]),e._v(" "),a("h2",{attrs:{id:"new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("new")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L144-L160",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __new__(\n    cls,\n    *args,\n    **kwargs\n)\n")])])]),a("p",[e._v("Create and return a new object. See help(type) for accurate signature.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"reset-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-states","aria-hidden":"true"}},[e._v("#")]),e._v(" reset_states")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2372-L2373",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" reset_states()\n")])])]),a("p",[e._v("Resets all of the metric state variables.")]),e._v(" "),a("p",[e._v("This function is called between epochs/steps, when a metric is evaluated during training.")]),e._v(" "),a("h3",{attrs:{id:"result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result","aria-hidden":"true"}},[e._v("#")]),e._v(" result")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2348-L2370",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" result()\n")])])]),a("p",[e._v("Compute the mean intersection-over-union via the confusion matrix.")]),e._v(" "),a("h3",{attrs:{id:"update-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-state","aria-hidden":"true"}},[e._v("#")]),e._v(" update_state")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2312-L2346",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" update_state(\n    y_true,\n    y_pred,\n    sample_weight=None\n)\n")])])]),a("p",[e._v("Accumulates the confusion matrix statistics.")]),e._v(" "),a("h4",{attrs:{id:"args-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("y_true")]),e._v(": The ground truth values.")]),e._v(" "),a("li",[a("code",[e._v("y_pred")]),e._v(": The predicted values.")]),e._v(" "),a("li",[a("code",[e._v("sample_weight")]),e._v(": Optional weighting of each example. Defaults to 1. Can be a "),a("code",[e._v("Tensor")]),e._v(" whose rank is either 0, or the same rank as "),a("code",[e._v("y_true")]),e._v(", and must be broadcastable to "),a("code",[e._v("y_true")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("Update op.")])])}),[],!1,null,null,null);t.default=r.exports}}]);