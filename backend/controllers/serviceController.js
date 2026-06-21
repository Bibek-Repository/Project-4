const Service = require("../models/Service");

const createService = async (req, res) => {
    try{
        const service = await Service.create(req.body);

        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

const getServices = async (req, res) => {
    try {
        const services = await Service.find().sort({ createdAt: -1 });

        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getServiceById = async (req, res) => {
    try{
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        res.json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateService = async (req, res) => {
    try{
        const service = await Service.findById(req.params.id);

        if(!service) {
            return res.status(404).json({ message: "Service not found"});
        }

        const updated = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );

        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

const deleteService = async (req, res) => {
    try{
        const service = await Service.findById(req.params.id);

        if(!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        await service.deleteOne();
        
        res.json({ message: "Service deleted"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createService,
    getServices,
    getServiceById,
    updateService,
    deleteService,
};