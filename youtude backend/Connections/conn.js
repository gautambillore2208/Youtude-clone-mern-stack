const mongoose = require('mongoose');
// youtubeBackend

mongoose.connect('mongodb://localhost:27017/youtudeBackend')
.then(()=>console.log('db connection is successfull')).catch((err)=>console.log(err)
)