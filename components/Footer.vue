<template>
  <!-- component -->
  <footer
    class="bg-gradient-to-r from-gray-100 via-[#fff7da82] to-gray-100 relative"
  >
    <div class="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <img src="/img/logo.png" class="mr-5 h-12 sm:h-32" alt="logo" />
          <p class="max-w-xs mt-4 text-sm text-gray-600">
            Ciao, og vi ses igen på BELLA ITALIA
          </p>
          <div class="flex mt-8 space-x-6 text-gray-600">
           
            <!-- <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
              <span class="sr-only"> Instagram </span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a> -->
          </div>
        </div>
        <div
          class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div>
            <p class="font-medium">Genveje</p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <NuxtLink to="/galleri" class="hover:opacity-75">
                Galleri
              </NuxtLink>
              <NuxtLink to="/omos" class="hover:opacity-75"> Om os </NuxtLink>
              <NuxtLink to="https://www.findsmiley.dk/23498" class="hover:opacity-75"> Smiley ordning </NuxtLink>
            </nav>
          </div>
          <div>
            <p class="font-medium">Take Away</p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <NuxtLink to="/takeaway" class="hover:opacity-75">
                Bestil nu
              </NuxtLink>
            </nav>
          </div>
          <div>
            <p class="font-medium">Vores Menu</p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <NuxtLink to="menukort" class="hover:opacity-75">
                Menukort
              </NuxtLink>
              <NuxtLink to="menukort" class="hover:opacity-75">
                Månedens Menu
              </NuxtLink>
            </nav>
          </div>
          <div>
            <p class="font-medium">Kontakt os</p>
            <nav
              v-if="data"
              class="flex flex-col mt-4 space-y-2 text-sm text-gray-500"
            >
              <NuxtLink to="tel:+45 75 50 58 07" class="hover:opacity-75">
                {{ data.kontaktinfo[0].phoneNumber }}
              </NuxtLink>
              <a class="hover:opacity-75"> {{ data.kontaktinfo[0].mail }} </a>
              <p class="text-gray-600"> - <b>Vi modtager ikke bordreservationer pr. mail </b></p>
              <a class="hover:opacity-75">
                {{ data.kontaktinfo[0].address }}
              </a>
              <a class="hover:opacity-75">
                {{ data.kontaktinfo[0].city
                }} {{ data.kontaktinfo[0].postalCode }}</a
              >
            </nav>
          </div>
        </div>
      </div>
      <p class="text-center pb-2 text-xs text-gray-800">
        Designet 2023
        <NuxtLink to="https://www.webtify.dk">@Webtify.dk</NuxtLink>
      </p>
    </div>
    <NuxtLink to="https://bellaitalia.sanity.studio/">
      <div class="absolute right-0 bottom-0">
        <InformationCircleIcon class="h-8 w-8" aria-hidden="true" />
      </div>
    </NuxtLink>
  </footer>
</template>

<script setup>
import { InformationCircleIcon } from "@heroicons/vue/24/outline";

const query = groq`{ "kontaktinfo": *[_id == "a15a7174-2598-432a-8b1f-d549749b3667"] }`;
const sanity = useSanity();
const { data } = await useAsyncData("kontaktinfo", () => sanity.fetch(query));

console.log("footer", data);
</script>

<style>
</style>
