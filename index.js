const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000


var mapUsers = {}
var mapMoviments = {}

app.use(bodyParser.json())
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))





app.post('/submit', function (req, res) {
	console.log("Passou no POST Three")

	res.status(204).send({"message":"Field name is required"})

})



//METODOS GET
app.get('/pix/addressing', function (req, res) {
	console.log("Passou no GET addressing")
		
		var respons = {
//Payload com Todos os tipos (4 Chaves)
		"payload":"4Cb5AgsyJAu3drLzqgYqv8Z9I/m97UsZzy0/souJe6wE9HyD01UE09AzdMhXQHTamdkNeyRxMUzid85G/Ab9s5ZN2DLVASkdszUlPmhCqd4XAFIZkapHGmf4s3tCzOHII5kvV7h3lX6aLNu4bkQle6QlauEHQBTRLc7MRGKJRQbt8Bmsi0lHnLberwDOdM9AyGUbcmfcRe3Kf3Quexwm/vP9SJqSi0xcCyFrj34vC3h4b+Cd7fVONltZsmCUEfkRHwz+ZY27LekrefIeMYyzNMwpxdc2gUKoSJshgnVKTbHuF9ShcTaepug6HQVqifA/wJkS58FTMOvqFQJNThB58F4B7bfjP4WBB3zpiZVmpuwTOo0+UOFi3SslAsnA3rCQWeAF0vLAOjbyabzIcRyge7Tl+YyN8lD+76BCeRLji3jKQFo1n3Yzcy38e+fI4/FCuu+UHoN+idDFG0vWCirWB8WdGZOFufr6nyq41KHYwsv5mkSpaflAaZ8w7kSZepr6NlxAePnwYFPh19cexGAECSshiP8TQmutKhEboJnToG51QUDMIzv9nEj5AH8++xCK0q1j9nEgiQcIBj9t4gQC6+IKEu8LCDEbHG1ArXadNqPHuFa9tvWLge3JpccOhSHhSKX7RxzVNLSgm/C9xOwkROd5tYg1Mzb2knCl9qoNAcDirDAZu6Vxup0zsgYzBI/HJi9wAme7TQIVDN0jrkRm66XLJysaW1Xy6++ng9k69snErdDXAOLUADYJ0qQpb/lU4NI79CW+JX2Ib2KoZOl+09AAMfgkVHOdcd234Hc8rhe+BxRMBWdICVhgPUcMpdbVM7bM8kbTXwgbI+wnIlvPeA=="

//Payload com Chave Aleatória, Email, Phone
	   //"payload":"4Cb5AgsyJAu3drLzqgYqv8Z9I/m97UsZzy0/souJe6wE9HyD01UE09AzdMhXQHTamdkNeyRxMUzid85G/Ab9s5ZN2DLVASkdszUlPmhCqd4XAFIZkapHGmf4s3tCzOHII5kvV7h3lX6aLNu4bkQle6QlauEHQBTRLc7MRGKJRQbt8Bmsi0lHnLberwDOdM9AyGUbcmfcRe3Kf3Quexwm/vP9SJqSi0xcCyFrj34vC3h4b+Cd7fVONltZsmCUEfkRHwz+ZY27LekrefIeMYyzNMwpxdc2gUKoSJshgnVKTbHuF9ShcTaepug6HQVqifA/wJkS58FTMOvqFQJNThB58F4B7bfjP4WBB3zpiZVmpuwTOo0+UOFi3SslAsnA3rCQWeAF0vLAOjbyabzIcRyge7Tl+YyN8lD+76BCeRLji3jKQFo1n3Yzcy38e+fI4/FCuu+UHoN+idDFG0vWCirWB8WdGZOFufr6nyq41KHYwsv5mkSpaflAaZ8w7kSZepr6NlxAePnwYFPh19cexGAECSshiP8TQmutKhEboJnToG51QUDMIzv9nEj5AH8++xCK0q1j9nEgiQcIBj9t4gQC6+IKEu8LCDEbHG1ArXadNqMQpM9m1yg8IPHKQud4FwFO"

//Payload com mais de 5 Chaves	   
	   //"payload":"x2wkq4C7KG1kqOqBR4BvDPw9y/mbMGb4Bvfl9xH8erZVJVt+OTvc5NHBT7uvkkaqbPcxyvAN5NbfpyzDl867c2P6OnVHJW+dI7vleZ9EX+8ZdDMbvS6xtYfDk7FqKC8/pk+ntgIUt5JRGAcKP1x3NRD1DSjMCQ5kAUeDMCP85iMR+HllBhHaydm5+unIbg3/oBxnI0tHFcyWJGWp9KEhedF5NYczqHqhseCqCVHm0TGq+PbuMy1/5RDeLznyoRGoda1VfWRgMaMeLC2d87odxmLwsTKPFuHB+BDlX3JzVCZF2GxUEse7Wwpkhe3AZQRQk2f8kSRYLm+ditMVjkCX68cSWexWnA7p2qkyuhxZ0wcLRbVM3j9aAK/i5vfp6u9f/APlWjxwNHBh2x/AXTvC33+wq1ZS4KBm4F7uSdMF3srRiSOge902thx2lAWBlZTSpZ5rCjxH4s9z5iKviNRtmYBR7steF3IbJ92d90zR5CVzNPw0uLGlxoHbS+FCBJjhtdV5Nj4RVGU1tOw+2nHLuk5duHwddMQTuPWylC/uXWyhI5KIN8hLUL29Fq+kLMBGaXVbLQVFgKZEsM8A8MDgNRzRSmZ20jmviWhv2lIpU7oUZyj0WVzsgpyQMJGuB1ivNx9DaIYDajiDDJjnzeFNW1i6TxEJUYI1thwnnYWL+1wefRlDPSExCSuIZbd8ff8Bol9wi1vHLKEQeAStZO/Pj+uUOdmFO3yRVCB4uCXWo9TeeqCNXv5xlmHz9QWS3l6Ts+r7o2+Aa1R+ijQAuFOduQUgHkrLgQv8wi0vmy5YBkttxoSZH7SltlbzF0WWWGTmzFeNxQfdHR94jGFqZSfJpo/M/8ZQrOabyhTBrh9CdtuJmBWbjT10+G4kAA0th70wTBa/LugdeK463vhD8I0dJcKQpgfhAfVv/ENjHsfCEL6e6wxaw0GcU9w/dTFkqlPvg/3dtuU11O8QDYIns0VbMbhzQ1jdTM7kUXKXGPIvZ2JW6ZRafrzofzkdLkmzNRRmcErkk/r9WPLJtIj9bH5CJvwL40GHA2yoPkh2ipoHoLbwS4EhaM5I1WEeVoN/CvJRhFifpVOGDn0+EY9/jOsJhFsHCgBvpARC94eY8uWxiCFyBeCmvKgQYGICNCGeKSkbZt6iMZPh3rU8tys5niMMXZJsvVCbca81oOyqTzWrL1AG4PM6cguqh/H+pf1Wq9CPZ1sgA7/9UhkcuHNNxZGDJMMkt3M13jmy2xMpMMMkjjNBEYMBQkcV1KgDB4MLSBaP0KkMsy4W5AZNlx/luTwyEJl1+gaR42DuKeNcTr6HTDX1LlbRnJ14DVNn/NBMXfK5Twyr+miLHYtw7GYZ6N1bj+OUrLyilgg+70Tl8i7ZnpHZ59+3Z+jZ8zKMa8bytjO+C/jnI79nZQI/VAXacJfrOVWAnRSt+rGvKlpE3kALXe46JWBPkGUR4u9QmMbl01dl1kPN7ZxO6MuPMY9mhWjwqQ=="
}
	res.send(respons)
})

