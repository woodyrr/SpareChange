<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { account} from '~/appwrite';
const user = useUserSession();
const userinfo = userInfos();
// Router instance
const router = useRouter();

// User states
const loggedInUser = ref(null);
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const firstname = ref('');
const lastname = ref('');
const address = ref('');
const city = ref('');
const state = ref('');
const postalcode = ref('');
const dateofbirth = ref('');
const ssn = ref('');
const isSignUp = ref(false);

// Login user
const handleLogin = async (event) => {
  await user.login(email.value, password.value);

};

// Register user
const handleRegistration = async (event) => {
        await user.register( email.value, password.value, firstname.value, lastname.value, address.value, city.value, dateofbirth.value, state.value, postalcode.value, ssn.value);

  // }
};

const using = async (event) => {
  await userinfo.using( email.value, password.value, firstname.value, lastname.value, address.value, city.value, dateofbirth.value, state.value, postalcode.value, ssn.value);
  
};
let log = ref(true)
let sign = ref(false)
</script>


<template>
  
  <Card class="m-auto max-w-lg bg-muted" v-if="log" >
    <CardHeader>
      <!-- <p class="text-black">s{{ userInfos.value }}</p> -->
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
        <Button type="submit" class="w-full" @click="handleLogin">
          Login
        </Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Don't have an account?
        <button @click="sign = !sign, log = !log "  class="underline">
          Sign up
        </button>
      </div>
    </CardContent>
  </Card>



  <Card class="m-auto max-w-xl bg-muted" v-if="sign" >
    <CardHeader>
      <CardTitle class="text-xl">
        Sign Up
      </CardTitle>
      <CardDescription>
        Enter your information to create an account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="grid gap-2">
            <Label for="first-name">First name</Label>
            <Input id="first-name" placeholder="Max" v-model="firstname" required />
          </div>
          <div class="grid gap-2">
            <Label for="last-name">Last name</Label>
            <Input id="last-name" placeholder="Robinson" v-model="lastname" required />
          </div>
        </div>
        <div class="grid gap-2">
          <Label for="address">Address</Label>
          <Input id="address" placeholder="Enter your specific address" v-model="address" />
        </div>
        <div class="grid gap-2">
          <Label for="City">City</Label>
          <Input id="City" placeholder="Enter your city" v-model="city" />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="grid gap-2">
            <Label for="State">State</Label>
            <Input id="State" placeholder="ex:TN" v-model="state" required />
          </div>
          <div class="grid gap-2">
            <Label for="postal-code">Postal Code</Label>
            <Input id="postal-code" placeholder="ex:11101" v-model="postalcode" required />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="grid gap-2">
            <Label for="date-of-birth">Date Of Birth</Label>
            <Input id="date-of-birth" placeholder="yyyy-mm-dd" v-model="dateofbirth" required />
          </div>
          <div class="grid gap-2">
            <Label for="SSN">SSN</Label>
            <Input id="SSN" placeholder="ex:1234" v-model="ssn" required />
          </div>
        </div>
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
          <Label for="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" v-model="password" required />
        </div>
        <div class="grid gap-2">
          <Label for="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" type="password" placeholder="Confirm your password" v-model="confirmPassword" required />
        </div>
        <Button type="submit" class="w-full" @click="handleRegistration(), using()">
          Create an account
        </Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Already have an account?
        <button @click="log = !log , sign = !sign " class="underline">
          Log In
        </button>
      </div>
    </CardContent>
  </Card>
</template>


<!-- <script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { account, ID } from '~/appwrite';

const router = useRouter();
const email = ref('');
const password = ref('');
const confirmPassword = ref("");
const firstname = ref('');
const lastname = ref('');
const address = ref('');
const city = ref('');
const state = ref('');
const postalcode = ref('');
const dateofbirth = ref('');
const ssn = ref('');

const login = async (email, password) => {
  await account.createEmailPasswordSession(email, password);
  // loggedInUser.value = await account.get();
};
// jeanlouis1234
const register = async () => {
  if (password.value.length >= 8) {
    if (password.value === confirmPassword.value) {
      try {
        await account.create(ID.unique(),
                email.value,
                password.value,
                firstname.value,
                lastname.value,
                address.value,
                city.value,
                dateofbirth.value,
                state.value,
                postalcode.value,
                ssn.value);
        login(email.value, password.value);
        router.push("/home");
      }catch (e) {
        console.log(e);
        alert('Failed to create account. Please ensure all fields are valid and try again.');
      }
  } else {
      alert("Passwords do not match");
    }
  }
    else {
    alert("Password length should be at least 8 characters");
  }
  
};

</script> -->


