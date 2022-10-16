<script>
  import { format, parseISO } from 'date-fns'
  import { page } from '$app/stores'
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import { name, website } from '$lib/info'
  import ToC from '$lib/components/ToC.svelte'
  import PostPreview from '$lib/components/PostPreview.svelte'
  import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte'

  /** @type {import('./$types').PageData} */
  export let data;

  // generated open-graph image for sharing on social media. Visit https://og-image.vercel.app/ to see more options.
  const ogImage = data.customOgImage || `https://og-image.vercel.app/**${encodeURIComponent(
    data.title
  )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`

  const url = `${website}/${data.slug}`
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.preview.text} />
  <meta name="author" content={name} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.preview.text} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.preview.text} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<article class="relative">
  <h1 class="!mt-0 !mb-2">
    <a class="!font-medium" href={$page.url.pathname}>
      {data.title}
    </a>
  </h1>
  <div class="opacity-70">
    <time datetime={new Date(parseISO(data.date)).toISOString()}
      >{format(new Date(parseISO(data.date)), 'MMMM d, yyyy')}</time
    >
    •
    <span>{data.readingTime}</span>
    •
    <span>Written by <a href="{data.authorLink}">{data.authorName}</a></span>
  </div>

  <div class="relative">
    <!-- render the post -->
    <svelte:component this={data.component} />

    <!-- table of contents -->
    <div class="hidden xl:block absolute not-prose left-[100%]" aria-label="Table of Contents">
      <div class="fixed z-10 px-4 py-2 ml-8 top-[4.5rem]">
        <!-- ignore h1 tags as they should only be used for the post title -->
        <ToC allowedHeadings={['h2', 'h3', 'h4', 'h5', 'h6']} />
      </div>
    </div>
  </div>
</article>

<div class="pt-12 flex justify-between">
  <ButtonLink href={`/posts`}>
    <slot slot="icon-start">
      <ArrowLeftIcon class="h-5 w-5" />
    </slot>
    Back to Posts
    <slot slot="icon-end" />
  </ButtonLink>
</div>

<!-- next/previous posts -->
{#if data.previous || data.next}
  <hr />
  <div class="grid gap-8 grid-cols-1 sm:grid-cols-2">
    {#if data.previous}
      <div class="flex flex-col">
        <h6 class="not-prose post-preview-label">Previous Post</h6>
        <div class="flex-1 post-preview">
          <PostPreview post={data.previous} small />
        </div>
      </div>
    {:else}
      <div />
    {/if}
    {#if data.next}
      <div class="flex flex-col">
        <h6 class="not-prose post-preview-label flex justify-end">Next Post</h6>
        <div class="flex-1 post-preview">
          <PostPreview post={data.next} small />
        </div>
      </div>
    {/if}
  </div>
{/if}

<style lang="postcss">
  .post-preview {
    @apply flex p-4 border border-slate-300 rounded-lg;
  }

  .post-preview-label {
    @apply mb-2 text-slate-500 uppercase text-base font-medium;
  }

  :global(.dark) .post-preview {
    @apply border-slate-700;
  }

  :global(.dark) .post-preview-label {
    @apply text-slate-400;
  }
</style>
