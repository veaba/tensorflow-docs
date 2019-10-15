(window.webpackJsonp=window.webpackJsonp||[]).push([[1829],{2020:function(s,e,t){"use strict";t.r(e);var a=t(0),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"class-poisson"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-poisson","aria-hidden":"true"}},[s._v("#")]),s._v(" Class Poisson")]),s._v(" "),t("p",[s._v("Computes the Poisson loss between y_true and y_pred.")]),s._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[s._v("#")]),s._v(" Aliases:")]),s._v(" "),t("ul",[t("li",[s._v("Class "),t("code",[s._v("tf.compat.v1.keras.losses.Poisson")])]),s._v(" "),t("li",[s._v("Class "),t("code",[s._v("tf.compat.v2.keras.losses.Poisson")])]),s._v(" "),t("li",[s._v("Class "),t("code",[s._v("tf.compat.v2.losses.Poisson")])]),s._v(" "),t("li",[s._v("Class "),t("code",[s._v("tf.losses.Poisson")])])]),s._v(" "),t("p",[s._v("loss = y_pred - y_true * log(y_pred)")]),s._v(" "),t("h4",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[s._v("#")]),s._v(" Usage:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" p = tf.keras.losses.Poisson()\nloss = p([1., 9., 2.], [4., 8., 12.])\nprint('Loss: ', loss.numpy())  # Loss: -0.35702705\n")])])]),t("p",[s._v("Usage with the compile API:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" model = tf.keras.Model(inputs, outputs)\nmodel.compile('sgd', loss=tf.keras.losses.Poisson())\n")])])]),t("h2",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[s._v("#")]),s._v(" "),t("strong",[s._v("init")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L650-L651",target:"_blank",rel:"noopener noreferrer"}},[s._v("View source"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" __init__(\n    reduction=losses_utils.ReductionV2.AUTO,\n    name='poisson'\n)\n")])])]),t("p",[s._v("Initialize self. See help(type(self)) for accurate signature.")]),s._v(" "),t("h2",{attrs:{id:"methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[s._v("#")]),s._v(" Methods")]),s._v(" "),t("h3",{attrs:{id:"call"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call","aria-hidden":"true"}},[s._v("#")]),s._v(" "),t("strong",[s._v("call")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L96-L128",target:"_blank",rel:"noopener noreferrer"}},[s._v("View source"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" __call__(\n    y_true,\n    y_pred,\n    sample_weight=None\n)\n")])])]),t("p",[s._v("Invokes the Loss instance.")]),s._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[s._v("#")]),s._v(" Args:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("y_true")]),s._v(":"),t("code"),s._v("Groun"),t("code",[s._v("d`` ``t")]),s._v("ru"),t("code",[s._v("t``h``")]),s._v("v"),t("code",[s._v("a")]),s._v("lu"),t("code",[s._v("e``s``.`` ``s``h``a")]),s._v("p"),t("code",[s._v("e``")]),s._v("="),t("code"),s._v("["),t("code",[s._v("b``a``t``c``h``_``s``i``z``e``,`` ``d``0``,`` ``.``.`` ``d``N")]),s._v("]")]),s._v(" "),t("li",[t("code",[s._v("y_pred")]),s._v(":"),t("code"),s._v("T"),t("code",[s._v("h``e``")]),s._v("pr"),t("code",[s._v("e``d``i``c``t``e``d``")]),s._v("v"),t("code",[s._v("a")]),s._v("lu"),t("code",[s._v("e``s``.`` ``s``h``a")]),s._v("p"),t("code",[s._v("e``")]),s._v("="),t("code"),s._v("["),t("code",[s._v("b``a``t``c``h``_``s``i``z``e``,`` ``d``0``,`` ``.``.`` ``d``N")]),s._v("]")])]),s._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[s._v("#")]),s._v(" Returns:")]),s._v(" "),t("p",[s._v("Weighted loss float Tensor. If reduction is NONE, this has shape [batch_size, d0, .. dN-1]; otherwise, it is scalar. (Note dN-1 because all loss functions reduce by 1 dimension, usually axis=-1.)")]),s._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[s._v("#")]),s._v(" Raises:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("ValueError")]),s._v(": If the shape of "),t("code",[s._v("sample_weight")]),s._v(" is invalid.")])]),s._v(" "),t("h3",{attrs:{id:"from-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from-config","aria-hidden":"true"}},[s._v("#")]),s._v(" from_config")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L130-L140",target:"_blank",rel:"noopener noreferrer"}},[s._v("View source"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" from_config(\n    cls,\n    config\n)\n")])])]),t("p",[s._v("Instantiates a Loss from its config (output of get_config()).")]),s._v(" "),t("h4",{attrs:{id:"args-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[s._v("#")]),s._v(" Args:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("config")]),s._v(": Output of "),t("code",[s._v("get_config")]),s._v("().")])]),s._v(" "),t("h4",{attrs:{id:"returns-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[s._v("#")]),s._v(" Returns:")]),s._v(" "),t("p",[s._v("A Loss instance.")]),s._v(" "),t("h3",{attrs:{id:"get-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-config","aria-hidden":"true"}},[s._v("#")]),s._v(" get_config")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L223-L228",target:"_blank",rel:"noopener noreferrer"}},[s._v("View source"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" get_config()\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);