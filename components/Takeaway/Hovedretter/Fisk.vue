<template>
  <div
    class="menu-section max-w-8xl mx-auto p-4 bg-white shadow-md rounded-lg overflow-hidden"
  >
    <!-- Grid Container for Dishes -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Various Dishes -->
      <div class="menu-item flex" v-for="item in menuItems" :key="item.id">
        <div
          class="menu-number flex items-center justify-center bg-gray-500 text-white font-bold text-3xl"
          style="flex: none; width: 100px; height: 100px"
        >
          {{ item.number }}
        </div>
        <div class="menu-text-content flex flex-col justify-between p-4">
          <div>
            <div class="menu-name text-xl font-bold">{{ item.name }}</div>
            <div class="menu-description text-gray-600">
              {{ item.description }}
            </div>
          </div>
          <div class="menu-price text-orange-400 text-lg font-bold">
            {{ item.price }}
          </div>
        </div>
      </div>
      <!-- Add more menu-item blocks here for other dishes -->
    </div>
  </div>
</template>


<script setup>
const menuItems = [
  {
    number: 102,
    name: "Salmone Scampi alla Naxos",
    description:
      "1 stk. laksefilet med 4 stk. kæmpererjer, hvidløg i hvidvins tomatsauce og basilikum. Serveres med bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "240,-",
  },
  {
    number: 105,
    name: "Salmone alla griglia",
    description:
      "2 stk. grillede laksefilet med hvidløgssmør og citron. Serveres med bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "220,-",
  },
  {
    number: 106,
    name: "Gamberoni alla griglia",
    description:
      "9 stk. grillede kæmpererjer med citron og hvidløgssmør. Serveres med bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "220,-",
  },
];
</script>
