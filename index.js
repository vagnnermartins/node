const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000


var mapUsers = {}
var mapMoviments = {}

app.use(bodyParser.json())
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

//METODOS GET
app.get('/pix/addressing', function (req, res) {
	console.log("Passou no GET /pix/addressing")
	setTimeout(function() {
		var respons = {
		//Payload com Todos os tipos 
				"payload":"4Cb5AgsyJAu3drLzqgYqv8Z9I/m97UsZzy0/souJe6wE9HyD01UE09AzdMhXQHTamdkNeyRxMUzid85G/Ab9s5ZN2DLVASkdszUlPmhCqd4XAFIZkapHGmf4s3tCzOHII5kvV7h3lX6aLNu4bkQle6QlauEHQBTRLc7MRGKJRQbt8Bmsi0lHnLberwDOdM9AU6Zwevb6wii3AYuhWvsbEn8gcjdCN4P5jPrypry3eSG7yI10tdNI28EHIdQqVR+qJgz/Jmse0LEA1yN07wDQTlrE+Y0kG+gyxiU7uFK3goqXWTbd6oyz/vr39t9dNnB5qVsgP78qqPPNBmK/uLdvUr5/xY54WkW2CTKiq7vW62rCeraO6cHtPZZFpPLzBOwZHfUbVDQ9d84Lut9BEYrvivYKcd9FToGOtHpOON9A6VJcRVackd23F+Ws0hPIoB1zg7tiJh0A4ZlP8ubAtUWnbRbRoUrxLIqUMs1dvGvSQz26kkcwgVhYnVbiXcEn4OaE/TeRFUXd29aE4lW1uRBqntexP0ry5emE7O0dJM8EJca5X2rmAFK4SpdyrFAsxEFFCJxDi+fA8rqF04VIdzJRBwIJihnVNYNeCsisVhjAkdXRwVlQKBAKtIXo/Fdbu80tm+giEKQoTzmGCXugTyY46DdOuyM2VgLEwhhL5bcGHxg/JY877hNAcrP/hEYwOfuAb11eT6hL4l3/ZTDxkolWA0ZXIa3/V2z3i62i8AylF2bqHs7SSKtADYvocwo3hLbdQgXgFYs6EIug1HMAMyfzMQE7we4nhUHNSaBUbFQiMJrAoa3n/Eq6xUV4iJHoCSKqHxV5rY3PUB5HSNAoBUfTz8EUJWr7U/AwZz4aG5ncDC7AFHV82UrAQL6cGfuOt8mQ5NIEiczXiD4I50zfBR06Mo0qFh6ZUge1R5KBl+AUaICjoz433B5eJCE2JB5/ZzU0J3pUKq2mCdYas80D44nbjS7Qqv6jV2ESD02AwOVmH2H5QtqSCk+rtEjH320MRHfDAYSp1dr4iW2fElszq5aPNlQoKuP6daoKWXysMWE4jiz6SiZaDLC0C74OiSVvD/eYtq5ai3cbPblDZclt8n3eKO5tSumXx0rp3vDtS6rPyRnV4oxwBe88YDH1kETufH2vw88VG3K0QZkULThex28aXd3GShw5Qtkp1xP38rgcrfGgyMufM/D2ws52ktLbvQhwz1ktySEseWlTkS0tBCahh1gZvgiYanCEDlouh7OEqS1HU4t57by8oc0sS8eHnr0FfaWmTEFQ6S4pxVjcjPuVY8KscZ1v9doE/S+iKfvUacQykVkrQmH8yd5S7UNNbYNiJSg4RL/3s9vMvBv1tnA45jwMiGH9UXlauO+7OCYUcQS0/FOh+b605EykmTqXr0GggTxu36NI8fN1zx6+1sbzbN2AUuMFRRjmWiMqGYIbzlnFC3GM/EQLG3VViJso4bY+9QpHhIutR8D/tIzmedsPeomvtioKjljWVUbymexgIGVbA9/sdy5yrqb5kCIJERPUkbNpbYA7NQy+dpIipiiKivJ1wPQwF5vvWRnzWnHgxEFSsBd/VwypPweEUeaXUs+iZVD3BBfZyDhx+yKANg64u3Ow38/Xb9txPapVa738tyzya+xNWieqjVlh3ydej9q7DOIqyzadaCxmjQ2AB3mWt6sfQhNCnvt2esVv2/yVaCvGX7cJTXzeUfqHZbCg3MC2972eZY8lCynmRLLoSjvImgxgrN32ROBDKwEP/RaN1GRbDcKWU4GE6O/thToQ7DlcwdNwtJmuzyu5oCRTVkfuJzHEPbDSFDZlokjtx9ZAYXtkJHIjQ+BcC+YKIByUKbwptqD+cO7hP9B5k+8HUQKwnv9uJj1BfHBigT/BjmlpKyrpjI5tSXGrRg5TySlSqHntto35cYHgYQWcZQLHpwu3y9zPXYF4/piZKEixRfGPXOnZ4fw4SgdDLEC2DRzO8qQKaHMEfeAfkQhVmBhoJ84DZdOC0oZT0JaUhBudHXSNWKzNqw01MVrZ+kXkolWq9SkqeABDN8m3Tz1a6Zg4ynK63VInO9tX/K8J66+taUsPewWLx68F4eVqRtHAobQG54dw7IiwrRyMLkhoep+3XKuyZeu+YMOvXEgH0wZUlMKguw/JM6u/eFIdxW9nFVGQXqDmJHIC3hm1YlsXZctIOL7F6r7il9+9qdbSjmfiNKiTI0D6k/gb867vq5mRfOiTdm/1o1SpUEmV6WhQnMTYwPg40vxm8izzMIgGjCUlDZ5V3Ga22DkIV8lS6jQDkoKUkqOos5ppOQyt+Edvo3X7ETt38nXvHB0xKUkO0/us9oTUUYnYBXxlwHp9oS3G63dIS/zJSWQTG6k9gcvsdDaN8PFUVy0i2TWQnq3G0jGtsqZ14t8H9XvOIHKGbosd0riae5zlj9M7XO7E17GvWMlhRlCxXZIQvSabYRFlH5eXYAsRH3OxMYkf8xaligCi4YJvk80cvSdKljz+IimTY6HYEVMDXxxJ/nDTSICe9OzmWPHVPRCoAUGDZllftMVpxBcy9RRWd7Ne7UWd5dZByyoUksXmz/Occz4mkaEmyOefAX5AmhkwbzDpszXwIJJ8pJ/ZbigIkkTzgLQrcJf0ZHq61c9L3RKimO0f+gjZMLcp6MtlZUeUEaPmQej5PNtidDrOCQzK"

		//Payload com Chave Aleatória, Email, Phone
			   //"payload":"4Cb5AgsyJAu3drLzqgYqv8Z9I/m97UsZzy0/souJe6wE9HyD01UE09AzdMhXQHTamdkNeyRxMUzid85G/Ab9s5ZN2DLVASkdszUlPmhCqd4XAFIZkapHGmf4s3tCzOHII5kvV7h3lX6aLNu4bkQle6QlauEHQBTRLc7MRGKJRQbt8Bmsi0lHnLberwDOdM9AyGUbcmfcRe3Kf3Quexwm/vP9SJqSi0xcCyFrj34vC3h4b+Cd7fVONltZsmCUEfkRHwz+ZY27LekrefIeMYyzNMwpxdc2gUKoSJshgnVKTbHuF9ShcTaepug6HQVqifA/wJkS58FTMOvqFQJNThB58F4B7bfjP4WBB3zpiZVmpuwTOo0+UOFi3SslAsnA3rCQWeAF0vLAOjbyabzIcRyge7Tl+YyN8lD+76BCeRLji3jKQFo1n3Yzcy38e+fI4/FCuu+UHoN+idDFG0vWCirWB8WdGZOFufr6nyq41KHYwsv5mkSpaflAaZ8w7kSZepr6NlxAePnwYFPh19cexGAECSshiP8TQmutKhEboJnToG51QUDMIzv9nEj5AH8++xCK0q1j9nEgiQcIBj9t4gQC6+IKEu8LCDEbHG1ArXadNqMQpM9m1yg8IPHKQud4FwFO"

		//Payload com mais de 5 Chaves	   
			   //"payload":"x2wkq4C7KG1kqOqBR4BvDPw9y/mbMGb4Bvfl9xH8erZVJVt+OTvc5NHBT7uvkkaqbPcxyvAN5NbfpyzDl867c2P6OnVHJW+dI7vleZ9EX+8ZdDMbvS6xtYfDk7FqKC8/pk+ntgIUt5JRGAcKP1x3NRD1DSjMCQ5kAUeDMCP85iMR+HllBhHaydm5+unIbg3/oBxnI0tHFcyWJGWp9KEhedF5NYczqHqhseCqCVHm0TGq+PbuMy1/5RDeLznyoRGoda1VfWRgMaMeLC2d87odxmLwsTKPFuHB+BDlX3JzVCZF2GxUEse7Wwpkhe3AZQRQk2f8kSRYLm+ditMVjkCX68cSWexWnA7p2qkyuhxZ0wcLRbVM3j9aAK/i5vfp6u9f/APlWjxwNHBh2x/AXTvC33+wq1ZS4KBm4F7uSdMF3srRiSOge902thx2lAWBlZTSpZ5rCjxH4s9z5iKviNRtmYBR7steF3IbJ92d90zR5CVzNPw0uLGlxoHbS+FCBJjhtdV5Nj4RVGU1tOw+2nHLuk5duHwddMQTuPWylC/uXWyhI5KIN8hLUL29Fq+kLMBGaXVbLQVFgKZEsM8A8MDgNRzRSmZ20jmviWhv2lIpU7oUZyj0WVzsgpyQMJGuB1ivNx9DaIYDajiDDJjnzeFNW1i6TxEJUYI1thwnnYWL+1wefRlDPSExCSuIZbd8ff8Bol9wi1vHLKEQeAStZO/Pj+uUOdmFO3yRVCB4uCXWo9TeeqCNXv5xlmHz9QWS3l6Ts+r7o2+Aa1R+ijQAuFOduQUgHkrLgQv8wi0vmy5YBkttxoSZH7SltlbzF0WWWGTmzFeNxQfdHR94jGFqZSfJpo/M/8ZQrOabyhTBrh9CdtuJmBWbjT10+G4kAA0th70wTBa/LugdeK463vhD8I0dJcKQpgfhAfVv/ENjHsfCEL6e6wxaw0GcU9w/dTFkqlPvg/3dtuU11O8QDYIns0VbMbhzQ1jdTM7kUXKXGPIvZ2JW6ZRafrzofzkdLkmzNRRmcErkk/r9WPLJtIj9bH5CJvwL40GHA2yoPkh2ipoHoLbwS4EhaM5I1WEeVoN/CvJRhFifpVOGDn0+EY9/jOsJhFsHCgBvpARC94eY8uWxiCFyBeCmvKgQYGICNCGeKSkbZt6iMZPh3rU8tys5niMMXZJsvVCbca81oOyqTzWrL1AG4PM6cguqh/H+pf1Wq9CPZ1sgA7/9UhkcuHNNxZGDJMMkt3M13jmy2xMpMMMkjjNBEYMBQkcV1KgDB4MLSBaP0KkMsy4W5AZNlx/luTwyEJl1+gaR42DuKeNcTr6HTDX1LlbRnJ14DVNn/NBMXfK5Twyr+miLHYtw7GYZ6N1bj+OUrLyilgg+70Tl8i7ZnpHZ59+3Z+jZ8zKMa8bytjO+C/jnI79nZQI/VAXacJfrOVWAnRSt+rGvKlpE3kALXe46JWBPkGUR4u9QmMbl01dl1kPN7ZxO6MuPMY9mhWjwqQ=="
		}
			res.send(respons)
	}, 1000);
})

