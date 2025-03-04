import $store from '../store/index'
import i18n from '../i18n'
export const mapObject = (obj, targetObject) => {
	let returnObject = {}
	if (targetObject) {
		for (let item in obj) {
			if (targetObject.hasOwnProperty(item) && targetObject[item] !== undefined) {
				returnObject[item] = targetObject[item]
			}
		}
	}

	return returnObject
}

export const copyObject = (targetObject) => {
	let returnObject = {}
	if (targetObject) {
		for (let item in targetObject) {
			if (targetObject.hasOwnProperty(item) && targetObject[item] !== undefined) {
				returnObject[item] = targetObject[item]
			}
		}
	}

	return returnObject
}

export const flatAndFilterObject = (obj, arr = []) => {
	if (obj) {
		arr.push(mapObject(teamListType, obj))
		if (obj.Child && obj.Child.length > 0) {
			for (let i = 0; i < obj.Child.length; i++) {
				flatAndFilterObject(obj.Child[i], arr)
			}
		}
	}
	return arr
}
// 递归
export const countChild = (obj) => {
	let count = obj.Child.length
	console.log(obj)
	// if(obj.Child && obj.Child.length>0) {
	//   obj.Child.forEach(child => {
	//     count += countChild(child)
	//   })
	// }
	return count
}
// 直推
export const directObject = (obj, arr = []) => {
	if (obj) {
		console.log(obj)
		if (obj.Child && obj.Child.length > 0) {
			for (let i = 0; i < obj.Child.length; i++) {
				arr.push(obj.Child[i])
			}
		}
	}
	return arr
}
// 间推
export const indirectObject = (obj, arr = []) => {
	if (obj) {
		arr.push(mapObject(teamListType, obj))
		if (obj.Child && obj.Child.length > 0) {
			for (let i = 0; i < obj.Child.length; i++) {
				indirectObject(obj.Child[i], arr)
			}
		}
	}
	return arr
}
// 百分比
export const calculatePercentage = (currentValue) => {
	if (currentValue === 0) {
		return '0%' // 避免除以零的情况，返回默认值
	}
	return `${currentValue / 100}%`
}

export const teamListSort = (tempList) => {
	let object = {}
	for (let i = 0; i < tempList.length; i++) {
		if (object[tempList[i].TeamLevel]) {
			object[tempList[i].TeamLevel].push(tempList[i])
		} else {
			object[tempList[i].TeamLevel] = []
			object[tempList[i].TeamLevel].push(tempList[i])
		}
	}

	try {
		for (let item in object) {
			for (let n = 0; n <= object[item].length - 1; n++) {
				for (let k = 0; k <= object[item].length - n - 1; k++) {
					if (object[item][k].PerformanceCount < object[item][k + 1].PerformanceCount) {
						let temp = copyObject(object[item][k])
						object[item][k] = copyObject(object[item][k + 1])
						object[item][k + 1] = temp
					}
				}
			}
		}
	} catch (e) {

	}

	let arr = []
	for (let item in object) {
		let itemArr = object[item].reverse()
		for (let n = 0; n < itemArr.length; n++) {
			arr.unshift(itemArr[n])
		}
	}
	return arr
}

export const formatAddress = (wallet, len = 4) => {
	if (!wallet) {
		return wallet
	}
	try {
		return wallet.substring(0, len) + '***' + wallet.substring(wallet.length - 6, wallet.length)
	} catch (e) {
		return wallet
	}
}
export const formatAddressEnd = (wallet) => {
	if (!wallet) {
		return wallet
	}
	try {
		return '*' + wallet.substring(wallet.length - 4)
	} catch (e) {
		return wallet
	}
}
export const getDefaultLng = (preLng) => {
	let returnLng = ''
	if (preLng) {
		returnLng = preLng
	} else {
		let lng = navigator.language || navigator.browserLanguage
		if (lng.indexOf('zh') !== -1) {
			returnLng = 'zh'
		} else if (lng.indexOf('en') !== -1) {
			returnLng = 'en'
		} else {
			returnLng = lng
		}
	}
	$store.dispatch('common/setLng', returnLng)
	return returnLng
}

// utc Time
export function getUTCTime(e) {
	console.log(e)
	let day = new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e
		.getUTCSeconds())
	return Date.parse(day)
}

