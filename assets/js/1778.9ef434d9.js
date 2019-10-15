(window.webpackJsonp=window.webpackJsonp||[]).push([[1778],{1969:function(a,e,t){"use strict";t.r(e);var s=t(0),i=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"class-maxpool3d"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-maxpool3d","aria-hidden":"true"}},[a._v("#")]),a._v(" Class MaxPool3D")]),a._v(" "),t("p",[a._v("Max pooling operation for 3D data (spatial or spatio-temporal).")]),a._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[a._v("#")]),a._v(" Aliases:")]),a._v(" "),t("ul",[t("li",[a._v("Class "),t("code",[a._v("tf.compat.v1.keras.layers.MaxPool3D")])]),a._v(" "),t("li",[a._v("Class "),t("code",[a._v("tf.compat.v1.keras.layers.MaxPooling3D")])]),a._v(" "),t("li",[a._v("Class "),t("code",[a._v("tf.compat.v2.keras.layers.MaxPool3D")])]),a._v(" "),t("li",[a._v("Class "),t("code",[a._v("tf.compat.v2.keras.layers.MaxPooling3D")])]),a._v(" "),t("li",[a._v("Class "),t("code",[a._v("tf.keras.layers.MaxPooling3D")])])]),a._v(" "),t("h4",{attrs:{id:"arguments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[a._v("#")]),a._v(" Arguments:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("pool_size")]),a._v(": Tuple of 3 integers, factors by which to downscale (dim1, dim2, dim3). ("),t("code",[a._v("2, 2, 2")]),a._v(") will halve the size of the 3D input in each dimension.")]),a._v(" "),t("li",[t("code",[a._v("strides")]),a._v(": tuple of 3 integers, or None. Strides values.")]),a._v(" "),t("li",[t("code",[a._v("padding")]),a._v(": One of "),t("code",[a._v('"valid"')]),a._v(" or "),t("code",[a._v('"same"')]),a._v(" (case-insensitive).")]),a._v(" "),t("li",[t("code",[a._v("data_format")]),a._v(": A string, one of "),t("code",[a._v("channels_last")]),a._v(" (default) or "),t("code",[a._v("channels_first")]),a._v(". The ordering of the dimensions in the inputs. "),t("code",[a._v("channels_last")]),a._v(" corresponds to inputs with shape ("),t("code",[a._v("batch, spatial_dim1, spatial_dim2, spatial_dim3, channels")]),a._v(") while "),t("code",[a._v("channels_first")]),a._v(" corresponds to inputs with shape ("),t("code",[a._v("batch, channels, spatial_dim1, spatial_dim2, spatial_dim3")]),a._v("). It defaults to the "),t("code",[a._v("image_data_format")]),a._v(" value found in your Keras config file at "),t("code",[a._v("~/.keras/keras.json")]),a._v('. If you never set it, then it will be "'),t("code",[a._v("channels_last")]),a._v('".')])]),a._v(" "),t("h4",{attrs:{id:"input-shape"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-shape","aria-hidden":"true"}},[a._v("#")]),a._v(" Input shape:")]),a._v(" "),t("ul",[t("li",[a._v("If "),t("code",[a._v("data_format='channels_last'")]),a._v(": 5D tensor with shape: ("),t("code",[a._v("batch_size, spatial_dim1, spatial_dim2, spatial_dim3, channels")]),a._v(")")]),a._v(" "),t("li",[a._v("If "),t("code",[a._v("data_format='channels_first'")]),a._v(": 5D tensor with shape: ("),t("code",[a._v("batch_size, channels, spatial_dim1, spatial_dim2, spatial_dim3")]),a._v(")")])]),a._v(" "),t("h4",{attrs:{id:"output-shape"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-shape","aria-hidden":"true"}},[a._v("#")]),a._v(" Output shape:")]),a._v(" "),t("ul",[t("li",[a._v("If "),t("code",[a._v("data_format='channels_last'")]),a._v(": 5D tensor with shape: ("),t("code",[a._v("batch_size, pooled_dim1, pooled_dim2, pooled_dim3, channels")]),a._v(")")]),a._v(" "),t("li",[a._v("If "),t("code",[a._v("data_format='channels_first'")]),a._v(": 5D tensor with shape: ("),t("code",[a._v("batch_size, channels, pooled_dim1, pooled_dim2, pooled_dim3")]),a._v(")")])]),a._v(" "),t("h2",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("strong",[a._v("init")])]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L515-L524",target:"_blank",rel:"noopener noreferrer"}},[a._v("View source"),t("OutboundLink")],1)]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" __init__(\n    pool_size=(2, 2, 2),\n    strides=None,\n    padding='valid',\n    data_format=None,\n    **kwargs\n)\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);