<template>
  <div v-if="data"
    class="menu-section max-w-8xl mx-auto p-4 bg-white shadow-md rounded-lg overflow-hidden"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
          <div class="menu-price text-orange-400 text-lg font-bold">
            {{ item.price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const menuItems = [
  {
    number: 114,
    name: "Vaniljeis med flødeskum, vafler og chokoladesovs",
    price: "52,-",
  },
  {
    number: 115,
    name: "Tiramisu",
    price: "72,-",
  },
  {
    number: 117,
    name: "Chokoladeis med flødeskum, vafler og chokoladesovs",
    price: "52,-",
  },
  {
    number: 121,
    name: "Trøffel is med cognac og flødeskum",
    price: "72,-",
  },
  {
    number: 123,
    name: "Pandekager med is, flødeskum og chokoladesovs",
    price: "72,-",
  },
];
</script>

