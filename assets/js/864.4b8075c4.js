(window.webpackJsonp=window.webpackJsonp||[]).push([[864],{1052:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-looperthread"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-looperthread","aria-hidden":"true"}},[e._v("#")]),e._v(" Class LooperThread")]),e._v(" "),a("p",[e._v("A thread that runs code repeatedly, optionally on a timer.")]),e._v(" "),a("p",[e._v("This thread class is intended to be used with a Coordinator. It repeatedly runs code specified either as target and args or by the run_loop() method.")]),e._v(" "),a("p",[e._v("Before each run the thread checks if the coordinator has requested stop. In that case the looper thread terminates immediately.")]),e._v(" "),a("p",[e._v("If the code being run raises an exception, that exception is reported to the coordinator and the thread terminates. The coordinator will then request all the other threads it coordinates to stop.")]),e._v(" "),a("p",[e._v("You typically pass looper threads to the supervisor Join() method.")]),e._v(" "),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L429-L457",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    coord,\n    timer_interval_secs,\n    target=None,\n    args=None,\n    kwargs=None\n)\n")])])]),a("p",[e._v("Create a LooperThread.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("coord")]),e._v(": A Coordinator.")]),e._v(" "),a("li",[a("code",[e._v("timer_interval_secs")]),e._v(": Time boundaries at which to call Run(), or None if it should be called back to back.")]),e._v(" "),a("li",[a("code",[e._v("target")]),e._v(": Optional callable object that will be executed in the thread.")]),e._v(" "),a("li",[a("code",[e._v("args")]),e._v(": Optional arguments to pass to "),a("code",[e._v("target")]),e._v(" when calling it.")]),e._v(" "),a("li",[a("code",[e._v("kwargs")]),e._v(": Optional keyword arguments to pass to "),a("code",[e._v("target")]),e._v(" when calling it.")])]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": If one of the arguments is invalid.")])]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("h3",{attrs:{id:"daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daemon","aria-hidden":"true"}},[e._v("#")]),e._v(" daemon")]),e._v(" "),a("p",[e._v("A boolean value indicating whether this thread is a daemon thread.")]),e._v(" "),a("p",[e._v("This must be set before start() is called, otherwise RuntimeError is raised. Its initial value is inherited from the creating thread; the main thread is not a daemon thread and therefore all threads created in the main thread default to daemon = False.")]),e._v(" "),a("p",[e._v("The entire Python program exits when no alive non-daemon threads are left.")]),e._v(" "),a("h3",{attrs:{id:"ident"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ident","aria-hidden":"true"}},[e._v("#")]),e._v(" ident")]),e._v(" "),a("p",[e._v("Thread identifier of this thread or None if it has not been started.")]),e._v(" "),a("p",[e._v("This is a nonzero integer. See the thread.get_ident() function. Thread identifiers may be recycled when a thread exits and another thread is created. The identifier is available even after the thread has exited.")]),e._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[e._v("#")]),e._v(" name")]),e._v(" "),a("p",[e._v("A string used for identification purposes only.")]),e._v(" "),a("p",[e._v("It has no semantics. Multiple threads may be given the same name. The initial name is set by the constructor.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"getname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getname","aria-hidden":"true"}},[e._v("#")]),e._v(" getName")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" getName()\n")])])]),a("h3",{attrs:{id:"isalive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isalive","aria-hidden":"true"}},[e._v("#")]),e._v(" isAlive")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" isAlive()\n")])])]),a("p",[e._v("Return whether the thread is alive.")]),e._v(" "),a("p",[e._v("This method returns True just before the run() method starts until just after the run() method terminates. The module function enumerate() returns a list of all alive threads.")]),e._v(" "),a("h3",{attrs:{id:"isdaemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isdaemon","aria-hidden":"true"}},[e._v("#")]),e._v(" isDaemon")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" isDaemon()\n")])])]),a("h3",{attrs:{id:"is-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-alive","aria-hidden":"true"}},[e._v("#")]),e._v(" is_alive")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" is_alive()\n")])])]),a("p",[e._v("Return whether the thread is alive.")]),e._v(" "),a("p",[e._v("This method returns True just before the run() method starts until just after the run() method terminates. The module function enumerate() returns a list of all alive threads.")]),e._v(" "),a("h3",{attrs:{id:"join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#join","aria-hidden":"true"}},[e._v("#")]),e._v(" join")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" join(timeout=None)\n")])])]),a("p",[e._v("Wait until the thread terminates.")]),e._v(" "),a("p",[e._v("This blocks the calling thread until the thread whose join() method is called terminates -- either normally or through an unhandled exception or until the optional timeout occurs.")]),e._v(" "),a("p",[e._v("When the timeout argument is present and not None, it should be a floating point number specifying a timeout for the operation in seconds (or fractions thereof). As join() always returns None, you must call isAlive() after join() to decide whether a timeout happened -- if the thread is still alive, the join() call timed out.")]),e._v(" "),a("p",[e._v("When the timeout argument is not present or None, the operation will block until the thread terminates.")]),e._v(" "),a("p",[e._v("A thread can be join()ed many times.")]),e._v(" "),a("p",[e._v("join() raises a RuntimeError if an attempt is made to join the current thread as that would cause a deadlock. It is also an error to join() a thread before it has been started and attempts to do so raises the same exception.")]),e._v(" "),a("h3",{attrs:{id:"loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loop","aria-hidden":"true"}},[e._v("#")]),e._v(" loop")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L459-L481",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" @staticmethod\nloop(\n    coord,\n    timer_interval_secs,\n    target,\n    args=None,\n    kwargs=None\n)\n")])])]),a("p",[e._v("Start a LooperThread that calls a function periodically.")]),e._v(" "),a("p",[e._v("If timer_interval_secs is None the thread calls target(args) repeatedly. Otherwise target(args) is called every timer_interval_secs seconds. The thread terminates when a stop of the coordinator is requested.")]),e._v(" "),a("h4",{attrs:{id:"args-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("coord")]),e._v(": A Coordinator.")]),e._v(" "),a("li",[a("code",[e._v("timer_interval_secs")]),e._v(": Number. Time boundaries at which to call "),a("code",[e._v("target")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("target")]),e._v(": A callable object.")]),e._v(" "),a("li",[a("code",[e._v("args")]),e._v(": Optional arguments to pass to "),a("code",[e._v("target")]),e._v(" when calling it.")]),e._v(" "),a("li",[a("code",[e._v("kwargs")]),e._v(": Optional keyword arguments to pass to "),a("code",[e._v("target")]),e._v(" when calling it.")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("The started thread.")]),e._v(" "),a("h3",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[e._v("#")]),e._v(" run")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L483-L496",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" run()\n")])])]),a("p",[e._v("Method representing the thread's activity.")]),e._v(" "),a("p",[e._v("You may override this method in a subclass. The standard run() method invokes the callable object passed to the object's constructor as the target argument, if any, with sequential and keyword arguments taken from the args and kwargs arguments, respectively.")]),e._v(" "),a("h3",{attrs:{id:"run-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-loop","aria-hidden":"true"}},[e._v("#")]),e._v(" run_loop")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L506-L509",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" run_loop()\n")])])]),a("p",[e._v("Called at 'timer_interval_secs' boundaries.")]),e._v(" "),a("h3",{attrs:{id:"setdaemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setdaemon","aria-hidden":"true"}},[e._v("#")]),e._v(" setDaemon")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" setDaemon(daemonic)\n")])])]),a("h3",{attrs:{id:"setname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setname","aria-hidden":"true"}},[e._v("#")]),e._v(" setName")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" setName(name)\n")])])]),a("h3",{attrs:{id:"start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[e._v("#")]),e._v(" start")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" start()\n")])])]),a("p",[e._v("Start the thread's activity.")]),e._v(" "),a("p",[e._v("It must be called at most once per thread object. It arranges for the object's run() method to be invoked in a separate thread of control.")]),e._v(" "),a("p",[e._v("This method will raise a RuntimeError if called more than once on the same thread object.")]),e._v(" "),a("h3",{attrs:{id:"start-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-loop","aria-hidden":"true"}},[e._v("#")]),e._v(" start_loop")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L498-L500",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" start_loop()\n")])])]),a("p",[e._v("Called when the thread starts.")]),e._v(" "),a("h3",{attrs:{id:"stop-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-loop","aria-hidden":"true"}},[e._v("#")]),e._v(" stop_loop")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L502-L504",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" stop_loop()\n")])])]),a("p",[e._v("Called when the thread stops.")])])}),[],!1,null,null,null);t.default=s.exports}}]);