<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'
import formatDate from '@src/utils/format-date'
import subDate from '@src/utils/sub-date'
import repoCards from '@src/components/repo-cards.vue'
import axios from 'axios'
export default {
  page: {
    title: 'Trending Repos',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, repoCards },
  data() {
    return {
      repos: [],
    }
  },
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
  created() {
    this.fetchRepos()
  },
  methods: {
    fetchRepos() {
      // get all github repos in the last 30 days
      axios
        .get(
          `https://api.github.com/search/repositories?q=created:>${this.calculatedDate}&sort=stars&order=desc`
        )
        .then((result) => {
          this.repos = result.data.items
        })
        .catch((err) => {
          window.alert('err', err)
        })
    },
  },
}
</script>

<template>
  <Layout>
    <h3>Trending Repos</h3>
    <repoCards v-for="repo in repos" :key="repo.id" :repo="repo" />
  </Layout>
</template>