//PixConfirmDeleteOption
app.delete('/pix/addressing/:uuid', function (req, res) {

	setTimeout(function() {
		console.log("Passou no DELETE /pix/addressing/:uuid")
		
		res.status(204).send()
	},1000);
})

//PixConfirmStartPortabilityOption
app.post('/pix/addressing/:uuid/claim/portability', function (req, res) {

	setTimeout(function() {
		console.log("Passou no POST /pix/addressing/:uuid/claim/portability")
		
		//No Validation
		var respons = {"payload":"z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TABJOst8Huq5vquTYpv6PgsNf7faqTpEe9LKsFLWm+n/gdI1vNJbHD5mEuc2/MnQ8Kl7dw8XfiK9OlB4UOXxPDZg=="}
		res.send(respons)
	},1000);
})

//PixConfirmDeletePortabilityOption
app.delete('/pix/addressing/:uuid/claim/portability', function (req, res) {

	setTimeout(function() {
		console.log("Passou no DELETE /pix/addressing/:uuid/claim/portability")
		
		res.send()
	},1000);
})

//PixConfirmStartClaimOption
app.post('/pix/addressing/:uuid/claim/ownership', function (req, res) {

	setTimeout(function() {
		console.log("Passou no POST /pix/addressing/:uuid/claim/ownership")
		
		//No Validation
		var respons = {"payload":"z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TABJOst8Huq5vquTYpv6PgsNf7faqTpEe9LKsFLWm+n/gdI1vNJbHD5mEuc2/MnQ8Kl7dw8XfiK9OlB4UOXxPDZg=="}
		res.send(respons)
	},1000);
})

