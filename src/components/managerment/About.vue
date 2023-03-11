<template>
	<div class="row p-5">
		<div class="col-12 d-flex justify-content-center">
			<!-- <img
				id="profile"
				:src="`http://cdn.newstown.co.kr/news/photo/202111/512408_428014_24.jpg`"
				class="img-thumbnail border-0 rounded-circle"
			/> -->
			<h3><b>"회원조합과 정보보호본부를 위해 이 시스템을 만듬"</b></h3>
		</div>
	</div>
	<div class="row p-3">
		<div class="col-lg-3 col-md-4 col-sm-5">
			<div class="list-group" id="list-tab" role="tablist">
				<a
					class="list-group-item list-group-item-action active text-center"
					id="list-home-list"
					data-bs-toggle="list"
					href="#list-home"
					role="tab"
					aria-controls="list-home"
					>CREATOR</a
				>
				<a
					class="list-group-item list-group-item-action text-center"
					id="list-profile-list"
					data-bs-toggle="list"
					href="#list-profile"
					role="tab"
					aria-controls="list-profile"
					>SYSTEM</a
				>
				<a
					class="list-group-item list-group-item-action text-center"
					id="list-messages-list"
					data-bs-toggle="list"
					href="#list-messages"
					role="tab"
					aria-controls="list-messages"
					>CONTACT</a
				>
				<a
					class="list-group-item list-group-item-action text-center"
					id="list-milestone-list"
					data-bs-toggle="list"
					href="#list-milestone"
					role="tab"
					aria-controls="list-milestone"
					>MILESTONE</a
				>
				<a
					class="list-group-item list-group-item-action text-center"
					id="list-settings-list"
					data-bs-toggle="list"
					href="#list-settings"
					role="tab"
					aria-controls="list-settings"
					>MESSAGE</a
				>
			</div>
		</div>
		<div class="col-lg-9 col-md-8 col-sm-7">
			<div class="tab-content ps-3" id="nav-tabContent">
				<div
					class="tab-pane fade show active"
					id="list-home"
					role="tabpanel"
					aria-labelledby="list-home-list"
				>
					<div class="col-12"><b>* NAME :</b> David</div>
					<div class="col-12 mt-2">
						<b>* COMPANY :</b> National Federation Of Fisheries Cooperatives
					</div>
					<div class="col-12 mt-2">
						<b>* SKILL :</b> Problem-Solving Skills Using IT Technology
					</div>
					<div class="col-12 mt-2">
						<b>* INTERESTS :</b> Distributed System, Event Driven Architecture,
						Enterprise Integration Patterns
					</div>
				</div>
				<div
					class="tab-pane fade"
					id="list-profile"
					role="tabpanel"
					aria-labelledby="list-profile-list"
				>
					<div class="col-12">
						<b>* INFO :</b> MSA Architecture(with Saga), Distributed Database,
						RESTful, Responsive Web, Single Page Application
					</div>
				</div>
				<div
					class="tab-pane fade"
					id="list-messages"
					role="tabpanel"
					aria-labelledby="list-messages-list"
				>
					<div class="col-12"><b>* OFFICE PHONE NUMBER :</b> 02-2240-2084</div>
					<div class="col-12 mt-2"><b>* EMAIL :</b> kimyc@suhyup.co.kr</div>
				</div>
				<div
					class="tab-pane fade"
					id="list-milestone"
					role="tabpanel"
					aria-labelledby="list-milestone-list"
				>
					<div class="col-12">
						<b>* 2023.03 :</b> Beta Version Security Management System OPEN -
						Completed
					</div>
					<div class="col-12 mt-2">
						<b>* 2023.06 :</b> 개인정보 홈페이지 탐지시스템(i-pms) 패스워드 변경
						기능 연계 - Expected
					</div>
					<div class="col-12 mt-2">
						<b>* 2023.07 :</b> 개인정보 관리 솔루션(privacy-i) 패스워드 변경
						기능 연계 - Expected
					</div>
					<!--
					<div class="col-12 mt-2">
						<b>* 2023.10 :</b> 관리자 페이지 VueJS 프로젝트 구축 - Expected
					</div>
					<div class="col-12 mt-2">
						<b>* 2023.11 :</b> 관리자 페이지 Sh그룹웨어 조직도 연계 기능 추가 -
						Expected
					</div>
					<div class="col-12 mt-2">
						<b>* 2023.11 :</b> OAuth 2.0 기반 SSO 로그인 MSA 프로젝트 구축 -
						Expected
					</div>
					<div class="col-12 mt-2">
						<b>* 2023.12 :</b> 결재 기능 추가 - Expected
					</div>
					<div class="col-12 mt-2">
						<b>* 2024.01 :</b> Official Version Security Management System OPEN
						- Expected
					</div>
					-->
				</div>
				<div
					class="tab-pane fade"
					id="list-settings"
					role="tabpanel"
					aria-labelledby="list-settings-list"
				>
					<b>* NO COMMENT</b>
				</div>
			</div>
		</div>
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

<style scoped></style>
