<template>
	<div class="customModal">
		<!-- Alert Modal -->
		<CustomModalAlert v-show="modalAlertState" />
	</div>
</template>

<script lang="ts">
import { customModal } from '@/components/modal/customModal/composables/customModal';
import CustomModalAlert from '@/components/modal/customModal/CustomModalAlert.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'customModal',
	components: {
		CustomModalAlert,
	},
	setup() {
		const { modalAlertState, modalConfirmState } = customModal();
		return {
			modalAlertState,
			modalConfirmState,
		};
	},
});
</script>

<style scoped></style>
