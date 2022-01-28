<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button type="primary">78945</a-button>
    <a-input-number placeholder="Basic usage" v-model:value="userName" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { testUtils } from "@/utils";
export default defineComponent({
  name: "About",

  setup() {
    console.log(testUtils());
    const userName = ref<number>(1);
    return {
      userName,
    };
  },
});
</script>
