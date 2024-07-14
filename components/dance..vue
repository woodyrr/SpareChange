<template>
    <div class="text-black">
        Hello {{ user.current.value.providerUid}}
        
    </div>
</template>

<script setup>
  import { account } from '~/appwrite';
//   import {displayUserInfo} from '../appwriteUsers'
  const user = useUserSession();
  const userinfo = userInfos();

</script>
<!-- UserProfile.vue -->
<!-- <template>
    <div v-if="user">
      <p>User ID: {{ user.$id }}</p>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Registration Date: {{ user.registration }}</p>
    </div>
    <div v-else>
      <p>Loading user information...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getUserInfo } from '../appwriteUsers';
  const users = useUserSession();
  const user = ref(null);
  
  onMounted(async () => {
    const userId = users.current.value.userId; // Replace with actual user ID
    user.value = await getUserInfo(userId);
  });
  </script> -->
  