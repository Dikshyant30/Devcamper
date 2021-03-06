// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'});
}

// @desc Get single bootcamps
// @route GET /api/v1/bootcamps/:id
// @access public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`});
}

// @desc Update single bootcamps
// @route PUT /api/v1/bootcamps/:id
// @access private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
}
// @desc Delete single bootcamps
// @route DELETE /api/v1/bootcamps/:ID 
// @access private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `delete bootcamp ${req.params.id}`});
}

// @desc Create bootcamp
// @route GET /api/v1/bootcamps
// @access private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create bootcamp'});
}