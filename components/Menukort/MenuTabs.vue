<template>
  <div
    class="bg-[#fbfbfb] mx-auto px-4 pt-20 hidden md:block relative z-50"
  >
    <div class="container mx-auto">
      <!-- Tab Headers -->
          <h2 id="topHeader"
            class="text-4xl mb-20 text-center font-bold uppercase text-gray-800 font-header after"
          >
            MenuKORT
          </h2>
      <div class="stickyHeader sticky top-0">
<div
          class=" z-[999px]  hidden xl:inline-block lg:absolute -top-[15rem]   p-4 bg-white max-w-[30em] border-l-2 border-t-2 border-gray-200 shadow-lg"
        >
          <h3 class="text-md font-semibold text-gray-700 mb-2">
           <b> Vedrørende Allergier</b> bedes i rette henvendelse til personalet eller pr.
            tlf før ankomst.
          </h3>
          <h3 class="text-md font-semibold text-gray-700 mb-2">
            Vi tilbyder desværre ikke glutenfri pizza og pasta.
          </h3>
          <h3 class="text-md font-semibold text-gray-700">
            Vi tilbyder vegetariske retter i vores menukort ellers er det muligt
            at tilføje/fjerne ingredienser på diverse retter.
          </h3>
          <h3 class="text-md font-semibold text-gray-700">
            Vi modtager ikke bordreservationer pr. mail kun via tlf eller henvendelse i restauranten.
          </h3>
        </div>
        <div
          class="tabs mb-12 flex justify-center rounded-t-md py-2 bg-[#093511]"
        >
          <NuxtLink to="#topHeader">
            <button
              class="tab"
              :class="currentTab === 'Forretter' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Forretter'"
            >
              <span >Forretter</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader">
            <button
              :class="currentTab === 'Pasta' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Pasta'"
              class="tab"
            >
              <span >Pasta</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader">
            <button
              :class="currentTab === 'Pizza' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Pizza'"
              class="tab"
            >
              <span >Pizza</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader">
            <button
              :class="
                currentTab === 'Hovedretter' ? 'tab-active' : 'tab-inactive'
              "
              @click="currentTab = 'Hovedretter'"
              class="tab"
            >
              <span >Hovedretter</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader">
            <button
              :class="currentTab === 'Børn' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Børn'"
              class="tab"
            >
              <span >Til de små</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader">
            <button
              :class="currentTab === 'Desserter' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Desserter'"
              class="tab"
            >
              <span >Desserter</span>
            </button>
          </NuxtLink>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="tab-content bg-white container mx-auto ">
        <MenukortForretter v-if="currentTab === 'Forretter'" />
        <MenukortHovedretterBørn v-if="currentTab === 'Børn'" />
        <MenukortHovedretterPasta v-if="currentTab === 'Pasta'" />
        <MenukortHovedretterPizza v-if="currentTab === 'Pizza'" />
        <MenukortDeserter v-if="currentTab === 'Desserter'" />
        <MenukortHovedretter v-if="currentTab === 'Hovedretter'" />
      </div>
    </div>
  </div>

  <div class="tab-content bg-white block md:hidden">
     
    <MenukortForretter />
    <MenukortHovedretterPasta />
    <MenukortHovedretterPizza />
    <MenukortHovedretter />
    <MenukortHovedretterBørn />
    <MenukortDeserter />
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
