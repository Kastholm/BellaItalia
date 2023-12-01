<template>
  <div class="menu-section">
    <div class="menu-item">
      <div class="menu-name">1. Antipasto Bella Italia</div>
      <div class="menu-description">Gorgonzolaost, parmaskinke, artiskok, salami og oliven,1 stk. bruschetta. Serveres med brød og smør.</div>
      <div class="menu-price">125,-</div>
    </div>
    <div class="menu-item">
      <div class="menu-name">3. Bruschetta Bella Italia</div>
      <div class="menu-description">- 2 stk. brød med tomat, løg, hvidløg, basilikum og oregano.</div>
      <div class="menu-price">53,-</div>
    </div>
    <div class="menu-item">
      <div class="menu-name">4. Insalata Mediterranea</div>
      <div class="menu-description">Salat, rucola, tomat, feta ost, oliven og løg. Serveres med brød og smør.</div>
      <div class="menu-price">69,-</div>
    </div>
    <div class="menu-item">
      <div class="menu-name">8. Pesce fritto misto</div>
      <div class="menu-description">Friturestegte rejer og blæksprutter med grøn salat. Serveres med brød og smør.</div>
      <div class="menu-price">85,-</div>
    </div>
    <div class="menu-item">
      <div class="menu-name">9. Prosciutto e melone</div>
      <div class="menu-description">Cantaloupe melon med parmaskinke og rucola. Serveres med brød og smør.</div>
      <div class="menu-price">85,-</div>
    </div>
    <div class="menu-item">
      <div class="menu-name">10. Cocktail di gamberetti</div>
      <div class="menu-description">Rejecocktail. Serveres med brød og smør.</div>
      <div class="menu-price">89,-</div>
    </div>
    <div class="menu-item">
      <div class="menu-name">11. Lumache alla diavola</div>
      <div class="menu-description">Hvidvinsdampede snegle med hvidløg, tomatsovs og frisk basilikum. Serveres med brød og smør.</div>
      <div class="menu-price">89,-</div>
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
