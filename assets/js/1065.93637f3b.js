(window.webpackJsonp=window.webpackJsonp||[]).push([[1065],{1254:function(e,i,s){"use strict";s.r(i);var t=s(0),a=Object(t.a)({},(function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Get the list of visible physical devices.")]),e._v(" "),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("tf.compat.v1.config.experimental.get_visible_devices")])]),e._v(" "),s("li",[s("code",[e._v("tf.compat.v2.config.experimental.get_visible_devices")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" tf.config.experimental.get_visible_devices(device_type=None)\n")])])]),s("p",[e._v("Returns a list of PhysicalDevice objects that are current marked as visible to the runtime. Any visible devices will have LogicalDevices assigned to them once the runtime is initialized.")]),e._v(" "),s("p",[e._v("The following example verifies all visible GPUs have been disabled:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" physical_devices = config.experimental.list_physical_devices('GPU')\nassert len(physical_devices) > 0, \"Not enough GPU hardware devices available\"\n# Disable all GPUS\ntf.config.experimental.set_visible_devices([], 'GPU')\nvisible_devices = tf.config.experimental.get_visible_devices()\nfor device in visible_devices:\n  assert device.device_type != 'GPU'\n")])])]),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("device_type")]),e._v(": (optional) Device types to limit query to.")])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[e._v("List of PhysicalDevice objects")])])}),[],!1,null,null,null);i.default=a.exports}}]);