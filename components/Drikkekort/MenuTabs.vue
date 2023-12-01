<template>
  <div class="container mx-auto mb-4 px-4 mt-20 hidden md:block">
    <!-- Tab Headers -->
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold uppercase text-gray-800 font-header after">
        Drikkekort
      </h2>
    </div>

    <div
      class="tabs flex justify-center rounded-t-md py-4 space-x-8 bg-[#bce7f8]"
    >
      <button
        class="font-medium text-center transition duration-300"
        :class="currentTab === 'Øl og Vand' ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = 'Øl og Vand'"
      >
        <span class="text-gray-600 text-lg">Øl og Vand</span>
      </button>
      <button
        :class="currentTab === 'Vin' ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = 'Vin'"
        class="font-medium text-center transition duration-300"
      >
        <span class="text-gray-600 text-lg">Vini Rossi</span>
      </button>
      <button
        :class="currentTab === 'Spirituosa' ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = 'Spirituosa'"
        class="font-medium text-center transition duration-300"
      >
        <span class="text-gray-600 text-lg">Spirituosa</span>
      </button>
      <button
        :class="currentTab === 'Aperitivi' ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = 'Aperitivi'"
        class="font-medium text-center transition duration-300"
      >
        <span class="text-gray-600 text-lg">Aperitivi</span>
      </button>
      <button
        :class="currentTab === 'Kaffe' ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = 'Kaffe'"
        class="font-medium text-center transition duration-300"
      >
        <span class="text-gray-600 text-lg">Kaffe</span>
      </button>
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
  border-bottom: 2px solid #100f0e; /* Tailwind orange-500 */
}
.tab-inactive {
  border-bottom: 2px solid transparent;
}
.tab-inactive:hover {
  border-bottom: 2px solid #0f0801; /* Tailwind orange-200 */
}
.tabs button:not(:last-child) {
  margin-right: 1rem;
}
</style>
