<template>
  <header class="hidden sm:inline">
    <nav class="mainNav hidden sm:inline">
      <ul>
        <li><NuxtLink to="/">Forside</NuxtLink></li>
        <li><NuxtLink to="/Menukort">Menukort</NuxtLink></li>
        <li><NuxtLink to="/Takeaway">Take Away</NuxtLink></li>
        <div class="logo-bg">
          <NuxtLink id="noborder" to="/">
            <img class="logo" src="/img/logo.png" alt="" />
          </NuxtLink>
        </div>
        <li><NuxtLink to="/galleri"> Galleri</NuxtLink></li>
        <li><NuxtLink to="/kontakt">Kontakt Os</NuxtLink></li>
        <li><NuxtLink to="/omos"> Om os</NuxtLink></li>

        <NuxtLink
          to="https://www.facebook.com/bellaitaliakolding"
          class="hover:opacity-75"
        >
          <span class="sr-only h-full"> Facebook </span>
          <svg
            class="w-10 h-10 -ml-12 mt-2 mr-6 m-auto"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </NuxtLink>
      </ul>
    </nav>
    <nav class="phoneNav"></nav>
  </header>
  <phone-nav />
</template>

<style scoped>
.router-link-active {
  position: relative;
}

.router-link-active::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #fbfbfb;
  transform: translateX(-50%);
  transition: width 0.3s ease-in-out;
}

.router-link-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: transparent;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
}

.router-link-active:hover::after {
  background-color: rgba(26, 255, 0, 0.2);
  transform: translateX(-50%) scaleX(1.1);
}

.router-link-active::before {
  width: 100%;
}

#noborder::before,
#noborder::after {
  content: "" !important;
  opacity: 0 !important;
}
select,
select option {
  background: none !important;
}
.mainNav {
  @apply text-white hidden md:block w-screen fixed top-0 text-lg z-50;
  background-color: rgb(34, 34, 34);
}
.mainNav .logo {
  @apply h-[8em];
}
.mainNav ul {
  @apply flex justify-center  h-20 overflow-visible;
}
.mainNav li {
  @apply m-auto min-w-[4em];
}

.phoneNav .logo {
  @apply w-[14em] m-auto fixed;
}
.burger {
  @apply fixed right-8 scale-110;
}
.phoneNav ul {
  @apply text-8xl grid place-content-center text-center /* h-screen w-screen */;
}
.phoneNav li {
  @apply text-8xl hidden;
}

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.hamRotate180.active {
  transform: rotate(180deg);
}
.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
}
.ham1 .top {
  stroke-dasharray: 40 139;
}
.ham1 .bottom {
  stroke-dasharray: 40 180;
}
.ham1.active .top {
  stroke-dashoffset: -98px;
}
.ham1.active .bottom {
  stroke-dashoffset: -138px;
}
</style>
