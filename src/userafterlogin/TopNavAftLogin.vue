<template>
    <b-navbar id="test" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>
      <img
        src="../assets/clonate-logo.png"
        class="d-inline-block align-top"
        alt="Clonate"
      />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item id="linkone" to="/HomePageAftLogin">Home</b-nav-item>
        <b-nav-item id="linktwo" to="/MerchantPage">Redeem Points</b-nav-item>
        <b-nav-item id="linkthree" to="/HowitworksAftLogin">How It Works</b-nav-item>
      </b-navbar-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-avatar v-bind:src = "profilepic" to="/ProfilePage" id = "profilepic" class="mt-2 mr-2 ml-2" size="3rem"></b-avatar>
        <b-button pill @click="signout()" id="sobutton" class="mt-2 mr-2 ml-2">Sign Out</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import fb from 'firebase'


export default {
  data() {
    return {
      uid: null,
      profilepic: "",
    }
  },
  components: {
  },
  methods: {
    getprofilepic(user) {
      fb.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(imgURL  => {
        // document.getElementById('profilepic').src = imgURL;
        this.profilepic = imgURL;
      })
    },
    signout() {
      fb.auth().signOut().then(() => {
        alert('Successfully logged out');
        this.$router.push('/');
      })
      .catch(error => {
        alert(error.message);
        this.$router.push('/');
      });
    },

  },
  created() {
    fb.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
        this.getprofilepic(user);
  } else {
    // No user is signed in.
  }
});
    // this.uid = fb.auth().currentUser.uid;
  }


};


</script>


<style scoped>
#test {
  background-color: #87ebd3 !important;
}

.navbar-dark .navbar-nav .nav-link {
  color: black;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding-right: 2.0rem;
  padding-left: 0.8rem;
  color: rgb(71, 70, 70)!important;
  font-weight: 350;
}

.navbar-expand-lg .navbar-nav .nav-link:hover {
  padding-right: 2.0rem;
  padding-left: 0.5rem;
  color: rgb(255, 255, 255)!important;
  font-weight: 350;
}

#linkone {
  padding-right: 0rem;
  padding-left: 2.0rem;
}

#linkone:hover {
  padding-right: 1.3rem;
  padding-left: 1.2rem;
}

#linktwo {
  padding-right: 0rem;
  padding-left: 2.0rem;
}

#linktwo:hover {
  padding-right: 1.3rem;
  padding-left: 1.2rem;
}

#linkthree {
  padding-right: 0rem;
  padding-left: 2.0rem;
}

#linkthree:hover {
  padding-right: 1.3rem;
  padding-left: 1.2rem;
}

 #sobutton {
   background-color:#fdf9f9!important;
   color: rgb(0, 0, 0);
   border: none;
   transition-duration: 0.4s;
   width: 100px;
   text-transform: none;
 }

 #sobutton:hover {
   background-color: rgb(212, 212, 212)!important;
   color: black;
 }

#profilepic {
  color:white!important;
  background-color:grey!important;
}
</style>