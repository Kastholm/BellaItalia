<template>
  <div
    class="bg-[#fbfbfb] mx-auto mb-4 px-4 pt-20 hidden md:block relative z-50"
  >
    <div class="container mx-auto">
      <!-- Tab Headers -->
      <h2 id="topHeader"
        class="text-4xl mb-8 text-center font-bold uppercase text-gray-800 font-header after"
      >
        Take Away
      </h2>
      <div class="stickyHeader sticky top-0">
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
              :class="currentTab === 'Desserter' ? 'tab-active' : 'tab-inactive'"
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
