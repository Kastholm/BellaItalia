<template>
  <div v-if="data">
    <div v-for="omos in data.omosinfo" :key="omos._id" class="mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-6 ">
        <div class="mx-auto max-w-2xl sm:text-center">
          <h2
            class="text-base max-w-[160px] m-auto font-semibold leading-7 text-[#42934d]"
          >
            Ægte Italiensk Cuisine
            <div class="after ml-1 mt-1"></div>
          </h2>
          <p
            class="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-header"
          >
            {{ omos.title }}
          </p>

          <p class="mt-6 text-lg leading-8 text-gray-600">
            <SanityBlocks
              :blocks="omos.descriptiondk"
              :serializers="serializers"
            />
          </p>
          <br /><br />
          <div v-if="omos.descriptionen">
            <h2 class="text-2xl font-header">English :</h2>
            <p class="text-lg leading-8 text-gray-600">
              <SanityBlocks
                :blocks="omos.descriptionen"
                :serializers="serializers"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full grid place-content-center mb-12">
      <NuxtLink to="https://www.findsmiley.dk/1416010">
        <img class="w-20 m-auto mb-6" :src="'/img/mainSmiley.png'" alt="" />
        <BaseButton class="w-fit px-6 scale-90"> Se Smiley Ordning </BaseButton>
      </NuxtLink>
    </div>
  </div>
</template>


<script setup>
const query = groq`{ "omosinfo": *[_id == "58e1003f-3f06-4940-841b-734ad1ff4fee"] }`;
const sanity = useSanity();
const { data } = await useAsyncData("omosinfo", () => sanity.fetch(query));
import { SanityBlocks } from "sanity-blocks-vue-component";
console.log("om osss", data);
</script>

<style lang="scss" scoped>
</style>
