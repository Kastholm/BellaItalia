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
    id: 108,
    number: 108,
    name: "Spaghetti med kødsauce",
    description: "Lækker spaghetti serveret med en rig kødsauce.",
    price: "75,-",
  },
  {
    id: 109,
    number: 109,
    name: "Pizza med tomat, ost, skinke og cocktailpølser",
    description: "Traditionel pizza med en hjertelig topping.",
    price: "75,-",
  },
  {
    id: 111,
    number: 111,
    name: "Pommes frites med ketchup",
    description: "Sprøde pommes frites serveret med ketchup.",
    price: "29,-",
  },
  {
    id: 113,
    number: 113,
    name: "Italiensk is (børneportion)",
    description: "Forfriskende italiensk is perfekt til børn.",
    price: "29,-",
  },
];
</script>

<style scoped>
.menu-section {
  /* Additional styles if needed */
}
.menu-item {
  /* Additional styles if needed */
  border-bottom: 1px solid #e5e7eb; /* Light gray border for item separation */
}
.menu-number {
  /* Adjust the size if needed */
}
.menu-text-content {
  /* Additional styles if needed */
}
</style>
