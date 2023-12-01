<template>
  <div v-if="!data" class="flex justify-center items-center">
    <div class="loader"></div>
  </div>
  <div v-else class="bg-red-200 shadow-md rounded-lg overflow-hidden">
    <div
      v-for="pasta in data"
      :key="pasta.title"
      class="menu-section max-w-8xl mx-auto p-4"
    >
      <h1
        class="text-4xl text-center font-bold uppercase text-gray-800 font-header after mb-12"
      >
        {{ pasta.title }}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          class="menu-item flex"
          v-for="item in pasta.sections"
          :key="item._key"
        >
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
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "menu" && (_id == "drafts.42802967-55d6-425a-b471-edd2064aad1b")] {
  title,
  sections [] {
    _key,
    _type,
    description,
    name,
    number,
    price
  }
}`;

const sanity = useSanity();
const { data } = useSanityQuery(query);
console.log(data);
</script>