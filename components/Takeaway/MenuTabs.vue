<template>
  <div class="container mx-auto mb-4 px-4  hidden md:block ">
    <!-- Tab Headers -->
    <div class="text-center mb-10">
    </div>

    <div class="tabs flex justify-center rounded-t-md py-4 space-x-8 bg-[#f8f8bc]">
      <button
        class="font-medium text-center transition duration-300"
        :class="currentTab === 'Forretter' ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = 'Forretter'"
      >
        <span class="text-gray-600 text-lg">Forretter</span>
      </button>
      <button
        :class="currentTab === 'Pasta' ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = 'Pasta'"
        class="font-medium text-center transition duration-300"
      >
        <span class="text-gray-600 text-lg">Pasta</span>
      </button>
      <button
        :class="currentTab === 'Pizza' ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = 'Pizza'"
        class="font-medium text-center transition duration-300"
      >
        <span class="text-gray-600 text-lg">Pizza</span>
      </button>
      <button
        :class="currentTab === 'Hovedretter' ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = 'Hovedretter'"
        class="font-medium text-center transition duration-300"
      >
        <span class="text-gray-600 text-lg">Hovedretter</span>
      </button>
      <button
        :class="currentTab === 'Børn' ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = 'Børn'"
        class="font-medium text-center transition duration-300"
      >
        <span class="text-gray-600 text-lg">Til de små</span>
      </button>
      <button
        :class="currentTab === 'Desserter' ? 'tab-active' : 'tab-inactive'"
        @click="currentTab = 'Desserter'"
        class="font-medium text-center transition duration-300"
      >
        <span class="text-gray-600 text-lg">Desserter</span>
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content bg-white">
      <TakeawayHovedretterPizza v-if="currentTab === 'Pizza'" />
      <TakeawayHovedretterPasta v-if="currentTab === 'Pasta'" />
      <TakeawayHovedretter v-if="currentTab === 'Hovedretter'" />
      <TakeawayForretter v-if="currentTab === 'Forretter'" />
      <TakeawayHovedretterBørn v-if="currentTab === 'Børn'" />
      <TakeawayDeserter v-if="currentTab === 'Desserter'" />
    </div>
  </div>

  <div class="tab-content bg-white block md:hidden ">
      <TakeawayHovedretterPizza  />
      <TakeawayHovedretterPasta  />
      <TakeawayHovedretter  />
      <TakeawayHovedretterBørn  />
      <TakeawayForretter />
      <TakeawayDeserter  />
    </div>
</template>

<script setup>
let currentTab = ref("Forretter");

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
