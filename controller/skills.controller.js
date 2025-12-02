const { asyncHandler } = require('../utils/asyncHandler');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const Skills = require('../utils/models/skills.model');
const { HTTP_STATUS } = require('../constants');

const getAllSkills = asyncHandler(async (req, res) => {
    const skills = await Skills.find().lean().sort({ name: 1 });

    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, skills, 'Skills fetched successfully')
    );
});

module.exports = {
    getAllSkills,
};
