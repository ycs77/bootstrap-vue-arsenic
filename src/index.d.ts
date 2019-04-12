// Type definitions for bootstrap-vue-arsenic
// Project: https://github.com/ycs77/bootstrap-vue-arsenic

declare module 'bootstrap-vue-arsenic' {
  import Vue, { PluginFunction, PluginObject } from 'vue'

  class BootstrapVueArsenic implements PluginObject<{}> {
    [key: string]: any
    public install: PluginFunction<{}>
  }

  const VuePlugin: BootstrapVueArsenic

  export default VuePlugin

  // Interfaces
  export interface Avatar extends Vue { }
  export interface Loading extends Vue { }
}
