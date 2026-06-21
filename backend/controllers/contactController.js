const Contact = require("../models/Contact");

const createContact = async (req, res) => {

    try{
        const {
            name,
            email,
            phone,
            subject,
            message
        } = req.body;

        const enquiry =
            await Contact.create({
                name,
                email,
                phone,
                subject,
                message
            });

            res.status(201).json(enquiry);

} catch (error) {

    res.status(500).json({
        message: error.message
    });
}
};

const getContacts = async (req, res) => {

    try {
        const contacts =
            await Contact.find()
            .sort({ createdAt: -1});

        res.json(contacts);
    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const deleteContact = async (req, res) => {

    try {

        const contact = 
            await Contact.findById(
                req.params.id
            );
        
        if (!contact) {

            return res.status(404).json({
                message: "Enquiry not found"
            });
        }

        await contact.deleteOne();

        res.json({
            message:
                "Enquiry deleted successfully"
        });
    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createContact,
    getContacts,
    deleteContact
};