
<script setup lang="ts">
  import { Bell, CircleUser, Coins, CreditCard, DollarSign, HistoryIcon, Home, LineChart, Menu, Package, Package2, PersonStanding,  ShoppingCart, Users } from 'lucide-vue-next'

  import { Badge } from '@/components/ui/badge'
  import { Button } from './ui/button'
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
  import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
  import PresetShare from '@/components/PresetShare.vue'
  import { Input } from '@/components/ui/input'
  import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
  import { account } from '@/lib/appwrite';

const router = useRouter();
const loggedInUser = ref(null);

  const logout = async () => {
  await account.deleteSession('current');
  loggedInUser.value = null;
  router.push("/signin");
};
  // import History from '~/pages/history.vue'
</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] no-scrollbar max-xl:max-h-screen max-xl:overflow-y-scroll">

    <div class="hidden border-r bg-muted/40 md:block">

      <div class="flex h-full max-h-screen flex-col gap-2">

        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" class="flex items-center gap-2 font-semibold text-black">
            <Coins class="h-6 w-6" />
            <span class="">SpareChange</span>
          </a>
          <Button variant="outline" size="icon" class="ml-auto h-8 w-8 text-black">
            <Bell class="h-4 w-4" />
            <span class="sr-only">Toggle notifications</span>
          </Button>
        </div>

        <div class="flex-1">

          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">

            <NuxtLink
              to="/history"
              class="flex items-center gap-3 bg-muted rounded-lg px-3 py-3 text-primary  transition-all hover:text-primary"
            >
              <Home class="h-4 w-4" />
              Home
            </NuxtLink>
            <a
              href="#"
              class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
            >
              <DollarSign class="h-4 w-4" />
              My Bank
              
            </a>
            <a
              href="#"
              class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
            >
              <HistoryIcon class="h-4 w-4" />
              Transaction History
            </a>
            <a
              href="#"
              class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
            >
              <CreditCard class="h-4 w-4" />
             Connect Bank
            </a>
            <a
              href="#"
              class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart class="h-4 w-4" />
              Gamble
            </a>
          </nav>
        </div>

        <div class="mt-auto p-4">
      
          <Card>
            <CardHeader>
              <CardTitle class="text-base lg:text-lg">GAMBLING PROBLEM?</CardTitle>
              <CardDescription>
                Call or text: 1-800-GAMBLER
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" class="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <div class="flex flex-col text-black">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-14">
        <Sheet>

          <SheetTrigger as-child>
            <Button
              variant="outline"
              size="icon"
              class="shrink-0 md:hidden"
            >
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" class="flex flex-col px-[6%]">

            <nav class="grid gap-2 text-lg font-medium text-black">
              <NuxtLink
              to="/history"
              class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
            >
              <Home class="h-5 w-5" />
              Home
            </NuxtLink>
              <a
                href="#"
                class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
              <DollarSign class="h-5 w-5" />
                My Bank
              </a>
              <a
              href="#"
              class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
                <HistoryIcon class="h-4 w-4" />
                Transaction History
              </a>
              <a
                href="#"
                class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
                <CreditCard class="h-4 w-4" />
              Connect Bank
              </a>
              <a
                href="#"
                class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart class="h-4 w-4" />
                Gamble
              </a>
            </nav>

            <div class="mt-auto">
              <Card>
                <CardHeader>
                  <CardTitle>GAMBLING PROBLEM?</CardTitle>
                  <CardDescription>
                    Call or text: 1-800-GAMBLER
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" class="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>

        <div class="w-full flex-1">
            <div class="relative">
              <div class="flex gap-1 items-center">
                <PresetShare />
              </div>
            </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="logout">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <span>
        <slot />
      </span>
      
    </div>
  </div>

</template>


