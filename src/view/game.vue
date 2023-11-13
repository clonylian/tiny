<template>
  <div class="next">
    <div class="headertop">
      <div class="yroute flex">
        <router-link to="/"> <h2>HOME</h2></router-link>
        <router-link to="/swap"> <h2>SWAP</h2></router-link>

        <router-link to="/game"> <h2>GAME</h2></router-link>

        <a href="https://t.me/gmblcomputer_pro" target="_blank">
          <h2>TELEGRAM</h2></a
        >
      </div>
      <div class="staone center flex flexcol">
        <h2 class="cone"><span>GMBL.</span> COMPUTER</h2>
        <h2 class="ctwo">THE PEOPLE'S CASINO</h2>
        <p class="cthree">
          GMBL's mission is to become the first fully decentralized online
          gambling platform where all the earnings accrue to token holders. We
          are the people's casino.
        </p>
        <button class="cfour">COMING SOON</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.yroute {
  position: absolute;
  width: 100%;
  column-gap: 1rem;
  justify-content: right;
  top: 3rem;
  right: 2rem;
}
.yroute a {
  text-decoration: none;
}
.yroute h2 {
  font-size: 2.5rem;
  color: white;
}
.headertop {
  width: 100%;
  padding: 0 1.5rem;
  background-image: url("../assets/bg-side.2f568ebb.png");
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-position: 50%;
  box-sizing: border-box;
  height: 37.96875rem;
}
.center {
  width: 68.3%;
  padding-top: 10rem;
  margin: 0 auto 3rem;
  text-align: center;
  align-items: center;
}
.cone {
  font-size: 3rem;
  line-height: 1;
  color: white;
}
.cone span {
  font-size: 3rem;
  color: rgb(115, 246, 77);
}
.ctwo {
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: white;
  margin-top: 0.3rem;
}
.cthree {
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding: 2rem;
  width: 50%;
  color: black;
  font-weight: 600;
  box-sizing: border-box;
}
.cfour {
  background-color: #82ba23;
  color: #fff;
  font-size: 1.5625rem;
  line-height: 1em;
  padding: 0.75em;
  border: 0.8px solid #000;
  border-bottom: 3px solid #000;
  border-right: 3px solid #000;
  border-radius: 0.375rem;
  opacity: 0.65;
  margin-top: 2rem;
}
@media (max-width: 1250px) {
  .fourbox {
    display: block;
    width: 100%;
  }
  .staone {
    width: 100%;
  }
  .staone h2 {
    font-size: 1.2rem;
  }
  .fourbox > div:nth-child(1) {
    margin: 0 auto 2rem;
  }
  .fourbox > div:nth-child(2) {
    margin: 0 auto;
  }
  .swapbox {
    background: url("../assets/gmbl-bg-final.webp");
  }
  .yroute {
    column-gap: 0.5rem;
    right: 0.5rem;
    top: 6rem;
  }
  .yroute h2 {
    font-size: 1.1rem;
  }
  .cthree {
    width: 95%;
    padding: 1rem;
  }
  .cone span {
    font-size: 2rem;
  }
}
</style>
