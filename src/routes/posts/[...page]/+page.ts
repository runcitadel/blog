import { redirect } from '@sveltejs/kit';

export const prerender = true

/**
 * @type {import("@sveltejs/kit").PageLoad}
 */
export const load = async ({ fetch, params }) => {
  let page = 1
  let limit = 10

  if (params.page) {
    try {
      // a url of /posts/page/2 will come through as 'page/2' for params.page
      page = parseInt(params.page.split('page/').pop())
    } catch (e) {
      console.error(e)
    }
  }

  const fetchPostsParams = new URLSearchParams()

  fetchPostsParams.set('page', page.toString())
  fetchPostsParams.set('limit', limit.toString())

  const posts = await fetch(`/posts.json?${fetchPostsParams.toString()}`).then((res) =>
    res.json()
  )

  // if page doesn't exist, direct to page 1
  if (posts.length == 0 && page > 1) {
    throw redirect(302, `/posts`);
  }

  return {
  posts,
  page,
  limit
}
}
