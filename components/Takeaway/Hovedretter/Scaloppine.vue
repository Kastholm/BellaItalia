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
    number: 71,
    name: "Cotoletta Milanese",
    description: "Klassisk italiensk paneret oksemørbrad schnitzel med citron og basilikum. Serveres bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "205,-"
  },
  {
    number: 73,
    name: "Scaloppina Bella Italia",
    description: "Oksemørbrad med skinke, ost og champignon i hvidvinssauce. Serveres med bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "205,-"
  },
  {
    number: 74,
    name: "Scaloppina al parma",
    description: "Oksemørbrad med parmaskinke og salvie i hvidvinssauce. Serveres med bagt kartoffel, salat, brød og smør.",
    price: "205,-"
  }
];
</script>
