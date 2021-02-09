<template>
  <h1>Vuex 4.x</h1>
  <p>{{ count }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "./store/counter";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    const count = store.state.count;
    return {
      count
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
