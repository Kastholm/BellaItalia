<template>
  <div class="relative isolate bg-white">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div
        class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
      >
        <div
          v-for="contactInfo in data.kontaktinfo"
          :key="contactInfo._id"
          class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg"
        >
          <div
            class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"
          >
            <svg
              class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="white" />
              <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              />
            </svg>
          </div>
          <h2 class="text-4xl font-bold font-header tracking-tight text-gray-900">
            {{ contactInfo.title }}
          </h2>

          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <BuildingOffice2Icon
                  class="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>{{ contactInfo.address }}</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>
                <a class="hover:text-gray-900" href="tel:+1 (555) 234-5678">{{
                  contactInfo.phoneNumber
                }}</a>
              </dd>
            </div>
            <!--  <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <EnvelopeIcon
                  class="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a class="hover:text-gray-900" href="mailto:hello@example.com"
                  >hello@example.com</a
                >
              </dd>
            </div> -->
          </dl>
          <div class="blocks mt-6 leading-8 text-gray-600">
            <SanityBlocks
              :blocks="contactInfo.description"
              :serializers="serializers"
            />
          </div>
        </div>
      </div>
      <div class="map-wrap grid">
        <div class="px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div class="map" ref="mapContainer"></div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";
import { SanityBlocks } from "sanity-blocks-vue-component";
import { Map, MapStyle, Marker, config } from "@maptiler/sdk";
import { shallowRef, onMounted, onUnmounted, markRaw } from "vue";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const mapContainer = shallowRef(null);
const map = shallowRef(null);

onMounted(() => {
  config.apiKey = "MCLKINnNjRyghMsRpqOP";

  // Opdater initial state til dine koordinater
  const initialState = {
    lng: 9.478731057896606,
    lat: 55.49006901075681,
    zoom: 16,
  };

  map.value = markRaw(
    new Map({
      container: mapContainer.value,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    })
  );

  // Tilføj en markør på dine koordinater
  new Marker({ color: "#FF0000" })
    .setLngLat([initialState.lng, initialState.lat])
    .addTo(map.value);
}),
  onUnmounted(() => {
    map.value?.remove();
  });

const query = groq`{ "kontaktinfo": *[_type == "contactInfo"] }`;
const sanity = useSanity();
const { data } = await useAsyncData("kontaktinfo", () => sanity.fetch(query));
</script>

<style>
.map-wrap {
  position: relative;

  width: 100%;
  height: 100%;
}

.map {
  position: relative;
  margin-left: 4em;
  width: 500px;
  height: 500px;
}

.blocks h1 {
  font-size: 1.8rem !important;
  font-weight: 600;
  color: #1b1a1a;
  margin-bottom: 0.5rem;
  @apply font-header
}
</style>