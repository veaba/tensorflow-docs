(window.webpackJsonp=window.webpackJsonp||[]).push([[1661],{1852:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-progbarlogger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-progbarlogger","aria-hidden":"true"}},[e._v("#")]),e._v(" Class ProgbarLogger")]),e._v(" "),a("p",[e._v("Callback that prints metrics to stdout.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/callbacks/Callback",target:"_blank",rel:"noopener noreferrer"}},[e._v("Callback"),a("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[e._v("Class "),a("code",[e._v("tf.compat.v1.keras.callbacks.ProgbarLogger")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.keras.callbacks.ProgbarLogger")])])]),e._v(" "),a("h4",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("count_mode")]),e._v(': One of "steps" or "samples". Whether the progress bar should count samples seen or steps (batches) seen.')]),e._v(" "),a("li",[a("code",[e._v("stateful_metrics")]),e._v(": Iterable of string names of metrics that should not be averaged over an epoch. Metrics in this list will be logged as-is. All others will be averaged over time (e.g. loss, etc).")])]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": In case of invalid "),a("code",[e._v("count_mode")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L709-L717",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    count_mode='samples',\n    stateful_metrics=None\n)\n")])])]),a("p",[e._v("Initialize self. See help(type(self)) for accurate signature.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"on-batch-begin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-batch-begin","aria-hidden":"true"}},[e._v("#")]),e._v(" on_batch_begin")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L739-L740",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_batch_begin(\n    batch,\n    logs=None\n)\n")])])]),a("p",[e._v("A backwards compatibility alias for on_train_batch_begin.")]),e._v(" "),a("h3",{attrs:{id:"on-batch-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-batch-end","aria-hidden":"true"}},[e._v("#")]),e._v(" on_batch_end")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L742-L760",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_batch_end(\n    batch,\n    logs=None\n)\n")])])]),a("p",[e._v("A backwards compatibility alias for on_train_batch_end.")]),e._v(" "),a("h3",{attrs:{id:"on-epoch-begin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-epoch-begin","aria-hidden":"true"}},[e._v("#")]),e._v(" on_epoch_begin")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L723-L737",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_epoch_begin(\n    epoch,\n    logs=None\n)\n")])])]),a("p",[e._v("Called at the start of an epoch.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run. This function should only be called during TRAIN mode.")]),e._v(" "),a("h4",{attrs:{id:"arguments-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("epoch")]),e._v(": integer, index of "),a("code",[e._v("epoch")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("logs")]),e._v(": dict. Currently no data is passed to this argument for this method but that may change in the future.")])]),e._v(" "),a("h3",{attrs:{id:"on-epoch-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-epoch-end","aria-hidden":"true"}},[e._v("#")]),e._v(" on_epoch_end")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L762-L768",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_epoch_end(\n    epoch,\n    logs=None\n)\n")])])]),a("p",[e._v("Called at the end of an epoch.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run. This function should only be called during TRAIN mode.")]),e._v(" "),a("h4",{attrs:{id:"arguments-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("epoch")]),e._v(": integer, index of "),a("code",[e._v("epoch")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("logs")]),e._v(": dict, metric results for this training "),a("code",[e._v("epoch")]),e._v(", and for the validation "),a("code",[e._v("epoch")]),e._v(" if validation is performed. Validation result keys are prefixed with "),a("code",[e._v("val_")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"on-predict-batch-begin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-predict-batch-begin","aria-hidden":"true"}},[e._v("#")]),e._v(" on_predict_batch_begin")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L547-L556",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_predict_batch_begin(\n    batch,\n    logs=None\n)\n")])])]),a("p",[e._v("Called at the beginning of a batch in predict methods.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run.")]),e._v(" "),a("h4",{attrs:{id:"arguments-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("batch")]),e._v(": integer, index of "),a("code",[e._v("batch")]),e._v(" within the current epoch.")]),e._v(" "),a("li",[a("code",[e._v("logs")]),e._v(": dict. Has keys "),a("code",[e._v("batch")]),e._v(" and "),a("code",[e._v("size")]),e._v(" representing the current "),a("code",[e._v("batch")]),e._v(" number and the "),a("code",[e._v("size")]),e._v(" of the "),a("code",[e._v("batch")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"on-predict-batch-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-predict-batch-end","aria-hidden":"true"}},[e._v("#")]),e._v(" on_predict_batch_end")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L558-L566",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_predict_batch_end(\n    batch,\n    logs=None\n)\n")])])]),a("p",[e._v("Called at the end of a batch in predict methods.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run.")]),e._v(" "),a("h4",{attrs:{id:"arguments-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("batch")]),e._v(": integer, index of "),a("code",[e._v("batch")]),e._v(" within the current epoch.")]),e._v(" "),a("li",[a("code",[e._v("logs")]),e._v(": dict. Metric results for this "),a("code",[e._v("batch")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"on-predict-begin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-predict-begin","aria-hidden":"true"}},[e._v("#")]),e._v(" on_predict_begin")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L608-L616",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_predict_begin(logs=None)\n")])])]),a("p",[e._v("Called at the beginning of prediction.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run.")]),e._v(" "),a("h4",{attrs:{id:"arguments-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("logs")]),e._v(": dict. Currently no data is passed to this argument for this method but that may change in the future.")])]),e._v(" "),a("h3",{attrs:{id:"on-predict-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-predict-end","aria-hidden":"true"}},[e._v("#")]),e._v(" on_predict_end")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L618-L626",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_predict_end(logs=None)\n")])])]),a("p",[e._v("Called at the end of prediction.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run.")]),e._v(" "),a("h4",{attrs:{id:"arguments-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("logs")]),e._v(": dict. Currently no data is passed to this argument for this method but that may change in the future.")])]),e._v(" "),a("h3",{attrs:{id:"on-test-batch-begin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-test-batch-begin","aria-hidden":"true"}},[e._v("#")]),e._v(" on_test_batch_begin")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L520-L532",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_test_batch_begin(\n    batch,\n    logs=None\n)\n")])])]),a("p",[e._v("Called at the beginning of a batch in evaluate methods.")]),e._v(" "),a("p",[e._v("Also called at the beginning of a validation batch in the fit methods, if validation data is provided.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run.")]),e._v(" "),a("h4",{attrs:{id:"arguments-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-8","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("batch")]),e._v(": integer, index of "),a("code",[e._v("batch")]),e._v(" within the current epoch.")]),e._v(" "),a("li",[a("code",[e._v("logs")]),e._v(": dict. Has keys "),a("code",[e._v("batch")]),e._v(" and "),a("code",[e._v("size")]),e._v(" representing the current "),a("code",[e._v("batch")]),e._v(" number and the "),a("code",[e._v("size")]),e._v(" of the "),a("code",[e._v("batch")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"on-test-batch-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-test-batch-end","aria-hidden":"true"}},[e._v("#")]),e._v(" on_test_batch_end")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L534-L545",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_test_batch_end(\n    batch,\n    logs=None\n)\n")])])]),a("p",[e._v("Called at the end of a batch in evaluate methods.")]),e._v(" "),a("p",[e._v("Also called at the end of a validation batch in the fit methods, if validation data is provided.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run.")]),e._v(" "),a("h4",{attrs:{id:"arguments-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-9","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("batch")]),e._v(": integer, index of "),a("code",[e._v("batch")]),e._v(" within the current epoch.")]),e._v(" "),a("li",[a("code",[e._v("logs")]),e._v(": dict. Metric results for this "),a("code",[e._v("batch")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"on-test-begin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-test-begin","aria-hidden":"true"}},[e._v("#")]),e._v(" on_test_begin")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L588-L596",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_test_begin(logs=None)\n")])])]),a("p",[e._v("Called at the beginning of evaluation or validation.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run.")]),e._v(" "),a("h4",{attrs:{id:"arguments-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-10","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("logs")]),e._v(": dict. Currently no data is passed to this argument for this method but that may change in the future.")])]),e._v(" "),a("h3",{attrs:{id:"on-test-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-test-end","aria-hidden":"true"}},[e._v("#")]),e._v(" on_test_end")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L598-L606",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_test_end(logs=None)\n")])])]),a("p",[e._v("Called at the end of evaluation or validation.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run.")]),e._v(" "),a("h4",{attrs:{id:"arguments-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-11","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("logs")]),e._v(": dict. Currently no data is passed to this argument for this method but that may change in the future.")])]),e._v(" "),a("h3",{attrs:{id:"on-train-batch-begin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-train-batch-begin","aria-hidden":"true"}},[e._v("#")]),e._v(" on_train_batch_begin")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L495-L506",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_train_batch_begin(\n    batch,\n    logs=None\n)\n")])])]),a("p",[e._v("Called at the beginning of a training batch in fit methods.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run.")]),e._v(" "),a("h4",{attrs:{id:"arguments-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-12","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("batch")]),e._v(": integer, index of "),a("code",[e._v("batch")]),e._v(" within the current epoch.")]),e._v(" "),a("li",[a("code",[e._v("logs")]),e._v(": dict. Has keys "),a("code",[e._v("batch")]),e._v(" and "),a("code",[e._v("size")]),e._v(" representing the current "),a("code",[e._v("batch")]),e._v(" number and the "),a("code",[e._v("size")]),e._v(" of the "),a("code",[e._v("batch")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"on-train-batch-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-train-batch-end","aria-hidden":"true"}},[e._v("#")]),e._v(" on_train_batch_end")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L508-L518",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_train_batch_end(\n    batch,\n    logs=None\n)\n")])])]),a("p",[e._v("Called at the end of a training batch in fit methods.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run.")]),e._v(" "),a("h4",{attrs:{id:"arguments-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-13","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("batch")]),e._v(": integer, index of "),a("code",[e._v("batch")]),e._v(" within the current epoch.")]),e._v(" "),a("li",[a("code",[e._v("logs")]),e._v(": dict. Metric results for this "),a("code",[e._v("batch")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"on-train-begin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-train-begin","aria-hidden":"true"}},[e._v("#")]),e._v(" on_train_begin")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L719-L721",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_train_begin(logs=None)\n")])])]),a("p",[e._v("Called at the beginning of training.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run.")]),e._v(" "),a("h4",{attrs:{id:"arguments-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-14","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("logs")]),e._v(": dict. Currently no data is passed to this argument for this method but that may change in the future.")])]),e._v(" "),a("h3",{attrs:{id:"on-train-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-train-end","aria-hidden":"true"}},[e._v("#")]),e._v(" on_train_end")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L578-L586",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" on_train_end(logs=None)\n")])])]),a("p",[e._v("Called at the end of training.")]),e._v(" "),a("p",[e._v("Subclasses should override for any actions to run.")]),e._v(" "),a("h4",{attrs:{id:"arguments-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-15","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("logs")]),e._v(": dict. Currently no data is passed to this argument for this method but that may change in the future.")])]),e._v(" "),a("h3",{attrs:{id:"set-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-model","aria-hidden":"true"}},[e._v("#")]),e._v(" set_model")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L461-L462",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" set_model(model)\n")])])]),a("h3",{attrs:{id:"set-params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-params","aria-hidden":"true"}},[e._v("#")]),e._v(" set_params")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L458-L459",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" set_params(params)\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);