const baseURL = process.env.baseURL;
localStorage.baseURL = baseURL
export const apiUtil = {
	"getNoiceList": baseURL + '/user/announcement/getAnnouncementList'
}