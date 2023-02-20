import { AppModal } from '@/common/types/common';
import { ref, reactive, Ref } from 'vue';

const modalState: Ref<boolean> = ref(false);
const modalAlertState: Ref<boolean> = ref(false);
const modalConfirmState: Ref<boolean> = ref(false);
const modalValue: AppModal = reactive({
	title: '',
	content: '',
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customModal = () => {
	const modalAlertToggle = (toggle: boolean): void => {
		modalState.value = toggle;
		modalAlertState.value = toggle;
	};

	const modalAlertInit = (hide: boolean): void => {
		modalAlertToggle(hide);
		modalValue.title = '';
		modalValue.content = '';
	};

	const modalAlert = (
		//toggle: boolean,
		title: string,
		content: string,
	): void => {
		modalAlertInit(false);
		modalAlertToggle(true);
		modalValue.title = title;
		modalValue.content = content;
	};

	return {
		modalState,
		modalAlertState,
		modalConfirmState,
		modalValue,
		modalAlertToggle,
		modalAlert,
		modalAlertInit,
	};
};

export { modalState, customModal };
