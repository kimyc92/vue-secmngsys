<template>
	<div class="password mt-5 ps-10">
		<div class="row mt-3">
			<div class="col-sm-3 required align-self-center">대상시스템</div>
			<div class="col-sm-9">
				<select class="form-select" required>
					<!-- v-model="registerAccInfo.timeTaken" -->
					<option :value="0">선택</option>
					<option :value="1">DRM</option>
				</select>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-sm-3 required align-self-center">아이디</div>
			<div class="col-sm-6">
				<input
					id="number"
					type="text"
					placeholder="Sh그룹웨어(EKP) 아이디와 동일합니다."
					class="input-group form-control"
					@input="userRegNo"
					v-model="userData.userId"
				/>
			</div>
			<div class="col-sm-3">
				<button type="button" @click="clickUserAuth" class="btn btn-dark w-100">
					계정확인
				</button>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-sm-3 required align-self-center">성명 / 소속</div>
			<div class="col-sm-3">
				<input type="text" class="input-group form-control" disabled />
			</div>
			<div class="col-sm-6">
				<input type="text" class="input-group form-control" disabled />
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-sm-3 required align-self-center">휴대폰번호</div>
			<div class="col-sm-6">
				<input
					id="number"
					type="text"
					class="input-group form-control"
					@input="userRegNo"
					v-model="regNo"
				/>
			</div>
			<div class="col-sm-3">
				<button type="button" class="btn btn-dark w-100">인증번호 발송</button>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-sm-3 required align-self-center">인증번호</div>
			<div class="col-sm-6">
				<input
					id="number"
					type="text"
					class="input-group form-control"
					@input="userRegNo"
					v-model="regNo"
				/>
			</div>
			<div class="col-sm-3">
				<button type="button" class="btn btn-dark w-100">인증하기</button>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-3"></div>
			<div class="col-sm-6">
				<span> 3:00 </span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { customModal } from '@/components/modal/customModal/composables/customModal';
import { selectUser, selectUser2 } from '@/api/userAuth';
//import { ResponseData } from '@/api/types/reponse';

export default defineComponent({
	setup() {
		//let data: ResponseData;
		const { modalAlert } = customModal();
		const userData = reactive({
			userId: '',
		});
		const clickUserAuth = async () => {
			if (!userData.userId) {
				modalAlert('경고', '아이디를 입력하세요.');
			} else {
				const res = await selectUser(userData);
				console.log(res);
			}
		};
		return { userData, clickUserAuth };
	},
});
</script>

<style scoped>
.required:after {
	content: ' *';
	color: deeppink;
}
</style>
