<template>
  <div class="card">
    <div
      class="img-responsive img-responsive-21x9 card-img-top"
      :style="`background-image: url(${headerImage})`"
      v-if="headerImage"
    ></div>
    <div class="card-header" v-if="title">
      <h3 class="card-title">{{ title }}</h3>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String | Boolean,
      default: false,
    },
    headerImage: {
      type: String | Boolean,
      default: false,
    },
  },
};
</script>
