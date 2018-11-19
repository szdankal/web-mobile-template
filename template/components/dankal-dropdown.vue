<template>
  <section class="dankal-dropdown">
    <div class="dankal-dropdown-trigger">
      <solt />
    </div>
    <div class="dankal-dropdown-content">
      <slot name="content" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scope>
.dankal-dropdown {
  // .dankal-dropdown-trigger {
  // }

  .dankal-dropdown-content {
    bottom: 0vh;
    visibility: inherit;
    transition: all 0.3s ease-in-out;
  }

  .dankal-dropdown-content.hidden {
    position: absolute;
    bottom: -100vh;
    z-index: 1;
    visibility: hidden;
  }
}
</style>
