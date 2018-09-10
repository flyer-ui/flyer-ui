<template>
   <div>
     <h1>Hello Flyer-UI</h1>
     <AutoComponent></AutoComponent>
     <auto-component></auto-component>
     <fly-table></fly-table>
   </div>
</template>
<script type="text/babel">
import AutoComponent from "./autoComponent.vue";
export default {
  name: "App",
  components: {
    AutoComponent
  }
}
</script>