import { ref, computed } from "vue";

export function useProducts() {
  const search = ref("");

  const sortType = ref("default");

  const products = ref([
    { id: 1, title: "Laptop", price: 50000 },
    { id: 2, title: "Phone", price: 20000 },
    { id: 3, title: "Tablet", price: 30000 },
  ]);

  const filteredProducts = computed(() => {
    let result = products.value.filter((product) =>
      product.title.toLowerCase().includes(search.value.toLowerCase()),
    );

    if (sortType.value === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortType.value === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  });
// hi
  return {
    search,
    sortType,
    products,
    filteredProducts,
  };
}
