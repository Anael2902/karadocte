<template>
    <div class="main-container">
      <!-- Image au centre -->
      <div class="img">
        <img src="../assets/img/loginK.png" alt="icon-login" class="img-fluid" />
      </div>
  
      <!-- Conteneurs des inputs -->
      <div class="inputs-wrapper">
        <!-- Champ de gauche -->
        <div class="input-wrapper left">
          <input v-model="username" type="text" placeholder="Username" />
        </div>
  
        <!-- Champ de droite -->
        <div class="input-wrapper right">
          <input v-model="password" type="password" placeholder="Mot de passe" />
        </div>
      </div>
      <div class="container">
      <router-link to="/accueil">
        <button class="home-button">Login</button>
      </router-link>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
  };
  </script>
  
  <style scoped>
  .main-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden; /* S'assure qu'il n'y ait pas de débordement */
    height: 100vh;
  }
  
  .img {
    margin-top: 20px;
    text-align: center;
  }
  
  .img-fluid {
    max-width: 60%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .home-button {
  font-family: 'Lalezar', cursive;
  font-size: 48px;
  background-color: #fcfcfc;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
}

.home-button:hover {
  background-color: #ffffff;
}
.container {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  text-align: center;
  padding-bottom: 20px;
}
 
  /* Conteneur des inputs */
  .inputs-wrapper {
    position: relative;
    width: 100%;
    margin-top: 40px; /* Ajustez selon la position souhaitée par rapport à l'image */
  }
  
  .input-wrapper {
    position: absolute;
    width: 15%;
  }
  
  .left {
  position: absolute;
  left: 20%; /* Réduisez la valeur pour rapprocher du centre */
  bottom: -30px;
  /* Supprimez la marge excessive pour que left contrôle mieux le positionnement */
  margin-left: 0;
}
.right {
  position: absolute;
  right: 20%; /* Ajustez également le conteneur de droite */
  bottom: -30px;
  margin-right: 0;
}
  
  input {
    font-family: 'Lalezar', cursive;
    font-size: 20px;
    background-color: #fcfcfc;
    color: rgb(0, 0, 0);
    padding: 15px;
    border: 2px solid #ccc;
    border-radius: 10px;
    width: 100%; /* Ajustez la largeur pour remplir le conteneur */
    transition: background-color 0.3s;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
  }


  </style>
  