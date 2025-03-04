<template>
	<div class="download">
		<div class="news-box-item" v-if="list.length">
			<div class="news-title">
				{{sendTitle(list[active].info).title}}
			</div>
			<div class="news-time">{{$t('news.time')}}:{{handleTime(list[active].time)}}</div>
			<div class="news-content">
				<div class="news-p">{{sendTitle(list[active].info).info.replace(/\\n/g,'\n')}}</div>
				<div class="news-team">{{list[active].company}}</div>
			</div>
			<div class="news-foot">
				<div class="btn-div" @click="back">
					<img src="../../../static/image/left.png" alt="">
					{{$t('news.left')}}
				</div>
				<div class="num-box">
					<div>{{Number(active)+1}} /</div>
					<div>{{list.length}}</div>
				</div>
				<div class="btn-div" @click="next">
					{{$t('news.right')}}
					<img src="../../../static/image/next.png" alt="">
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	import {
		handleTime
	} from '../../utils/tool.js'
	import {
		mapState
	} from "vuex";
	import axios from 'axios'
	export default {
		name: "Download",
		data() {
			return {
				active: 0,
				lng: localStorage.getItem('locale') || 'en',
				list: [
					// {
					// 		title: this.$t('news.news9Title'),
					// 		info: [{
					// 			text: this.$t('news.news9Info1')
					// 		}],
					// 		time: this.$t('news.time9'),
					// 		team: 'Novai DAO'
					// 	},
					// 	// {
					// 	// 	title: this.$t('news.news8Title'),
					// 	// 	info: [{
					// 	// 		text: this.$t('news.news8Info1')
					// 	// 	}],
					// 	// 	time: this.$t('news.time8'),
					// 	// 	team: 'Novai Finance'
					// 	// }, 
					// 	{
					// 		title: this.$t('news.news7Title'),
					// 		info: [{
					// 			text: this.$t('news.news7Info1')
					// 		}],
					// 		time: this.$t('news.time7'),
					// 		team: this.$t('news.team7')
					// 	}, {
					// 		title: this.$t('news.news6Title'),
					// 		info: [{
					// 			text: this.$t('news.news6Info1')
					// 		}],
					// 		time: this.$t('news.time6'),
					// 		team: 'Novai DAO'
					// 	}, {
					// 		title: this.$t('news.news5Title'),
					// 		info: [{
					// 			text: this.$t('news.news5Info1')
					// 		}],
					// 		time: this.$t('news.time6'),
					// 		team: 'Novai Foundation'
					// 	},
					// 	{
					// 		title: this.$t('news.news4Title'),
					// 		info: [{
					// 			text: this.$t('news.news4Info1')
					// 		}],
					// 		time: '2024-10-1',
					// 		team: 'Novai Tech'
					// 	},
					// 	{
					// 		title: this.$t('news.news3Title'),
					// 		info: [{
					// 			text: this.$t('news.news3Info1')
					// 		}, {
					// 			text: this.$t('news.news3Info2')
					// 		}],
					// 		time: '2024-9-29',
					// 		team: 'Novai Tech'
					// 	},
					// 	{
					// 		title: this.$t('news.news1Title'),
					// 		info: [{
					// 			text: this.$t('news.news1Info1')
					// 		}, {
					// 			text: this.$t('news.news1Info2')
					// 		}, {
					// 			text: this.$t('news.news1Info3')
					// 		}, {
					// 			text: this.$t('news.news1Info4')
					// 		}],
					// 		time: '2024-9-25',
					// 		team: 'Novai DAO'
					// 	},
					// 	{
					// 		title: this.$t('news.news2Title'),
					// 		info: [{
					// 			text: this.$t('news.news2Info1')
					// 		}, {
					// 			text: this.$t('news.news2Info2')
					// 		}, {
					// 			text: this.$t('news.news2Info3')
					// 		}],
					// 		time: '2024-9-25',
					// 		team: 'Novai Tech'
					// 	},
				]
			};
		},
		mounted() {
			if (this.$route.query.active) {
				this.active = this.$route.query.active
			}
			this.getList()

		},
		methods: {
			handleTime,
			sendTitle(arr) {
				for (let i = 0; i < arr.length; i++) {
					if (arr[i].lng == this.lng) {
						return arr[i]
					}
				}
			},
			back() {
				if (this.active == 0) {
					return
				}
				this.active--
				this.$route.query.active = this.active
			},
			getList() {
				const params = {
					pageNumber: 1,
					pageSize: 100
				}
				this.$root.api.getNoiceList(params).then((res) => {
					this.list = res.result.list
					console.log(this.list)
				})

			},
			next() {
				if (this.active == this.list.length - 1) {
					return
				}
				this.active++
				this.$route.query.active = this.active
			}
		}
	};
</script>

