var listeners = []

function listen() {}

	
var events = {
	listeners: listeners,
	listen: listen
}

typeof(events)

events
// example above shows the long way and short way to declaring property value including the typeof(event) which is object
var listeners = []

function listen() {}

var events = { listeners, listen }
events

// another example that is just shorthand

var eagleClaw = []

function snakeCraneFist() {}

var kungfuStyles = { eagleClaw, snakeCraneFist }

kungfuStyles

//use Node to receive outcome


