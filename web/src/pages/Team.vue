<template>
  <Layout>
    <h1>Integrantes</h1>
    <p>Cada integrante nos cuenta sobre lo realizado en la hackaton</p>
    <hr>
    <div class="post-list">

        <div class="post" v-for="(edge, index) in $page.allPost.edges" :key="index">
            <h2 class="post__title" v-html="edge.node.title" />
            <p class="post__description" v-html="edge.node.description" /> <br />
            <g-link :to="edge.node.path">Ver post</g-link>
            <hr>
        </div>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Integrantes'
  }
}
</script>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        path
        date
        description
      }
    }
  }
}
</page-query>
