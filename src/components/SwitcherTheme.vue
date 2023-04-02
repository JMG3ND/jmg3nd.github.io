<template>
  <button @click="changeTheme" class="switcher-theme" id="switcher-theme">
    <span class="switcher-theme__button-wrap"><font-awesome-icon icon="fa-solid fa-moon" /><font-awesome-icon icon="fa-solid fa-sun" />
      Tema
    </span>
  </button>
</template>

<script>
export default {
  

  name: 'SwitcherTheme',
  components:{
    
  },
  methods: {
    changeTheme() {
      document.body.classList.toggle('light');
      if (localStorage.getItem("theme") == "light") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", "light");
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/components/scssglobal/colors-theme';

.switcher-theme {
  margin-left: 10px;
  display: inline-block;
  border-radius: 1rem;
  padding: 0.3rem 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: $dark-baground-color-z-index-1;

    body.light & {
      background-color: $light-baground-color-z-index-1;
    }
  }

  * {
    background-color: transparent;
    border: none;
  }

  &__button-wrap {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .fa-solid {
    width: 1rem;
  }

  .fa-sun {
    display: none;
  }

  body.light & {
    .fa-sun {
      display: block;
    }

    .fa-moon {
      display: none;
    }
  }
}
</style>