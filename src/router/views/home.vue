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
      currentPage: 1,
      rows: null,
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
  watch: {
    // Fetch Repo Data at every change of  a page
    currentPage() {
      this.fetchRepos()
    },
  },
  created() {
    // Fetch Repo Data at compnent creation
    this.fetchRepos()
  },
  methods: {
    fetchRepos() {
      // get all github repos in the last 30 days
      axios
        .get(
          `https://api.github.com/search/repositories?q=created:>${this.calculatedDate}&sort=stars&page=${this.currentPage}`
        )
        .then((result) => {
          // Set repos Array from response items
          this.repos = result.data.items

          // As github api only provide the first 1000 items,
          // Use this workaround to check if the current data is greater than 1000 or not
          this.rows = Math.min(result.data.total_count, 1000)
        })
        .catch((err, message) => {
          // Display the erroe message on alert for user
          window.alert(err.message)
        })
    },
  },
}
</script>

<template>
  <Layout>
    <h3>Trending Repos</h3>

    <!-- Top Pagination -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="30"
      align="center"
    />
    <!-- End of Top Pagination  -->

    <!-- Repo Cards -->
    <repoCards v-for="repo in repos" :key="repo.id" :repo="repo" />
    <!-- End of Repo Cards -->

    <!-- Bottom Pagination -->
    <b-pagination
      v-model="currentPage"
      :per-page="30"
      :total-rows="rows"
      align="center"
    />
    <!-- End of Bottom Pagination -->
  </Layout>
</template>
