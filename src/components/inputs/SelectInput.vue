<template>
  <div>
    <div class="form-label">{{ title }}</div>
    <select
      class="form-select"
      :class="{ 'is-invalid': invalid, 'is-valid': valid }"
      @input="onInput"
      v-bind="$attrs"
    >
      <option
        v-for="(item, index) in items"
        :value="index"
        :key="index"
        :selected="isSelected(item)"
      >
        {{ renderNameFn(item) }}
      </option>
    </select>
    <div class="invalid-feedback" v-if="message">message</div>
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    renderNameFn: {
      type: Function,
      default: (item) => item.name,
    },
    invalid: {
      type: Boolean,
      default: () => false,
    },
    valid: {
      type: Boolean,
      default: () => false,
    },
    value: {},
    message: {
      type: String,
    },
  },
  methods: {
    onInput(event) {
      this.$emit(
        "input",
        this.items.find((el, idx) => idx === Number(event.target.value))
      );
    },
    isSelected(item) {
      return JSON.stringify(this.value) === JSON.stringify(item);
    },
  },
};
</script>
