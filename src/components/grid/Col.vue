<template>
  <div :class="rootClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Col",
  props: {
    lg: {
      type: String,
      required: false,
      default: "4",
    },
    md: {
      type: String,
      required: false,
      default: "6",
    },
    sm: {
      type: String,
      required: false,
      default: "9",
    },
    xs: {
      type: String,
      required: false,
      default: "12",
    },
  },
  computed: {
    rootClass() {
      return `col-xs-${this.xs} col-sm-${this.sm} col-md-${this.md} col-lg-${this.lg}`;
    },
  },
};
</script>
