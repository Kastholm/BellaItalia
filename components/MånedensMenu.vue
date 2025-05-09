<template>
  <div class="grid grid-cols-1 md:grid-cols-2 min-h-[700px] gap-8 mx-auto">
    <div class="mx-auto" v-for="menu in data" :key="menu._id">
      <div class="text-center mb-10 mt-32 md:mt-44">
        <h2 class="text-4xl font-bold uppercase text-gray-800 font-header after">
          {{ menu.title }}
        </h2>
      </div>
      <div v-for="sections in menu.sections" :key="sections._key" class="text-center">
        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">{{ sections.sectionName }}:</h3>
          <p class="text-xl">{{ sections.dishes[0].name }}</p>
          <p class="text-gray-700">{{ sections.dishes[0].description }}</p>
        </div>
      </div>
      <div class="price mt-10 text-3xl text-center font-semibold">{{ menu.number }},-</div>
      <!-- Allergi & reservation -->
      <div class="md:hidden mt-10 p-4 my-2 mb-2 bg-white max-w-[80vw] m-auto border-l-2 border-t-2 border-gray-200 shadow-lg">
        <h3 class="text-md font-semibold text-gray-700 mb-2"><b>Vedrørende Allergier</b> …</h3>
        <h3 class="text-md font-semibold text-gray-700 mb-2">Vi tilbyder …</h3>
        <h3 class="text-md font-semibold text-gray-700">Vi tilbyder …</h3>
      </div>
      <div class="p-4 mb-10 md:hidden bg-white max-w-[80vw] m-auto border-l-2 border-t-2 border-gray-200 shadow-lg">
        <h3 class="text-md font-semibold text-gray-700"><b>Vi modtager ikke bordreservationer pr. mail</b> …</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = `
  *[_id in [
    "724ba3aa-acb8-45b2-9450-35a017cedf37",
    "efb79330-db08-406d-949c-1b28a5b05fa7"
  ]]
`
const { data } = useSanityQuery(query)
</script>
