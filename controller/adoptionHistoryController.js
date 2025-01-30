const {adoptionHistory} = require("../models")
const {v4:uuidv4} = require("uuid")

const emailError = "email is already in use"

exports.createAdoptionHistory = async(req, res)=> {
    try {
        
        const historyData = {
            id: uuidv4(),
            petId: req.params.id,
            adopterName: req.body.adopterName,
            email: req.body.email,
            adoptionDate:req.body.adoptionDate
        }

        const newHistory = await adoptionHistory.create(historyData)

        res.status(201).json({message: `new adoption details added successfully`, data: newHistory})

    } catch (error) {
        res.status(500).json({message: 'Error creating adoption details ', error:(emailError)})
    }
}




exports.bulkAdoptor = async(req, res)=> {
    try {
        
        const myBulkAdoptor = req.body
        const bigBulk = myBulkAdoptor.map((e) => { return e.id == uuidv4()})

        const myAdoptor = await adoptionHistory.bulkCreate(bigBulk, {validate:true})

        res.status(201).json({message: 'multiple adoptors successfully created', data: myAdoptor})

    } catch (error) {
        res.status(500).json({message: 'Error creating adoptors', error:(emailError)})
    }

}




exports.getallhistory = async(req,res)=>{
    try {
        const allHistory = await adoptionHistory.findAll()

        res.status(200).json({message:`kindly find below all history`,  totalNumberOfAdoptorNames: allHistory.length, data:allHistory})
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
};





exports.getOneAdoptor = async (req, res) => {
    try {
        const getOne = await adoptionHistory.findByPk(req.params.id)

        if(!getOne) {
            return res.status(404).json('adoptor name not found')
        }
        res.status(200).json({message: `kindly find below adoptor with the above id`, data:getOne})
    } catch (error) {

        res.status(500).json({error:error.message})
    }
}





exports.updateaAdoptorHistory = async (req , res) => {
    try {
        const updateAdoptor = await adoptionHistory.findByPk(req.params.id)

        if(!updateAdoptor) {
            return res.status(404).json('adoptor name not found')
        }
  
         const newAdoptorHistory = await updateAdoptor.update({
            petId: req.params.id,
            adopterName: req.body.adopterName,
            email: req.body.email,
            adoptionDate:req.body.adoptionDate
        })
         res.status(200).json({message: `adoptor name successfully updated`, data: newAdoptorHistory})
    } catch (error) {
        
        res.status(500).json({error:(emailError)})
    }
}





exports.deleteAdoptionName = async (req, res) => {
    try {       
         const deleteName = await adoptionHistory.findByPk(req.params.id)

        if(!deleteName) {
            return res.status(404).json('adoptor name not found')
        }
         deleteName.destroy()

        res.status(200).json({message: `adoptor name successfully deleted`, data: deleteName})
        
    } catch (error) {
        res.status(500).json({error: "Adoptor name already deleted"})
    }
}

