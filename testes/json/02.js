// obj -> str

json = '{"nome": "joao","idade": 18,"sexo": "M","empregado": false}'

json = JSON.parse(json) // obj

console.log(json)

json.nome = "maria"

json = JSON.stringify(json) // str

console.log(json)
