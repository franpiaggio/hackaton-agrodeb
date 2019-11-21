<template>
  <Layout>
    <br />
    <g-link to="/team" class="link">&larr;Volver</g-link>
    <div class="post-title">
      <h1>{{$page.post.title}}</h1>
      <p class="post-date">{{ $page.post.date}} </p>
    </div>
    <div class="post-content">
      <p v-html="$page.post.content" />
    </div>
  </Layout>
</template>
<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date
  }
}
</page-query>