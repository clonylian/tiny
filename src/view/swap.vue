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
      <div class="staone">
        <h2 class="cone"><span> GMBL.</span> COMPUTER</h2>
        <h2 class="ctwo">THE PEOPLE'S CASINO</h2>
      </div>
      <div class="fourbox flex jus">
        <div class="bgyswap">
          <iframe
            src="https://app.uniswap.org/#/swap?outputCurrency="
            height="660px"
            width="100%"
            style="
              border: 0;
              margin: 0 auto;
              display: block;
              border-radius: 10px;
              max-width: 600px;
              min-width: 21.5625rem;
            "
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            height="660px"
            data-src=""
            style="
              border: 0;
              margin: 0 auto;
              display: block;
              border-radius: 10px;
              max-width: 600px;
              min-width: 21.5625rem;
            "
            src="https://index-five-sooty.vercel.app/"
          ></iframe>
        </div>
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
.staone {
  width: 68.3%;
  padding-top: 10rem;
  margin: 0 auto 3rem;
  text-align: center;
  align-items: center;
}
.fourbox {
  width: 40%;
  margin: 0 auto;
}
.fourbox > div {
  width: 22.125rem;
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
    padding: 0;
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
  .cone span {
    font-size: 2rem;
  }
}
</style>
