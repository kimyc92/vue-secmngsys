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
				name: 'NGINX',
				address: 'https://nginx.org ',
				license: 'BSD 2-Clause',
			},
			{
				name: 'Vue3 Loading Overlay',
				address: 'https://github.com/moyoujun/vue3-loading-overlay',
				license: 'MIT License',
			},
			{
				name: 'TypeScript',
				address: 'https://github.com/microsoft/TypeScript',
				license: 'Apache License 2.0',
			},
			{
				name: 'Apache Camel 3',
				address: 'https://camel.apache.org',
				license: 'Apache License 2.0',
			},
			{
				name: 'SpringBoot 2',
				address: 'https://github.com/spring-projects/spring-boot',
				license: 'Apache License 2.0',
			},
			{
				name: 'BootStrap 5',
				address: 'https://github.com/twbs/bootstrap',
				license: 'MIT license',
			},
			{
				name: 'SLF4J',
				address: 'https://www.slf4j.org/index.html',
				license: 'MIT license',
			},
			{
				name: 'Logback',
				address: 'https://github.com/qos-ch/logback',
				license: 'EPL 1.0 / LGPL 2.1',
			},
			{
				name: 'MyBatis 3',
				address: 'https://github.com/mybatis/mybatis-3',
				license: 'Apache License 2.0',
			},
			{
				name: 'Apache Commons',
				address: 'https://github.com/apache',
				license: 'Apache License 2.0',
			},
			{
				name: 'Undertow',
				address: 'https://github.com/undertow-io/undertow',
				license: 'Apache License 2.0',
			},
			{
				name: 'Json Simple',
				address: 'https://github.com/fangyidong/json-simple',
				license: 'Apache License 2.0',
			},
			{
				name: 'Httpclient',
				address: 'https://github.com/apache/httpcomponents-client',
				license: 'Apache License 2.0',
			},
			{
				name: 'Lombok',
				address: 'https://github.com/projectlombok',
				license: 'MIT license',
			},
			{
				name: 'Swagger-UI',
				address: 'https://github.com/swagger-api/swagger-ui',
				license: 'Apache License 2.0',
			},
			{
				name: 'MariaDB',
				address: 'https://github.com/mariadb-developers',
				license: 'GPL V2',
			},
			{
				name: 'VueJS 3',
				address: 'https://github.com/vuejs',
				license: 'MIT License',
			},
			{
				name: 'Font Awesome Free License',
				address: 'https://fontawesome.com',
				license: 'Free license',
			},
			{
				name: 'Eslint',
				address: 'https://github.com/eslint/eslint',
				license: 'MIT license',
			},
			{
				name: 'Prettier',
				address: 'https://github.com/prettier/prettier',
				license: 'MIT license',
			},
			{
				name: 'Webpack',
				address: 'https://github.com/webpack/webpack',
				license: 'MIT license',
			},
			{
				name: 'Axios',
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
