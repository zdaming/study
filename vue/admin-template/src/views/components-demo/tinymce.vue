<template>
  <section>
    <editor v-model="content" />
  </section>
</template>

<script>
import Editor from '@components/Editor'

export default {
  name: 'PageTest',
  components: {
    Editor
  },
  data () {
    return {
      content: '测试'
    }
  }
}
</script>