//PixConfirmDeleteClaimOption
app.delete('/pix/addressing/:uuid/claim/ownership', function (req, res) {

	setTimeout(function() {
		console.log("Passou no DELETE /pix/addressing/:uuid/claim/ownership")
		
		res.send()
	},1000);
})

//PixPortabilityReceivedOption
app.post('/pix/addressing/:uuid/portability/donate', function (req, res) {

	setTimeout(function() {
		console.log("Passou no POST /pix/addressing/:uuid/portability/donate")
		
		//No Validation
		var respons = {"payload":"z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TABJOst8Huq5vquTYpv6PgsNf7faqTpEe9LKsFLWm+n/gdI1vNJbHD5mEuc2/MnQ8Kl7dw8XfiK9OlB4UOXxPDZg=="}
		res.send(respons)
	},1000);
})

//PixPortabilityReceivedOption
app.post('/pix/addressing/:uuid/ownership/donate', function (req, res) {

	setTimeout(function() {
		console.log("Passou no POST /pix/addressing/:uuid/ownership/donate")
		
		//No Validation
		var respons = {"payload":"z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TABJOst8Huq5vquTYpv6PgsNf7faqTpEe9LKsFLWm+n/gdI1vNJbHD5mEuc2/MnQ8Kl7dw8XfiK9OlB4UOXxPDZg=="}
		res.send(respons)
	},1000);
})

