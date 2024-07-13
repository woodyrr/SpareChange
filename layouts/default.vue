<script setup>
  import SideBar from '~/components/SideBar.vue';
  import {ref} from 'vue'
  const user = useUserSession();
  
  // Authentication process stuff
// const isLoggedIn = ref(false)
// const router = useRouter()
// const auth = getAuth();

// v-if="isLoggedIn"

//auth user personal info stored in arrays
let usersName = []
let userIcons = []

//   onMounted(() => {
    
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             isLoggedIn.value = true;
//             let names  = user.displayName
//             let photo  = user.photoURL
//             usersName.value = names
//             userIcons.value = photo
//             // console.log(usersName)
//             return usersName
            
            
//         }
//         else{
//             isLoggedIn.value = false;
//         }
//     })
// })
</script>

<template>
  
  <div v-if="user.current > 1" class="">
    <NuxtPage />
      <SideBar>
        <slot />
      </SideBar>
  </div>
  <section v-else class=" min-h-screen flex items-center justify-center bg-foreground">
      <log />
  </section>
  
  
</template>
