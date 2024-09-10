<template>
  <div class="main-container">
    <div class="img">
      <img src="../assets/img/imgAcc.png" alt="icon-login" class="img-fluid" />
    </div>
    <div class="container">
      <router-link to="/register">
        <button class="home-button">HOME</button>
      </router-link>
    </div>
    <div class="textAcc">
      <h3>Welcome to our world!</h3>
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: 'HomeView',
  };
  </script>
  
  <style scoped>
  /* Importation des polices */
  @import url('https://fonts.googleapis.com/css2?family=Keania+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Jolly+Lodger&display=swap');
  
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .container {
    text-align: center;
    padding-bottom: 20px;
  }
  
  .home-button {
    font-family: 'Keania One', cursive;
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
  
  .textAcc {
    font-family: 'Jolly Lodger', cursive;
    font-size: 32px;
    text-align: center;
    padding-bottom: 20px;
    color: #333;
  }
  
  .img-fluid {
    max-width: 80%;
    height: auto;
    display: block;
    margin-bottom: 20px;
  }
  </style>
  