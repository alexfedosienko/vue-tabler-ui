<template>
  <div class="page">
    <slot name="header"></slot>
    <div class="page-wrapper">
      <div class="page-body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>
