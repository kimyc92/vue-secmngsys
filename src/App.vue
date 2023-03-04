<template>
	<div class="app">
		<!--
    <div>
      <span v-if="loading">Loading product{{ products }}</span>
      <span v-else>Loaded {{ products }}</span>
    </div>
    -->
		<AppNavbar />
		<div class="container">
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
			<loading
				:active="LoadingVal.isLoading"
				:can-cancel="LoadingVal.canCancel"
				:on-cancel="LoadingVal.whenCancelled"
				:is-full-page="LoadingVal.fullPage"
				:height="LoadingVal.height"
				:width="LoadingVal.width"
				:color="LoadingVal.color"
				:loader="LoadingVal.loader"
				:background-color="LoadingVal.bgColor"
				><template v-if="LoadingVal.useSlot" v-slot:default
					><h3>Loading ...</h3></template
				></loading
			>
		</div>
		<AppFooter />
	</div>
	<transition name="fade" mode="out-in">
		<CustomModal v-show="modalState" />
	</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavbar from '@/components/AppNavbar.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import CustomModal from '@/components/modal/customModal/CustomModal.vue';
import { modalState } from '@/components/modal/customModal/composables/customModal';
import { LoadingVal } from '@/common/composables/loading';
export default defineComponent({
	name: 'app',
	// setup -> beboreCreate 이전에 호출
	components: {
		AppNavbar,
		AppHeader,
		AppFooter,
		CustomModal,
	},
	setup() {
		/*
    onMounted((): void => {
      console.log('onmounted');
    });
*/
		//const id = true;
		//const { modalState, modalAlert, modalAlertState } = customModal();

		//modalToggle(true);

		//modalAlert('테스트', '하이맨');
		//console.log('q1 ' + modalState.value);
		//console.log('modalAlertState -> ' + modalAlertState.value);

		//search('jjj');
		//console.log('zz111 : ' + loading.value + products.value);
		//console.log('modalState : ' + modalState.value);
		//modalToggle(false);
		//console.log('modalState : ' + modalState.value);

		return {
			//modalAlertState,
			modalState, //: computed(() => modalState.value),
			//customModal,
			LoadingVal,
		};
	},
});
</script>

<style>
html,
body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
}
.app {
	display: flex !important;
	height: 100%;
	height: 100vh;
	flex-direction: column !important;
}
.btn,
select,
a,
input,
button {
	outline: none !important;
	box-shadow: none !important;
}
.container {
	flex: 1;
	position: relative;
	padding-left: 5% !important;
	padding-right: 5% !important;
}
/*
@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px;
  }
}
*/
/* @media (min-width: 992px) {
	.container,
	.container-lg,
	.container-md,
	.container-sm {
		max-width: 960px;
	}
} */
/*
@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 720px;
  }
}

@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}
*/

/*
 .container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}
*/
/* Input Arrows none - Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
/* Input Arrows none - Firefox */
input[type='number'] {
	-moz-appearance: textfield;
}
/* Rounter Transition */
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
	transition: all 0.3s ease;
	opacity: 0;
}
</style>
