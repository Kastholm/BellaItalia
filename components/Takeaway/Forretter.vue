<template>
   <div v-if="!data" class="flex justify-center items-center">
      <div class="loader"></div>
    </div>
  <div v-else class="shadow-md rounded-lg overflow-hidden  ">
      
        <div
          v-for="menuPunkt in data"
          :key="menuPunkt.title"
          class="menu-section max-w-8xl mx-auto p-4"
        >
          <h1
            class="text-4xl text-center font-bold uppercase text-gray-800 font-header after mb-6"
          >
            {{ menuPunkt.title }}
          </h1>
          <h3 class="text-2xl text-center mb-6 ">Ekstra brød og smør 8 kr.</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="menu-item flex min-h-[8em]"
              v-for="item in menuPunkt.sections"
              :key="item._key"
            >
              <div
                class="menu-number flex items-center justify-center bg-gray-200 text-gray-500 font-bold text-3xl"
                style="flex: none; width: 100px; height: 100px"
              >
                {{ item.number }}
              </div>
              <div class="menu-text-content flex flex-col justify-between p-4">
                <div>
                  <div class="menu-name text-xl  font-bold">{{ item.name }}</div>
                  <div class="menu-description text-gray-600">
                    {{ item.description }}
                  </div>
                </div>
                <div class="menu-price text-green-900 text-[1.3rem] font-bold">
                  {{ item.takeawayprice }} kr.
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "menu" && (_id == "6d951fd7-3955-49f3-97ba-e538241df35e" || _id == "e62463ad-bda3-4ead-bd10-ad43f65716cc")] {
  title,
  sections [] {
    _key,
    _type,
    description,
    name,
    number,
    price,
    takeawayprice
  }
}`;

const sanity = useSanity();
const { data } = useSanityQuery(query);
console.log(data);


</script>

