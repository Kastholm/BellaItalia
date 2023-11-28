<template>
  <Nav />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style>
@import url("https://use.typekit.net/gsz4vfd.css");
body {
  margin: 0;
  padding: 0;
  background-color: #fbfbfb;
}

.after::after {
  content: "";
  display: block;
  height: 4px;
  width: 150px;
  margin: 0 auto;
  margin-top: 5px;
  background: linear-gradient(
    to right,
    #009246 0%,
    #009246 33.33%,
    #cecdcd 33.33%,
    #ffffff 66.66%,
    #ce2b37 66.66%,
    #ce2b37 100%
  );
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