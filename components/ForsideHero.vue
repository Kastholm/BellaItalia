<template>
  <div>
    <!-- Header -->
    <main v-if="data">
      <header>
        <!-- Hero section -->
        <div class="relative isolate overflow-hidden bg-gray-900">
          <img
            :src="data[0].image1.url"
            :alt="data[0].image1.caption"
            class="absolute inset-0 -z-20 h-full w-full object-cover image1"
          />
          <div class="m-auto max-w-7xl px-6 lg:px-8">
            <div class="m-auto">
              <div class="absolute bg-black inset-0 bg-opacity-50 -z-10"></div>
              <div
                class="text-center h-[60vh] md:h-[70vh] max-h-[900px] grid place-content-center"
              >
                <h1
                  class="text-4xl text-[#fbfbfb] mt-12 tracking-tight max-w-[45rem] sm:text-6xl font-header after"
                  style="text-shadow: 15px 15px 15px #000000"
                >
                  {{ data[0].title }}
                </h1>
                <p
                  class="my-6 m-auto text-xl font-sans font-semibold leading-8 text-white md:w-[700px]"
                  style="text-shadow: 5px 5px 5px #000000"
                >
                  {{ data[0].description[0].text }}
                </p>
                <!-- <SanityBlocks
                    :blocks="data[0].description[0].text"
                    :serializers="serializers"
                  /> -->

                <NuxtLink to="/kontakt">
                  <BaseButton> Kontakt os </BaseButton>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
        <div
          class="image2 relative z-0 bg-bottom"
          :style="{ backgroundImage: 'url(' + data[0].image2.url + ')' }"
        ></div>

        <div
          class="image3 relative z-0 "
          :style="{ backgroundImage: 'url(' + data[0].image3.url + ')' }"
        ></div>
      </div> -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
        <div
          alt=""
          class="bgimg2 bg-cover relative z-0"
          :style="{ backgroundImage: 'url(' + data[0].image2.url + ')' }"
        >
          <div
            class="grid place-content-center gap-4 text-center h-[20vh] md:h-[30vh] max-h-[400px]"
          >
            <div class="absolute bg-black inset-0 bg-opacity-50 -z-10"></div>
            <h2 class="text-3xl text-white font-header after">VORES UDVALG</h2>
            <NuxtLink to="/menukort">
              <BaseButton> Menu </BaseButton>
            </NuxtLink>
          </div>
        </div>

        <div
          alt=""
          class="bgimg2 bg-cover relative z-0"
          :style="{ backgroundImage: 'url(' + data[0].image3.url + ')' }"
        >
          <div
            class="grid place-content-center text-center gap-4 h-[20vh] md:h-[30vh] max-h-[400px]"
          >
            <div class="absolute bg-black inset-0 bg-opacity-50 -z-10"></div>
            <h2 class="text-3xl font-header text-white after">TAKE AWAY</h2>
            <NuxtLink to="/takeaway">
              <BaseButton> Bestil </BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
    <!-- Feature section -->
    <div class="mt-24">
      <omos />
    </div>
  </div>
</template>

<style scoped>
.after::after {
  content: "";
  display: block;
  height: 4px;
  margin-top: 5px;
  width: 150px;
  background: linear-gradient(
    to right,
    #009246 0%,
    #009246 33.33%,
    #cecdcd 33.33%,
    #ffffff 66.66%,
    #ce2b37 66.66%,
    #ce2b37 100%
  );
}

.image2,
.image3 {
  background-size: cover;
}
</style>

<script setup>
const query = groq`*[_id == "65a453e2-3815-44dc-be3b-c97f878dfb22"] {
  title,
  "description": description[0].children[] {
    "text": text,
    "marks": marks
  },
  "image1": {
    "url": image1.asset->url,
    "caption": image1.caption
  },
  "image2": {
    "url": image2.asset->url,
    "caption": image2.caption
  },
  "image3": {
    "url": image3.asset->url,
    "caption": image3.caption
  }
}`;

const sanity = useSanity();
const { data } = useSanityQuery(query);
import { SanityBlocks } from "sanity-blocks-vue-component";
console.log(data);

const mobileMenuOpen = ref(false);
</script>
