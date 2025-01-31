const { pet } = require("../models")
const {v4:uuidv4} = require("uuid")


exports.createPet = async(req, res) => {
    try {
        const petData = {
            id : uuidv4(),
            species: req.body.species,
            breed: req.body.breed,
            age: req.body.age,
            health: req.body.health,
            image : req.body.image
            
    
        }
    
        if(!petData) {
            return res.status(500).json({message: 'pet is not found'})
        }

        console.log(petData)
        const newPetData = await pet.create(petData)

        res.status(201).json({message: 'pet is successfully created', data: newPetData})
    } catch (error) {
        res.status(500).json({message: 'Error creating pet', error:error.message})
    }
}



exports.bulkpets = async(req, res)=> {
    try {
        
        const mybulkpets = req.body
        mybulkpets.map((e) => { return e.id = uuidv4()})

        const myPets = await pet.bulkCreate(mybulkpets, {validate:true})

        res.status(201).json({message: 'multiple pets successfully created', data: myPets})

    } catch (error) {
        res.status(500).json({message: 'Error creating pet', error:error.message})
    }

}




exports.getAllPets = async(req,res)=>{
    try {
        const allPets = await pet.findAll()

        res.status(200).json({message:`kindly find below all pets`, "total number of pets":allPets.length, data:allPets})
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
};





exports.getOnePet = async(req,res) => {
    try {

        const myOnePet = await pet.findByPk(req.params.id)
        
        if(!myOnePet) {
            return res.status(404).json('pet not found')
        }
    

        res.status(200).json({message: `kindly find below pet with the above id`, data:myOnePet})
    } catch (error) {

        res.status(500).json({error:error.message})
    }
}





exports.updatePet = async(req , res) => {
    try {
        const myNewPet = await pet.findByPk(req.params.id)

        if(!myNewPet) {
            return res.status(404).json('pet not found')
        }
     const newPet = await myNewPet.update ({
        species: req.body.species,
        breed: req.body.breed,
        age: req.body.age,
        health: req.body.health,
  })
       res.status(200).json({message: `pet updated`, data:newPet})
    } catch (error) {
        
        res.status(500).json({error:error.message})
        
    }
    
}



exports.deletePet = async(req, res) => {
    try {       
         const myPetDelete = await pet.findByPk(req.params.id)

        if(!myPetDelete) {
            return res.status(404).json('pet not found')
        }
        myPetDelete.destroy()
        res.status(200).json({message: `pet has been deleted`, data:myPetDelete})
  
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
