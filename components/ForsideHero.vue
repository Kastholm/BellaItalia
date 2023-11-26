<template>
  <div class="bg-white">
    <!-- Header -->
    <main>
    <header class="inset-x-0 top-0">
      <!-- Hero section -->
      <div
        class="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20"
      >
        <img
          src="https://i.ibb.co/VmZX39b/a9ezar46fbxjvuyd8r2z-1.webp"
          alt=""
          class="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-4">
           <div class="absolute bg-black inset-0 bg-opacity-50 -z-10"></div>
            <div class="text-center">
              <h1
                class="text-4xl text-[#009246] font-bold tracking-tight text-[#009246] sm:text-6xl"
              >
                Traditionel Italiensk Cuisine siden 1989
                <div class="after ml-64 mt-3 z-10"></div>
              </h1>
              <p class="mt-6 mb-32 text-lg leading-8 text-white md:w-[700px]">
                Hos Bella Italia har vi siden 1989 skabt autentisk Italiesk Cuisine i hjertet af Kolding By. Kom ind og spis Ala Carte eller bestil Take-away.
              </p>
              <button href="#" class="hover:scale-105 transition font-bold text-lg absolute top-40 text-[#1c1c1c] h-14 w-32 bg-[#eeecec] text-black inset-0 m-auto rounded">
             Kontakt os
            </button>
            </div>
          </div>     
        </div>
      </div>
    </header>

    
     
    <div class="flex block mt-1 gap-1"> 
          <div alt="" class="w-[50%] max-w-[50%] h-60 bgimg relative z-0 bg-bottom">
            <div class="absolute bg-black inset-0 bg-opacity-50 -z-10"></div>
              <h2 class="text-3xl text-white left-[25px] h-4 w-60 bottom-28 absolute inset-0 m-auto">VORES UDVALG</h2>
              <div class="after mt-[95px] ml-[274px] mt-3 z-10"></div>
              <button class=" hover:scale-105 transition font-bold text-lg h-14 w-32 bg-[#eeecec] text-[#1c1c1c] rounded absolute inset-0 m-auto top-10">
              Menu
              </button>
          </div>

        
          <div alt="" class="w-[50%] max-w-[50%] h-60 bgimg2 relative z-0" >
            <div class="absolute bg-black inset-0 bg-opacity-50 -z-10"></div>
            <div class="after mt-[95px] ml-[273px] mt-3 z-10"></div>
            <h2 class="text-3xl text-white left-[85px] h-4 w-60 bottom-28 absolute inset-0 m-auto">TAKE AWAY</h2>
            <button class="hover:scale-105 transition font-bold text-lg absolute h-14 w-32 bg-[#eeecec] text-[#1c1c1c] inset-0 m-auto top-10 rounded">
             Bestil
            </button>
          </div>
          </div>
      <!-- Feature section -->
      <div class="mt-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
          <div class="mx-auto max-w-2xl sm:text-center">
            <h2 class="text-base max-w-[160px] m-auto font-semibold leading-7 text-[#42934d]">
              Ægte Italiensk Cuisine
              <div class="after ml-1 mt-1"></div>
            </h2>
            <p
              class="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Altid hjemmelavet anti pasti 
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis.
            </p>
          </div>
        </div>
        
      </div>

     


    </main>
  </div>
</template>

<style scoped>
.after::after {
content:"";
display: block;
height: 4px;
width: 150px;
background: linear-gradient(to right, #009246 0%, #009246 33.33%, #cecdcd 33.33%, #FFFFFF 66.66%, #CE2B37 66.66%, #CE2B37 100%);
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
