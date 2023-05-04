<template>
  <div class="form-floating" :class="{ 'input-icon': loading }">
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

    <span class="input-icon-addon" v-if="loading">
      <div
        class="spinner-border spinner-border-sm text-muted"
        role="status"
      ></div>
    </span>
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
    loading: {
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
