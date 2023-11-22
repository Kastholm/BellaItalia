<template>
  <div>
    <!-- Tab Headers -->
    <div class="tabs p-64">
      <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">
        {{ tab }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <div v-if="currentTab === 'Forretter'">
          <MenukortForretter />
      </div>
      <div v-if="currentTab === 'Hovedretter'">
          <MenukortHovedretter />
      </div>
      <div v-if="currentTab === 'Desert'">
          <MenukortDeserter />
      </div>
      <div v-if="currentTab === 'Drikkevare'">
          <MenukortDrikkevare />
      </div>
    </div>
  </div>
  <h1>sadf</h1>
</template>

<script setup>
import { ref } from "vue";

const tabs = ["Forretter", "Hovedretter", "Desert", "Drikkevare"];
const currentTab = ref("Forretter");
</script>

<style scoped>
.tabs button {
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
}

.tab-content div {
  margin-top: 20px;
}

.menu-section h2 {
  text-transform: uppercase;
  margin-bottom: 0.5em;
}

.menu-list {
  list-style-type: none;
  padding: 0;
}

.menu-list li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
  align-items: center;
}

.menu-item {
  font-weight: bold;
}

.menu-description {
  flex-grow: 1;
  padding: 0 1em;
}

.menu-price {
  min-width: 3em;
  text-align: right;
}
</style>
