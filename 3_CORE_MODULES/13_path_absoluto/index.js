const path = require("path")

//path absoluto
console.log(path.resolve('teste.txt'))

//forma path

const midFolder ="relatorios"
const fileName = "anderson.txt"

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)