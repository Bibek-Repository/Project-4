const SiteSettings =
require("../models/SiteSettings");

const getSettings = async (req,res)=>{

    let settings =
    await SiteSettings.findOne();

    if(!settings){

        settings =
        await SiteSettings.create({});

    }

    res.json(settings);

};

const updateSettings =
async(req,res)=>{

    let settings =
    await SiteSettings.findOne();

    if(!settings){

        settings =
        await SiteSettings.create(req.body);

    }else{

        settings =
        await SiteSettings.findByIdAndUpdate(

            settings._id,

            req.body,

            {new:true}

        );

    }

    res.json(settings);

};

module.exports={
    getSettings,
    updateSettings
};