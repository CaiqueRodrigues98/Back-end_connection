import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    createdAt: {  //Insere a informação de quando o registro foi criado
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('User', userSchema)
