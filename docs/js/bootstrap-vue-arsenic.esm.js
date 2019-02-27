//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'b-nav-sidebar',
  props: {//
  },

  data() {
    return {
      active: '1',
      items: [{
        name: '1',
        label: 'Test'
      }, {
        name: '2',
        label: 'Test'
      }, {
        name: '3',
        label: 'Test'
      }, {
        name: '4',
        label: 'Test'
      }, {
        name: '5',
        label: 'Test'
      }, {
        name: '6',
        label: 'Test'
      }]
    };
  },

  methods: {
    clickItem(name) {
      this.active = name;
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "nav-sidebar nav-sidebar-light" }, [
    _c("div", { staticClass: "nav-sidebar-inner-scroll" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "nav-sidebar-items" },
        _vm._l(_vm.items, function(item) {
          return _c(
            "li",
            {
              class: { active: _vm.active === item.name },
              on: {
                click: function($event) {
                  return _vm.clickItem(item.name)
                }
              }
            },
            [
              _c("a", { attrs: { href: "javascript: void(0)" } }, [
                _vm._m(1, true),
                _vm._v(" "),
                _c("div", { staticClass: "nav-sidebar-item-name" }, [
                  _vm._v("\n            " + _vm._s(item.label) + "\n          ")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "badge badge-pill" }, [
                  _vm._v("\n            1\n          ")
                ])
              ])
            ]
          )
        }),
        0
      )
    ])
  ])
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "nav-sidebar-header" }, [
      _c("div", [
        _c("div", { staticClass: "nav-sidebar-header-text" }, [
          _vm._v("\n          BNavSidebar\n        ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "nav-sidebar-item-icon" }, [
      _c("i", { staticClass: "fab fa-github" })
    ])
  }
];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var BNavSidebar = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var components = {
  BNavSidebar
};

const install = Vue => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}; // auto install


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = {
  install
};

export default index;
//# sourceMappingURL=bootstrap-vue-arsenic.esm.js.map
