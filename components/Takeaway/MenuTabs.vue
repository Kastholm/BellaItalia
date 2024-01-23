<template>
  <div
    class="bg-[#fbfbfb] mx-auto  mb-4 px-4 pt-0 hidden md:block relative z-50"
  >
    <div class="container mx-auto">
      <!-- Tab Headers -->
      <h2
        id="topHeader"
        class="text-4xl mb-8 text-center font-bold uppercase text-gray-800 font-header after"
      >
        Take Away
      </h2>
    
    <div
      
      class="text-center"
    >
      <div class="mb-8">
        <p class="text-xl mb-2"><b>Pizza og Pasta til kun 80,- kr.</b></p>
        <p class="text-xl mb-4">Med undtagelse af</p>
        <p class="text-xl mb-4"><b>Pizza</b> 38, 46, 67, 69, 42</p>
        <p class="text-xl mb-4"><b>Pasta</b> 37, 24, 26, 40, 38, 39</p>
        <p class="text-xl mb-4 ">Alle andre retter har <br> samme pris som menukortet.</p>
      </div>
    </div>
    
  

      <div class="stickyHeader sticky top-0">
      <div
          class=" z-[999px]  hidden xl:inline-block lg:absolute -top-[15rem]  p-4 bg-white max-w-[30em] border-l-2 border-t-2 border-gray-200 shadow-lg"
        >
          <h3 class="text-md font-semibold text-gray-700 mb-2">
           <b> Vedrørende Allergier</b> bedes i rette henvendelse til personalet eller pr.
            tlf før ankomst.
          </h3>
          <h3 class="text-md font-semibold text-gray-700 mb-2">
            Vi tilbyder desværre ikke glutenfri pizza og pasta.
          </h3>
          <h3 class="text-md font-semibold text-gray-700 mb-2">
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
              :class="
                currentTab === 'Forretter' ? 'tab-active' : 'tab-inactive'
              "
              @click="currentTab = 'Forretter'"
            >
              <span>Forretter</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader">
            <button
              :class="currentTab === 'Pasta' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Pasta'"
              class="tab"
            >
              <span>Pasta</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader">
            <button
              :class="currentTab === 'Pizza' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Pizza'"
              class="tab"
            >
              <span>Pizza</span>
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
              <span>Hovedretter</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader">
            <button
              :class="currentTab === 'Børn' ? 'tab-active' : 'tab-inactive'"
              @click="currentTab = 'Børn'"
              class="tab"
            >
              <span>Til de små</span>
            </button>
          </NuxtLink>
          <NuxtLink to="#topHeader">
            <button
              :class="
                currentTab === 'Desserter' ? 'tab-active' : 'tab-inactive'
              "
              @click="currentTab = 'Desserter'"
              class="tab"
            >
              <span>Desserter</span>
            </button>
          </NuxtLink>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="tab-content bg-white container mx-auto">
        
        <TakeawayHovedretterPizza v-if="currentTab === 'Pizza'" />
        <TakeawayHovedretterPasta v-if="currentTab === 'Pasta'" />
        <TakeawayHovedretter v-if="currentTab === 'Hovedretter'" />
        <TakeawayForretter v-if="currentTab === 'Forretter'" />
        <TakeawayHovedretterBørn v-if="currentTab === 'Børn'" />
        <TakeawayDeserter v-if="currentTab === 'Desserter'" />
      </div>
    </div>
  </div>

  <div class="tab-content bg-white block md:hidden">
     <h2
        id="topHeader"
        class="text-4xl mb-8 text-center font-bold uppercase text-gray-800 font-header after"
      >
        Take Away
      </h2>
    
    <div
      
      class="text-center"
    >
      <div class="mb-8">
        <p class="text-xl mb-2"><b>Pizza og Pasta til kun 80,- kr.</b></p>
        <p class="text-xl mb-4">Med undtagelse af</p>
        <p class="text-xl mb-4"><b>Pizza</b> 38, 46, 67, 69, 42</p>
        <p class="text-xl mb-4"><b>Pasta</b> 37, 24, 26, 40, 38, 39</p>
        <p class="text-xl mb-4 ">Alle andre retter har samme pris som menukortet.</p>
      </div>
    </div>
    <div
          class="   p-4 my-2 mb-10 bg-white max-w-[80vw] m-auto border-l-2 border-t-2 border-gray-200 shadow-lg"
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
    <TakeawayHovedretterPizza />
    <TakeawayHovedretterPasta />
    <TakeawayHovedretter />
    <TakeawayHovedretterBørn />
    <TakeawayForretter />
    <TakeawayDeserter />
  </div>
</template>

<script setup>
let currentTab = ref("Forretter");
</script>

<style >
.tab-active {
  border-bottom: 2px solid #100f0e; /* Tailwind orange-500 */
  background-color: #fbfbfb;
}
.tab-inactive {
  border-bottom: 2px solid transparent;
  @apply text-gray-600 bg-[#fbfbfb] p-4 text-xl rounded-md min-w-[7em];
}
.tab-inactive:hover {
  border-bottom: 2px solid #0f0801; /* Tailwind orange-200 */
}
.tabs button:not(:last-child) {
  margin-right: 1rem;
}

.tab {
  @apply text-gray-800 relative p-2 m-2 text-xl rounded-md min-w-[7em] font-header font-bold;
}
.tab-active::after {
  content: "";
  background: red;
  position: absolute;
  top: 0;
  right: 0;
  width: 3em;
  height: 3em;
  clip-path: polygon(100% 0, 35% 0, 100% 24%);
}
.tab-active::before {
  content: "";
  background: green;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3em;
  height: 3em;
  clip-path: polygon(0 100%, 0 76%, 65% 100%);
}
</style>
