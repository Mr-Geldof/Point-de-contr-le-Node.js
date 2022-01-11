var resultat = 0

for (var j = 2; j < process.argv.length; j++)
  result += Number(process.argv[j])

console.log(resultat)