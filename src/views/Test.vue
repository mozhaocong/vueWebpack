<template>
  <div class="Test">
    <h1>This is an Test page</h1>
    <a-date-picker v-model:value="value1" />
    <a-button type="primary">7845</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { testUtils } from "@/utils";

import { DatePicker } from "ant-design-vue";
export default defineComponent({
  name: "Test",
  components: {
    //   aButton: Button,
    aDatePicker: DatePicker,
  },
  setup() {
    console.log(testUtils());
    const userName = ref<number>(1);
    const value1 = ref();
    return {
      userName,
      value1,
    };
  },
});
</script>
