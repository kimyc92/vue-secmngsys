<template>
	<div class="accordion-body border-bottom" v-for="items in datas" :key="items">
		<div class="col-12 p-1">
			<div>
				<b>{{ items.name }}</b>
			</div>
			<div>{{ items.address }}</div>
			<div>{{ items.license }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'OpenSource',
	setup() {
		const datas = ref([
			{
				name: 'vue3-loading-overlay',
				address: 'https://github.com/moyoujun/vue3-loading-overlay',
				license: 'MIT License',
			},
			{
				name: 'typescript',
				address: 'https://github.com/microsoft/TypeScript',
				license: 'Apache License 2.0',
			},
			{
				name: 'vuejs 3',
				address: 'https://github.com/vuejs',
				license: 'MIT License',
			},
			{
				name: 'Font Awesome Free License',
				address: 'https://fontawesome.com',
				license: 'Free license',
			},
			{
				name: 'eslint',
				address: 'https://github.com/eslint/eslint',
				license: 'MIT license',
			},
			{
				name: 'prettier',
				address: 'https://github.com/prettier/prettier',
				license: 'MIT license',
			},
			{
				name: 'webpack',
				address: 'https://github.com/webpack/webpack',
				license: 'MIT license',
			},
			{
				name: 'axios',
				address: 'https://github.com/axios/axios',
				license: 'MIT license',
			},
		]);
		return {
			datas,
		};
	},
});
</script>
