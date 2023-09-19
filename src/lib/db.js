
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://chetan11:Chetan11@cluster0.i3lteiy.mongodb.net/nextjs?retryWrites=true&w=majority';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose.connection;