app.post('/pix/addressing/:uuid/create/portability', function (req, res) {
	console.log("Passou no POST /:uuid/create/portability")
		
		//CPF
		//z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TABJOst8Huq5vquTYpv6PgsNf7faqTpEe9LKsFLWm+n/gdI1vNJbHD5mEuc2/MnQ8Kl7dw8XfiK9OlB4UOXxPDZg==

		//EVP
		//z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TAzjnkRVfNoibtOpnDfXQI1RqbX9lRbrkQLM8IODMz3oJ3VIkzUzk0QFP4NfVSrP6goZedx4EcIhMncceu7z3iJQ==

		//No Validation
		//var respons = {"payload":"z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TABJOst8Huq5vquTYpv6PgsNf7faqTpEe9LKsFLWm+n/gdI1vNJbHD5mEuc2/MnQ8Kl7dw8XfiK9OlB4UOXxPDZg=="}

		//Validation
		var respons = {"payload":"z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TABJOst8Huq5vquTYpv6PgsNf7faqTpEe9LKsFLWm+n/j3Oz1A4wcOttXtmaA+HiyfibLZPiZGV7iKYqXpZ3RWag=="}
	res.send(respons)
})

app.post('/pix/addressing', function (req, res) {
	console.log("Passou no POST /pix/addressing")
		
		//CPF
		//z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TABJOst8Huq5vquTYpv6PgsNf7faqTpEe9LKsFLWm+n/gdI1vNJbHD5mEuc2/MnQ8Kl7dw8XfiK9OlB4UOXxPDZg==

		//EVP
		//z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TAzjnkRVfNoibtOpnDfXQI1RqbX9lRbrkQLM8IODMz3oJ3VIkzUzk0QFP4NfVSrP6goZedx4EcIhMncceu7z3iJQ==

		//No Validation
		//var respons = {"payload":"z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TABJOst8Huq5vquTYpv6PgsNf7faqTpEe9LKsFLWm+n/gdI1vNJbHD5mEuc2/MnQ8Kl7dw8XfiK9OlB4UOXxPDZg=="}

		//Validation
		var respons = {"payload":"z4m65WyHhWmB9LVnwJ+IMsQTB37ng0hYxcJXzLhXIaU0r+Hp5hDu1fQDtSi7v8TABJOst8Huq5vquTYpv6PgsNf7faqTpEe9LKsFLWm+n/j3Oz1A4wcOttXtmaA+HiyfibLZPiZGV7iKYqXpZ3RWag=="}
	res.send(respons)
})

app.post('/pix/addressing/:keyId/token/validate', function (req, res) {
	console.log("Passou no POST /pix/addressing/:keyId/token/validate")

	var stringValue = JSON.stringify(req.body)

		if(stringValue == "\{\"payload\":\"A/UcJDbquq6v+s3gWm3RJ1Dgnm48EsAGB0KdtHe1WjI=\"}"){
			var respons = {"payload": "0M2LiG7PdofKlCO8QAn4PJpIOEAl5v0djsNWU2uHQI7gXbeZ58qzFefEGKRPCWW+JphXl/v5lxmtRVfWsBqKzrJkXcRzfA3dXswfZXzBz9fuT6WyeaEYoeoZ8JYXr/jKuC6c2fMh3xjB/ye+VSmTrzxcc4M71vCmqe5wtwl2KrV28PBTeD/FHQysVUsbugpz"}
			res.status(200).send(respons)
		} else {
			//ERROR 404
			var respons = {"payload":"+T+RuczXD1x3gwoNEc4NEWm4GyAep346svOT/rgCDgUELpWCPqH1SLJdETVFJfYvz5M4vZFmz5ew6ISXG0pgDeDDgcdU3wwcnHMaiz4mdKbWi7aty8IJ6+RGumTGLpeGOrqGD7nk+ZAVSCpyfABxqW1PtTMXekn/vcPquTWJlQDnRr7jlcvcRcrb9RlNqWb4"}
			res.status(404).send(respons)
		}

	
})

app.post('/pix/addressing/:keyId/token/send', function (req, res) {
	console.log("Passou no POST /pix/addressing/:keyId/token/send")
		
		res.status(204).send()
})

