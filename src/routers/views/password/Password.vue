<template>
	<div class="password mt-5 ps-10">
		<div class="row" v-show="!isSmsConfirms && !isCompleted">
			<div class="row mt-3">
				<div class="col-sm-3 required align-self-center">대상시스템</div>
				<div class="col-sm-9">
					<select
						v-model="userInfo.sysCd"
						class="form-select"
						required
						v-bind:disabled="isSmsSends"
					>
						<!-- v-model="registerAccInfo.timeTaken" -->
						<option :value="'00'">선택</option>
						<option :value="'01'">DRM</option>
					</select>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-sm-3 required align-self-center">아이디</div>
				<div class="col-sm-6">
					<input
						id="number"
						type="text"
						class="input-group form-control"
						@input="userRegNo"
						v-model="userInfo.userId"
						v-bind:disabled="isSmsSends"
					/>
				</div>
				<div class="col-sm-3">
					<button
						type="button"
						@click="handleClickUserAuth"
						class="btn btn-dark w-100"
						v-bind:disabled="isSmsSends"
					>
						계정확인
					</button>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-sm-3 required align-self-center">성명 / 소속</div>
				<div class="col-sm-3">
					<input
						type="text"
						v-model="userInfo.userNm"
						class="input-group form-control"
						disabled
					/>
				</div>
				<div class="col-sm-6">
					<input
						type="text"
						v-model="userInfo.companyNm"
						class="input-group form-control"
						disabled
					/>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-sm-3 required align-self-center">휴대폰번호</div>
				<div class="col-sm-6">
					<input
						id="userHpNo"
						type="text"
						class="input-group form-control"
						@input="handleInputUserHpNo"
						v-model="userInfo.userHpNo"
					/>
				</div>
				<div class="col-sm-3">
					<button
						type="button"
						@click="handleClickSmsSends"
						class="btn btn-dark w-100"
					>
						인증번호 발송
					</button>
				</div>
			</div>
			<div class="row mt-3" v-show="isSmsSends">
				<div class="col-sm-3 required align-self-center">인증번호</div>
				<div class="col-sm-6">
					<input
						type="number"
						class="input-group form-control"
						v-model="userInfo.certificationNumber"
					/>
				</div>
				<div class="col-sm-3">
					<button
						type="button"
						@click="handleClickSmsConfirms"
						class="btn btn-dark w-100"
					>
						인증하기
					</button>
				</div>
			</div>
			<div class="row" v-show="isSmsSends">
				<div class="col-sm-3"></div>
				<div class="col-sm-6">
					<span>{{ timerStr }}</span>
				</div>
			</div>
		</div>
		<div class="row" v-show="isSmsConfirms && !isCompleted">
			<div class="row mt-3">
				<div class="col-sm-3 required align-self-center">새 비밀번호</div>
				<div class="col-sm-9">
					<input
						type="text"
						class="input-group form-control"
						v-model="userInfo.password"
					/>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-sm-3 required align-self-center">비밀번호 확인</div>
				<div class="col-sm-9">
					<input
						type="text"
						class="input-group form-control"
						v-model="userInfo.passwordConfirm"
					/>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-sm-12">
					<button
						type="button"
						@click="handleClickPasswordChange"
						class="btn btn-dark w-100"
					>
						비밀번호 변경하기
					</button>
				</div>
			</div>
		</div>
		<div class="row" v-if="isCompleted">
			<div class="row mt-3">
				<div class="col-sm-12 align-self-center text-center">
					<h2>비밀번호 변경이 완료되었습니다.</h2>
					<img src="/img_character.jpg" class="rounded mx-auto d-block mt-3" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { customModal } from '@/components/modal/customModal/composables/customModal';
import common from '@/common/composables/common';
import { retrieveUserConfirm, updateUserInfo } from '@/api/user';
import { createSmsSends, retrieveSmsConfirms } from '@/api/certification';
//import { ResponseData } from '@/api/types/reponse';

