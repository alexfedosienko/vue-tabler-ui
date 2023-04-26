<template>
  <header class="navbar navbar-expand-sm navbar-light d-print-none">
    <div class="container-xl">
      <button
        class="navbar-toggler"
        type="button"
        v-if="navItems.length > 0"
        @click.prevent="navbarToggle = !navbarToggle"
        :aria-expanded="navbarToggle"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1
        class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3"
      >
        <slot name="logo"></slot>
      </h1>
      <div class="navbar-nav flex-row order-md-last">
        <slot name="last-item"></slot>
      </div>
      <div
        class="collapse navbar-collapse"
        :class="{ show: navbarToggle }"
        v-if="navItems.length > 0"
      >
        <div
          class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center"
        >
          <ul class="navbar-nav">
            <router-link
              v-for="(navItem, index) in navItems"
              :key="index"
              :to="{ name: navItem.to }"
              v-slot="{ isActive, isExactActive }"
              custom
            >
              <li
                class="nav-item"
                :class="{ active: isActive && isExactActive }"
              >
                <a
                  href="#"
                  class="nav-link"
                  @click.prevent="routePush(navItem)"
                >
                  <span class="nav-link-title">{{ navItem.title }}</span>
                </a>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderNavigation",
  props: {
    navItems: {
      type: Array,
    },
  },
  data() {
    return {
      navbarToggle: false,
    };
  },
  methods: {
    routePush(navItem) {
      if (this.$route.name != navItem.to) {
        this.$router.push({ name: navItem.to });
        this.navbarToggle = false;
      }
    },
  },
};
</script>
