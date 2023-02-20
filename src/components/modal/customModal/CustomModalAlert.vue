<template>
	<div>
		<div
			class="modal show black-bg customClose"
			id="myModal"
			@click="closeModal"
			tabindex="-1"
			role="dialog"
		>
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="myModalLabel">
							{{ modalValue.title }}
						</h5>
						<button
							type="button"
							class="btn-close customClose"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">{{ modalValue.content }}</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary customClose"
							data-bs-dismiss="modal"
						>
							닫기
						</button>
						<!--
            <button type="button" class="btn btn-primary">Save changes</button>
            -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { customModal } from '@/components/modal/customModal/composables/customModal';
import { defineComponent, onUnmounted, onDeactivated } from 'vue';

export default defineComponent({
	setup() {
		const { modalValue, modalAlertInit } = customModal();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const closeModal = (e: any): boolean => {
			//  DOMEvent<HTMLElement>
			console.log('hi');

			if (e.target.classList.contains('customClose')) {
				//customModal.appModal.hide();
				modalAlertInit(false);
				return false;
			}
			return true;
		};
		/*
    watch(
      () => customModal.displayModal.mode,
      // eslint-disable-next-line
      (newValue: boolean, oldValue: boolean) => {
        //console.log('hi - WATCH : ', { newValue, oldValue });
        if (!newValue) {
          //customModal.appModal.init(comInterface.ModalMode.Alert);
        }
      },
    );
    */
		onUnmounted((): void => {
			console.log('onUnmounted');
		});

		onDeactivated((): void => {
			console.log('onDeactivated');
		});
		return { modalValue, closeModal };
	},
});
</script>

<style scoped>
/* Override default value of 'none' */
.modal {
	display: block;
}
.btn:focus,
.btn:active,
.btn-close {
	outline: none !important;
	box-shadow: none;
}
.btn:hover,
.btn:visited {
	background: cornflowerblue;
}
.black-bg {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	padding: 20px;
}
.white-bg {
	width: 100%;
	background: white;
	border-radius: 8px;
	padding: 20px;
}
</style>