<style scoped>
	.download {
		width: 100%;
		height: 100vh;
		background-size: 100% 100% !important;
		background-repeat: no-repeat !important;
		background-position: center !important;
		position: relative;
		/* overflow-y: auto; */
		overflow: hidden;
		display: flex;
		/* align-items: center; */
		justify-content: center;
		align-items: center;
	}



	@keyframes breathe {
		from {
			transform: scale(1);
			/* 初始大小 */
			opacity: 0.4;
			/* 初始透明度 */
		}

		to {
			transform: scale(1.8);
			/* 放大到1.2倍 */
			opacity: 1;
			/* 透明度降低到0.5 */
		}
	}

	.news-box-item {
		width: calc(12rem - 3rem);
		background: linear-gradient(180deg, #151318 0%, #0B0B0D 100%);
		border-radius: 0.1rem 0.1rem 0.1rem 0.1rem;
    border: 1px solid rgba(90, 194, 124, 0.5);
		/* height: fit-content; */
		padding: 0.42rem 0.44rem 0 0.42rem;
		/* margin: 1.7rem auto 0; */
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		/* justify-content: center; */
		z-index: 20;
	}

	.news-title {
		width: 6.71rem;
		font-size: 0.24rem;
		color: #fff;
		font-weight: bold;
		margin-bottom: 0.08rem;
	}

	.news-time {
		font-size: 0.16rem;
		color: rgba(255, 255, 255, 0.6);
	}

	.news-content {
		width: 100%;
		margin-top: 0.28rem;
		padding: 0.32rem 0;
		border-top: 0.01rem solid rgba(255, 255, 255, 0.1);
		border-bottom: 0.01rem solid rgba(255, 255, 255, 0.1);
		max-height: calc(100vh - 6rem);
		overflow-y: auto;
	}

	.news-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.28rem;
	}

	.news-p {
		word-break: break-all;
		text-align: left;
		font-size: 0.14rem;
		color: rgba(255, 255, 255, 0.6);
		white-space: pre-wrap;
		/* 保留空白符并自动换行 */
	}

	.news-team {
		width: calc(100% - 0.2rem);
		word-break: break-all;
		text-align: right;
		font-size: 0.14rem;
		color: rgba(255, 255, 255, 0.6);
		padding-right: 0.2rem;
	}

	.news-foot {
		width: 100%;
		height: 1.1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.btn-div {
		display: flex;
		font-size: 0.16rem;
		color: #fff;
		gap: 0.04rem;
		align-items: center;
		cursor: pointer;
	}

	.btn-div img {
		width: 0.12rem;
		height: 0.12rem;
	}

	.num-box {
		display: flex;
		gap: 0.07rem;
	}

	.num-box div:nth-child(1) {
		font-size: 0.16rem;
		color: #fff;
	}

	.num-box div:nth-child(2) {
		font-size: 0.16rem;
		color: rgba(255, 255, 255, 0.6);
	}

	@media screen and (max-width: 768px) {


		.news-box-item {
			width: calc(100% - 0.8rem);
			margin-top: .5rem;
			background: linear-gradient(180deg, #151318 0%, #0B0B0D 100%);
			border-radius: 0.1rem 0.1rem 0.1rem 0.1rem;
      border: 1px solid rgba(90, 194, 124, 0.5);
			padding: 0.24rem 0.25rem 0 0.25rem;
			/* margin: 1rem auto 0; */
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			/* justify-content: center; */
			z-index: 20;
		}

		.news-title {
			width: 100%;
			font-size: 0.18rem;
			color: #fff;
			font-weight: bold;
			margin-bottom: 0.1rem;
		}

		.news-time {
			width: 100%;
			font-size: 0.1rem;
			color: rgba(255, 255, 255, 0.6);
			text-align: left;
		}

		.news-content {
			width: 100%;
			margin-top: 0.15rem;
			padding: 0.15rem 0;
			border-top: 0.01rem solid rgba(255, 255, 255, 0.1);
			border-bottom: 0.01rem solid rgba(255, 255, 255, 0.1);
			min-height: calc(100vh - 3.5rem);
			overflow-y: auto;
			overflow-x: hidden;
		}

		.news-content {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 0.12rem;
		}

		.news-p {
			word-break: break-all;
			text-align: left;
			font-size: 0.14rem;
			color: rgba(255, 255, 255, 0.6);
		}

		.news-team {
			width: 100%;
			word-break: break-all;
			text-align: right;
			font-size: 0.14rem;
			color: rgba(255, 255, 255, 0.6);

		}

		.news-foot {
			width: 100%;
			height: 0.7rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.btn-div {
			display: flex;
			font-size: 0.14rem;
			color: #fff;
			gap: 0.04rem;
			align-items: center;
			cursor: pointer;
		}

		.btn-div img {
			width: 0.12rem;
			height: 0.12rem;
		}

		.num-box {
			display: flex;
			gap: 0.07rem;
			min-width: 0.5rem;
			justify-content: center;
		}

		.num-box div:nth-child(1) {
			font-size: 0.14rem;
			color: #fff;
		}

		.num-box div:nth-child(2) {
			font-size: 0.14rem;
			color: rgba(255, 255, 255, 0.6);
		}
	}

	/* 修改滚动条的样式 */
	.news-content::-webkit-scrollbar {
		width: 10px;
		/* 滚动条的宽度 */
	}

	.news-content::-webkit-scrollbar-track {
		background: #888;
		/* 滚动条轨道的背景颜色 */
	}

	.news-content::-webkit-scrollbar-thumb {
		background: #454552;
		/* 滚动条滑块的背景颜色 */
		border-radius: 6px;
		/* 滚动条滑块的圆角 */
	}

	.news-content::-webkit-scrollbar-thumb:hover {
		background: #454552;
		/* 滚动条滑块悬停时的背景颜色 */
	}
</style>