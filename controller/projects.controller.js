const { asyncHandler } = require('../utils/asyncHandler');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const Projects = require('../utils/models/projects.model');
const { HTTP_STATUS } = require('../constants');

const getAllProjects = asyncHandler(async (req, res) => {
    const { type, feature } = req.query;

    const filter = {};
    if (type) filter.type = type;
    if (feature !== undefined) filter.feature = feature === 'true';

    const projects = await Projects.find(filter)
        .lean()
        .sort({ priority: 1 });

    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, projects, 'Projects fetched successfully')
    );
});

const getFeaturedProjects = asyncHandler(async (req, res) => {
    const projects = await Projects.find({ feature: true })
        .lean()
        .sort({ priority: 1 });

    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, projects, 'Featured projects fetched successfully')
    );
});

module.exports = {
    getAllProjects,
    getFeaturedProjects,
};
