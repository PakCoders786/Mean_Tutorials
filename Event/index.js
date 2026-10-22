import EventEmittor from 'events'
const constructorEmittor = new EventEmittor()


// on : listen and register for event .can trigger a lot of times 
// once : listen and register for event. can trigger once 
// emit : allows us to call and emit event


// constructorEmittor.on('response',(name,id)=>{

//     console.log(`user : ${name}, id : ${id}`)
// })
// constructorEmittor.emit('response',"Haseeb",18)
constructorEmittor.once('response',(name,id)=>{

    console.log(`user : ${name}, id : ${id}`)
})
constructorEmittor.emit('response',"Haseeb",18)