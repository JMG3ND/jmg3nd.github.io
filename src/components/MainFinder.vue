<template>
  <main>
    <article>
      <section class="home-page-finder justify-elements-in-screen">
        <div class="home-page-finder__container justify-elements-in-screen__container">
          <form class="home-page-finder__form" action=""><img
              class="home-page-finder__title home-page-finder__title--dark"
              src="@/assets/images/logo-solvedrubik-hom-page-presentation-dark-640.png" alt=""><img
              class="home-page-finder__title home-page-finder__title--light"
              src="@/assets/images/logo-solvedrubik-hom-page-presentation-light-640.png" alt="">
            <div class="main-finder" action="">
              <input class="main-finder__input" type="text" placeholder="Buscar...">
              <button class="main-finder__send"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
            </div>
          </form>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: 'MainFinder'
}
</script>

<style lang="scss">
@import 'scssglobal/colors-theme.scss';

.home-page-finder {
  box-shadow: 2px;
  background-color: $dark-baground-color-z-index-3;

  body.light & {
    background-color: $light-baground-color-z-index-3;
  }

  &__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    gap: 20px;
    padding: 20px 0px;
    align-items: center;
  }

  &__title {
    width: 640px;

    &--light {
      display: none;

      body.light & {
        display: block;
      }
    }

    &--dark {
      body.light & {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 850px) {
  .home-page-finder {
    &__title {
      width: 75%;
    }
  }
}

.main-finder {
  position: relative;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.589);
  width: 640px;
  border: 2px solid rgba(255, 255, 255, 0.445);

  body.light & {
    background-color: #f9f9fb98;
    border: 2px solid rgba(0, 0, 0, 0.445);
  }

  * {
    background-color: transparent;
  }

  &__input {
    font-size: x-large;
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 30px;
    transition: 0.3s;
    color: $dark-input-buscar-color;

    body.light & {
      color: $light-input-buscar-color;
    }
  }

  &__send {
    font-size: x-large;
    position: absolute;
    border: none;
    bottom: 1rem;
    right: 1.5rem;
    cursor: pointer;

    &:hover {
      color: #0094c6;
    }
  }
}

@media screen and (max-width: 850px) {
  .main-finder {
    width: 75%;

    &__input {
      font-size: small;
    }

    &__send {
      font-size: small;
    }
  }
}
</style>