var mazorca = {
	boilerplate: boilerplate,
	make: make
}

var cmnd = process.argv[2]

if (mazorca[cmnd]) {
	mazorca[cmnd]()
} else {
	console.log('Mazorca command '+ cmnd +' not found')
}