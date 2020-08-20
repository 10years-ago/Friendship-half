<template>
  <div class="info-card-left">
    <div class="pic">
      <img src="~assets/img/infoCard/1.jpg" alt="">
    </div>
    <div class="date-email">
      <div class="date">
        <strong>10</strong>
        <h4>2020-05</h4>
      </div>
      <div class="kong"></div>
      <div class="email">
        <a>
          <img @click="like()" v-if="heart" src="~assets/img/infoCard/redheart.png" alt="">
          <img @click="like()" v-else src="~assets/img/infoCard/heart.png" alt="">
        </a>
        <a><img src="~assets/img/infoCard/message.png" alt=""></a>
        <a @click="email()" :class="{after:emailOpen == true}"><img src="~assets/img/infoCard/email.png" alt=""></a>
        <a @click="share()" :class="{after:shareOpen == true}"><img src="~assets/img/infoCard/share.png" alt=""></a>
        <div id="email-content" v-if="open">
          <input type="text" :value="kita" id="link"  readOnly="true" >
          <img @click="copy()" src="~assets/img/infoCard/copy.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoCardLeft',
  components:{},
  props:{},
  data(){
    return {
      kita:555,
      open:false,
      emailOpen:false,
      shareOpen:false,
      heart:false
    }
  },
  methods:{
    email(){
      if(this.kita == '56455555555555555555555555555654231@999.com'){
        this.open = !this.open,
        this.emailOpen = !this.emailOpen
      }
      else{
        this.kita = '56455555555555555555555555555654231@999.com'
        this.open = true
        this.emailOpen = true
        this.shareOpen = false
      }
    },
    share(){
      if(this.kita == window.location.href){
        this.open = !this.open
        this.shareOpen = !this.shareOpen
      }
      else{
        this.kita = window.location.href
        this.open = true
        this.shareOpen = true
        this.emailOpen = false
      }
    },
    copy(){
      let e = document.getElementById('link')
      e.select()
      document.execCommand("Copy")
    },
    like(){
      this.heart = !this.heart
    }
  }
}
</script>
<style scoped lang="scss">
.after{
  &:after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-width: 0 .8em .9em;
  border-style: solid;
  border-color: transparent transparent #ff7b7b;
  top: 3.95em;
  left: .15em;
  }
}
.info-card-left{
  width: 65%;
  .pic{
    height: 184px;
    width: 100%;
    position: relative;
    img{
      position: absolute;
      top: -17%;
      width: 95%;
      height: 213px;
      box-shadow: 1px 1px 1em #3a3a3a;
    }
  }
  .date-email{
    display: flex;
    justify-content:flex-end;
    .date{
      flex-basis: 30px;
      text-align: center;
      strong{
        font-size: 3em;
        color: #909090;
        }
      h4{
        margin:0;
        color: #909090;
        font-family: helvetica;
      }
    }
    .kong{flex-grow: 1}
    .email{
      display: flex;
      flex-basis: 55%;
      justify-content: space-around;
      margin-right: 1em;
      position: relative;
      a{
        position: relative;
        cursor: pointer;
        img{
        width: 30px;
        margin-top: 2em;
        }
      }
      #email-content{
        position:absolute;
        bottom: -1.05em;
        width: 100%;
        input{
          border:.35em solid #ff7b7b;
          border-radius: 1em;
          width: calc(100% - 3em);
          padding-left: 1em;
          padding-right: 2em;
          outline:medium
        }
        img{
          position: absolute;
          width: 15px;
          right: .1em;
          bottom: .38em;
          cursor: pointer;
        }
      }
    }/*email*/
  }/*data-email */
}
</style>