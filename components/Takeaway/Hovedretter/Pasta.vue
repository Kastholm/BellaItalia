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
    number: 21,
    name: "Spaghetti bolognese",
    description: "Spaghetti med kødsauce og parmesanost.",
    price: "119,-"
  },
  {
    number: 23,
    name: "Spaghetti carbonara",
    description: "Spaghetti i flødesauce med bacon, æg, parmesan, knust peber og persille.",
    price: "119,-"
  },
  {
    number: 24,
    name: "Spaghetti Bella Italia",
    description: "Spaghetti med rejer, hvidløg, frisk basilikum i tomatflødesauce.",
    price: "125,-"
  },
  {
    number: 26,
    name: "Tagliatelle al salmone",
    description: "Tagliatelle med laks, løg, ærter i tomatflødesauce og frisk basilikum.",
    price: "129,-"
  },
  {
    number: 27,
    name: "Tagliatelle al gorgonzola",
    description: "Tagliatelle med gorgonzola og champignon i flødesauce, frisk basilikum og parmesanost.",
    price: "119,-"
  },
  {
    number: 40,
    name: "Tagliatelle verde prato",
    description: "Tagliatelle med hvidvins dampet laks, løg spinat i flødesauce og frisk basilikum.",
    price: "129,-"
  },
  {
    number: 35,
    name: "Tortellini al pomodoro",
    description: "Tortellini med tomat, ærter, løg, frisk basilikum og parmesanost.",
    price: "119,-"
  },
  {
    number: 32,
    name: "Tortellini alla panna",
    description: "Tortellini med bacon, ærter, champignon i flødesauce, parmesanost og persille.",
    price: "125,-"
  },
  {
    number: 31,
    name: "Lasagne al forno",
    description: "Gratinerede lasagneplader med ost og kødsauce, toppes med parmesanost.",
    price: "119,-"
  },
  {
    number: 33,
    name: "Penne alle melanzane",
    description: "Penne med auberginer, løg og rucola i tomatsovs, parmesanost og frisk basilikum.",
    price: "119,-"
  },
  {
    number: 34,
    name: "Penne alla veneziane",
    description: "Penne med bacon, løg, champignon, ærter, gorgonzola i flødesauce og persille.",
    price: "129,-"
  },
  {
    number: 36,
    name: "Penne alla signora",
    description: "Penne med bacon, løg i kødflødesauce med frisk persille og parmesanost.",
    price: "119,-"
  },
  {
    number: 37,
    name: "Penne alla siciliana",
    description: "Penne med oksemørbrad i stykker, løg, chili, ærter i tomatflødesauce med frisk basilikum og parmesanost.",
    price: "139,-"
  },
  {
    number: 38,
    name: "Risotto marinara",
    description: "Risotto med rejer, muslinger, tunfisk, hvidløg i tomatsovs, toppes med frisk persille.",
    price: "139,-"
  },
  {
    number: 39,
    name: "Risotto Bella Italia",
    description: "Risotto med hvidvins dampet oksemørbrad i stykker, kylling, rejer og muslinger. Dertil ananas, mango, marmelade.",
    price: "159,-"
  }
];

</script>