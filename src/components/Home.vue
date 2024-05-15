<template>
  <div class="home">
    <nav class="navbar bg-gray-800 text-white">
      <div class="flex justify-between items-center px-4">
        <div>
          <img src="@/assets/logo.png" alt="Logo" class="object-cover h-auto md:w-32">
        </div>
        <ul class="flex">
          <li class="md:hidden px-4 py-2 hover:bg-gray-600"><router-link to="/">Home</router-link></li>
          <li class="px-4 py-2 hover:bg-gray-600"><router-link to="/instrumentos">Instrumentos</router-link></li>
          <li class="px-4 py-2 hover:bg-gray-600"><router-link to="/artistas">Artistas</router-link></li>
          <li class="px-4 py-2 hover:bg-gray-600"><router-link to="/sobre">Sobre</router-link></li>
        </ul>
      </div>
    </nav>

    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(image, index) in images" :key="index">
        <img :src="image" class="carousel__item h-80 w-full object-cover" :alt="'Slide ' + (index + 1)" />
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <div class="p-20 ml-8 mr-8 flex-1 mt-8 bg-gray-200">descrição</div>

    <!-- Div principal -->
    <div class="px-8 main-div flex mt-8 ">
      <div class="bg-gray-300 left-div flex-1 p-4 flex justify-center items-center">
        <img class="h-60 object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1580745294190-1626b58bf7ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3RyaWMlMjBndWl0YXJ8ZW58MHx8MHx8fDA%3D"
          alt="Gibson SG Red Devil">
      </div>

      <div class="right-div flex-1 p-4 ml-4">
        <!-- Divs responsivas -->
        <div class="responsive-div text-gray-600  mb-4 p-4">
          <h2 class="text-gray-800 text-2xl font-bold">Gibson SG - The Red Devil</h2>
        </div>
        <div class="text-black responsive-div mb-4 p-12">
          <p>Esta guitarra é uma Gibson SG Standard de 1967 com um acabamento vermelho vibrante. Foi uma das principais
            guitarras usadas por Angus em várias gravações e performances icônicas do AC/DC, incluindo a música "TNT". A
            "Red Devil" é reconhecida por sua aparência distintiva e pelo som poderoso que contribui para o som único da
            banda.</p>
        </div>
        <div id="embed-iframe" class="responsive-div">
        </div>
      </div>
    </div>

    <div class="px-8 main-div flex mt-8">
      <div class="right-div flex-1 bg-gray-200 p-4 ">
        <!-- Divs responsivas -->
        <div class="responsive-div bg-gray-300 mb-4 p-4">
          <h2 class="text-2xl font-bold">Gibson SG - The Red Devil</h2>
        </div>
        <div class="responsive-div bg-gray-300 mb-4 p-24">
          <p>Esta guitarra é uma Gibson SG Standard de 1967 com um acabamento vermelho vibrante. Foi uma das principais
            guitarras usadas por Angus em várias gravações e performances icônicas do AC/DC, incluindo a música "TNT". A
            "Red Devil" é reconhecida por sua aparência distintiva e pelo som poderoso que contribui para o som único da
            banda.</p>
        </div>
        <div class="responsive-div bg-gray-300 p-4">
          <h2>API Spotify</h2>
        </div>
      </div>
      <div class="left-div flex-1 p-4 ml-4">
        <img
          src="https://images.ctfassets.net/m8onsx4mm13s/5kWd9RtgWKg2qMRQaYprbR/6928bd0f0b15543e547552c7427db2d9/__static.gibson.com_product-images_Custom_CUSNAE888_Cherry_Red_beauty-640_480.png"
          alt="Gibson SG Red Devil">
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
        'https://cdn.mos.cms.futurecdn.net/PVdoR9w5djEM2uPRT8jJJ4.jpg',
        'https://www.musiclipse.com/wp-content/uploads/2014/03/Foo-Fighters-funny-wallpaper.jpg',
        'https://images.unsplash.com/photo-1483101974978-cf266fdf1139?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFuZGElMjBkZSUyMG0lQzMlQkFzaWNhJTIwJTdDfGVufDB8fDB8fHww',
      ]
    }
  },
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyIframeApiReady = () => {
      const element = document.getElementById('embed-iframe');
      const options = {
        uri: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7LRMbd3LEoV5wZJvXT1Lwb?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      };
      element.innerHTML = options.uri;
    };
  },
}
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
}


.navbar ul {
  list-style-type: none;
}

.navbar ul li {
  display: inline;
}

.navbar ul li a {
  text-decoration: none;
}


.responsive-div {
  border-radius: 4px;
}


@media (max-width: 768px) {
  .main-div {
    flex-direction: column;
  }

  .right-div {
    margin-left: 0;
  }
}
</style>
