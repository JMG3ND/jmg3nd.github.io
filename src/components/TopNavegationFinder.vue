<template>
  <form class="finder" action="">
    <input class="finder__input" type="text" placeholder="Buscar...">
    <button class="finder__send"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
  </form>
</template>

<script>
export default {
  name: 'TopNavegationFinder'
}
</script>

<style lang="scss">
@import '@/components/scssglobal/_colors-theme.scss';

.finder {
  position: relative;
  border-radius: 1rem;
  margin-right: 10px;
  background-color: $dark-baground-color-z-index-1;

  body.light & {
    background-color: $light-baground-color-z-index-1;
  }

  * {
    background-color: transparent;
  }

  &__input {
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    width: 6rem;
    transition: 0.3s;
    color: $dark-input-buscar-color;

    body.light & {
      color: $light-input-buscar-color;
    }

    &:focus-visible {
      width: 12rem;
    }
  }

  &__send {
    position: absolute;
    border: none;
    bottom: 0.5rem;
    right: 0.5rem;
    cursor: pointer;

    &:hover {
      color: #0094c6;
    }
  }
}
</style>