<template>
  <NavBar />
  <div class="main-container-theme">
  <div id = "rectangle">
    Choix des Thèmes
  </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'Accueil',
  components: {
    NavBar, // Enregistrement du composant
  },
};
</script>

<style>
 .main-container-theme {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    overflow: hidden; /* Ensure no content overflows */
 }
 #rectangle {
  font-family: 'Lalezar', cursive;
  margin-top:90px;
  width  : 350px;
  height : 100px;
  font-size: 32px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image:linear-gradient(to right, rgba(156, 203, 240, 0.94) , rgba(230, 164, 219, 0.78));
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.2),
    2px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-transform: uppercase;
}

</style>
