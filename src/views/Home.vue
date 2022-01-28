<template>
  <div class="home">
    <h1>This is an Home page</h1>
    <a-button type="primary">11645</a-button>
    <!--    <aDatePicker v-model:value="value1" />-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Home",
  // components: {
  //   aButton: Button,
  //   aDatePicker: DatePicker,
  // },
  setup() {
    const userName = ref<number>(1);
    const value1 = ref();
    return {
      userName,
      value1,
    };
  },
});
</script>
