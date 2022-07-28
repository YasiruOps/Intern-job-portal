const Auth = require("../models/mcqcategory");

function AddMcqCategory(request, response) {
  //ADD
  const type = request.body.type;
  const name = request.body.name;
  const description = request.body.description;

  const category = new Auth({
    type,
    name,
    description,
  });

  category.save((err) => {
    if (err) {
      return response.status(400).json({
        error: err,
      });
    }
    return response.status(200).json({
      success: "Category Added Successfully ",
    });
  });
}

module.exports = AddMcqCategory;
