<script>
export default {
  props: {
    keyName: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
}
</script>

<template>
  <b-badge v-bind="$attrs"
    ><b>{{ keyName }}:</b> {{ value }}</b-badge
  >
</template>
