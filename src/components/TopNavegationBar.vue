<template>
  <!--block-->
  <header class="top-navegation-bar justify-elements-in-screen">
    <div class="top-navegation-bar__nav justify-elements-in-screen__container">
      <a class="top-navegation-bar__logo" href="#">
        <img src="@/assets/images/logo-solvedrubik-150.png" alt="logo-solvedrubik">
      </a>
      <div class="top-navegation-bar__menus-container" id="top-navegation-bar__menus-container">
        <div class="top-navegation-bar__menu-separator top-navegation-bar__menu-separator--uno">
          <!--block-->
          <MainMenu />
        </div>
        <div class="top-navegation-bar__menu-separator top-navegation-bar__menu-separator--dos">
          <!--block-->
          <SwitcherTheme />
          <!--block-->
          <TopNavegationFinder />
        </div>
      </div>
      <div class="top-navegation-bar__button-container">
        <button @click="showMenu" class="top-navegation-bar__button" id="top-navegation-bar__button"><font-awesome-icon icon="fa-solid fa-bars" /></button>
      </div>
    </div>
  </header>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import TopNavegationFinder from '@/components/TopNavegationFinder.vue';
import SwitcherTheme from './SwitcherTheme.vue'

export default {
  name: 'TopNavegationBar',
  components: {
    MainMenu,
    SwitcherTheme,
    TopNavegationFinder
  },
  methods: {
    showMenu(){
      document.querySelector("#top-navegation-bar__menus-container").classList.toggle('top-navegation-bar__menus-container--show');
    }
  }
}

</script>

<style lang="scss">
@import '@/components/scssglobal/_colors-theme.scss';

@media screen and (min-width: 851px) {
  .top-navegation-bar {
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: $dark-baground-color-z-index-2;
    border-bottom: 1px solid $dark-border-box-color;

    body.light & {
      background-color: $light-baground-color-z-index-2;
      border-bottom: 1px solid $light-border-box-color;
    }

    &__nav {
      display: flex;
      padding: 10px;
      padding-right: 2rem;
      padding-left: 2rem;
    }

    &__menus-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      width: 100%;
    }

    &__menu-separator {
      display: flex;
      gap: 1rem;
    }

    &__button-container {
      display: none;
    }

    &__button {
      border: none;
      background-color: transparent;
      font-size: xx-large;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 850px) {
  .top-navegation-bar {
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: $dark-baground-color-z-index-2;
    border-bottom: 1px solid $dark-border-box-color;

    body.light & {
      background-color: $light-baground-color-z-index-2;
      border-bottom: 1px solid $light-border-box-color;
    }

    &__nav {
      display: flex;
      padding: 10px;
      padding-right: 2rem;
      padding-left: 2rem;
      justify-content: space-between;
      align-items: center;
    }

    &__menus-container {
      background-color: $dark-baground-color-z-index-2;
      border: 2px solid $dark-baground-color-z-index-1;

      body.light & {
        background-color: $light-baground-color-z-index-2;
        border: 2px solid $light-baground-color-z-index-1;
      }

      width: 80%;
      max-width: 400px;
      position: fixed;
      transform: translateX(100%);
      transition: transform .5s;
      top: 60px;
      bottom: 0;
      right: 0;
      display: grid;
      grid-auto-rows: max-content;

      &--show {
        transform: unset;
      }
    }

    &__logo {
      &>img {
        width: 120px;
      }
    }

    /*&__menu-separator {display: block}*/
    &__button-container {
      display: block;
    }

    &__button {
      border: none;
      background-color: transparent;
      font-size: x-large;
      //cursor: pointer;
    }

    &__menu-separator {
      margin-top: 0.5rem;

      &--uno {
        order: 2;
      }

      &--dos {
        order: 1;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
