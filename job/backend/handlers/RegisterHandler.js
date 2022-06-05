const RegisterIntern = require("../models/registerIntern");

export default function RegisterIntern(request, response) {
  //ADD
  const email = request.body.email;
  const password = request.body.password;

  const intern = new RegisterIntern({
    Email: email,
    Password: password,
  });

  intern.save((err) => {
    if (err) {
      return response.status(400).json({
        error: err,
      });
    }
    return response.status(200).json({
      success: "Registerd Successfully ",
    });
  });
}
