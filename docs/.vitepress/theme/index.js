// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import VPFeatureCustom from './VPFeatureCustom.vue'
import Layout from './Layout.vue'
import SecurityContainer from './SecurityContainer.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('VPFeature', VPFeatureCustom)
    app.component('security', SecurityContainer)
  }
}
