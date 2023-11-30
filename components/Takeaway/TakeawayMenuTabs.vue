<template>
  <div class="container mx-auto px-4 mt-20">
    <div class="tabs flex justify-center mb-4 space-x-8">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="tab === currentTab ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = tab"
        class="font-medium text-center transition duration-300"
      >
        <i :class="`icon-${tab.toLowerCase()}`"></i>
        <span class="text-orange-400 text-lg">{{ tab }}</span>
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <div v-show="currentTab === 'Forretter'">
        <h2 class="text-2xl">Ekstra Brød og smør 8,-</h2>
        <TakeawayForretter />
      </div>
      <div v-show="currentTab === 'Børn'">
        <TakeawayHovedretterBørn />
      </div>
      <div v-show="currentTab === 'Fisk'">
        <h2 class="text-2xl">
          Til alle vores kødretter og fiskeretter kan de frit vælge mellem:
          <br />
          Bagt Kartoffel, Pommes Frites eller rosmarinkartofler.
        </h2>
        <TakeawayHovedretterFisk />
      </div>
      <div v-show="currentTab === 'Grillet Kød'">
        <h2 class="text-2xl">
          Til alle vores kødretter og fiskeretter kan de frit vælge mellem:
          <br />
          Bagt Kartoffel, Pommes Frites eller rosmarinkartofler.
        </h2>
        <TakeawayHovedretterGrillet />
      </div>
      <div v-show="currentTab === 'Oksemørbrad'">
        <h2 class="text-2xl">
          Til alle vores kødretter og fiskeretter kan de frit vælge mellem:
          <br />
          Bagt Kartoffel, Pommes Frites eller rosmarinkartofler.
        </h2>
        <TakeawayHovedretterOksemørbrad />
      </div>
      <div v-show="currentTab === 'Pasta'">
        <TakeawayHovedretterPasta />
      </div>
      <div v-show="currentTab === 'Pizza'">
        <TakeawayHovedretterPizza />
      </div>
      <div v-show="currentTab === 'Scaloppine'">
        <TakeawayHovedretterScaloppine />
      </div>
      <div v-show="currentTab === 'Supper'">
        <h2 class="text-2xl">Ekstra Brød og smør 8,-</h2>
        <TakeawayHovedretterSupper />
      </div>
      <div v-show="currentTab === 'Desert'">
        <TakeawayDeserter />
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
