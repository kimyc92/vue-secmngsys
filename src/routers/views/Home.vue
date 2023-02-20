<template>
	<div class="home mt-3">
		<AppHeader />
		<div class="row mt-3"></div>
	</div>
</template>

<script lang="ts">
import AppHeader from '@/components/AppHeader.vue';
//import * as comInterface from '@/modules/ts/comInterface';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { customModal } from '@/components/modal/customModal/composables/customModal';
import common from '@/common/composables/common';

export default defineComponent({
	components: {
		AppHeader,
	},
	setup() {
		// data

		const { modalAlert } = customModal();
		const router = useRouter();
		const regNo = ref('');

		const { stringToNumber } = common();

		const userRegNo = () => (regNo.value = stringToNumber(regNo.value));

		const deleteRegNo = (): void => {
			regNo.value = regNo.value.slice(0, -1);
		};

		const selectRegNo = (e: HTMLInputElement): void => {
			if (regNo.value.length < 4) {
				regNo.value += e.innerText;
			}
		};

		const confirmRegNo = (): void => {
			if (regNo.value.length == 4) {
				router.push('/myself');
			} else {
				modalAlert('경고', '등록번호 4자리를 입력하세요.');
			}
		};

		return {
			regNo,
			selectRegNo,
			confirmRegNo,
			deleteRegNo,
			userRegNo,
		};
	},
});
</script>

<style scoped>
.btnNumber:active,
.btnNumber:visited {
	background-color: cornflowerblue !important;
}
#number,
#number:focus {
	-moz-appearance: textfield;
	border-top: 0 !important;
	border-left: 0 !important;
	border-right: 0 !important;
	border-bottom: 3 !important;
	outline: none;
}
.btn {
	border-radius: 0px;
	padding: 10%;
	/* height: 100%; */
}
</style>
