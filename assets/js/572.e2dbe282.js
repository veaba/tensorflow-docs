(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{760:function(e,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Given an arbitrary function, wrap it so that it does variable sharing.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.compat.v1.make_template(\n    name_,\n    func_,\n    create_scope_now_=False,\n    unique_name_=None,\n    custom_getter_=None,\n    **kwargs\n)\n")])])]),t("p",[e._v("This wraps func_ in a Template and partially evaluates it. Templates are functions that create variables the first time they are called and reuse them thereafter. In order for func_ to be compatible with a Template it must have the following properties:")]),e._v(" "),t("ul",[t("li",[e._v("The function should create all trainable variables and any variables that should be reused by calling "),t("code",[e._v("tf.compat.v1.get_variable")]),e._v(". If a trainable variable is created using "),t("code",[e._v("tf.Variable")]),e._v(", then a ValueError will be thrown. Variables that are intended to be locals can be created by specifying "),t("code",[e._v("tf.Variable")]),e._v("(..., trainable=false).")]),e._v(" "),t("li",[e._v("The function may use variable scopes and other templates internally to create and reuse variables, but it shouldn't use "),t("code",[e._v("tf.compat.v1.global_variables")]),e._v(" to capture variables that are defined outside of the scope of the function.")]),e._v(" "),t("li",[e._v("Internal scopes and variable names should not depend on any arguments that are not supplied to "),t("code",[e._v("make_template")]),e._v(". In general you will get a ValueError telling you that you are trying to reuse a variable that doesn't exist if you make a mistake.")])]),e._v(" "),t("p",[e._v("In the following example, both z and w will be scaled by the same y. It is important to note that if we didn't assign scalar_name and used a different name for z and w that a ValueError would be thrown because it couldn't reuse the variable.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" def my_op(x, scalar_name):\n  var1 = tf.compat.v1.get_variable(scalar_name,\n                         shape=[],\n                         initializer=tf.compat.v1.constant_initializer(1))\n  return x * var1\n\nscale_by_y = tf.compat.v1.make_template('scale_by_y', my_op, scalar_name='y')\n\nz = scale_by_y(input1)\nw = scale_by_y(input2)\n")])])]),t("p",[t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/Variable",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.Variable"),t("OutboundLink")],1),e._v("As a safe-guard, the returned function will raise a ValueError after the first call if trainable variables are created by calling .")]),e._v(" "),t("p",[e._v("If all of these are true, then 2 properties are enforced by the template:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" def my_op(x, scalar_name):\n  var1 = tf.compat.v1.get_variable(scalar_name,\n                         shape=[],\n                         initializer=tf.compat.v1.constant_initializer(1))\n  return x * var1\n\nwith tf.compat.v1.variable_scope('scope') as vs:\n  scale_by_y = tf.compat.v1.make_template('scale_by_y', my_op,\n  scalar_name='y')\n  z = scale_by_y(input1)\n  w = scale_by_y(input2)\n\n# Creates a template that reuses the variables above.\nwith tf.compat.v1.variable_scope(vs, reuse=True):\n  scale_by_y2 = tf.compat.v1.make_template('scale_by_y', my_op,\n  scalar_name='y')\n  z2 = scale_by_y2(input1)\n  w2 = scale_by_y2(input2)\n")])])]),t("p",[e._v("Depending on the value of create_scope_now_, the full variable scope may be captured either at the time of first call or at the time of construction. If this option is set to True, then all Tensors created by repeated calls to the template will have an extra trailing _N+1 to their name, as the first time the scope is entered in the Template constructor no Tensors are created.")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("name_")]),e._v(": A name for the scope created by this template. If necessary, the name will be made unique by appending "),t("code",[e._v("_N")]),e._v(" to the name.")]),e._v(" "),t("li",[t("code",[e._v("func_")]),e._v(": The function to wrap.")]),e._v(" "),t("li",[t("code",[e._v("create_scope_now_")]),e._v(": Boolean controlling whether the scope should be created when the template is constructed or when the template is called. Default is False, meaning the scope is created when the template is called.")]),e._v(" "),t("li",[t("code",[e._v("unique_name_")]),e._v(": When used, it overrides "),t("code",[e._v("name_")]),e._v(" and is not made unique. If a template of the same scope/unique_name already exists and reuse is false, an error is raised. Defaults to None.")]),e._v(" "),t("li",[t("code",[e._v("custom_getter_")]),e._v(": Optional custom getter for variables used in "),t("code",[e._v("func_")]),e._v(". See the "),t("code",[e._v("tf.compat.v1.get_variable")]),e._v(" "),t("code",[e._v("custom_getter")]),e._v(" documentation for more information.")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A function to encapsulate a set of variables which should be created once and reused. An enclosing scope will be created either when make_template is called or when the result is called, depending on the value of create_scope_now_. Regardless of the value, the first time the template is called it will enter the scope with no reuse, and call func_ to create variables, which are guaranteed to be unique. All subsequent calls will re-enter the scope and reuse those variables.")]),e._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ValueError")]),e._v(": if "),t("code",[e._v("name_")]),e._v(" is None.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);