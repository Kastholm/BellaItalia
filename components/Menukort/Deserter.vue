<template>
  <div class="menu-section dessert-section">
    <h2 class="menu-category">DESSERTER</h2>
    <div class="menu-item">
      <div class="menu-name">114. Vaniljeis med flødeskum, vafler og chokoladesovs</div>
      <div class="menu-price">52,-</div>
    </div>
    <div class="menu-item">
      <div class="menu-name">115. Tiramisu</div>
      <div class="menu-price">72,-</div>
    </div>
    <div class="menu-item">
      <div class="menu-name">117. Chokoladeis med flødeskum, vafler og chokoladesovs</div>
      <div class="menu-price">52,-</div>
    </div>
    <div class="menu-item">
      <div class="menu-name">121. Trøffel is med cognac og flødeskum</div>
      <div class="menu-price">72,-</div>
    </div>
    <div class="menu-item">
      <div class="menu-name">123. Pandekager med is, flødeskum og chokoladesovs</div>
      <div class="menu-price">72,-</div>
    </div>
  </div>
</template>

<style scoped>
.menu-section {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1000px; /* Eller den bredde du foretrækker */
  margin: auto;
}

.menu-header {
  font-size: 2em;
  color: #333;
  text-align: center;
  margin-bottom: 1em;
}

.menu-items {
  border-top: 3px solid red; /* Erstat med den korrekte farvekode */
  border-bottom: 3px solid red; /* Erstat med den korrekte farvekode */
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed #ccc; /* Tilføjer en stiplede linje mellem menuerne */
  padding: 10px 0;
}

.menu-title {
  font-weight: bold;
  flex-basis: 20%; /* Juster efter behov for layout */
}

.menu-description {
  flex-basis: 60%; /* Juster efter behov for layout */
  color: #666; /* Lysegrå tekstfarve */
}

.menu-price {
  flex-basis: 20%; /* Juster efter behov for layout */
  text-align: right;
  font-weight: bold;
}
</style>
