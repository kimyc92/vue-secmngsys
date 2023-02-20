<template>
	<div class="appFooter mt-5">
		<footer class="footer mt-auto py-3">
			<div class="container">
				<span class="text-muted text-left m-0"
					>ⓒ 2023. NATIONAL FEDERATION OF FISHERIES COOPERATIVES. ALL RIGHTS
					RESERVED.</span
				>
				<br />
				<span class="col-12 text-muted text-left m-0"
					>시스템문의 : 02-2240-2084 (05510) 서울특별시 송파구 오금로 62
					수협중앙회</span
				>
			</div>
		</footer>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {
		return {};
	},
});
</script>

<style lang="css" scoped>
@media screen and (min-width: 300px) {
	footer {
		height: 65px;
		font-size: 12px !important;
	}
}

@media screen and (max-width: 600px) {
	footer {
		height: 105px;
		font-size: 1px !important;
	}
}

@media screen and (max-width: 750px) {
	footer {
		height: 105px;
		font-size: 1px !important;
	}
}

footer {
	background: #333;
	-webkit-text-size-adjust: none !important;
}
</style>
