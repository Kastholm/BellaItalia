<template>
  <Nav />
  <main class="pt-20">
    <slot />
  </main>
  <Footer />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.after::after {
content:"";
display: block;
height: 4px;
width: 150px;
background: linear-gradient(to right, #009246 0%, #009246 33.33%, #cecdcd 33.33%, #FFFFFF 66.66%, #CE2B37 66.66%, #CE2B37 100%);
}

.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #000;
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>