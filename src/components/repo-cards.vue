<template>
  <b-card
    img-src="https://placekitten.com/300/300"
    img-alt="Card image"
    img-left
    class="mb-3"
  >
    <b-card-text>
      Some quick example text to build on the card and make up the bulk of the
      card's content.
    </b-card-text>
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
