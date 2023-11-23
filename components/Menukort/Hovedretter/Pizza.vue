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
    number: 50,
    name: "Calzone (indbagt)",
    description: "Tomat, ost, skinke, champignon, rejer og oregano.",
    price: "125,-"
  },
  {
    number: 52,
    name: "Calzone (indbagt)",
    description: "Tomat, ost, skinke, spaghetti, kødsauce og oregano.",
    price: "125,-"
  },
  {
    number: 53,
    name: "Pizza Taormina",
    description: "Tomat, ost, skinke, ananas og oregano.",
    price: "115,-"
  },
  {
    number: 54,
    name: "Pizza Contadina",
    description: "Tomat, ost, skinke, bacon, løg, hvidløg og oregano.",
    price: "120,-"
  },
  {
    number: 55,
    name: "Pizza Roma",
    description: "Tomat, ost, skinke, champignon og oregano.",
    price: "115,-"
  },
  {
    number: 56,
    name: "Pizza Salame Italiano",
    description: "Tomat, ost, italiensk salami, parmesanost, rucola og oregano.",
    price: "125,-"
  },
  {
    number: 57,
    name: "Pizza Ulisse",
    description: "Tomat, ost, oksekød, løg, bacon og oregano.",
    price: "125,-"
  },
  {
    number: 58,
    name: "Pizza Vegetariana",
    description: "Tomat, ost, champignon, ærter, peberfrugt, artiskokker, rucola, frisk grøn salat og oregano.",
    price: "125,-"
  },
  {
    number: 59,
    name: "Pizza Don Angelo",
    description: "Tomat, ost, skinke, tunfisk, peberfrugt, oliven, løg, hvidløg og oregano.",
    price: "125,-"
  },
  {
    number: 60,
    name: "Pizza Rustica",
    description: "Tomat, ost, skinke, æg, løg, ansjoser, gorgonzola, chili, oregano og hvidløg.",
    price: "125,-"
  },
  {
    number: 61,
    name: "Pizza Pepperoni",
    description: "Tomat, ost, pepperoni, chili og oregano.",
    price: "115,-"
  },
  {
    number: 62,
    name: "Pizza Siciliano",
    description: "Tomat, ost, skinke, spaghetti, bolognesesauce, auberginer, parmesan og oregano.",
    price: "125,-"
  },
  {
    number: 63,
    name: "Pizza di Parma",
    description: "Tomat, ost, artiskokker, parmaskinke, parmesanost, rucola og oregano.",
    price: "125,-"
  },
  {
    number: 65,
    name: "Pizza Palermo",
    description: "Tomat, ost, skinke, artiskokker, løg, oliven, kapers, salat, rucola og oregano.",
    price: "125,-"
  },
  {
    number: 66,
    name: "Pizza Milano",
    description: "Tomat, ost, skinke, kartofler, salami, æg, løg, chili og rosmarin.",
    price: "125,-"
  },
  {
    number: 67,
    name: "Pizza Naxos",
    description: "Tomat, ost, laks, rejer, løg, rucola, oregano.",
    price: "139,-"
  },
  {
    number: 68,
    name: "Pizza Veneziana",
    description: "Tomat, ost, tunfisk, ananas, chili, hvidløg og oregano.",
    price: "125,-"
  },
  {
    number: 69,
    name: "Pizza del Sole",
    description: "Tomat, ost, oksemørbrad i strimler, peberfrugt, løg, hvidløg, chili og oregano.",
    price: "139,-"
  }
];
</script>
