<template>
  <div class="text-center mb-10 mt-32 md:mt-44">
    
    <h2 class="text-4xl font-bold uppercase text-gray-800 font-header after">
      Galleri
    </h2>
  </div>
  <div class="containerr px-0 md:px-4">
    <div
      v-if="!data || data.length === 0"
      class="flex flex-wrap justify-center items-center h-screen"
    >
      <div class="loader"></div>
    </div>

    <div
      v-else
      class="gallery  md:w-4/4 md:p-4"
      v-for="gallery in data"
      :key="gallery._id"
    >
      <div
        class="gallery-item"
        v-for="image in gallery.content.images"
        :key="image._key"
      >
        <img class="gallery-image px-4 md:px-0" :src="image.imageUrl" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "gallery"] {
  title,
  content {
    display,
    zoom,
    images[] {
      _key,
      alt,
      "imageUrl": asset->url
    }
  }
}`;

const sanity = useSanity();
const { data } = await useAsyncData("gallery", () => sanity.fetch(query));
</script>



<style scoped>
.containerr {
  max-width: 100rem;
  margin: 0 auto;
}

.heading {
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 4rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  padding: 3.5rem 0;
  color: #1a1a1a;
}

.heading span {
  display: block;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -1rem;
}

.gallery-item {
  flex: 1 0 24rem;
  margin: 1rem;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.gallery-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease-out;
}

.gallery-image:hover {
  transform: scale(1.15);
}

@supports (display: grid) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: 2rem;
  }

  .gallery,
  .gallery-item {
    margin: 0;
  }
}
</style>