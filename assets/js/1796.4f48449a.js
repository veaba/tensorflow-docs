(window.webpackJsonp=window.webpackJsonp||[]).push([[1796],{1987:function(e,a,t){"use strict";t.r(a);var r=t(0),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"class-spatialdropout3d"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-spatialdropout3d","aria-hidden":"true"}},[e._v("#")]),e._v(" Class SpatialDropout3D")]),e._v(" "),t("p",[e._v("Spatial 3D version of Dropout.\n"),t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/layers/Dropout",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dropout"),t("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[e._v("Class "),t("code",[e._v("tf.compat.v1.keras.layers.SpatialDropout3D")])]),e._v(" "),t("li",[e._v("Class "),t("code",[e._v("tf.compat.v2.keras.layers.SpatialDropout3D")])])]),e._v(" "),t("p",[e._v("This version performs the same function as Dropout, however it drops entire 3D feature maps instead of individual elements. If adjacent voxels within feature maps are strongly correlated (as is normally the case in early convolution layers) then regular dropout will not regularize the activations and will otherwise just result in an effective learning rate decrease. In this case, SpatialDropout3D will help promote independence between feature maps and should be used instead.")]),e._v(" "),t("h4",{attrs:{id:"arguments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("rate")]),e._v(": Float between 0 and 1. Fraction of the input units to drop.")]),e._v(" "),t("li",[t("code",[e._v("data_format")]),e._v(": 'channels_first' or 'channels_last'. In 'channels_first' mode, the channels dimension (the depth) is at index 1, in 'channels_last' mode is it at index 4. It defaults to the "),t("code",[e._v("image_data_format")]),e._v(" value found in your Keras config file at "),t("code",[e._v("~/.keras/keras.json")]),e._v('. If you never set it, then it will be "channels_last".')])]),e._v(" "),t("h4",{attrs:{id:"call-arguments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call-arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Call arguments:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("inputs")]),e._v(": A 5D tensor.")]),e._v(" "),t("li",[t("code",[e._v("training")]),e._v(": Python boolean indicating whether the layer should behave in "),t("code",[e._v("training")]),e._v(" mode (adding dropout) or in inference mode (doing nothing).")])]),e._v(" "),t("h4",{attrs:{id:"input-shape"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-shape","aria-hidden":"true"}},[e._v("#")]),e._v(" Input shape:")]),e._v(" "),t("p",[e._v("5D tensor with shape: (samples, channels, dim1, dim2, dim3) if data_format='channels_first' or 5D tensor with shape: (samples, dim1, dim2, dim3, channels) if data_format='channels_last'.")]),e._v(" "),t("h4",{attrs:{id:"output-shape"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-shape","aria-hidden":"true"}},[e._v("#")]),e._v(" Output shape:")]),e._v(" "),t("p",[e._v("Same as input.")]),e._v(" "),t("h4",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("E")]),e._v("f"),t("code",[e._v("f")]),e._v("i"),t("code",[e._v("c")]),e._v("i"),t("code",[e._v("e")]),e._v("n"),t("code",[e._v("t")]),e._v(" "),t("code",[e._v("O")]),e._v("b"),t("code",[e._v("j")]),e._v("e"),t("code",[e._v("c")]),e._v("t"),t("code"),e._v("L"),t("code",[e._v("o")]),e._v("c"),t("code",[e._v("a")]),e._v("l"),t("code",[e._v("i")]),e._v("z"),t("code",[e._v("a")]),e._v("t"),t("code",[e._v("i")]),e._v("o"),t("code",[e._v("n")]),e._v(" "),t("code",[e._v("U")]),e._v("s"),t("code",[e._v("i")]),e._v("n"),t("code",[e._v("g")]),e._v(" "),t("code",[e._v("C")]),e._v("o"),t("code",[e._v("n")]),e._v("v"),t("code",[e._v("o")]),e._v("l"),t("code",[e._v("u")]),e._v("t"),t("code",[e._v("i")]),e._v("o"),t("code",[e._v("n")]),e._v("a"),t("code",[e._v("l")]),e._v(" "),t("code",[e._v("N")]),e._v("e"),t("code",[e._v("t")]),e._v("w"),t("code",[e._v("o")]),e._v("r"),t("code",[e._v("k")]),e._v("s``")])]),e._v(" "),t("h2",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("strong",[e._v("init")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L323-L331",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" __init__(\n    rate,\n    data_format=None,\n    **kwargs\n)\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);