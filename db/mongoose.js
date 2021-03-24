const mongoose = require('mongoose')
const data =  'mongodb+srv://admin:vizikAPN@ezzey.wpbj6.mongodb.net/Ezzey?retryWrites=true&w=majority';
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
//"mongodb://admin:vizikAPN@task-app/myFirstDatabase?ssl=true&replicaSet=atlas-xotqvm-shard-0&authSource=admin&retryWrites=true&w=majority";