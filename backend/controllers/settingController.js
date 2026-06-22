const Setting = require("../models/Setting");

const getSettings = async (req,res) => {
    try {
        let settings =
            await Setting.findOne();

        if (!settings) {

            settings = 
                await Setting.create({});
        }

        res.json(settings);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const updateSettings = async (req,res) => {
    try {
        let settings =
            await Setting.findOne();

        if (!settings) {
            settings = 
                await Setting.create(req.body);
        } else {
            settings =
                await Setting.findByIdAndUpdate(
                    settings._id,
                    req.body,
                    { new: true}
                );
        }

        res.json(settings);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

};

module.exports = {
    getSettings,
    updateSettings
};