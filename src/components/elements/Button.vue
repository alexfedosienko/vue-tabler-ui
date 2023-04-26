<template>
  <button class="btn" :class="rootClass" @click.prevent="clickHandler">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
      default: "Button",
    },
    color: {
      type: String | Boolean,
      default: false,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String | Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootClass() {
      let classList = [];

      if (this.square) classList.push("btn-square");
      if (this.rounded) classList.push("btn-pill");
      if (this.size) classList.push(`btn-${this.size}`);
      if (this.isLoading) classList.push("btn-loading");

      if (this.color) {
        if (this.ghost) {
          classList.push(`btn-ghost-${this.color}`);
        } else if (this.outline) {
          classList.push(`btn-outline-${this.color}`);
        } else {
          classList.push(`btn-${this.color}`);
        }
      }

      return classList.join(" ");
    },
  },
  methods: {
    clickHandler() {
      if (!this.isLoading) this.$emit("click");
    },
  },
};
</script>
