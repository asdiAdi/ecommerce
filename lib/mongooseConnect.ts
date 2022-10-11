import mongoose from 'mongoose';
const mongooseConnect = async () => {
    if (mongoose.connection.readyState !== 1)
        mongoose.connect(process.env.MONGODB_URI);
    else return;
};
export default mongooseConnect;