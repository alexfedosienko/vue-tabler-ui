<template>
  <div class="form-floating">
    <input
      v-bind="$attrs"
      type="text"
      class="form-control"
      :class="{ 'is-invalid': invalid, 'is-valid': valid }"
      :value="value"
      @input="onInput"
    />
    <label for="floating-input">{{ title }}</label>
    <div class="invalid-feedback" v-if="message">message</div>
  </div>
</template>

<script>
export default {
  name: "FloatInputText",
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {},
    message: {
      type: String | null,
    },
    invalid: {
      type: Boolean,
      default: () => false,
    },
    valid: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
