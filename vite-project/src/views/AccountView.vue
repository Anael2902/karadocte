<template>
  <div class="account-container">
    <div class="main-container">
      <div id="preview">
    <div :style="{ backgroundColor: imageBackgroundColor }" class="image-background">
      <img v-if="item.imageUrl" :src="item.imageUrl" class="img-fluid rounded-image" />
    </div>

    <!-- Les deux boutons sous l'image -->
    <div class="buttons-container">
      <label class="file-input-label">
        Modifier Photo
        <input type="file" accept="image/*" @change="onChange" class="file-input" />
      </label>
      <button @click="changeBackgroundColor" class="change-bg-button">Changer le Fond</button>
    </div>
  </div>

      <div class="inputs-container">
        <div class="input-wrapper">
          <input v-model="memberfrom" type="text" placeholder="Membre Depuis le 19/07/24" />
        </div>
        <div class="input-wrapper">
          <input v-model="biographie" type="password" placeholder="Biographie" />
        </div>
        <div class="input-wrapper">
          <input v-model="username" type="email" placeholder="Username" />
        </div>
        <div class="input-wrapper">
          <input v-model="password" type="password" placeholder="Mot de passe" />
        </div>
        <div class="container">
          <button class="theme-button">Changer de Thème</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'Account',
  data() {
    return {
      item: {
        imageUrl: null, // On initialise sans image
      },
      imageBackgroundColor: 'rgba(200, 200, 200, 0.5)', // Couleur de fond initiale
    };
  },
  mounted() {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      this.item.imageUrl = storedImage;
    }
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageUrl = event.target.result;
        this.item.imageUrl = imageUrl;

        // Sauvegarde dans localStorage
        localStorage.setItem('profileImage', imageUrl);
      };

      reader.readAsDataURL(file);
    },
    changeBackgroundColor() {
      // Tableau de couleurs pour changer le fond de l'image
      const colors = ['rgba(255, 192, 203, 0.5)', 'rgba(173, 216, 230, 0.5)', 'rgba(200, 200, 200, 0.5)', 'rgba(144, 238, 144, 0.5)', 'rgba(255, 255, 0, 0.5)'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      this.imageBackgroundColor = randomColor;
    },
  },
};
</script>


<style scoped>
.account-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

#preview {
  margin-top: 200px;
  margin-right: 350px;
  text-align: center;
}

/* Style du rectangle autour de l'image */
.image-background {
  padding: 20px; /* Espacement autour de l'image */
  border-radius: 15px; /* Bord arrondi du rectangle */
  display: inline-block; /* Pour que le fond s'adapte à la taille de l'image */
  margin-bottom: 20px; /* Ajout d'espace en dessous pour le bouton */
}

.img-fluid {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

.inputs-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 400px;
}

.input-wrapper {
  margin-top: 90px;
}

input {
  font-family: 'Lalezar', cursive;
  font-size: 20px;
  background-color: #fcfcfc;
  color: rgb(0, 0, 0);
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
}

.container {
  text-align: center;
  margin-top: 20px;
}


.theme-button {
  font-family: 'Lalezar', cursive;
  font-size: 35px;
  background-color: #c9c9c914;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
}


.file-input-label,
.change-bg-button {
  display: inline-block;
  background-color: white;
  color: black;
  border: 2px solid #ccc;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.file-input-label:hover,
.change-bg-button:hover {
  background-color: #f0f0f0;
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 20px; /* Ajustez cette valeur pour espacer plus ou moins les boutons */
  margin-top: 20px;
}

.file-input {
  display: none;
}
</style>

