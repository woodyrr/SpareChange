<script setup>
  import SideBar from '~/components/SideBar.vue';
</script>

<template>
  <section>
    <NuxtPage />
      <SideBar>
        <slot />
      </SideBar>
    
    <!-- <div  class="h-full w-full">
      <login />
    </div> -->
  </section>
  
  
</template>
