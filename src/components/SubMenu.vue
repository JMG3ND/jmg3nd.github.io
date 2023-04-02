<template>
  <ul class="sub-menu">
    <li class="sub-menu__content-item dospordos-link-container"><a class="sub-menu__link" href="#">
        <div class="sub-menu__icon sub-menu__icon--red"></div>
        <div class="sub-menu__contain">
          <div class="sub-menu__heading">CUBO 2 X 2</div>
          <p class="sub-menu__description">Algoritmos del cubo dos por dos</p>
        </div>
      </a></li>
    <li class="sub-menu__content-item tresportres-link-container"><a class="sub-menu__link"
        href="#">
        <div class="sub-menu__icon sub-menu__icon--green"></div>
        <div class="sub-menu__contain">
          <div class="sub-menu__heading">CUBO 3 X 3</div>
          <p class="sub-menu__description">Algoritmos del cubo tres por tres</p>
        </div>
      </a></li>
    <li class="sub-menu__content-item cuatroporcuatro-link-container"><a class="sub-menu__link" href="#">
        <div class="sub-menu__icon sub-menu__icon--orange"></div>
        <div class="sub-menu__contain">
          <div class="sub-menu__heading">CUBO 4 X 4</div>
          <p class="sub-menu__description">
            Algoritmos del cubo cuatro por
            cuatro
          </p>
        </div>
      </a></li>
    <li class="sub-menu__content-item cincoporcinco-link-container"><a class="sub-menu__link" href="#">
        <div class="sub-menu__icon sub-menu__icon--blue"></div>
        <div class="sub-menu__contain">
          <div class="sub-menu__heading">CUBO 5 X 5</div>
          <p class="sub-menu__description">Algoritmos del cubo cinco por cinco</p>
        </div>
      </a></li>
  </ul>
</template>

<script>
export default {
  name: 'SubMenu'
}
</script>

<style lang="scss">
@import '@/components/scssglobal/colors-theme';

@media screen and (min-width: 851px) {
  .sub-menu {
    display: block;
    width: 100%;
    border-radius: 5px;
    padding: 0.5rem;
    list-style-type: none;
    background-color: $dark-baground-color-z-index-2;
    border: 1px solid $dark-border-box-color;
    box-shadow: 0px 0px 1px $dark-border-box-color;

    body.light & {
      background-color: $light-baground-color-z-index-2;
      border: 1px solid $light-border-box-color;
      box-shadow: 0px 0px 1px $light-border-box-color;
    }

    &__link {
      display: flex;
      align-items: center;
      padding: 12px;
      text-decoration: none;
      border-radius: 5px;
      width: 100%;
      height: 100%;

      &:hover {
        background-color: $dark-baground-color-z-index-1;

        body.light & {
          background-color: $light-baground-color-z-index-1;
        }
      }
    }

    &__icon {
      height: 2rem;
      margin-right: 0.75rem;
      width: 0.2rem;
      margin: 0px 12px 0px 0px;

      &--red {
        background-color: #ff012d;
      }

      &--green {
        background-color: #00c400;
      }

      &--orange {
        background-color: #ff5500;
      }

      &--blue {
        background-color: #0094c6;
      }
    }

    &__contain {
      background-color: transparent;

      & * {
        background-color: transparent;
      }
    }

    &__heading {
      margin: 0px 0px 5px 0px;
    }

    &__description {
      font-size: small;
    }
  }
}

@media screen and (max-width: 850px) {
  .sub-menu {
    width: 100%;
    list-style-type: none;
    background-color: $dark-baground-color-z-index-2;
    border-bottom: 1px solid $dark-border-box-color;
    border-top: 1px solid $light-border-box-color;
    ;
    box-shadow: 0px 0px 1px $dark-border-box-color;

    body.light & {
      background-color: $light-baground-color-z-index-2;
      border-bottom: 1px solid $light-border-box-color;
      border-top: 1px solid $light-border-box-color;
      ;
      box-shadow: 0px 0px 1px $light-border-box-color;
    }

    &__link {
      display: flex;
      align-items: center;
      padding: 12px;
      text-decoration: none;
      width: 100%;
      height: 100%;

      &:hover {
        background-color: $dark-baground-color-z-index-1;

        body.light & {
          background-color: $light-baground-color-z-index-1;
        }
      }
    }

    &__icon {
      height: 2rem;
      margin-right: 0.75rem;
      width: 0.2rem;
      margin: 0px 12px 0px 0px;

      &--red {
        background-color: #ff012d;
      }

      &--green {
        background-color: #00c400;
      }

      &--orange {
        background-color: #ff5500;
      }

      &--blue {
        background-color: #0094c6;
      }
    }

    &__contain {
      background-color: transparent;

      & * {
        background-color: transparent;
      }
    }

    &__heading {
      margin: 0px 0px 5px 0px;
    }

    &__description {
      font-size: small;
    }
  }
}
</style>