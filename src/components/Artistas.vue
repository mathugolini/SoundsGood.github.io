<template>
  <div class="artistas bg-gray-100">
    <nav class="navbar bg-gray-800 text-white">
      <div class="flex justify-between items-center px-4">
        <div>
          <img src="@/assets/logo.png" alt="Logo" class="object-cover h-auto md:w-32">
        </div>
        <ul class="flex">
          <li class="px-4 py-2 hover:bg-gray-600"><router-link to="/">Home</router-link></li>
          <li class="px-4 py-2 hover:bg-gray-600"><router-link to="/instrumentos">Instrumentos</router-link></li>
          <li class="px-4 py-2 hover:bg-gray-600"><router-link to="/artistas">Artistas</router-link></li>
          <li class="px-4 py-2 hover:bg-gray-600"><router-link to="/sobre">Sobre</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="flex justify-center r">
      <img class="w-full h-96 object-cover"
          src="https://live.staticflickr.com/2636/3728611825_2d4265e027_b.jpg">
      </div>

    <div class="sm:p-10 rounded-2xl  ml-8 mr-8 flex-1">
      <p class="text-2xl text-darkOrgange font-bold">Descubra os Artistas</p>
      <p class="sm:text-md mt-4 text-black text-justify">Os artistas são verdadeiros criadores de magia, suas músicas são como histórias
        cativantes que nos levam a viagens emocionais. Cada acorde e cada verso revelam um mundo único, repleto de
        paixão e autenticidade.
        Convide-se a explorar mais sobre esses talentosos músicos. Descubra suas jornadas, suas
        influências e os segredos por trás de suas criações musicais. Prepare-se para uma experiência única ao mergulhar
        no universo
        sonoro de cada artista.</p>
      <p class="sm:text-md text-white"></p>
    </div>

    <hr class="my-8 mx-auto w-3/4 border-t-2 border-gray-800">

    <!-- Div principal -->
    <div class="px-8 main-div flex mt-24">
      <div class="left-div flex-1 flex justify-center items-center">
        <img class="rounded-lg" src="@/assets/redhot.png">
      </div>
      <div class="right-div flex-1  ml-4">
        <div class="responsive-div mb-4 p-4">
          <h2 class="text-gray-800 font-bold text-2xl transition-colors duration-300 hover:text-darkOrgange">Red Hot Chilli
            Pepers
          </h2>

        </div>
        <div class="responsive-div text-left mb-4 p-4 text-black">
          <p>Red Hot Chili Peppers são reconhecidos por suas apresentações intensas e o uso inovador do slap bass por
            Flea. Com mais de 80 milhões de álbuns vendidos, eles conquistaram diversos prêmios ao longo da carreira,
            incluindo 11 Grammy Awards.<strong class="text-darkOrgange">"Californication"</strong>, uma de suas músicas
            mais icônicas, combina letras introspectivas com um riff de guitarra inconfundível, capturando a essência do
            estilo da banda.</p>
        </div>
        <div class="responsive-div p-4 flex justify-center">
          <iframe class="rounded-lg" width="400" height="200" src="https://www.youtube.com/embed/YlUKcNNmywk"
            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <hr class="mt-24 my-8 mx-auto w-3/4 border-t-2 border-darkOrgange">

    <div class="px-8 main-div flex mt-24">
      <div class="left-div flex-1 flex justify-center items-center ">
        <img class="rounded-lg" src="@/assets/postmalone.png">
      </div>
      <div class="right-div flex-1 ml-4">
        <div class="responsive-div mb-4 p-4">
          <h2 class="text-gray-800 font-bold text-2xl transition-colors duration-300 hover:text-darkOrgange">Post Malone</h2>
        </div>
        <div class="responsive-div text-left mb-4 p-4">
          <p>Post Malone, nascido Austin Richard Post, é um ícone da música atual, destacando-se pela fusão distinta de
            hip-hop, pop e elementos de rock. Sua paixão por tatuagens é evidente em seu corpo quase totalmente coberto
            por arte, refletindo suas experiências e interesses.<strong
              class="text-darkOrgange">"Congratulations"</strong>, uma das suas faixas mais marcantes
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

    <div class="px-8 main-div flex mt-24">
      <div class="left-div flex-1 flex justify-center items-center">
        <img class="rounded-lg " src="@/assets/gorillaz.png">
      </div>
      <div class="right-div flex-1 ml-4">
        <div class="responsive-div mb-4 p-4">
          <h2 class="text-gray-800 font-bold text-2xl transition-colors duration-300 hover:text-darkOrgange">Gorillaz</h2>
        </div>
        <div class="responsive-div text-left mb-4 p-4">
          <p>
            Gorillaz, uma banda britânica virtual formada por Damon Albarn e Jamie Hewlett em 1998, destaca-se por sua
            fusão de música, animação e cultura pop. Seus membros fictícios - 2-D, Murdoc Niccals, Noodle e Russel Hobbs
            - habitam um universo animado, permitindo exploração criativa e experimental de uma variedade de estilos
            musicais. Uma música marcante do grupo é <strong class="text-darkOrgange">"Feel Good Inc."</strong>, do
            álbum "Demon Days" (2005), elogiada por sua
            produção inovadora, letras satíricas e colaboração com o rapper De La Soul, tornando-se um sucesso
            internacional e influenciando a cena musical contemporânea.</p>
        </div>
        <div class="responsive-div p-4">
          <div class="responsive-div p-4 flex justify-center">
            <iframe class="rounded-lg" width="400" height="200" src="https://www.youtube.com/embed/HyHNuVaZJ-k"
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

    <hr class="mt-24 my-8 mx-auto w-3/4 border-t-2 border-darkOrgange">

    <div class="px-8 main-div flex mt-24 ">
      <div class="left-div flex-1 flex justify-center items-center ">
        <img class="rounded-lg" src="@/assets/bobmarley.png">
      </div>
      <div class="right-div flex-1 ml-4 ">
        <div class="responsive-div mb-4 p-4 ">
          <h2 class="text-gray-800 font-bold text-2xl transition-colors duration-300 hover:text-darkOrgange ">Bob Marley
          </h2>
        </div>
        <div class="responsive-div text-justify mb-4 p-4 rounded-lg text-black">
          <p>
            Bob Marley, nascido Robert Nesta Marley, é um dos músicos mais influentes do século XX, celebrado como ícone
            do reggae. Sua música, impregnada de mensagens de paz, amor e igualdade, transcendeu fronteiras, inspirando
            gerações. Marley, devoto do Rastafári, sobreviveu a uma tentativa de assassinato em 1976, antes de seu
            lendário concerto "One Love Peace" em Kingston, Jamaica. Seu álbum "Legend" permanece como um dos mais
            vendidos de todos os tempos. A música marcante <strong class="text-darkOrgange">"No Woman, No Cry"</strong>,
            lançada em 1974, ressoa como um hino de
            esperança e resiliência, capturando a essência do reggae e ecoando universalmente sua mensagem de
            positividade.</p>
        </div>
        <div class="responsive-div p-4 ">
          <div class="responsive-div p-4 flex justify-center">
            <iframe class="rounded-lg" width="400" height="200"
              src="https://www.youtube.com/embed/IT8XvzIfi4U?si=O9JUziCOpSrl2C8b" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

    <hr class="mt-24 my-8 mx-auto w-3/4 border-t-2 border-darkOrgange">

    <div class="px-8 main-div flex mt-24 ">
      <div class="left-div flex-1 flex justify-center items-center rounded-lg">
        <img class="rounded-lg" src="@/assets/linkinpark.png">
      </div>
      <div class="right-div flex-1 ml-4">
        <div class="responsive-div mb-4 p-4  rounded-lg">
          <h2 class="text-gray-800 font-bold text-2xl transition-colors duration-300 hover:text-darkOrgange">Linkin Park
          </h2>
        </div>
        <div class="responsive-div text-justify mb-4 p-4 text-black ">
          <p>Linkin Park é uma banda de rock alternativo formada em 1996 em Agoura Hills, Califórnia. Com uma mistura
            distintiva de rock, rap e eletrônica, eles se destacaram no cenário musical dos anos 2000. Sua música aborda
            temas como dor, luta emocional e superação. Uma das músicas mais marcantes da banda é
            <strong class="text-darkOrgange">"In the End"</strong>, lançada
            em 2001 no álbum "Hybrid Theory". A faixa se tornou um hino para muitos fãs, com sua poderosa combinação de
            melodias cativantes e letras emocionais. Curiosidades sobre a banda incluem seu sucesso comercial, múltiplos
            prêmios Grammy e o trágico falecimento do vocalista Chester Bennington em 2017, que teve um impacto
            duradouro na indústria da música.
          </p>
        </div>
        <div class="responsive-div p-4 ">
          <div class="responsive-div p-4 flex justify-center ">
            <iframe class="rounded-lg" width="400" height="200" src="https://www.youtube.com/embed/eVTXPUF4Oz4"
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
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
  name: 'artistas-component',
  // Adicione seus dados, métodos e lógica aqui, se necessário
}
</script>

<style scoped>
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
