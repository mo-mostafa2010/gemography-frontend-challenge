<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'
import formatDate from '@src/utils/format-date'
import subDate from '@src/utils/sub-date'
export default {
  page: {
    title: 'Trending Repos',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
  computed: {
    // caluclated date 30 days ago from current date and formated to yyyy-MM-dd
    calculatedDate() {
      return formatDate(
        subDate(new Date(), {
          days: 30,
        })
      )
    },
  },
}
</script>

<template>
  <Layout>
    <h1>Trending Repos</h1>
  </Layout>
</template>
