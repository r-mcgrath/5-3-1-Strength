const mongoose = require('mongoose');
const { Schema } = mongoose;

//const URI = 'mongodb+srv://rickmcgrath1:Trombone12@cluster0.l6sanky.mongodb.net/';
//const URI = 'mongodb://localhost:27017'
const URI = 'mongodb://127.0.0.1:27017/test';


mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));

const entrySchema = new Schema ({
  content: { type: String, required: true },
  create_at: { type: Number, default:  Date.now() }, 

});



module.exports = mongoose.model('Entry', entrySchema);

