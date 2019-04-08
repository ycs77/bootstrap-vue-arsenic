import Vue from 'vue'
// <% if (options.componentPlugins.length || options.directivePlugins.length) { %><%=
<% if (options.componentPlugins.length) { %><%=
options.componentPlugins.reduce((acc, p) => (acc += `import ${p[0]} from 'bootstrap-vue-arsenic/es/components/${p[1]}'\n` ), '') %>
// <%=
// options.directivePlugins.reduce((acc, p) => (acc += `import ${p[0]} from 'bootstrap-vue-arsenic/es/directives/${p[1]}'\n` ), '') %>

<% if (options.config) { %>
import BAConfigPlugin from 'bootstrap-vue-arsenic/es/ba-config'

Vue.use(BAConfigPlugin, <%= JSON.stringify(options.config, undefined, 2) %>)
<% } %>

<%=
options.componentPlugins.reduce((acc, p) => (acc += `Vue.use(${p[0]})\n` ), '') %>
// <%=
// options.directivePlugins.reduce((acc, p) => (acc += `Vue.use(${p[0]})\n` ), '') %>
<% } else { %>
import BootstrapVue from 'bootstrap-vue-arsenic/es'

Vue.use(BootstrapVue, <%= JSON.stringify(options.config || {}, undefined, 2) %>)
<% } %>
