<template>
  <label class="form-check form-switch">
    <input
      class="form-check-input"
      type="checkbox"
      :checked="value"
      @input="onInput"
      :value="inputValue"
      :class="{ 'is-invalid': invalid, 'is-valid': valid }"
    />
    <span class="form-check-label">{{ title }}</span>
  </label>
</template>
<script>
export default {
  name: "ToggleSwitch",
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {},
    invalid: {
      type: Boolean,
      default: () => false,
    },
    valid: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      inputValue: false,
    };
  },
  created() {
    this.inputValue = this.value;
  },
  methods: {
    onInput(event) {
      this.inputValue = !this.inputValue;
      this.$emit("input", this.inputValue);
    },
  },
};
</script>
