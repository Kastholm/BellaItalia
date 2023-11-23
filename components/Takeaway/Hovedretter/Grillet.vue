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
    number: 94,
    name: "Filetto ai ferri",
    description: "Grillet oksemørbrad med bearnaisesauce. Serveres med bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "245,-"
  },
  {
    number: 95,
    name: "Bistecca fiorentina ai ferri",
    description: "Grillet T-bone steak ca. 400g. Serveres med bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "335,-"
  },
  {
    number: 97,
    name: "Cotolette d’agnello ai ferri",
    description: "3 stk. grillede lammekoteletter med citron og hvidløgssmør. Serveres med bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "205,-"
  },
  {
    number: 98,
    name: "Pollo alla griglia",
    description: "2 stk. grillede kyllingefilet med citron og hvidløgssmør. Serveres med bagt kartoffel, tilbehør, salat, brød og smør.",
    price: "175,-"
  }
];

</script>