// 保留小数位数
export function formatDecimalString(inputString, num) {
	// 使用正则表达式检查字符串是否包含小数点
	const decimalRegex = /\d+\.\d+/
	if (decimalRegex.test(inputString)) {
		// 如果字符串包含小数点，则进行处理
		const decimalMultiplier = Math.pow(10, num)
		inputString = Math.trunc(inputString * decimalMultiplier) / decimalMultiplier
		return inputString
	} else {
		// 如果字符串没有小数点，直接返回原字符串
		return inputString
	}
}
// 处理时间为年月日/年月日时分秒 type 不传是年月日，传false 是加时分秒
export function handleTime(time, type) {
	let timeString = new Date(time).getTime()
	let times = new Date(timeString)
	let year = times.getFullYear()
	let month = times.getMonth() + 1
	let day = (times.getDate() < 10 ? '0' + times.getDate() : times.getDate())
	let hours = times.getHours()
	let minutes = times.getMinutes()
	let seconds = times.getSeconds()
	// 输出
	if (!type) {
		return year + '-' + (month < 10 ? '0' : '') + month + '-' + day
	} else {
		return year + '-' + (month < 10 ? '0' : '') + month + '-' + day + ' ' +
			(hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' :
				'') +
			seconds
	}
}
export function handleTimeAdd(time, type) {
	let timeString = new Date(time).getTime()
	let times = new Date(timeString)
	times.setDate(times.getDate() + 7);
	let year = times.getFullYear()
	let month = times.getMonth() + 1
	let day = (times.getDate() < 10 ? '0' + times.getDate() : times.getDate())
	let hours = times.getHours()
	let minutes = times.getMinutes()
	let seconds = times.getSeconds()
	// 输出
	if (!type) {
		return year + '-' + (month < 10 ? '0' : '') + month + '-' + day
	} else {
		return year + '-' + (month < 10 ? '0' : '') + month + '-' + day + ' ' +
			(hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' :
				'') +
			seconds
	}
}
// 处理时间戳
export function getTimeDiffText(timestamp) {
	const currentTime = Math.floor(Date.now() / 1000) // 当前时间的时间戳（单位：秒）
	const timeDiffInSeconds = currentTime - timestamp // 时间差（秒）

	const minutes = Math.floor(timeDiffInSeconds / 60) // 转换为分钟
	const hours = Math.floor(minutes / 60) // 转换为小时

	if (minutes < 1) {
		return i18n.t('blackAdd.gc')
	} else if (minutes < 60) {
		return minutes + i18n.t('blackAdd.fzq')
	} else if (hours < 24) {
		return hours + i18n.t('blackAdd.xsq')
	} else {
		const days = Math.floor(hours / 24)
		return days + i18n.t('blackAdd.tq')
	}
}
// 金额
export function formatNumber(e, n) {
	if (n == null || n == undefined) {
		n = 2
	}
	let a = null
	const decimalRegex = /\d+\.\d+/
	if (decimalRegex.test(e)) {
		// 如果字符串包含小数点，则进行处理
		const decimalMultiplier = Math.pow(10, n)
		a = Math.trunc(e * decimalMultiplier) / decimalMultiplier
	} else {
		// 如果字符串没有小数点，直接返回原字符串
		a = e
	}
	let b = Number(a)
	return b.toLocaleString('en-US')
}
// 数据减30% 的ai基金
export function setNumber(num) {
	if (Number(num) > 0) {
		return num - num * 0.3
	} else {
		return num
	}
}
// 校验大于0的正整数
export function isPositiveInterger(num) {
	let number = Number(num)
	var regexp = /^[1-9]\d*$/
	if (!regexp.test(number)) {
		return false
	}
	return true
}
export function validateInput(e, index, num) {
	if (index == null || index == undefined) {
		index = 2;
	}
	let value;
	if (num && e > 0) {
		value = e / num;
	} else {
		value = e;
	}

	// 使用正则表达式匹配并移除非数字和多余小数点字符
	if (value < 10000) {
		if (Number.isInteger(value)) {
			return value.toLocaleString('en-US'); // 将整数转换为英文格式
		} else {
			let tempVal = parseFloat(value).toFixed(index + 5);
			let realVal = tempVal.substring(0, tempVal.length - 5);
			return parseFloat(realVal).toLocaleString('en-US', {
				minimumFractionDigits: index
			}); // 将浮点数转换为英文格式
		}
	}

	if (value >= 10000 && value < 10000000) {
		let num2 = value / 1000;
		if (Number.isInteger(num2)) {
			return num2.toLocaleString('en-US') + 'k'; // 将整数转换为英文格式并添加 'k'
		} else {
			let tempVal = parseFloat(num2).toFixed(index + 5);
			let realVal = tempVal.substring(0, tempVal.length - 5);
			return parseFloat(realVal).toLocaleString('en-US', {
				minimumFractionDigits: index
			}) + 'k'; // 将浮点数转换为英文格式并添加 'k'
		}
	} else if (value >= 10000000 && value < 1000000000000000) {
		let num1 = value / 1000000;
		let tempVal = parseFloat(num1).toFixed(index + 5);
		let realVal = tempVal.substring(0, tempVal.length - 5);
		return parseFloat(realVal).toLocaleString('en-US', {
			minimumFractionDigits: index
		}) + 'M'; // 将浮点数转换为英文格式并添加 'W'
	}
}