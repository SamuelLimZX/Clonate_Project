<template>
  <div>
      <TopNavAftLogin></TopNavAftLogin>

       <div>
    <b-card-group deck class="ml-2 mr-2 mt-5">
      <b-card title="About Us" class="wow fadeInDown slow text-center" v-bind:img-src="imageURL" img-alt="Card image" img-top>
        <b-card-text>
          Clonate aims to encourage the donation of clothing for the needy, <br> reduce textile waste and empower communities. 
          <br><br>Join us in our cause today.
        </b-card-text>
        <SignupBtn id="subutton" @click.native="$router.push('/SignUp')"></SignupBtn>
      </b-card>

      <b-card title="Contact Us" class="wow fadeInDown slow text-center">
        <b-card-text class = "text-left" style = "margin-top: 15px;">
          <div style = "float: left; width: 40%; text-align: right;">
            Email: <br> Number: <br> Address: 
          </div>
          <div style = "float: left; width: 50%; margin-left: 50px;">
            {{email}} <br> {{number}} <br> {{address}} <br> {{postal}}
          </div>
          <div style = "clear: left"/>
        </b-card-text><br>

      <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="16">
      <GmapMarker
        v-for="(item, index) in markers"
        :key="index"
        :position="item.position"
        :clickable="true"
        :icon="item.icon"
      />
    </GmapMap>

      </b-card>
    </b-card-group>
  </div>

    <br>
    <FooterAftLogin style = "position: fixed; bottom:0; width: 100%;"></FooterAftLogin>
      
  </div>
</template>


<script>
const home = {lat: 1.2996575047427947, lng:103.77602467723008};

import FooterAftLogin from './FooterAftLogin.vue';
import TopNavAftLogin from './TopNavAftLogin.vue';
import fb from 'firebase'
import {WOW} from 'wowjs'

export default {
  components: {
    TopNavAftLogin,
    FooterAftLogin,
  },
  data() {
    return {
      email: '',
      address: '',
      imageURL: '',
      number: '',
      postal: '',
      imageURL2: '',
      center: home,
      mapTypeId: "terrain",
      markers: [{
          position: home,
          infoText: "<strong>Work</strong>",

        }],
    }
  },
  methods: {
    fetchItems: function() {
      fb.firestore().collection('aboutus').get().then(snapshot => {
        let item = {}
        snapshot.docs.forEach(doc => {
          item = doc.data()
          this.email = item.email
          this.address = item.address
          this.imageURL = item.imageURL
          this.number = item.number
          this.postal = item.postal
          this.imageURL2 = item.imageURL2
        })
      })
    }
  },

  mounted() {
    new WOW().init();
  },

  created() {
    this.fetchItems()

    
  }
}

</script>


<style scoped>


.vue-map-container {
  height: 330px;
  max-width: 992px;
  width: 100%;
}

#subutton {
   background-color: #87ebd3!important;
   color: rgb(71, 70, 70)!important;
   border: none;
   transition-duration: 0.4s;
   width: 100px;
   text-transform: none;
 }

 #subutton:hover {
   background-color: rgb(212, 212, 212)!important;
   color: rgb(255,255,255)!important;
 }



</style>
