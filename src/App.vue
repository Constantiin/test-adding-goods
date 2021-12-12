<template>
  <div class="container">
    
    <header-c />

    <main-c />

  </div>
</template>

<script>
import HeaderC from '@/components/HeaderC.vue';
import MainC from '@/components/MainC.vue';

export default {
  name: 'App',
  components: {
    HeaderC,
    MainC
  }
}
</script>

<style>

@font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    src: url('./assets/font/Intersemibold.woff2') format('woff2'),
        url('./assets/font/Intersemibold.woff') format('woff');
    font-display: swap;
}

@font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: url('./assets/font/sourcesanspro.woff2') format('woff2'),
        url('/assets/font/sourcesanspro.woff') format('woff');
    font-display: swap;
}

@font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    src: url('./assets/font/sourcesansprosemibold.woff2') format('woff2'),
        url('./assets/font/sourcesansprosemibold.woff') format('woff');
    font-display: swap;
}

html {
    position: relative;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    min-width: 320px;
    min-height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    color: #3F3F3F;
    background-color: #faf9f7;
}

img {
    max-width: 100%;
    height: auto;
    margin: 0;
}

button {
    cursor: pointer;
    padding: 0;
}

input,
button,
textarea {
    border: 0;
    color: #3F3F3F;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

h1, h2, h3, p, figure {
    margin: 0;
}

.container {
    max-width: 1376px;
    margin: 0 auto 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 768px) {

#app {
    max-width: 1440px;
    margin: 0 auto;
}

.container {
    display: block;
}

}

</style>
