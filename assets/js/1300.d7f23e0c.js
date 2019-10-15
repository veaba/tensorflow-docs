(window.webpackJsonp=window.webpackJsonp||[]).push([[1300],{1489:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"class-tensorservinginputreceiver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#class-tensorservinginputreceiver","aria-hidden":"true"}},[e._v("#")]),e._v(" Class TensorServingInputReceiver")]),e._v(" "),r("p",[e._v("A return type for a serving_input_receiver_fn.")]),e._v(" "),r("h3",{attrs:{id:"aliases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),r("ul",[r("li",[e._v("Class "),r("code",[e._v("tf.compat.v1.estimator.export.TensorServingInputReceiver")])]),e._v(" "),r("li",[e._v("Class "),r("code",[e._v("tf.compat.v2.estimator.export.TensorServingInputReceiver")])])]),e._v(" "),r("p",[e._v("This is for use with models that expect a single Tensor or SparseTensor as an input feature, as opposed to a dict of features.\n"),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/estimator/Estimator#export_saved_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("Estimator.export_saved_model()"),r("OutboundLink")],1),e._v("The normal ServingInputReceiver always returns a feature dict, even if it contains only one entry, and so can be used only with models that accept such a dict. For models that accept only a single raw feature, the serving_input_receiver_fn provided to  should return this TensorServingInputReceiver instead. See: https://github.com/tensorflow/tensorflow/issues/11674")]),e._v(" "),r("p",[e._v("Note that the receiver_tensors and receiver_tensor_alternatives arguments will be automatically converted to the dict representation in either case, because the SavedModel format requires each input Tensor to have a name (provided by the dict key).")]),e._v(" "),r("p",[e._v("The expected return values are: features: A single Tensor or SparseTensor, representing the feature to be passed to the model. receiver_tensors: A Tensor, SparseTensor, or dict of string to Tensor or SparseTensor, specifying input nodes where this receiver expects to be fed by default. Typically, this is a single placeholder expecting serialized tf.Example protos. receiver_tensors_alternatives: a dict of string to additional groups of receiver tensors, each of which may be a Tensor, SparseTensor, or dict of string to Tensor orSparseTensor. These named receiver tensor alternatives generate additional serving signatures, which may be used to feed inputs at different points within the input receiver subgraph. A typical usage is to allow feeding raw feature Tensors downstream of the tf.parse_example() op. Defaults to None.")]),e._v(" "),r("h2",{attrs:{id:"new"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("new")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/export/export.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" @staticmethod\n__new__(\n    cls,\n    features,\n    receiver_tensors,\n    receiver_tensors_alternatives=None\n)\n")])])]),r("p",[e._v("Create new instance of TensorServingInputReceiver(features, receiver_tensors, receiver_tensors_alternatives)")]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("h3",{attrs:{id:"features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[e._v("#")]),e._v(" features")]),e._v(" "),r("h3",{attrs:{id:"receiver-tensors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#receiver-tensors","aria-hidden":"true"}},[e._v("#")]),e._v(" receiver_tensors")]),e._v(" "),r("h3",{attrs:{id:"receiver-tensors-alternatives"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#receiver-tensors-alternatives","aria-hidden":"true"}},[e._v("#")]),e._v(" receiver_tensors_alternatives")])])}),[],!1,null,null,null);t.default=a.exports}}]);