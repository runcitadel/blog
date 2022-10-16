<script>
  /** @type {import('./$types').PageData} */
  export let data;

  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import PostPreview from '$lib/components/PostPreview.svelte'
  import { name } from '$lib/info.js'
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<div class="flex flex-col flex-grow">
  <!-- replace with a bio about you, or something -->
  <div class="flex items-center justify-center text-xl h-40">
    This is a blog about Citadel, written by the Citadel team.
    It'll contain release announcements, updates by the developers, useful hints and more.
  </div>

  <!-- recent posts -->
  <h2 class="flex items-baseline gap-4 !mb-2">
    Recent Posts
    <ButtonLink href="/posts" size="small" raised={false} class="opacity-60">View All</ButtonLink>
  </h2>
  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
    {#each data.recentPosts as post}
      <div class="flex p-4 border border-slate-300 dark:border-slate-700 rounded-lg">
        <PostPreview {post} small />
      </div>
    {/each}
  </div>
</div>
