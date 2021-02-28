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
  methods: {
    kFormatter(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
        : Math.sign(num) * Math.abs(num)
    },
  },
}
</script>

<template>
  <b-badge v-bind="$attrs"
    ><b>{{ keyName }}:</b> {{ kFormatter(value) }}</b-badge
  >
</template>
