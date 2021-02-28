<script>
import formatDateRelative from '@src/utils/format-date-relative'
export default {
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // Returns how much was the period from this date till today
    calculateRelativeDate(date) {
      return formatDateRelative(new Date(date))
    },
  },
}
</script>

<template>
  <b-card
    :img-src="repo.owner.avatar_url"
    img-alt="Card image"
    :title="repo.name"
    img-width="150px"
    img-left
    class="mb-4 p4"
  >
    <!-- Repo Description -->
    <b-card-text>
      {{ repo.description }}
    </b-card-text>
    <!-- End of Repo Description -->

    <!-- Stars Number -->
    <BaseChip
      key-name="Stars"
      variant="primary"
      pill
      class="mr-2"
      :value="repo.stargazers_count"
    />
    <!-- End of Stars Number -->

    <!-- Open Issues Nunber -->
    <BaseChip
      key-name="Open Issues"
      pill
      variant="danger"
      :value="repo.open_issues_count"
    />
    <!-- End of Open Issues Number -->

    <!-- Date Created from now  -->
    <span>
      Submitted {{ calculateRelativeDate(repo.created_at) }} By:
      {{ repo.owner.login }}
    </span>
    <!-- End of Date Created from now -->
  </b-card>
</template>

<style lang="scss" module>
@import '@design';

.button {
  @extend %typography-small;

  padding: $size-button-padding;
  color: $color-button-text;
  cursor: pointer;
  background: $color-button-bg;
  border: none;

  &:disabled {
    cursor: not-allowed;
    background: $color-button-disabled-bg;
  }
}
</style>