app.delete('/pix/addressing/:uuid', function (req, res) {
	console.log("Passou no DELETE")
		
	res.status(204).send()
})

app.post('/pix/addressing', function (req, res) {
	console.log("Passou no POST addressing")
		
		//CPF
		//z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TABJOst8Huq5vquTYpv6PgsNf7faqTpEe9LKsFLWm+n/gdI1vNJbHD5mEuc2/MnQ8Kl7dw8XfiK9OlB4UOXxPDZg==

		//EVP
		//z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TAzjnkRVfNoibtOpnDfXQI1RqbX9lRbrkQLM8IODMz3oJ3VIkzUzk0QFP4NfVSrP6goZedx4EcIhMncceu7z3iJQ==
		var respons = {
	   "payload":"z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TABJOst8Huq5vquTYpv6PgsNf7faqTpEe9LKsFLWm+n/gdI1vNJbHD5mEuc2/MnQ8Kl7dw8XfiK9OlB4UOXxPDZg=="
}
	res.send(respons)
})



//METODOS GET
app.get('/user', function (req, res) {
	console.log("Passou no GET")
	console.log(req)

	var username = req.headers["x-username"]

	var user = mapUsers[username]
	if (user == null){ 
		res.status(404).send()
	} else {
		res.send(user)
	}
})

app.get('/moviment', function (req, res) {
	console.log("Passou no GET")

	res.send(mapMoviments)
})

//METODOS POST
app.post('/user', function (req, res) {
	console.log("Passou no POST")

	var user = req.body

	if(user.name == null){
		res.status(501).send({"message":"Field name is required"})
	}
	if(user.username == null){
		res.status(501).send({"message":"Field username is required"})
	}
	mapUsers[user.username] = user
  res.send(user)
})

app.post('/moviment', function (req, res) {
	console.log("Passou no POST")

	var moviment = req.body

	if(moviment.name == null){
		res.status(501).send({"message":"Field name is required"})
	}
	if(moviment.type == null){
		res.status(501).send({"message":"Field type is required"})
	}
	if(moviment.value == null){
		res.status(501).send({"message":"Field value is required"})
	}
	mapMoviments[moviment.date] = moviment
  res.send(moviment)
})

//METODOS PUT
app.put('/user/:username', function (req, res) {
	console.log("Passou no PUT")
	var username = req.params.username

	var user = mapUsers[username]
	if(user == null){
		res.status(404).send()
	}
	if(user.name == null){
		res.status(501).send({"message":"Field name is required"})
	}
	if(user.username == null){
		res.status(501).send({"message":"Field username is required"})
	}
	mapUsers[user.username] = req.body

  res.send(req.body)
})

app.put('/moviment/:date', function (req, res) {
	console.log("Passou no PUT")
	var date = req.params.date

	var moviment = mapMoviments[date]
	if(moviment == null){
		res.status(404).send()
	}
	if(moviment.name == null){
		res.status(501).send({"message":"Field name is required"})
	}
	if(moviment.type == null){
		res.status(501).send({"message":"Field type is required"})
	}
	if(moviment.value == null){
		res.status(501).send({"message":"Field value is required"})
	}
	mapMoviments[date] = req.body

  res.send(req.body)
})

//METODOS DELETE
app.delete('/user/:username', function (req, res) {
	console.log("Passou no DELETE")
	var username = req.params.username

	var user = mapUsers[username]
	if(user == null){
		res.status(404).send()
	}
	delete mapUsers[username]
	res.send()
})

app.delete('/moviment/:date', function (req, res) {
	console.log("Passou no DELETE")
	var date = req.params.date

	var moviment = mapMoviments[date]
	if(moviment == null){
		res.status(404).send()
	}
	delete mapMoviments[date]
	res.send()
})

