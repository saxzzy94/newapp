import Hyperbeam from "@hyperbeam/web";
import axios from "axios";

export const getBingSearch = async (query) => {
	try {
		const url = `https://api.bing.microsoft.com/v7.0/search?q=${encodeURIComponent(
			query
		)}&count=4`;

		const headers = {
			"Ocp-Apim-Subscription-Key": "feb3d66b1dce4a20baf44ca9aa50b749",
		};
		const res = await axios.get(url, { headers });
		return res.data.webPages.value;
	} catch (err) {
		console.log(err);
	}
};

export const renderPage = async (hb, data) => {
	try {
		const tabs = await data.map(async (item, index) => {
			return await hb.tabs.create({
				index: index,
				url: item.url,
				active: false,
			});
		});

		return Promise.all(tabs);
	} catch (err) {
		console.log(err);
	}
};

export const updateTab = async (hb, id) => {
	await hb.tabs.update(id, { active: true });
};

export async function loadHyperBeam(container) {
	console.log(container);
	return await Hyperbeam(
		container,
		"https://4w5rhqjkkux2w09ewbcx90zou.hyperbeam.com/FB6IJjRjSuGzdQT5K-qmnA?token=msm2xbavwuL4LXx7neK6VAfj3e2-zIOibV3OJET8_AE"
	);
}
/* 
admin_token: "ArGzFduVs_ZxZ64sKkAt-mudpwfw_845POijRCPgZd8"
embed_url: "https://1aa2bnwfuuv7hod22dmbiqxql.hyperbeam.com/39Z_UVGgToieW1Qg6Bxkxg?token=XBpVsK59GY2ffV8cJU7FX67HPYE1Muy8RILb69fRbys"
session_id: "dfd67f51-51a0-4e88-9e5b-5420e81c64c6"
*/
