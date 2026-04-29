<template>
  <span class="category" :class="filteredCategory">{{ filteredCategory }}</span>
</template>

<script>
export default {
  name: 'Category',
  props: ['category'],
  computed: {
    filteredCategory() {
      if (this.category !== 'Other') {
        return this.category;
      } else {
        return '';
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables";

.category {
  display: block;
  width: fit-content;
  margin-top: 7px;
  font-size: .8em;
  border-radius: $radius-badge;
  color: #FFFFFF;
  border-radius: 20px;
  padding: 4px 8px 4px 8px;
  font-weight: 800;
}

.Experience, .Design {
  background: $experience;
}

.Sécurité, .Engineering, .Craft, .Mobile, .Cloud {
  background: $engineering;
}

.Agile, .Produit, .Green, .Stratégie  {
  background: $product;
}

.Data, .AI {
  background: $data;
}

.AI:before, .AI:after{
  content: "✨";
}

.AI:before{
  margin-right: 4px;
}

.AI:after{
  margin-left: 4px;
}
</style>
