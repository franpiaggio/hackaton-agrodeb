<template>
  <Layout>
    <div class="container is-fluid">
      <section class="section">
        <div class="container has-text-centered">
          <h2 class="title">Bulma + Gridsome = 💚</h2>
          <div class="block">
            <a href="#">
              <img src="https://bulma.dev/placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt />
            </a>
          </div>
          <h4 class="title is-spaced is-4">{{test}} Bulma is working with Gridsome!</h4>
        </div>
      </section>
    </div>
  </Layout>
</template>
<script>
export default {
  name: "Home",
  data(){
    return {
      test: "Holi"
    }
  }
}
</script>