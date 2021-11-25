const os=require('os')

 const user =os.userInfo()
 console.log(user)

 console.log(`This system have been running for ${os.uptime()} seconds`)

 const currentOS = {
     name:os.type(),
     release:os.release(),
     totalmem:os.totalmem(),
     freemem:os.freemem(),

 } 

 console.log(currentOS)

 const path =require('path')

 console.log(path.sep)

 const filepath = path.join('./control/text.txt')
console.log(filepath)


