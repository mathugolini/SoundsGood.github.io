<template>
  <div class="instrumentos">
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

    <div class="p-0 main-div flex items-center justify-center">
      <img
        src="https://images.ctfassets.net/m8onsx4mm13s/6M1Weo7tAFwDcrkTmeflZv/37c75a3c83fe257c64c6105dafa40f62/Register_100Module__1_.jpg"
        alt="Image description" class=" object-cover">
    </div>

    <div class="p-20 ml-8 mr-8 flex-1 mt-8 bg-gray-200">
      <h1 class="font-bold">
        AS GUITARRAS LENDÁRIAS:
      </h1> A Flying V, símbolo do Metallica com seu design agressivo e som potente, marcando a sonoridade da banda
      desde os
      anos 80. A Gibson Les Paul, clássica do rock com timbre quente e versátil, presente em diversos estilos,
      consagrada por Jimmy Page e Slash. E a Stratocaster, famosa por sua clareza e timbre brilhante, escolha de Jimi
      Hendrix e Eric Clapton, com sua versatilidade presente em diversos gêneros musicais.
      <br />
      <br />
      <h1 class="font-bold">
        CURIOSIDADES INSPIRADORAS:
      </h1>
      Bandas como AC/DC e Korn surpreenderam usando gaita de foles e serra elétrica, respectivamente, expandindo os
      limites sonoros. Mötley Crüe já pediu desde manteiga de amendoim até cabeças de ovelha em seus camarins, mostrando
      a extravagância do rock. E o guitarrista Dimebag Darrell do Pantera teve um réptil como animal de estimação
      durante as turnês, provando que a criatividade não se limita à música.
    </div>

    <!-- Div principal -->

    <hr class="mt-24 my-8 mx-auto w-3/4 border-t-2 border-darkOrgange">











    <div class="px-4 lg:px-40 main-div flex flex-col lg:flex-row mt-8">
      <div class="left-div lg:flex-1 p-0">
        <Carousel id="gallery-3" :items-to-show="1" :wrap-around="false" v-model="currentSGSlide">
          <Slide key="sg-gibson1">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/63VLa3NyQX01qNcGnOLGiR/5f62c252837f7ef3b0ea8416ca80d35e/__static.gibson.com_product-images_Custom_CUS538881_Cherry_Red_SGSR64ULCHNM1_front.jpg?w=1200&h=1200"
                alt="Imagem 1">
            </div>
          </Slide>
          <Slide key="sg-gibson2">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/0iGRdzExJ3bsN6WJekQPFh/bf351456f1b18ea7b2c5321e3c259895/__static.gibson.com_product-images_Custom_CUS538881_Cherry_Red_hardware-500_500.png?w=1200&h=1200"
                alt="Imagem 2">
            </div>
          </Slide>
          <Slide key="sg-gibson3">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/6KPpnqN6YkeKGMROLVbjpE/bdda699cca69040ebcbdf024dcde6170/__static.gibson.com_product-images_Custom_CUS538881_Cherry_Red_neck-side-500_500.png?w=1200&h=1200"
                alt="Imagem 3">
            </div>
          </Slide>
          <Slide key="sg-gibson4">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/18vd8C79oAks5mfbIVRTfP/ce04a0bff5743f4a1307a2ad699d478c/__static.gibson.com_product-images_Custom_CUS538881_Cherry_Red_SGSR64ULCHNM1_back.jpg?w=1200&h=1200"
                alt="Imagem 4">
            </div>
          </Slide>
        </Carousel>
        <Carousel id="thumbnails" :items-to-show="4" :wrap-around="true" v-model="currentSGSlide" ref="carousel">
          <Slide key="thumbnail-sg-gibson1">
            <div class="carousel__item" @click="slideTo(0)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/63VLa3NyQX01qNcGnOLGiR/5f62c252837f7ef3b0ea8416ca80d35e/__static.gibson.com_product-images_Custom_CUS538881_Cherry_Red_SGSR64ULCHNM1_front.jpg?w=1200&h=1200"
                alt="Thumbnail 1">
            </div>
          </Slide>
          <Slide key="sg-gibson-sg-gibson2">
            <div class="carousel__item" @click="slideTo(1)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/0iGRdzExJ3bsN6WJekQPFh/bf351456f1b18ea7b2c5321e3c259895/__static.gibson.com_product-images_Custom_CUS538881_Cherry_Red_hardware-500_500.png?w=1200&h=1200"
                alt="Thumbnail 2">
            </div>
          </Slide>
          <Slide key="thumbnail-sg-gibson3">
            <div class="carousel__item" @click="slideTo(2)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/6KPpnqN6YkeKGMROLVbjpE/bdda699cca69040ebcbdf024dcde6170/__static.gibson.com_product-images_Custom_CUS538881_Cherry_Red_neck-side-500_500.png?w=1200&h=1200"
                alt="Thumbnail 3">
            </div>
          </Slide>
          <Slide key="thumbnail-sg-gibson4">
            <div class="carousel__item" @click="slideTo(0)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/18vd8C79oAks5mfbIVRTfP/ce04a0bff5743f4a1307a2ad699d478c/__static.gibson.com_product-images_Custom_CUS538881_Cherry_Red_SGSR64ULCHNM1_back.jpg?w=1200&h=1200"
                alt="Thumbnail 4">
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="right-div lg:flex-1 p-4 lg:ml-4 mt-8 lg:mt-0">
        <!-- Divs responsivas -->
        <div class="responsive-div p-4">
          <h2 class="text-gray-800 text-center text-xl lg:text-2xl font-bold">Gibson SG - <br /> The Red Devil</h2>
        </div>
        <div class="text-sm text-black text-justify responsive-div p-4 lg:p-10">
          <p>
            A super famosa SG "The Red Devil" é usada pelo lendário guitarrista Angus Young, da banda AC/DC, devido ao
            seu timbre super agressivo e versátil, se encaixou perfeitamente no estilo da banda australiana. Além disso,
            a sua ergonomia é confortável permitindo que Young executasse os seus movimentos frenéticos no palco com
            muita facilidade. A sua conexão pessoal com essa guitarra, combinando com suas características sonoras e
            físicas, a tornaram uma escolha natural para suas performances explosivas até hoje.
          </p>
        </div>
      </div>
      <div class="responsive-div mt-8 lg:mt-0">
        <iframe class="mt-4 lg:mt-20 w-full" style="border-radius: 12px;"
          src="https://open.spotify.com/embed/track/7LRMbd3LEoV5wZJvXT1Lwb?utm_source=generator" width="100%"
          height="352" frameBorder="0" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>












    <hr class="mt-24 my-8 mx-auto w-3/4 border-t-2 border-darkOrgange">






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



    <div class="px-4 lg:px-40 main-div flex flex-col lg:flex-row mt-8">
      <div class="left-div lg:flex-1 p-0">
        <Carousel id="gallery-3" :items-to-show="1" :wrap-around="false" v-model="currentSGSlide">
          <Slide key="sg-gibson1">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/1ajKItr7lltnLEhhbLor3b/c4848288550d82613dcaf6f557cbc72f/ES3500PUNH325239.png?w=1200&h=1200"
                alt="Imagem 1">
            </div>
          </Slide>
          <Slide key="sg-gibson2">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/4sDDmGMtxQJS9NACieVkFU/b3ec1846f0ea7adabe484e1ea0008ac6/ES3500PUNH325240.png?w=1200&h=1200"
                alt="Imagem 2">
            </div>
          </Slide>
          <Slide key="sg-gibson3">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/3zu58B7eUZ8kr4Y0cG0O5u/9bdd3e28abdacda3b5036f6ebee1d0a1/ES3500PUNH325244.png?w=1200&h=1200"
                alt="Imagem 3">
            </div>
          </Slide>
          <Slide key="sg-gibson4">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/75pWo4rE2QW2OYKGGXZbqO/8f01fad89f8645b61106259419b06d68/ES3500PUNH325248.png?w=1200&h=1200"
                alt="Imagem 4">
            </div>
          </Slide>
        </Carousel>
        <Carousel id="thumbnails" :items-to-show="4" :wrap-around="true" v-model="currentSGSlide" ref="carousel">
          <Slide key="thumbnail-sg-gibson1">
            <div class="carousel__item" @click="slideTo(0)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/1ajKItr7lltnLEhhbLor3b/c4848288550d82613dcaf6f557cbc72f/ES3500PUNH325239.png?w=1200&h=1200"
                alt="Thumbnail 1">
            </div>
          </Slide>
          <Slide key="sg-gibson-sg-gibson2">
            <div class="carousel__item" @click="slideTo(1)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/4sDDmGMtxQJS9NACieVkFU/b3ec1846f0ea7adabe484e1ea0008ac6/ES3500PUNH325240.png?w=1200&h=1200"
                alt="Thumbnail 2">
            </div>
          </Slide>
          <Slide key="thumbnail-sg-gibson3">
            <div class="carousel__item" @click="slideTo(2)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/3zu58B7eUZ8kr4Y0cG0O5u/9bdd3e28abdacda3b5036f6ebee1d0a1/ES3500PUNH325244.png?w=1200&h=1200"
                alt="Thumbnail 3">
            </div>
          </Slide>
          <Slide key="thumbnail-sg-gibson4">
            <div class="carousel__item" @click="slideTo(3)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/75pWo4rE2QW2OYKGGXZbqO/8f01fad89f8645b61106259419b06d68/ES3500PUNH325248.png?w=1200&h=1200"
                alt="Thumbnail 4">
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="right-div lg:flex-1 p-4 lg:ml-4 mt-8 lg:mt-0">
        <!-- Divs responsivas -->
        <div class="responsive-div p-4">
          <h2 class="text-gray-800 text-center text-xl lg:text-2xl font-bold">ES-335</h2>
        </div>
        <div class="text-sm text-black text-justify responsive-div p-4 lg:p-10">
          <p>A Gibson ES-335 é uma guitarra icônica conhecida por seu design semi-acústico que combina corpo sólido com
            câmaras de ar internas, oferecendo um timbre versátil que vai de tons limpos a distorções potentes.
            Escolhida pelo Arctic Monkeys, a ES-335 é utilizada por Alex Turner para sua capacidade de proporcionar uma
            base sonora rica e profunda, ideal para os arranjos complexos e melódicos da banda. Além de sua qualidade
            tonal, a guitarra também possui uma estética clássica que complementa a presença de palco e a imagem visual
            da banda, conectando-os ao legado de músicos renomados que influenciaram a história do rock.</p>
        </div>
      </div>
      <div class="responsive-div mt-8 lg:mt-0">
        <iframe class="mt-4 lg:mt-20 w-full" style="border-radius: 12px;"
          src="https://open.spotify.com/embed/track/5FVd6KXrgO9B3JPmC8OPst?utm_source=generator" width="100%"
          height="352" frameBorder="0" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>








    <hr class="mt-24 my-8 mx-auto w-3/4 border-t-2 border-darkOrgange">



    <div class="px-4 lg:px-40 main-div flex flex-col lg:flex-row mt-8">
      <div class="left-div lg:flex-1 p-0">
        <Carousel id="gallery-3" :items-to-show="1" :wrap-around="false" v-model="currentSGSlide">
          <Slide key="sg-gibson1">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/34m8DHd5Q9LYmtuvqY7V79/6de813c205152ce0b48706db65675d34/PROPRS4RTB3_front.png?w=1200&h=1200"
                alt="Imagem 1">
            </div>
          </Slide>
          <Slide key="sg-gibson2">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/44DJeqfe3Y2qReMq4fQhF2/363129fe805ff67b867ea433009b6fd4/PROPRS4RTB3_body.png?w=1200&h=1200"
                alt="Imagem 2">
            </div>
          </Slide>
          <Slide key="sg-gibson3">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/1h2ziqThb4pqe18SQYR86o/39315e1dabfb96def30c015eb59e49dd/PROPRS4RTB3_headstock.png?w=1200&h=1200"
                alt="Imagem 3">
            </div>
          </Slide>
          <Slide key="sg-gibson4">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/1LdjuEqZ8ACGuS79KEQutb/c0ff2c645f47996171bca92527a69d9c/PROPRS4RTB3_back.png?w=1200&h=1200"
                alt="Imagem 4">
            </div>
          </Slide>
        </Carousel>
        <Carousel id="thumbnails" :items-to-show="4" :wrap-around="true" v-model="currentSGSlide" ref="carousel">
          <Slide key="thumbnail-sg-gibson1">
            <div class="carousel__item" @click="slideTo(0)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/34m8DHd5Q9LYmtuvqY7V79/6de813c205152ce0b48706db65675d34/PROPRS4RTB3_front.png?w=1200&h=1200"
                alt="Thumbnail 1">
            </div>
          </Slide>
          <Slide key="sg-gibson-sg-gibson2">
            <div class="carousel__item" @click="slideTo(1)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/44DJeqfe3Y2qReMq4fQhF2/363129fe805ff67b867ea433009b6fd4/PROPRS4RTB3_body.png?w=1200&h=1200"
                alt="Thumbnail 2">
            </div>
          </Slide>
          <Slide key="thumbnail-sg-gibson3">
            <div class="carousel__item" @click="slideTo(2)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/1h2ziqThb4pqe18SQYR86o/39315e1dabfb96def30c015eb59e49dd/PROPRS4RTB3_headstock.png?w=1200&h=1200"
                alt="Thumbnail 3">
            </div>
          </Slide>
          <Slide key="thumbnail-sg-gibson4">
            <div class="carousel__item" @click="slideTo(3)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/1LdjuEqZ8ACGuS79KEQutb/c0ff2c645f47996171bca92527a69d9c/PROPRS4RTB3_back.png?w=1200&h=1200"
                alt="Thumbnail 4">
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="right-div lg:flex-1 p-4 lg:ml-4 mt-8 lg:mt-0">
        <!-- Divs responsivas -->
        <div class="responsive-div p-4">
          <h2 class="text-gray-800 text-center text-xl lg:text-2xl font-bold">J-45</h2>
        </div>
        <div class="text-sm text-black text-justify responsive-div p-4 lg:p-10">
          <p>O Gibson J-45 se tornou um símbolo icônico do grunge e do Nirvana por diversos motivos. Seu som rico e
            ressonante, com agudos nítidos, médios encorpados e graves potentes, era perfeito para o estilo da banda. A
            guitarra também era relativamente acessível, o que era importante para o Nirvana no início de sua carreira.
            Além disso, outros músicos grunge que Kurt Cobain admirava, como J Mascis e Mark Arm, também usavam J-45s. A
            estética clássica e atemporal da guitarra se encaixava perfeitamente na imagem da banda.</p>
        </div>
      </div>
      <div class="responsive-div mt-8 lg:mt-0">
        <iframe class="mt-4 lg:mt-20 w-full" style="border-radius: 12px;"
          src="https://open.spotify.com/embed/track/2RsAajgo0g7bMCHxwH3Sk0?utm_source=generator" width="100%"
          height="352" frameBorder="0" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>




    <hr class="mt-24 my-8 mx-auto w-3/4 border-t-2 border-darkOrgange">




    <div class="px-4 lg:px-40 main-div flex flex-col lg:flex-row mt-8">
      <div class="left-div lg:flex-1 p-0">
        <Carousel id="gallery-3" :items-to-show="1" :wrap-around="false" v-model="currentSGSlide">
          <Slide key="sg-gibson1">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/3NyXktEeqkTRhWxksxWki2/bf0371814d6e480eb7de04212bdbb8eb/DSVS00CWCH1_front.png?w=1200&h=1200"
                alt="Imagem 1">
            </div>
          </Slide>
          <Slide key="sg-gibson2">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/4KenPHvPD7ljGgp3TWwUJL/4d6a9c2765257d702bf7ccb4f1a28373/DSVS00CWCH1_body.png?w=1200&h=1200"
                alt="Imagem 2">
            </div>
          </Slide>
          <Slide key="sg-gibson3">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/1uomarwAf4y0yyX3DaTv0S/026c9ebd0d54c4c244bad0f068b97695/DSVS00CWCH1_hs.png?w=1200&h=1200"
                alt="Imagem 3">
            </div>
          </Slide>
          <Slide key="sg-gibson4">
            <div class="carousel__item">
              <img class="h-48 sm:h-72 lg:h-96"
                src="https://images.ctfassets.net/m8onsx4mm13s/6LiCAKe57GtrqqKiswlhvd/86cb4386b03c29fde01032769c6cb674/DSVS00CWCH1_back.png?w=1200&h=1200"
                alt="Imagem 4">
            </div>
          </Slide>
        </Carousel>
        <Carousel id="thumbnails" :items-to-show="4" :wrap-around="true" v-model="currentSGSlide" ref="carousel">
          <Slide key="thumbnail-sg-gibson1">
            <div class="carousel__item" @click="slideTo(0)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/3NyXktEeqkTRhWxksxWki2/bf0371814d6e480eb7de04212bdbb8eb/DSVS00CWCH1_front.png?w=1200&h=1200"
                alt="Thumbnail 1">
            </div>
          </Slide>
          <Slide key="sg-gibson-sg-gibson2">
            <div class="carousel__item" @click="slideTo(1)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/4KenPHvPD7ljGgp3TWwUJL/4d6a9c2765257d702bf7ccb4f1a28373/DSVS00CWCH1_body.png?w=1200&h=1200"
                alt="Thumbnail 2">
            </div>
          </Slide>
          <Slide key="thumbnail-sg-gibson3">
            <div class="carousel__item" @click="slideTo(2)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/1uomarwAf4y0yyX3DaTv0S/026c9ebd0d54c4c244bad0f068b97695/DSVS00CWCH1_hs.png?w=1200&h=1200"
                alt="Thumbnail 3">
            </div>
          </Slide>
          <Slide key="thumbnail-sg-gibson4">
            <div class="carousel__item" @click="slideTo(3)">
              <img class="w-12 h-auto sm:w-16 lg:w-20"
                src="https://images.ctfassets.net/m8onsx4mm13s/6LiCAKe57GtrqqKiswlhvd/86cb4386b03c29fde01032769c6cb674/DSVS00CWCH1_back.png?w=1200&h=1200"
                alt="Thumbnail 4">
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="right-div lg:flex-1 p-4 lg:ml-4 mt-8 lg:mt-0">
        <!-- Divs responsivas -->
        <div class="responsive-div p-4">
          <h2 class="text-gray-800 text-center text-xl lg:text-2xl font-bold">Flying V</h2>
        </div>
        <div class="text-sm text-black text-justify responsive-div p-4 lg:p-10">
          <p>A relação entre a Flying V e o Metallica é inegável e marcante. A guitarra se tornou um símbolo da banda,
            presente em sua história e identidade, e continua a inspirar fãs e músicos em todo o mundo. A Flying V e o
            Metallica vibram em sintonia, eternizando uma união que transcende o tempo e o espaço, consagrando-se como
            um dos duos mais icônicos da história do rock and roll. A Flying V se tornou mais do que apenas um
            instrumento para James Hetfield e o Metallica. Ela se tornou um símbolo da banda, representando sua música,
            atitude e identidade. A guitarra está presente em diversos itens da banda, como camisetas, pôsteres e
            miniaturas, e é um dos instrumentos musicais mais reconhecidos do mundo do rock.</p>
        </div>
      </div>
      <div class="responsive-div mt-8 lg:mt-0">
        <iframe class="mt-4 lg:mt-20 w-full" style="border-radius: 12px;"
          src="https://open.spotify.com/embed/track/5sICkBXVmaCQk5aISGR3x1?utm_source=generator" width="100%"
          height="352" frameBorder="0" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>





    <hr class="mt-24 my-8 mx-auto w-3/4 border-t-2 border-darkOrgange">

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
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'instrumentos-component',
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    currentSGSlide: 0,
    currentLesPaulSlide: 0,
  }),
  methods: {
    slideTo(val) {
      this.currentSGSlide = val
      this.currentLesPaulSlide = val
    },
  },
}

</script>

<style scoped>
@media (max-width: 768px) {
  .main-div {
    flex-direction: column;
  }

}
</style>
