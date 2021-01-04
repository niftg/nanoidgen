const {nanoid} = require("nanoid")
const [_,__,d,rep] = process.argv
"@".repeat(rep?rep-0:1).split``.forEach(_=>
  {console.log(nanoid(d?d-0:21))}
)
