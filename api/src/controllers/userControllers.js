const { User } = require('../db')

const createUser = async (req, res) => {
    try{
        const user = req.body;
        let found = await User.findOne({ email: user.email});
        if(!found){
            if(user){
                const newUser = new User({
                    username: user.nickname,
                    email: user.email,
                    name: user.name,
                    image: user.picture
                })
                const result = await newUser.save().then((data) => res.json(data));
                // res.status(200).json(result)
            }}else{
            res.status(200).json(found)
    }
    
    }catch(err){
        res.status(400).json(err)
    }
}
const getAllUsers = async (req, res) => {
    try{
        const { name } = req.query;
        const allUsers = await User.find({});
    if(allUsers){

        if(name){

            const user = allUsers.filter((p)=>p.full_name.toLowerCase().includes(name.toLowerCase()))
            user? res.status(200).json(user) : res.json('Not Found')
        }else{
            res.status(200).json(allUsers)
        }        
    }else { 
        res.status(400).json('Request error!')
    }
    }catch(err){
        res.status(400).json('mal ahi')
    }
    
}

const getUserByEmail = async (req,res)=>{
    const { email } = req.params;
    try{
        if(email){
        const user = await User.findOne({email: email})
        res.status(200).json(user)
        }else {
            res.status(400).json('No se encontro usuario por ID')
        }

    } catch(err){
        console.log(err)
    }
}


module.exports = {
    createUser,
    getAllUsers,
    getUserByEmail,

    
}