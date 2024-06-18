<template>
  <div class="sobre">
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

    <!-- Div principal -->
    <div class="px-4 md:px-32 main-div flex flex-col md:flex-row mt-8">
      <div class="left-div flex-1 flex justify-center items-center mb-4 md:mb-0">
        <img class="rounded-lg h-64 md:h-96" src="@/assets/matheuslogo.jpg" />
      </div>
      <div class="right-div flex-1 bg-gray-200 p-4 md:ml-4">
        <!-- Divs responsivas -->
        <div class="responsive-div bg-gray-300 mb-4 p-4">
          <h2 class="text-darkOrgange font-bold text-darkOrange text-xl">Welcome About Myself!</h2>
        </div>
        <div class="responsive-div bg-gray-300 mb-4 p-4 md:p-12 text-justify">
          <p>My name is Matheus Hugolini, I am a Full Stack Developer with a degree in Systems Analysis and Development.
            I have a diverse
            background, having lived in Canada for a year as part of an exchange program. I hold a certification in
            cloud computing and am currently immersed in studying AWS Cloud and serverless applications. Beyond my
            technical skills, I am a great communicator and a curiosity about myself is that I am a
            digital influencer. I thrive on challenges and am always eager to tackle new opportunities in the tech
            industry.</p>
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
