<template>
  <div class="container mx-auto px-4 mt-20">
    <!-- Tab Headers -->
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold uppercase text-gray-800 font-header after">
        MenuKORT
      </h2>
    </div>

    <div class="tabs flex justify-center mb-4 space-x-8">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="tab === currentTab ? 'tab-active' : 'tab-inactive'"
        @click="switchTab(tab)"
        class="font-medium text-center transition duration-300"
      >
        <i :class="`icon-${tab.toLowerCase()}`"></i>
        <span class="text-gray-600 text-lg">{{ tab }}</span>
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <!-- <div v-if="currentTab === 'Forretter'">
        <h2 class="text-2xl">Ekstra Brød og smør 8,-</h2>
        <MenukortForretter />
      </div>
      <div v-if="currentTab === 'Til de små'">
        <MenukortHovedretterBørn />
      </div>
      <div v-if="currentTab === 'Pasta'">
        <MenukortHovedretterPasta />
      </div>
       -->
      <div v-if="currentTab === 'Pizza'">
        <MenukortHovedretterPizza :selected-menu="selectedMenus['Pizza']" />
      </div>
      <div v-if="currentTab === 'Hovedretter'">
        <MenukortHovedretter :selected-menu="selectedMenus['Hovedretter']" />
      </div>
      <!-- <div v-if="currentTab === 'Desert'">
        <MenukortDeserter />
      </div> -->
    </div>
  </div>
</template>

<script setup>
const tabs = [
  "Forretter",
  "Pasta",
  "Pizza",
  "Hovedretter",
  "Til de små",
  "Desert",
];
const currentTab = ref(tabs[0]);

const selectedMenus = ref({});

tabs.forEach((tab) => {
  selectedMenus.value[tab] = false;
});

function switchTab(tab) {
  currentTab.value = tab;

  for (const key in selectedMenus.value) {
    selectedMenus.value[key] = false;
  }
  selectedMenus.value[tab] = true;
}
</script>

<style scoped>
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
