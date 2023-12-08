<template>
  <div class="m-auto" v-for="menu in data" :key="menu.title">
    <div class="text-center mb-10 mt-44">
      <h2 class="text-4xl font-bold uppercase text-gray-800 font-header after">
        {{ menu.title }}
      </h2>
    </div>
    <div
      v-for="sections in menu.sections"
      :key="sections._key"
      class="text-center"
    >
      <div class="mb-8">
        <h3 class="text-2xl font-semibold mb-3">{{ sections.sectionName }}:</h3>
        <p class="text-xl">{{ sections.dishes[0].name }}</p>
        <p class="text-gray-700">
          {{ sections.dishes[0].description }}
        </p>
      </div>
    </div>
    <div class="price mt-10 text-3xl text-center font-semibold">
      {{ menu.number }},-
    </div>
    <div
          class=" md:hidden  mt-10 p-4 my-2 mb-10 bg-white max-w-[80vw] m-auto border-l-2 border-t-2 border-gray-200 shadow-lg"
        >
          <h3 class="text-md font-semibold text-gray-700 mb-2">
           <b> Vedrørende Allergier</b> bedes i rette henvendelse til personalet eller pr.
            tlf før ankomst.
          </h3>
          <h3 class="text-md font-semibold text-gray-700 mb-2">
            Vi tilbyder desværre ikke glutenfri pizza og pasta.
          </h3>
          <h3 class="text-md font-semibold text-gray-700">
            Vi tilbyder vegetariske retter i vores menukort ellers er det muligt
            at tilføje/fjerne ingredienser på diverse retter.
          </h3>
        </div>
  </div>
</template>

<script setup>
const query = groq`*[_id == "724ba3aa-acb8-45b2-9450-35a017cedf37"]`;

const sanity = useSanity();
const { data } = useSanityQuery(query);

console.log("MD M EEUENEUENU", data.value);
</script>

<style>
</style>