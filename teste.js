const express = require('express');
const fs = require('fs')
const app = express();

// precisa instalar as dependecias, da npm i fs e npm i express

app.get('/teste', (req, res) => {
	res.writeHead(200, {"Content-Type": "video/mp4"})

	const video = fs.createReadStream('teste.mp4') //nome do video e o local que ele ta. O meu tava na mesma pasta que esse arquivo js
	video.pipe(res)
})

app.listen(8080, () => {
	console.log('rodando...')
})
