const Visitor = require("../models/visitor");
// let visitorObj = {};

const getVistorCount = async (req, res, next) => {
  /** 
    const visitor = req.params.visitor;
    console.log(visitorObj);
    visitorObj[visitor] = visitorObj[visitor] ? visitorObj[visitor] + 1 : 1;
    res.status(200).send(`Visit count - ${visitorObj[visitor]}`);
  */
  try {
    let visitor = await Visitor.findOne({ visitor: req.params.visitor });

    if (!visitor) {
      visitor = {
        visitor: req.params.visitor,
        count: 1,
      };
      await new Visitor(visitor).save();
      console.log("New Visitor Saved");
    } else {
      visitor.count = visitor.count + 1;
      await visitor.save();
      console.log("Existing Visitor Updated");
    }

    return res.status(200).send(`Visit count - ${visitor.count}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getVistorCount
};
