(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{417:function(e,a,t){"use strict";t.r(a);var r=t(0),s=Object(r.a)({},(function(){var e=this.$createElement,a=this._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[a("p",[this._v("Creates resource variables by default.")]),this._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v(" tf.compat.v1.enable_resource_variables()\n")])])]),a("p",[this._v("Resource variables are improved versions of TensorFlow variables with a well-defined memory model. Accessing a resource variable reads its value, and all ops which access a specific read value of the variable are guaranteed to see the same value for that tensor. Writes which happen after a read (by having a control or data dependency on the read) are guaranteed not to affect the value of the read tensor, and similarly writes which happen before a read are guaranteed to affect the value. No guarantees are made about unordered read/write pairs.")]),this._v(" "),a("p",[this._v("Calling tf.enable_resource_variables() lets you opt-in to this TensorFlow 2.0 feature.")])])}),[],!1,null,null,null);a.default=s.exports}}]);