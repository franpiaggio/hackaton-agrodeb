<template>
  <Layout>
    <h1>Chat</h1>
    <p>Acá tenemos una vista limpia con un componente de Vue para hacer cualquier cosa.</p>
    <button @click="ejemplo()">Clickeame</button>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  },
  methods: {
    ejemplo(){
      alert("Gracias por clickearme muajajaja")
    }
  },
  beforeMount(){
    console.log('Antes de que cargue la vista chat')
  },
  mounted(){
    console.log('Cargó todo piola el chat ameo')
  }
}
</script>
