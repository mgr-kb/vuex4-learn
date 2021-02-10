<template>
  <h1>Vuex 4.x</h1>
  <p>{{ count }}</p>
  <button @click="increment">increment</button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "./store/counter";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    return {
      count: computed(() => store.state.count),
      increment: () => store.commit("increment")
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
