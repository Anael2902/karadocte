<template>
  <nav class="navbar">
    <div class="navbar-left">
      <button @click="toggleMenu" class="hamburger-menu">☰</button>
    </div>
    <div class="navbar-center">
      <img src="../assets/img/LOGO.png" alt="Logo" class="logo">
    </div>
    
    <div class="navbar-right">
      <router-link to="/account">
        <button class="account-button">
          <img src="../assets/img/accountI.jpg" class="logo-acc">
        </button>
      </router-link>
    </div>

    <!-- Menu hamburger -->
    <div v-if="isMenuOpen" class="hamburger-content">
      <!-- Ajoutez ici les éléments de votre menu -->
      <a href="#">Paramètres</a>
      <a href="#">Lien 2</a>
      <a href="#">Lien 3</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
/* Styles pour le menu hamburger */
.hamburger-menu {
  font-size: 2.5rem;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger-content {
  position: fixed;
  top: 80px;
  left: 10px;
  background-color: #f8f8f8;
  width: 100px;
  height: auto;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  border-radius: 10px;
}

.hamburger-content a {
  display: block;
  padding: 10px 0;
  color: #000000;
  text-decoration: none;
  font-size: 1.2rem;
}

/* Styles pour la navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
}

.navbar-left {
  flex: 1;
}

.navbar-center {
  flex: 2;
  text-align: center;
}

.navbar-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.account-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.logo-acc {
  height: 60px;
  width: auto;
  max-width: 100%;
}

.logo {
  height: 120px;
  max-width: 100%;
}

/* Media queries pour la responsivité */
@media (max-width: 768px) {
  .navbar {
    padding: 10px;
  }
  
  .hamburger-menu {
    font-size: 2rem;
  }
  
  .logo-acc {
    height: 40px;
  }
  
  .logo {
    height: 80px;
  }
  
  .account-button {
    right: 10px;
  }
}

@media (max-width: 480px) {
  .hamburger-menu {
    font-size: 1.8rem;
  }
  
  .logo-acc {
    height: 30px;
  }
  
  .logo {
    height: 60px;
  }
  
  .account-button {
    right: 5px;
  }
}
</style>




