const mongoose = require('mongoose')
const data =  'mongodb://127.0.0.1:27017/practice'
// Connecting to the database
mongoose.connect(data, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    
      console.log("Successfully connected to the database" + data);
    
}).catch(err => {
   console.log('Could not connect to the database. Exiting now...', err);
   process.exit();
});
mongoose.set('useFindAndModify', false );
