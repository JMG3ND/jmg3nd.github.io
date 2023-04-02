<template>
  <TopNavegationBar />
  <main>
    <article>
      <MainFinder />
      <HomPageInformation />
    </article>
  </main>
  <PrincipalFooter />
</template>

<script>
import TopNavegationBar from './components/TopNavegationBar.vue';
import MainFinder from './components/MainFinder.vue';
import HomPageInformation from './components/HomPageInformation.vue';
import PrincipalFooter from './components/PrincipalFooter.vue';

export default {
  name: 'App',
  components: {
    TopNavegationBar,
    MainFinder,
    HomPageInformation,
    PrincipalFooter
  }
}
</script>

<style lang="scss">
@import '@/components/scssglobal/colors-theme';

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  background-color: $dark-baground-color-z-index-2;

  * {
    color: $dark-text-color-bagraund-z-index-1;
  }
}

body.light {
  background-color: $light-baground-color-z-index-2;

  * {
    color: $light-text-color-bagraund-z-index-1;
  }
}

.justify-elements-in-screen {
  width: 100%;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }
}</style>
