(window.webpackJsonp=window.webpackJsonp||[]).push([[1818],{2009:function(e,s,t){"use strict";t.r(s);var a=t(0),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"class-logcosh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-logcosh","aria-hidden":"true"}},[e._v("#")]),e._v(" Class LogCosh")]),e._v(" "),t("p",[e._v("Computes the logarithm of the hyperbolic cosine of the prediction error.")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[e._v("Class "),t("code",[e._v("tf.compat.v1.keras.losses.LogCosh")])]),e._v(" "),t("li",[e._v("Class "),t("code",[e._v("tf.compat.v2.keras.losses.LogCosh")])]),e._v(" "),t("li",[e._v("Class "),t("code",[e._v("tf.compat.v2.losses.LogCosh")])]),e._v(" "),t("li",[e._v("Class "),t("code",[e._v("tf.losses.LogCosh")])])]),e._v(" "),t("p",[e._v("logcosh = log((exp(x) + exp(-x))/2), where x is the error y_pred - y_true.")]),e._v(" "),t("h4",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" l = tf.keras.losses.LogCosh()\nloss = l([0., 1., 1.], [1., 0., 1.])\nprint('Loss: ', loss.numpy())  # Loss: 0.289\n")])])]),t("p",[e._v("Usage with the compile API:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" model = tf.keras.Model(inputs, outputs)\nmodel.compile('sgd', loss=tf.keras.losses.LogCosh())\n")])])]),t("h2",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("strong",[e._v("init")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L677-L678",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" __init__(\n    reduction=losses_utils.ReductionV2.AUTO,\n    name='logcosh'\n)\n")])])]),t("p",[e._v("Initialize self. See help(type(self)) for accurate signature.")]),e._v(" "),t("h2",{attrs:{id:"methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),t("h3",{attrs:{id:"call"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("strong",[e._v("call")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L96-L128",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" __call__(\n    y_true,\n    y_pred,\n    sample_weight=None\n)\n")])])]),t("p",[e._v("Invokes the Loss instance.")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("y_true")]),e._v(":"),t("code"),e._v("Groun"),t("code",[e._v("d`` ``t")]),e._v("ru"),t("code",[e._v("t``h``")]),e._v("v"),t("code",[e._v("a")]),e._v("lu"),t("code",[e._v("e``s``.`` ``s``h``a")]),e._v("p"),t("code",[e._v("e``")]),e._v("="),t("code"),e._v("["),t("code",[e._v("b``a``t``c``h``_``s``i``z``e``,`` ``d``0``,`` ``.``.`` ``d``N")]),e._v("]")]),e._v(" "),t("li",[t("code",[e._v("y_pred")]),e._v(":"),t("code"),e._v("T"),t("code",[e._v("h``e``")]),e._v("pr"),t("code",[e._v("e``d``i``c``t``e``d``")]),e._v("v"),t("code",[e._v("a")]),e._v("lu"),t("code",[e._v("e``s``.`` ``s``h``a")]),e._v("p"),t("code",[e._v("e``")]),e._v("="),t("code"),e._v("["),t("code",[e._v("b``a``t``c``h``_``s``i``z``e``,`` ``d``0``,`` ``.``.`` ``d``N")]),e._v("]")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("Weighted loss float Tensor. If reduction is NONE, this has shape [batch_size, d0, .. dN-1]; otherwise, it is scalar. (Note dN-1 because all loss functions reduce by 1 dimension, usually axis=-1.)")]),e._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ValueError")]),e._v(": If the shape of "),t("code",[e._v("sample_weight")]),e._v(" is invalid.")])]),e._v(" "),t("h3",{attrs:{id:"from-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from-config","aria-hidden":"true"}},[e._v("#")]),e._v(" from_config")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L130-L140",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" from_config(\n    cls,\n    config\n)\n")])])]),t("p",[e._v("Instantiates a Loss from its config (output of get_config()).")]),e._v(" "),t("h4",{attrs:{id:"args-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("config")]),e._v(": Output of "),t("code",[e._v("get_config")]),e._v("().")])]),e._v(" "),t("h4",{attrs:{id:"returns-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A Loss instance.")]),e._v(" "),t("h3",{attrs:{id:"get-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-config","aria-hidden":"true"}},[e._v("#")]),e._v(" get_config")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L223-L228",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" get_config()\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);