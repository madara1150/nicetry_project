const { PrismaClient } = require("@prisma/client")
const bcrypt = require('bcrypt')
const prisma = new PrismaClient();


//create user
const CreateUser = async (req, res) => {
    try {
        const { first_name, last_name, username, password, email, phone,info} = req.body;
        const hash = await bcrypt.hash(password, 13);
        const response = await prisma.User.create({
            data: {
                first_name: first_name,
                last_name: last_name,
                username: username,
                password: hash,
                email: email,
                phone: phone,
                info: info,
            }
        })
        res.status(200).json(response)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }


}



module.exports = { CreateUser };

