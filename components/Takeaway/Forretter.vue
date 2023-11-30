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
    id: 1,
    number: 1,
    name: "Antipasto Bella Italia",
    description:
      "Gorgonzolaost, parmaskinke, artiskok, salami og oliven,1 stk. bruschetta. Serveres med brød og smør.",
    price: "125,-",
  },
  {
    id: 3,
    number: 3,
    name: "Bruschetta Bella Italia",
    description: "- 2 stk. brød med tomat, løg, hvidløg, basilikum og oregano.",
    price: "53,-",
  },
  {
    id: 4,
    number: 4,
    name: "Insalata Mediterranea",
    description:
      "Salat, rucola, tomat, feta ost, oliven og løg. Serveres med brød og smør.",
    price: "69,-",
  },
  {
    id: 8,
    number: 8,
    name: "Pesce fritto misto",
    description:
      "Friturestegte rejer og blæksprutter med grøn salat. Serveres med brød og smør.",
    price: "85,-",
  },
  {
    id: 9,
    number: 9,
    name: "Prosciutto e melone",
    description:
      "Cantaloupe melon med parmaskinke og rucola. Serveres med brød og smør.",
    price: "85,-",
  },
  {
    id: 10,
    number: 10,
    name: "Cocktail di gamberetti",
    description: "Rejecocktail. Serveres med brød og smør.",
    price: "89,-",
  },
  {
    id: 11,
    number: 11,
    name: "Lumache alla diavola",
    description:
      "Hvidvinsdampede snegle med hvidløg, tomatsovs og frisk basilikum. Serveres med brød og smør.",
    price: "89,-",
  },
];
</script>

<style scoped>
* {
}
</style>
