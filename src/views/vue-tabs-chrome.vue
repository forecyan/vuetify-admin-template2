<template>
  <vue-tabs-chrome v-model="tab" :tabs="tabs" />
</template>
<script>
  import Vue from 'vue'
  import VueTabsChrome from 'vue-tabs-chrome'

  export default {
    components: {
      VueTabsChrome
    },
    data() {
      return {
        tab: 'google',
        tabs: [
          {
            label: 'google',
            key: 'google',
            closable: false,
            favicon: require('../assets/google.jpg')
          },
          {
            label: 'facebook',
            key: 'facebook',
            favicon: require('../assets/fb.jpg')
          },
          {
            label: 'New Tab',
            key: 'any-string-key',
            favicon: (h, { tab, index }) => {
              return h('span', tab.label)
            }
          }
        ]
      }
    }
  }
</script>
