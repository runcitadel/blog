<script>
  import '../app.css'
  import '../prism.css'
  import MoonIcon from 'heroicons-svelte/solid/MoonIcon.svelte'
  import SunIcon from 'heroicons-svelte/solid/SunIcon.svelte'
  import { browser } from '$app/environment'
  import { name } from '$lib/info'

  let prefersLight = browser ? Boolean(JSON.parse(localStorage.getItem('prefersLight'))) : false
</script>

<div class="flex flex-col min-h-screen">
  <div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
    <div class="flex h-16 px-4 py-2 justify-between items-center">
      <h2
        class="!text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 dark:from-violet-500 dark:to-pink-500"
      >
        <a class="text-lg sm:text-2xl font-bold" href="/">
          {name}
        </a>
      </h2>
      {#if browser}
        <button
          type="button"
          role="switch"
          aria-label="Toggle Dark Mode"
          aria-checked={!prefersLight}
          class="h-4 w-4 sm:h-8 sm:w-8 sm:p-1"
          on:click={() => {
            prefersLight = !prefersLight
            localStorage.setItem('prefersLight', prefersLight.toString())

            if (prefersLight) {
              document.querySelector('html')?.classList?.remove('dark')
            } else {
              document.querySelector('html')?.classList?.add('dark')
            }
          }}
        >
          {#if prefersLight}
            <MoonIcon class="text-slate-500" />
          {:else}
            <SunIcon class="text-slate-400" />
          {/if}
        </button>
      {/if}
    </div>
    <main
      class="prose prose-slate prose-sm sm:prose sm:prose-slate sm:prose-lg sm:max-w-none dark:prose-invert flex flex-col w-full flex-grow py-4 px-4"
    >
      <slot />
    </main>
    <footer class="mt-12 border-t-2 border-slate-500 pt-4 mb-2">
      <p class="prose prose-slate prose-sm m-1  max-w-none">© 2022 The Citadel developers.</p>
      <p class="prose prose-slate prose-sm m-1 max-w-none">
        Content is available under the <a href="https://creativecommons.org/licenses/by-sa/4.0/"
          >Creative Commons Attribution-ShareAlike 4.0 International</a
        > license.
      </p>
      <a href="https://www.netlify.com" class="flex justify-end mt-2 text-center">
        <img
          src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg"
          alt="Deploys by Netlify"
        />
      </a>
    </footer>
  </div>
</div>