export default defineComponent({
	setup() {
		//let data: ResponseData;
		const { modalAlert } = customModal();
		const { stringToNumber, userInfo, resCodeRegex } = common();

		let initTimer = 180;
		let initTimerStr = '03:00';

		const timerCounter = ref(initTimer); // 3분
		const timerStr = ref('03:00');

		const isUserConfirm = ref(false); // 계정정보 확인 여부
		const isSmsSends = ref(false); // SMS 발송 여부
		const isSmsConfirms = ref(false); // SMS 인증번호 확인 여부
		const isCompleted = ref(false); // 완료

		const handleClickUserAuth = async () => {
			if (!userInfo.userId || userInfo.sysCd === '00') {
				modalAlert('경고', '대상시스템과 아이디를 입력하세요.');
			} else {
				const res = await retrieveUserConfirm(userInfo);
				userInfo.userNm = res.data.data[0].userNm;
				userInfo.companyNm = res.data.data[0].companyNm;
				userInfo.deptNm = res.data.data[0].deptNm;
				isUserConfirm.value = true;
			}
		};

		const handleClickSmsSends = async () => {
			if (!userInfo.userId || userInfo.sysCd === '00') {
				modalAlert('경고', '대상시스템과 아이디를 입력하세요.');
			} else if (!userInfo.userHpNo) {
				modalAlert('경고', '휴대폰번호를 입력하세요.');
			} else {
				const res = await createSmsSends(userInfo);
				if (res.data.code.match(resCodeRegex)) {
					isSmsSends.value = true;
					modalAlert('안내', '인증번호가 발송되었습니다.');
					timerStart();
				}
			}
		};

		const handleClickSmsConfirms = async () => {
			if (!userInfo.certificationNumber) {
				modalAlert('경고', '인증번호를 입력하세요.');
			} else {
				await retrieveSmsConfirms(userInfo);
				isSmsConfirms.value = true;
			}
		};

		const handleClickPasswordChange = async () => {
			if (!userInfo.password || !userInfo.passwordConfirm) {
				modalAlert('경고', '변경할 비밀번호를 입력하세요.');
			} else if (userInfo.password != userInfo.passwordConfirm) {
				modalAlert('경고', '비밀번호가 같지 않습니다.');
			} else {
				const res = await updateUserInfo(userInfo);
				if (res.data.code.match(resCodeRegex)) {
					isCompleted.value = true;
				}
			}
		};

		const handleInputUserHpNo = () =>
			(userInfo.userHpNo = stringToNumber(userInfo.userHpNo));

		const timerStart = () => {
			// init
			timerCounter.value = initTimer;
			timerStr.value = initTimerStr;

			// interval
			var interval = setInterval(() => {
				timerCounter.value--;
				timerStr.value = prettyTime();
				if (timerCounter.value <= 0) timerStop(interval);
			}, 1000); // 1초마다 호출
			return interval;
		};

		const timerStop = (interval: number) => {
			clearInterval(interval); // interval 중지
			timerCounter.value = 0;
		};

		const prettyTime = () => {
			// var hour =
			// 	timerCounter.value / 3600 < 10
			// 		? '0' + timerCounter.value / 3600
			// 		: timerCounter.value / 3600;
			var min =
				Math.floor(timerCounter.value % 3600) / 60 < 10
					? '0' + Math.floor((timerCounter.value % 3600) / 60)
					: Math.floor((timerCounter.value % 3600) / 60);
			var sec =
				timerCounter.value % 60 < 10
					? '0' + (timerCounter.value % 60)
					: timerCounter.value % 60;
			return min + ':' + sec;
		};

		return {
			userInfo,
			handleInputUserHpNo,
			handleClickUserAuth,
			handleClickSmsSends,
			handleClickSmsConfirms,
			handleClickPasswordChange,
			isUserConfirm,
			isSmsSends,
			isSmsConfirms,
			timerStr,
			timerStart,
			isCompleted,
		};
	},
});
</script>

<style scoped>
.required:after {
	content: ' *';
	color: deeppink;
}
</style>
