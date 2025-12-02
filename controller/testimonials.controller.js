const { asyncHandler } = require('../utils/asyncHandler');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const Testimonial = require('../utils/models/testimonials.model');
const { HTTP_STATUS } = require('../constants');

const getAllTestimonials = asyncHandler(async (req, res) => {
    const testimonials = await Testimonial.find().lean();

    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, testimonials, 'Testimonials fetched successfully')
    );
});

module.exports = {
    getAllTestimonials,
};
