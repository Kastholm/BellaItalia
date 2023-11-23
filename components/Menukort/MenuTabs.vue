<template>
  <div class="container mx-auto px-4 mt-20">
    <!-- Tab Headers -->
    <div class="text-center mb-10">
      <div
        class="text-2xl font-semibold tracking-widest text-orange-600 uppercase"
      >
        Food Menu
      </div>
      <h2 class="text-4xl font-bold uppercase text-gray-800">MenuKORT</h2>
      <div class="w-16 h-1 bg-orange-500 inline-block mb-4"></div>
    </div>
    <div class="tabs flex justify-center mb-4 space-x-8">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="tab === currentTab ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = tab"
        class="font-medium text-center transition duration-300"
      >
        <i :class="`icon-${tab.toLowerCase()}`"></i>
        <span class="text-orange-600 text-lg">{{ tab }}</span>
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <div v-show="currentTab === 'Forretter'">
        <h2 class="text-2xl">Ekstra Brød og smør 8,-</h2>
        <MenukortForretter />
      </div>
      <div v-show="currentTab === 'Børn'">
        <MenukortHovedretterBørn />
      </div>
      <div v-show="currentTab === 'Fisk'">
        <h2 class="text-2xl">
          Til alle vores kødretter og fiskeretter kan de frit vælge mellem:
          <br />
          Bagt Kartoffel, Pommes Frites eller rosmarinkartofler.
        </h2>
        <MenukortHovedretterFisk />
      </div>
      <div v-show="currentTab === 'Grillet Kød'">
        <h2 class="text-2xl">
          Til alle vores kødretter og fiskeretter kan de frit vælge mellem:
          <br />
          Bagt Kartoffel, Pommes Frites eller rosmarinkartofler.
        </h2>
        <MenukortHovedretterGrillet />
      </div>
      <div v-show="currentTab === 'Oksemørbrad'">
        <h2 class="text-2xl">
          Til alle vores kødretter og fiskeretter kan de frit vælge mellem:
          <br />
          Bagt Kartoffel, Pommes Frites eller rosmarinkartofler.
        </h2>
        <MenukortHovedretterOksemørbrad />
      </div>
      <div v-show="currentTab === 'Pasta'">
        <MenukortHovedretterPasta />
      </div>
      <div v-show="currentTab === 'Pizza'">
        <MenukortHovedretterPizza />
      </div>
      <div v-show="currentTab === 'Scaloppine'">
        <MenukortHovedretterScaloppine />
      </div>
      <div v-show="currentTab === 'Supper'">
        <h2 class="text-2xl">Ekstra Brød og smør 8,-</h2>
        <MenukortHovedretterSupper />
      </div>

      <div v-show="currentTab === 'Hovedretter'">
        <MenukortHovedretter />
      </div>
      <div v-show="currentTab === 'Desert'">
        <MenukortDeserter />
      </div>
    </div>
  </div>
</template>

<script setup>
const tabs = [
  "Forretter",
  "Supper",
  "Pasta",
  "Pizza",
  "Scaloppine",
  "Fisk",
  "Oksemørbrad",
  "Grillet Kød",
  "Børn",
  "Desert",
];
const currentTab = ref(tabs[0]);
</script>

<style scoped>
.tab-active {
  border-bottom: 2px solid #f97316; /* Tailwind orange-500 */
}
.tab-inactive {
  border-bottom: 2px solid transparent;
}
.tab-inactive:hover {
  border-bottom: 2px solid #fdba74; /* Tailwind orange-200 */
}
.tabs button:not(:last-child) {
  margin-right: 1rem;
}
</style>
