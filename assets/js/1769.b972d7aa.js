(window.webpackJsonp=window.webpackJsonp||[]).push([[1769],{1960:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"class-lambda"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-lambda","aria-hidden":"true"}},[e._v("#")]),e._v(" Class Lambda")]),e._v(" "),t("p",[e._v("Wraps arbitrary expressions as a Layer object.\n"),t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Layer"),t("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[e._v("Class "),t("code",[e._v("tf.compat.v1.keras.layers.Lambda")])]),e._v(" "),t("li",[e._v("Class "),t("code",[e._v("tf.compat.v2.keras.layers.Lambda")]),e._v(" "),t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer",target:"_blank",rel:"noopener noreferrer"}},[e._v("keras.layers.Layer"),t("OutboundLink")],1),e._v("The Lambda layer exists so that arbitrary TensorFlow functions can be used when constructing Sequential and Functional API models. Lambda layers are best suited for simple operations or quick experimentation. For more advanced use cases, subclassing  is preferred. One reason for this is that when saving a Model, Lambda layers are saved by serializing the Python bytecode, whereas subclassed Layers are saved via overriding their get_config method and are thus more portable. Models that rely on subclassed Layers are also often easier to visualize and reason about.")])]),e._v(" "),t("h4",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" # add a x -> x^2 layer\nmodel.add(Lambda(lambda x: x ** 2))\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" # add a layer that returns the concatenation\n# of the positive part of the input and\n# the opposite of the negative part\n\ndef antirectifier(x):\n    x -= K.mean(x, axis=1, keepdims=True)\n    x = K.l2_normalize(x, axis=1)\n    pos = K.relu(x)\n    neg = K.relu(-x)\n    return K.concatenate([pos, neg], axis=1)\n\nmodel.add(Lambda(antirectifier))\n")])])]),t("p",[e._v("Variables can be created within a Lambda layer. Like with other layers, these variables will be created only once and reused if the Lambda layer is called on new inputs. If creating more than one variable in a given Lambda instance, be sure to use a different name for each variable. Note that calling sublayers from within a Lambda is not supported.")]),e._v(" "),t("p",[e._v("Example of variable creation:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" def linear_transform(x):\n  v1 = tf.Variable(1., name='multiplier')\n  v2 = tf.Variable(0., name='bias')\n  return x*v1 + v2\n\nlinear_layer = Lambda(linear_transform)\nmodel.add(linear_layer)\nmodel.add(keras.layers.Dense(10, activation='relu'))\nmodel.add(linear_layer)  # Reuses existing Variables\n")])])]),t("p",[e._v("Note that creating two instances of Lambda using the same function will not share Variables between the two instances. Each instance of Lambda will create and manage its own weights.")]),e._v(" "),t("h4",{attrs:{id:"arguments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("function")]),e._v(": The "),t("code",[e._v("function")]),e._v(" to be evaluated. Takes input tensor as first argument.")]),e._v(" "),t("li",[t("code",[e._v("output_shape")]),e._v(": Expected output shape from "),t("code",[e._v("function")]),e._v(". This argument can be inferred if not explicitly provided. Can be a tuple or "),t("code",[e._v("function")]),e._v(". If a tuple, it only specifies the first dimension onward; sample dimension is assumed either the same as the input: "),t("code",[e._v("output_shape")]),e._v(" = (input_shape[0], ) + "),t("code",[e._v("output_shape")]),e._v(" or, the input is "),t("code",[e._v("None")]),e._v(" and the sample dimension is also "),t("code",[e._v("None")]),e._v(": "),t("code",[e._v("output_shape")]),e._v(" = ("),t("code",[e._v("None")]),e._v(", ) + "),t("code",[e._v("output_shape")]),e._v(" If a "),t("code",[e._v("function")]),e._v(", it specifies the entire shape as a "),t("code",[e._v("function")]),e._v(" of the input shape: "),t("code",[e._v("output_shape")]),e._v(" = f(input_shape)")]),e._v(" "),t("li",[t("code",[e._v("mask")]),e._v(": Either "),t("code",[e._v("None")]),e._v(" (indicating no "),t("code",[e._v("mask")]),e._v("ing) or a callable with the same signature as the "),t("code",[e._v("compute_mask")]),e._v(" layer method, or a tensor that will be returned as output "),t("code",[e._v("mask")]),e._v(" regardless what the input is.")]),e._v(" "),t("li",[t("code",[e._v("arguments")]),e._v(": Optional dictionary of keyword "),t("code",[e._v("arguments")]),e._v(" to be passed to the "),t("code",[e._v("function")]),e._v(". Input shape: Arbitrary. Use the keyword argument input_shape (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model. Output shape: Specified by "),t("code",[e._v("output_shape")]),e._v(" argument")])]),e._v(" "),t("h2",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("strong",[e._v("init")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L741-L757",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" __init__(\n    function,\n    output_shape=None,\n    mask=None,\n    arguments=None,\n    **kwargs\n)\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);