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

    <div class="p-10 ml-8 mr-8 flex-1 mt-8 bg-gray-200">
      <h1 class="font-bold text-darkOrgange">Seja Bem-Vindo(a) ao Sounds Good!</h1>
      <br />
      Esta aplicação web é um projeto dedicado ao desenvolvimento frontend Vue.js com componentes de estilização
      Tailwind
      CSS, com interação diretamente ao Iframe do Spotify e Youtube
      <br />
      <br />
      Venha conhecer os instrumentos que fizeram parte de músicas que marcaram gerações e as curiosidades dos artistas
      nesse
      website totalmente interativo, navegue entre as abas para descobrir um pouco melhor.
      <br />
    </div>



    <hr class="mt-24 my-8 mx-auto w-3/4 border-t-2 border-darkOrgange">

    <!-- Div principal -->
    <div class="px-4 lg:px-40 main-div flex flex-col lg:flex-row mt-8">
      <div class="left-div lg:flex-1 p-0">
        <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentLesPaulSlide">
          <Slide key="image1">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/1aucsxJyOSt4VOiXd8tFP8/1a58454871646d10ba1a99726a7f27cf/ECLPS59FAVNH1_front.png?w=1200&h=1200"
                alt="Imagem 1">
            </div>
          </Slide>
          <Slide key="image2">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/36GeLm43YKOmmsRyLD4jru/1cccf7648121a1a6e310f79582ec6b1e/ECLPS59FAVNH1_knobs.png?w=1200&h=1200"
                alt="Imagem 2">
            </div>
          </Slide>
          <Slide key="image3">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/1JPb4ofNHVYdq66MFH0hOs/10ebd38961812be4ac640800852f7ee5/ECLPS59FAVNH1_hs.png?w=1200&h=1200"
                alt="Imagem 3">
            </div>
          </Slide>
          <Slide key="image4">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/4aHdX9KykSD59ZrvJZxIyl/f9215906509f9592246c583cbb140fcd/ECLPS59FAVNH1_back.png?w=1200&h=1200"
                alt="Imagem 4">
            </div>
          </Slide>
        </Carousel>
        <Carousel id="thumbnails" :items-to-show="4" :wrap-around="true" v-model="currentLesPaulSlide" ref="carousel">
          <Slide key="thumbnail1">
            <div class="carousel__item" @click="slideTo(0)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/1aucsxJyOSt4VOiXd8tFP8/1a58454871646d10ba1a99726a7f27cf/ECLPS59FAVNH1_front.png?w=1200&h=1200"
                alt="Thumbnail 1">
            </div>
          </Slide>
          <Slide key="thumbnail2">
            <div class="carousel__item" @click="slideTo(1)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/36GeLm43YKOmmsRyLD4jru/1cccf7648121a1a6e310f79582ec6b1e/ECLPS59FAVNH1_knobs.png?w=1200&h=1200"
                alt="Thumbnail 2">
            </div>
          </Slide>
          <Slide key="thumbnail3">
            <div class="carousel__item" @click="slideTo(2)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/1JPb4ofNHVYdq66MFH0hOs/10ebd38961812be4ac640800852f7ee5/ECLPS59FAVNH1_hs.png?w=1200&h=1200"
                alt="Thumbnail 3">
            </div>
          </Slide>
          <Slide key="thumbnail4">
            <div class="carousel__item" @click="slideTo(3)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/4aHdX9KykSD59ZrvJZxIyl/f9215906509f9592246c583cbb140fcd/ECLPS59FAVNH1_back.png?w=1200&h=1200"
                alt="Thumbnail 4">
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="right-div lg:flex-1 p-4 lg:ml-4 mt-8 lg:mt-0">
        <!-- Divs responsivas -->
        <div class="responsive-div p-4">
          <h2 class="text-gray-800 text-center text-xl lg:text-2xl font-bold">Les Paul</h2>
        </div>
        <div class="text-sm text-black text-justify responsive-div p-4 lg:p-10">
          <p>A escolha da lendária Gibson Les Paul para "Sweet Child o' Mine" foi uma mistura de história, tradição e
            paixão. Seu timbre poderoso e sustentado proporcionou os solos melódicos e os riffs marcantes que definiram
            a música da banda. E não é à toa que a Les Paul tem uma tradição estabelecida no rock, encaixando
            perfeitamente no estilo único do Guns N' Roses. Além disso, a afinidade pessoal do Slash com a guitarra
            também foi crucial - afinal, ele a leva consigo em todas as suas jornadas musicais, tanto nos palcos quanto
            nos estúdios. Quer sentir a vibe? Então aperte o botão abaixo e deixe-se envolver pelo som lendário da Les
            Paul!</p>
        </div>
      </div>
      <div class="responsive-div mt-8 lg:mt-0">
        <iframe class="mt-4 lg:mt-20 w-full" style="border-radius: 12px;"
          src="https://open.spotify.com/embed/track/7snQQk1zcKl8gZ92AnueZW?utm_source=generator" width="100%"
          height="352" frameBorder="0" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>



    <hr class="mt-24 my-8 mx-auto w-3/4 border-t-2 border-darkOrgange">

    <div class="px-8 main-div flex mt-24">
      <div class="left-div flex-1 flex justify-center items-center ">
        <img class="rounded-lg" src="@/assets/postmalone.png">
      </div>
      <div class="right-div flex-1 ml-4">
        <div class="responsive-div mb-4 p-4">
          <h2 class="text-gray-800 font-bold text-2xl transition-colors duration-300 hover:text-darkOrgange">Post Malone
          </h2>
        </div>
        <div class="responsive-div text-left mb-4 p-4">
          <p>Post Malone, nascido Austin Richard Post, é um ícone da música atual, destacando-se pela fusão distinta de
            hip-hop, pop e elementos de rock. Sua paixão por tatuagens é evidente em seu corpo quase totalmente coberto
            por arte, refletindo suas experiências e interesses.<strong
              class="text-darkOrgange">"Congratulations"</strong>,
            uma das suas faixas mais marcantes
            do álbum "Stoney" lançado em 2016, celebra o sucesso e as conquistas do artista, enquanto reconhece os
            desafios superados, tornando-se um hino para perseverança e determinação.</p>
        </div>
        <div class="responsive-div p-4">
          <div class="responsive-div p-4 flex justify-center">
            <iframe class="rounded-lg" width="400" height="200" src="https://www.youtube.com/embed/SC4xMk98Pdc"
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>


    <hr class="mt-24 my-8 mx-auto w-3/4 border-t-2 border-darkOrgange">



    <div class="px-4 md:px-32 main-div flex flex-col md:flex-row mt-8">
      <div class="left-div flex-1 flex justify-center items-center mb-4 md:mb-0">
        <img class="rounded-lg h-64 md:h-96" src="@/assets/matheuslogo.jpg" />
      </div>
      <div class="right-div flex-1 bg-gray-200 p-4 md:ml-4">
        <!-- Divs responsivas -->
        <div class="responsive-div bg-gray-300 mb-4 p-4">
          <h2 class="text-darkOrgange font-bold text-darkOrange text-xl">Hello, My name is Matheus Hugolini</h2>
        </div>
        <div class="responsive-div bg-gray-300 mb-4 p-4 md:p-12 text-justify">
          <p>I'm a Full Stack Developer with a passion for music in general. I play guitar with my friends, and I
            decided to
            take on the challenge of creating a web project that integrates my love for music with technology. I decided
            to
            use Vue.js, Tailwind CSS, and integrate Spotify and YouTube iframes. Hope you enjoy!</p>
        </div>
        <div class="responsive-div bg-gray-300 p-4">
          <a href="https://github.com/mathugolini" target="_blank" class="text-blue-500 underline">Check out my GitHub
            repository</a>
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
document.addEventListener("DOMContentLoaded", function () {
  if (window.onSpotifyIframeApiReady) {
    window.onSpotifyIframeApiReady = function () {
      var iframeElement = document.querySelector('iframe[src*="open.spotify.com"]');
      if (iframeElement) {
        iframeElement.innerHTML = "Your content here";
      }
    };
  }
});
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
