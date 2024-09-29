<script setup>

</script>

<template>
  <div class="max-w-7xl mx-auto grid grid-cols-2 gap-4">
    <div class="main-left">
      <div class="p-12 bg-white border border-gray-200 rounded-lg">
        <h1 class="mb-6 text-2xl">Login</h1>
        <p class="mb-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi atque esse excepturi nostrum quaerat quod recusandae repellat repudiandae vero? Adipisci alias explicabo harum libero, possimus repellendus rerum sequi voluptates?</p>
        <p class="font-bold">You don't have an account? <RouterLink :to="{'name':'signup'}" class="underline">Click here</RouterLink> to Sign up!</p>
      </div>
    </div>
    <div class="main-right">
      <div class="p-12 bg-white border border-gray-200 rounded-lg">
        <form class="space-y-6">
          <div>
            <label>E-mail</label><br>
            <input type="email" placeholder="Your e-mail address" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
          </div>
          <div>
            <label>Password</label><br>
            <input type="password" placeholder="Your password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
          </div>

          <div>
            <button class="flex items-center rounded-md border border-slate-300 py-4 px-8 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Log in

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1.5">
                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>