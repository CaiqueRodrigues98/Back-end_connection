import user from '../models/user.js'

async function getUsers(req, res) {
    const users = await user.find(); //Busca todos os usuários no banco de dados
    return res.status(200).json(users);
}

async function createUser(req, res) {
    const userData = req.body;

    try {
        const newUser = await user.create(userData); //Cria um novo usuário no banco de dados
        return res.json({ newUser });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function deleteUser(req, res) {
    const id = req.params.id

    await User.findByIdAndDelete({ _id: id })

    return res.status(200).json({res: "User deleted"})
}

export { getUsers, createUser, deleteUser }