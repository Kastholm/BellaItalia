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
          src="../assets/img/forside/bellaForside.jpg"
          alt=""
          class="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-10">
            <div class="text-center">
              <h1
                class="text-4xl text-[#009246] font-bold tracking-tight text-white sm:text-6xl"
              >
                Traditionel Italiensk Cuisine siden 1989
              </h1>
              <p class="mt-6 mb-32 text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <button href="#" class="hover:scale-105 transition text-xl absolute top-40 text-black h-14 w-32 bg-white text-white inset-0 m-auto rounded">
             Kontakt os
            </button>
            </div>
          </div>     
        </div>
      </div>
    </header>

    
     
    <div class="flex block mt-1 gap-1"> 
      
          <div alt="" class="w-[50%] max-w-[50%] h-60 bgimg relative">
            
              <h2 class="text-3xl text-white left-[25px] h-4 w-60 bottom-28 absolute inset-0 m-auto">VORES UDVALG</h2>
              <button class=" hover:scale-105 transition text-xl h-14 w-32 bg-[#009246] text-white rounded absolute inset-0 m-auto top-10">
              Menu
              </button>
          </div>

        
          <div alt="" class="w-[50%] max-w-[50%] h-60 bgimg2 relative" >
            <h2 class="text-3xl text-white left-[85px] h-4 w-60 bottom-28 absolute inset-0 m-auto">TAKE AWAY</h2>
            <button class="hover:scale-105 transition text-xl absolute h-14 w-32 bg-[#ce2b37] text-white inset-0 m-auto top-10 rounded">
             Bestil
            </button>
          </div>
          </div>
      <!-- Feature section -->
      <div class="mt-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
          <div class="mx-auto max-w-2xl sm:text-center">
            <h2 class="text-base max-w-[150px] m-auto font-semibold leading-7 text-[#42934d] after">
              Ægte Italiensk mad
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
  background-image: url("https://cdn.sanity.io/images/drjvsy8w/production/d2215c32d53dfb6c9538af1ae8b7cd2d69df1a3b-2048x1365.jpg");
  background-size: cover;
}

.bgimg2 {
  background-image: url("https://cdn.sanity.io/images/drjvsy8w/production/d2215c32d53dfb6c9538af1ae8b7cd2d69df1a3b-2048x1365.jpg");
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
