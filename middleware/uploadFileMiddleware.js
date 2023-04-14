const multer = require("multer");
const {Error} = require("sequelize");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/upload/cars");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now().toString() + "-" + file.originalname);
	},
});
const middleware = multer({storage, limits: {fileSize: 2 * 1024 * 1024}}).single("image")

const uploadFileMiddleware = (req, res, next) => {
	middleware(req, res, (err) => {
		if(err != undefined) {
			if(err.code == 'LIMIT_FILE_SIZE')
				if(req.originalUrl.includes('api')) {
					res.status(400).json({
						status: false,
						message: "file terlalu besar, maksimal 2MB"
					})
				} else {
					res.redirect('back')
				}
		} else {
			next()
		}
	})
};

module.exports = uploadFileMiddleware;
