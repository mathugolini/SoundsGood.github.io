<template>
  <div class="home">
    <!-- Navbar -->
    <nav class="navbar bg-gray-800 text-white py-8">
      <ul class="flex justify-center">
        <li><a href="#" class="px-4 py-2 hover:bg-gray-600">Home</a></li>
        <li><a href="#" class="px-4 py-2 hover:bg-gray-600">Instrumentos</a></li>
        <li><a href="#" class="px-4 py-2 hover:bg-gray-600">Artistas</a></li>
        <li><a href="#" class="px-4 py-2 hover:bg-gray-600">Sobre</a></li>
      </ul>
    </nav>

    <div class="p-32 main-div flex mt-8 bg-gray-200">img ou carrosel</div>

    <div class="p-20 ml-8 mr-8 flex-1 mt-8 bg-gray-200">descrição</div>
  
    <!-- Div principal -->
    <div class="px-8 main-div flex mt-8">
      <div class="left-div flex-1 bg-gray-200 p-4">
        img instrumento ou artista<!-- Conteúdo da div esquerda -->
      </div>
      <div class="right-div flex-1 bg-gray-200 p-4 ml-4">
        <!-- Divs responsivas -->
        <div class="responsive-div bg-gray-300 mb-4 p-4">
          <h2>Titulo</h2>
        </div>
        <div class="responsive-div bg-gray-300 mb-4 p-24">
          <h2>Descrição + Curiosidades</h2>
        </div>
        <div class="responsive-div bg-gray-300 p-4">
          <h2>API Spotify</h2>
        </div>
      </div>
    </div>

    <div class="px-8 main-div flex mt-8">
      <div class="left-div flex-1 bg-gray-200 p-4">
        img instrumento ou artista<!-- Conteúdo da div esquerda -->
      </div>
      <div class="right-div flex-1 bg-gray-200 p-4 ml-4">
        <!-- Divs responsivas -->
        <div class="responsive-div bg-gray-300 mb-4 p-4">
          <h2>Titulo</h2>
        </div>
        <div class="responsive-div bg-gray-300 mb-4 p-24">
          <h2>Descrição + Curiosidades</h2>
        </div>
        <div class="responsive-div bg-gray-300 p-4">
          <h2>API Spotify</h2>
        </div>
      </div>
    </div>

    <div class="px-8 main-div flex mt-8">
      <div class="left-div flex-1 bg-gray-200 p-4">
        img instrumento ou artista<!-- Conteúdo da div esquerda -->
      </div>
      <div class="right-div flex-1 bg-gray-200 p-4 ml-4">
        <!-- Divs responsivas -->
        <div class="responsive-div bg-gray-300 mb-4 p-4">
          <h2>Titulo</h2>
        </div>
        <div class="responsive-div bg-gray-300 mb-4 p-24">
          <h2>Descrição + Curiosidades</h2>
        </div>
        <div class="responsive-div bg-gray-300 p-4">
          <h2>API Spotify</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-component',
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
