<template>
  <div class=" bg-[#fbfbfb] mx-auto mb-4 px-4 pt-20 hidden md:block relative z-50">
    <div class="container mx-auto">
      <!-- Tab Headers -->
      
        <h2 id="topHeader2" class="text-4xl mb-8 text-center font-bold uppercase text-gray-800 font-header after">
          Drikkekort
        </h2>
      
  
      <div class="stickyHeader sticky top-0">
        <div
          class="tabs flex justify-center rounded-t-md py-4 space-x-8 bg-[#bce7f8]"
        >
          <NuxtLink to="#topHeader2">
            <button
              class="tab"
              :class="currentTab === 'Øl og Vand' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Øl og Vand'"
            >
              <span >Øl og Vand</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader2">
            <button
              :class="currentTab === 'Vin' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Vin'"
              class="tab"
            >
              <span >Vini Rossi</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader2">
            <button
              :class="currentTab === 'Spirituosa' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Spirituosa'"
              class="tab"
            >
              <span >Spirituosa</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader2">
            <button
              :class="currentTab === 'Aperitivi' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Aperitivi'"
              class="tab"
            >
              <span >Aperitivi</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader2">
            <button
              :class="currentTab === 'Kaffe' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Kaffe'"
              class="tab"
            >
              <span>Kaffe</span>
            </button>
          </NuxtLink>
        </div>
      </div>
  
      <!-- Tab Content -->
      <div class="tab-content bg-white">
        <DrikkekortDrikkeØlVand v-if="currentTab === 'Øl og Vand'" />
        <DrikkekortDrikkeVin v-if="currentTab === 'Vin'" />
        <DrikkekortDrikkeSpirituosa v-if="currentTab === 'Spirituosa'" />
        <DrikkekortDrikkeAperitivi v-if="currentTab === 'Aperitivi'" />
        <DrikkekortDrikkeKaffe v-if="currentTab === 'Kaffe'" />
      </div>
    </div>
  </div>

  <div class="tab-content bg-white block md:hidden">
    <h2
      class="text-4xl text-center mt-20 mb-6 font-bold uppercase text-gray-800 font-header after"
    >
      Drikkekort
    </h2>
    <DrikkekortDrikkeØlVand />
    <DrikkekortDrikkeVin />
    <DrikkekortDrikkeSpirituosa />
    <DrikkekortDrikkeAperitivi />
    <DrikkekortDrikkeKaffe />
  </div>
</template>

<script setup>
let currentTab = ref("Øl og Vand");
</script>

<style >
.tab-active {
  border-bottom: 2px solid transparent !important;
  background-color: #fbfbfb;
  transition: .5s;
}
.tab-inactive {
  border-bottom: 2px solid transparent;
  @apply text-gray-600 bg-[#fbfbfb] p-4 text-xl rounded-md min-w-[7em];
}
.tab-inactive:hover {
   border-bottom: 2px solid transparent !important;
   transform: scale(1.05);
   transition: .5s;
}
.tabs button:not(:last-child) {
  margin-right: 1rem;
}

.tab {
  @apply text-gray-800 relative p-2 m-2 text-xl rounded-md min-w-[7em] font-header font-bold;
}
.tab-active::after {
  content: '';
  background: red;
  position: absolute;
  top: 0;
  right: 0;
  width: 3em;
  height: 3em;
  clip-path: polygon(100% 0, 35% 0, 100% 24%);
}
.tab-active::before {
  content: '';
  background: green;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3em;
  height: 3em;
  clip-path: polygon(0 100%, 0 76%, 65% 100%);
}
</style>
