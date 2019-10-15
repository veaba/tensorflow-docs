(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{570:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Returns global variables.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.compat.v1.global_variables(scope=None)\n")])])]),a("p",[e._v("Global variables are variables that are shared across machines in a distributed environment. The Variable() constructor or get_variable() automatically adds new variables to the graph collection GraphKeys.GLOBAL_VARIABLES. This convenience function returns the contents of that collection.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/local_variables",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.compat.v1.local_variables"),a("OutboundLink")],1),e._v("An alternative to global variables are local variables. See")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("scope")]),e._v(": (Optional.) A string. If supplied, the resulting list is filtered to include only items whose "),a("code",[e._v("name")]),e._v(" attribute matches "),a("code",[e._v("scope")]),e._v(" using "),a("code",[e._v("re.match")]),e._v(". Items without a "),a("code",[e._v("name")]),e._v(" attribute are never returned if a "),a("code",[e._v("scope")]),e._v(" is supplied. The choice of "),a("code",[e._v("re.match")]),e._v(" means that a "),a("code",[e._v("scope")]),e._v(" without special tokens filters by prefix.")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A list of Variable objects.")])])}),[],!1,null,null,null);t.default=s.exports}}]);