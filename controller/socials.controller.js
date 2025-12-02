const { asyncHandler } = require('../utils/asyncHandler');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const Socials = require('../utils/models/socials.model');
const { HTTP_STATUS } = require('../constants');

const getAllSocials = asyncHandler(async (req, res) => {
    const socials = await Socials.find().lean();

    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, socials, 'Social links fetched successfully')
    );
});

module.exports = {
    getAllSocials,
};
