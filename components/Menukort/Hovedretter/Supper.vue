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
    number: 14,
    name: "Minestrone",
    description: "Italiensk grøntsagssuppe. Serveres med brød og smør.",
    price: "69,-",
  },
  {
    number: 16,
    name: "Zuppa di asparagi",
    description: "Aspargessuppe. Serveres med brød og smør.",
    price: "69,-",
  },
  {
    number: 17,
    name: "Tortellini in brodo",
    description:
      "Tortellini i tomat og oksebouillon suppe med parmesanost og frisk basilikum. Serveres med brød og smør.",
    price: "69,-",
  },
  {
    number: 19,
    name: "Zuppa di pomodoro",
    description:
      "Flødelegeret tomatsuppe med knust peber og frisk basilikum. Serveres med brød og smør.",
    price: "69,-",
  },
];
</script>
