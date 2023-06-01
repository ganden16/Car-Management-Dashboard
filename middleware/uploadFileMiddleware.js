const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/upload/cars");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now().toString() + "-" + file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if(
		file.mimetype == "image/png" ||
		file.mimetype == "image/jpg" ||
		file.mimetype == "image/jpeg" ||
		file.mimetype == "image/svg"
	) {
		cb(null, true);
	} else {
		return cb(null, false)
	}
};

const middleware = multer({storage, fileFilter, limits: {fileSize: 2 * 1024 * 1024}}).single("image")

const uploadFileMiddleware = (req, res, next) => {
	middleware(req, res, (err) => {
		if(err != undefined) {
			if(err.code == 'LIMIT_FILE_SIZE') {
				if(req.originalUrl.includes('api')) {
					res.status(400).json({
						status: false,
						message: "file terlalu besar, maksimal 2MB"
					})
				} else {
					const url = req.url.split('?')[0]
					res.redirect(url + '?errorSizeFile')
				}
			}
		}
		else {
			next()
		}
	})
};

module.exports = uploadFileMiddleware;
