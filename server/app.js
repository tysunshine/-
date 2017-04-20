var express = require("express");
var app = express();

app.get("/get/list", function(req, res) {
	res.json({
		"msg": "OK",
		"data": [
			{
				"img": "/assets/image/index/4.jpg",
				"title": "开心"
			},
			{
				"img": "/assets/image/index/1.jpg",
				"title": "失望"
			},
			{
				"img": "/assets/image/index/2.jpeg",
				"title": "愤怒"
			},
			{
				"img": "/assets/image/index/6.jpg",
				"title": "喜悦"
			},
			{
				"img": "/assets/image/index/3.jpeg",
				"title": "绝望"
			},
			{
				"img": "/assets/image/index/5.jpg",
				"title": "痛苦"
			},
			{
				"img": "/assets/image/index/4.jpg",
				"title": "抱怨"
			},
			{
				"img": "/assets/image/index/1.jpg",
				"title": "欣慰"
			},
			{
				"img": "/assets/image/index/2.jpeg",
				"title": "不安"
			},
			{
				"img": "/assets/image/index/6.jpg",
				"title": "失措"
			},
			{
				"img": "/assets/image/index/3.jpeg",
				"title": "紧张"
			},
			{
				"img": "/assets/image/index/5.jpg",
				"title": "焦虑"
			}
		]
	})
})

app.listen(8081, function() {
	console.log("开启服务器成功!")
});