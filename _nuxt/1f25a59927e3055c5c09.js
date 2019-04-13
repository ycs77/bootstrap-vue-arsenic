(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{659:function(n,l){n.exports='<h1 id="loading"><span class="bd-content-title">Loading</span></h1>\n<p class="bd-lead">The <code>&lt;b-loading&gt;</code> component is display loading state icon. Default wrapper is the BootstrapVue\n<a href="https://bootstrap-vue.js.org/docs/components/spinner"><b-spinner></a> component.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"loading"</span> <span class="hljs-attr">switch</span>&gt;</span>\n      Switch Loading Status\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"!loading"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"py-3"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Loading<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Loading can show the loading state icon.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"loading"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-loading.vue --&gt;</span></pre><h2 id="loading-contextual-variations"><span class="bd-content-title">Loading contextual variations<a class="anchorjs-link" href="#loading-contextual-variations" aria-label="Anchor"></a></span></h2>\n<p>Add any of the following variants via the <code>variant</code> prop to change the appearance of a\n<code>&lt;b-loading&gt;</code>: <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>info</code>, <code>light</code>, and <code>dark</code>.\nIf no variant is specified <code>primary</code> will be used.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"secondary"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"danger"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"warning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"dark"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-loading-variations.vue --&gt;</span></pre><h2 id="loading-type"><span class="bd-content-title">Loading type<a class="anchorjs-link" href="#loading-type" aria-label="Anchor"></a></span></h2>\n<p>Via the <code>type</code> prop to set loading type. <a href="https://bootstrap-vue.js.org">Bootstrap</a> includes two\ntypes of spinners. The default spinner type is called <code>border</code> (spinning circle border), and the\noptional type <code>grow</code> (a throbber style indicator).</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"grow"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-loading-type.vue --&gt;</span></pre><h2 id="loading-size"><span class="bd-content-title">Loading size<a class="anchorjs-link" href="#loading-size" aria-label="Anchor"></a></span></h2>\n<p>Via the <code>size</code> prop to set size loading.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">small</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-loading-size.vue --&gt;</span></pre><h2 id="fixed-loading"><span class="bd-content-title">Fixed loading<a class="anchorjs-link" href="#fixed-loading" aria-label="Anchor"></a></span></h2>\n<p>Via the <code>fixed</code> prop to enable fixed loading.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"position-relative"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-3"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Loading<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Loading can show the loading state icon.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"startLoading"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Start loading 2 seconds<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"loading"</span> <span class="hljs-attr">fixed</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      startLoading() {\n        <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">true</span>\n        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n          <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">false</span>\n        }, <span class="hljs-number">2000</span>)\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-loading-fixed.vue --&gt;</span></pre><h2 id="fading-loading"><span class="bd-content-title">Fading loading<a class="anchorjs-link" href="#fading-loading" aria-label="Anchor"></a></span></h2>\n<p>Use the <code>fade</code> prop to enable animation. By default loading are not animated. It is recommended to\nattach <code>fixed</code> prop when using.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"position-relative"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-3"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Loading<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Loading can show the loading state icon.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"startLoading"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Start loading 2 seconds<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-loading</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"loading"</span> <span class="hljs-attr">fixed</span> <span class="hljs-attr">fade</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-loading</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      startLoading() {\n        <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">true</span>\n        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n          <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">false</span>\n        }, <span class="hljs-number">2000</span>)\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-loading-fading.vue --&gt;</span></pre><h2 id="set-global-render-loading-content"><span class="bd-content-title">Set global render loading content<a class="anchorjs-link" href="#set-global-render-loading-content" aria-label="Anchor"></a></span></h2>\n<p>Set global config render loading content use string.</p>\n\x3c!-- eslint-disable no-undef --\x3e\n\n<pre class="hljs js text-monospace p-2">Vue.use(Loading, {\n  <span class="hljs-attr">BLoading</span>: {\n    <span class="hljs-attr">slot</span>: <span class="hljs-string">\'Loading...\'</span>\n  }\n})</pre><p>Or set Vue component.</p>\n\x3c!-- eslint-disable no-undef --\x3e\n\n<pre class="hljs js text-monospace p-2"><span class="hljs-keyword">import</span> CustomLoadingComponent <span class="hljs-keyword">from</span> <span class="hljs-string">\'./components/custom-loading.vue\'</span>\n\nVue.use(Loading, {\n  <span class="hljs-attr">BLoading</span>: {\n    <span class="hljs-attr">slot</span>: CustomLoadingComponent\n  }\n})</pre>'}}]);
//# sourceMappingURL=1f25a59927e3055c5c09.js.map