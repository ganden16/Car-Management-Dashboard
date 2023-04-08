const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/upload/cars");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now().toString() + "-" + file.originalname);
	},
});

const uploadFileMiddleware = multer({storage}).single("image");

module.exports = uploadFileMiddleware;
