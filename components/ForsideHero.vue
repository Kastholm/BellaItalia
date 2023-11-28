<template>
  <div>
    <!-- Header -->
    <main>
      <header>
        <!-- Hero section -->
        <div class="relative isolate overflow-hidden bg-gray-900">
          <img
            src="/img/forside/banner.jpg"
            alt=""
            class="absolute inset-0 -z-20 h-full w-full object-cover"
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
                  Traditionel Italiensk Cuisine siden 1989
                </h1>
                <p
                  class="my-6 m-auto text-xl font-sans font-semibold leading-8 text-white md:w-[700px]"
                  style="text-shadow: 5px 5px 5px #000000"
                >
                  Hos Bella Italia har vi siden 1989 skabt autentisk Italiesk
                  Cuisine i hjertet af Kolding By. Kom ind og spis Ala Carte
                  eller bestil Take-away.
                </p>
                <NuxtLink to="/kontakt">
                  <BaseButton> Kontakt os </BaseButton>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
        <div alt="" class="bgimg relative z-0 bg-bottom">
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

        <div alt="" class="bgimg2 relative z-0">
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
      <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
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
            Altid hjemmelavet anti pasti
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Bella Italia er blandt (hvis ikke) den eneste restaurant i Kolding,
            der stadig har samme ejer og samme menukort siden 1989. Bella Italia
            er drevet og ejet af Rosario Castorina. Personalet er stort set
            stadig det samme som i begyndelsen, men selvfølgelig har der været
            et par udskiftninger i staben. Vi byder alle vores gæster der kigger
            forbi siden, velkommen og håber at i får en god oplevelse. Caio, og
            vi ses igen på BELLA ITALIA
          </p>
        </div>
      </div>
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

.bgimg {
  background-image: url("https://i.ibb.co/QdpBdgd/recipe-pappardelle-1.webp");
  background-size: cover;
}

.bgimg2 {
  background-image: url("https://i.ibb.co/G9NGdLz/7f71fcc474fcf74c620f23d6c559fc43-1.webp");
  background-size: cover;
}
</style>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import {
  Bars3Icon,
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/vue/20/solid";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$19",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$49",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    featured: true,
  },
];
const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];
const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

const mobileMenuOpen = ref(false);
</script>
