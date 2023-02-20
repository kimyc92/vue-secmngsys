import { ref } from 'vue';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useProduct() {
	const loading = ref(false);
	const products = ref();

	async function search(params: string) {
		loading.value = true;
		products.value = await fetchProduct(params);
		loading.value = false;
	}
	function fetchProduct(params: string): string {
		return params;
		//throw new Error('Function not implemented.');
	}
	return {
		loading, //: computed(() => loading.value),
		products, //: computed(() => products.value),
		search,
	};
}
