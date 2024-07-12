<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { account } from '@/lib/appwrite';

const router = useRouter();
const loggedInUser = ref(null);
const email = ref('');
const password = ref('');

const login = async () => {
  try {
    await account.createEmailPasswordSession(email.value, password.value);
    loggedInUser.value = await account.get();
    router.push("/home");
  } catch (e) {
    console.log(e);
    alert('Invalid email or password');
  }
};

// const logout = async () => {
//   await account.deleteSession('current');
//   loggedInUser.value = null;
// };
</script>

<template>
  <p>
    {{ loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in' }}
  </p>
  <Card class="m-auto max-w-lg bg-muted">
    <CardHeader>
      <CardTitle class="text-2xl">Login</CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            v-model="email"
            required
          />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <Label for="password">Password</Label>
            <a href="#" class="ml-auto inline-block text-sm underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" placeholder="Enter your password" v-model="password" required />
        </div>
        <Button type="submit" class="w-full" @click="login">
          Login
        </Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Don't have an account?
        <NuxtLink to="/signup" class="underline">
          Sign up
        </NuxtLink>
      </div>
    </CardContent>
  </Card>
</template>

<!-- 
<script setup>

</script> -->

<!-- <template>
  <div class="">
    <p>
      {{ loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in' }}
    </p>

    <form>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="text" placeholder="Name" v-model="name" />
      <button type="button" @click="login(email, password)">Login</button>
      <button type="button" @click="register">
        Register
      </button>
      <button type="button" @click="logout">
        Logout
      </button>
    </form>
  </div>
</template> -->


