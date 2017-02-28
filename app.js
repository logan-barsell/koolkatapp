const express = require('express'),
	  potato = require(__dirname+'/routes/potato')
	  app = express()

app.use('/potato', potato)

app.use(express.static('public'))

app.listen(3000, f=>{
	console.log('Server is running, better go catch it!')
})