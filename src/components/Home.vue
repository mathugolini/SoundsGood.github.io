<template>
  <div class="home">
    <!-- Navbar -->
    <nav class="navbar bg-gray-800 text-white py-8">
      <ul class="flex justify-center">
        <router-link to="/" class="px-4 py-2 hover:bg-gray-600">Home</router-link>
        <router-link to="/instrumentos" class="px-4 py-2 hover:bg-gray-600">Instrumentos</router-link>
        <router-link to="/artistas" class="px-4 py-2 hover:bg-gray-600">Artistas</router-link>
        <router-link to="/sobre" class="px-4 py-2 hover:bg-gray-600">Sobre</router-link>
      </ul>
    </nav>

    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(image, index) in images" :key="index">
    <!-- <Slide v-for="slide in 3" :key="slide"> -->
      <img :src="image" class="carousel__item" alt="Slide {{ index + 1 }}"/>
      <!-- <div class="carousel__item">{{ slide }}</div> -->
    </Slide>
    

    <template #addons>
      <Pagination />
    </template>
  </Carousel>

    <div class="p-20 ml-8 mr-8 flex-1 mt-8 bg-gray-200">descrição</div>
  
    <!-- Div principal -->
    <div class="px-8 main-div flex mt-8">
      <div class="left-div flex-1 bg-gray-200 p-4">
        img instrumentos<!-- Conteúdo da div esquerda -->
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
      
      <div class="right-div flex-1 bg-gray-200 p-4 ">
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
      <div class="left-div flex-1 bg-gray-200 p-4 ml-4">
        img artistas<!-- Conteúdo da div esquerda -->
      </div>
    </div>

    <div class="px-8 main-div flex mt-8">
      <div class="left-div flex-1 bg-gray-200 p-4">
        Sobre<!-- Conteúdo da div esquerda -->
      </div>
      <div class="right-div flex-1 bg-gray-200 p-4 ml-4">
        <!-- Divs responsivas -->
        <div class="responsive-div bg-gray-300 mb-4 p-4">
          <h2>Desenvolvedores</h2>
        </div>
        <div class="responsive-div bg-gray-300 mb-4 p-24">
          <h2>Descrição + Curiosidades sobre nós</h2>
        </div>
        <div class="responsive-div bg-gray-300 p-4">
          <h2>Repo do Github</h2>
        </div>
      </div>
    </div>
     <!-- Footer -->
     <footer class="footer bg-gray-800 text-white mt-12 py-8 px-12">
      <ul class="flex justify-center">
        <router-link to="/" class="px-4 py-2 hover:bg-gray-600">Home</router-link>
        <router-link to="/instrumentos" class="px-4 py-2 hover:bg-gray-600">Instrumentos</router-link>
        <router-link to="/artistas" class="px-4 py-2 hover:bg-gray-600">Artistas</router-link>
        <router-link to="/sobre" class="px-4 py-2 hover:bg-gray-600">Sobre</router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
  name: 'home-component',
  components: {
    Carousel,
    Slide,
    Pagination
  },
  data() {
    return {
      images: [
        'https://blog.rodeowest.com.br/wp-content/uploads/2021/04/instrumentos-country.jpg',
        'https://www.vagalume.com.br/dynimage/news44780-big.jpg',
        'https://rocknbold.com/wp-content/uploads/2020/01/IMG_2169-1.jpg',
        ]
      }
    }
}
</script>

<style scoped>
/* Estilos para o carrossel */


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
