function UploadPdfHandler(req, res){
    try {
        if (!req.files) {
            res.send({
                status: "failed",
                message: "No file uploaded",
            });
        } else {
            let file = req.files.file;

            console.log(req.files);

            file.mv("./uploads/" + file.name + ".pdf");

            res.send({
                status: "success",
                message: "File is uploaded",
                data: {
                    name: file.name,
                    mimetype: file.mimetype,
                    size: file.size,
                },
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }

}
module.exports = UploadPdfHandler;

    