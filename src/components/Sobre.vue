<template>
  <div class="sobre">
    <!-- Navbar -->
    <nav class="navbar bg-gray-800 text-white py-8">
      <ul class="flex justify-center">
        <router-link to="/" class="px-4 py-2 hover:bg-gray-600">Home</router-link>
        <router-link to="/instrumentos" class="px-4 py-2 hover:bg-gray-600">Instrumentos</router-link>
        <router-link to="/artistas" class="px-4 py-2 hover:bg-gray-600">Artistas</router-link>
        <router-link to="/sobre" class="px-4 py-2 hover:bg-gray-600">Sobre</router-link>
      </ul>
    </nav>
  
    <!-- Div principal -->
    <div class="px-8 main-div flex mt-8">
      <div class="flex-1 bg-gray-200 p-24">
        img Matheus <!-- Conteúdo da div esquerda -->
      </div>
      <div class="flex-1 bg-gray-200 p-24 ml-4">
        img Marcio<!-- Conteúdo da div esquerda -->
      </div>
    </div>

    <div class="px-8 main-div flex mt-8">
      <div class="right-div flex-1 bg-gray-200 p-4">
        <!-- Divs responsivas -->
        <div class="responsive-div bg-gray-300 mb-4 p-4">
          <h2>Matheus Hugolini</h2>
        </div>
        <div class="responsive-div bg-gray-300 mb-4 p-24">
          <h2>Descrição + Curiosidades</h2>
        </div>
        <div class="responsive-div bg-gray-300 p-4">
          <h2>Social Media</h2>
        </div>
      </div>
      <div class="right-div flex-1 bg-gray-200 p-4 ml-4">
        <!-- Divs responsivas -->
        <div class="responsive-div bg-gray-300 mb-4 p-4">
          <h2>Marcio Cintra</h2>
        </div>
        <div class="responsive-div bg-gray-300 mb-4 p-24">
          <h2>Descrição + Curiosidades</h2>
        </div>
        <div class="responsive-div bg-gray-300 p-4">
          <h2>Social Media</h2>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer class="footer bg-gray-800 text-white mt-12 py-8 px-12">
      <ul class="flex justify-center">
        <li><a href="#" class="px-4 py-2 hover:bg-gray-600">Home</a></li>
        <li><a href="#" class="px-4 py-2 hover:bg-gray-600">Instrumentos</a></li>
        <li><a href="#" class="px-4 py-2 hover:bg-gray-600">Artistas</a></li>
        <li><a href="#" class="px-4 py-2 hover:bg-gray-600">Sobre</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'sobre-component',
  // Adicione seus dados, métodos e lógica aqui, se necessário
}
</script>

<style scoped>
/* Estilos globais */
.home {
  font-family: Arial, sans-serif;
}

/* Estilos para a Navbar */
.navbar ul {
  list-style-type: none;
}

.navbar ul li {
  display: inline;
}

.navbar ul li a {
  text-decoration: none;
}

/* Estilos para as Divs responsivas */
.responsive-div {
  border-radius: 4px;
}

/* Estilos específicos para telas menores que 768px */
@media (max-width: 768px) {
  .main-div {
    flex-direction: column;
  }

  .right-div {
    margin-left: 0;
  }
}
</style>
