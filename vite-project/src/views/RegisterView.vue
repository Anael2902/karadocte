<template>
    <div class="main-container">
      <div class="img">
        <img src="../assets/img/registerKRDT.png" alt="icon-login" class="img-fluid" />
      </div>
      <div class="inputs-container">
        <div class="input-wrapper left">
          <input v-model="username" type="text" placeholder="Username" />
        </div>
        <div class="input-wrapper center">
          <input v-model="email" type="email" placeholder="Email" />
        </div>
        <div class="input-wrapper right">
          <input v-model="password" type="password" placeholder="Mot de passe" />
        </div>
      </div>
      <div class="container">
      <router-link to="/login">
        <button class="home-button">S'enregistrer</button>
      </router-link>
    </div>

  <div class="contLog">
    <router-link to = "/login">
      <button class="log-button">Déjà enregistré ?</button>
    </router-link>
  </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Jolly+Lodger&display=swap');
  
  /* Apply box-sizing globally to include padding and borders in width/height */
  * {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden; /* Disable horizontal scrolling */
  }
  
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    overflow: hidden; /* Ensure no content overflows */
  }
  
  .img {
    margin-top: 20px;
    text-align: center;
  }
  
  .img-fluid {
    max-width: 63%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  
  .inputs-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    bottom: 20%;
    padding: 0; /* Remove excess padding to prevent overflow */
  }
  
  .input-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .container {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  padding-bottom: 20px;
}

.contLog{
 
  position: fixed;
  bottom: 20px;
  left: 80;
  right: 0;
  text-align: center;
  padding-bottom: 20px;

}

.log-button{
  font-family: 'Jolly Lodger', cursive;
  font-size: 18px;
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

  
  input {
    font-family: 'Lalezar', cursive;
    font-size: 20px;
    background-color: #fcfcfc;
    color: rgb(0, 0, 0);
    padding: 15px;
    border: 2px solid #ccc;
    border-radius: 10px;
    width: 80%;
    transition: background-color 0.3s;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
  }
  
  /* Adjust positioning for each input */
  .left {
    justify-content: flex-start;
    top: -140px; /* Move the left input higher */
    margin-left: 12%; /* Reduced margin to avoid overflow */
  }
  
  .center {
    justify-content: center;
    top: -30px; /* Keep the center input lower */
  }
  
  .right {
    justify-content: flex-end;
    top: -140px; /* Move the right input higher */
    margin-right: 12%; /* Reduced margin to avoid overflow */
  }
  </style>
  