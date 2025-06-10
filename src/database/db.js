import mongoose from 'mongoose' //instalar o mongoose no terminal e importar a biblioteca

async function connectDataBase() {
   await mongoose.connect
        ('mongodb+srv://api-node:<db_password>@cluster0.obcutjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',)//chave do Connect to Cluster0 (Connecting with MongoDB Driver)
}

export default connectDataBase