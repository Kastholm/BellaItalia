<template>
  <div
    class="menu-section max-w-8xl mx-auto p-4 bg-white shadow-md rounded-lg overflow-hidden"
  >
    <!-- Grid Container for Dishes -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Various Dishes -->
      <div class="menu-item flex" v-for="item in menuItems" :key="item.id">
        <div
          class="menu-number flex items-center justify-center bg-orange-500 text-white font-bold text-3xl"
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
          <div class="menu-price text-orange-600 text-lg font-bold">
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
    number: 86,
    name: "Filetto in pasta sfoglia",
    description: "Indbagt oksemørbrad med skinke, ost, champignon og bearnaisesauce. Serveres med bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "259,-"
  },
  {
    number: 87,
    name: "Filetto al cognac",
    description: "Oksemørbrad i cognac flødesauce med champignon. Serveres med bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "245,-"
  },
  {
    number: 89,
    name: "Filetto al Madagascar",
    description: "Oksemørbrad med madagascar peber og whisky i tomatflødesauce. Serveres med bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "245,-"
  },
  {
    number: 90,
    name: "Filetto al gorgonzola",
    description: "Oksemørbrad med gorgonzolafløde sauce. Serveres med bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "245,-"
  }
];

</script>