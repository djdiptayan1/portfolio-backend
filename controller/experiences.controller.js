const { asyncHandler } = require('../utils/asyncHandler');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const Experience = require('../utils/models/experiences.model');
const { HTTP_STATUS, MESSAGES } = require('../constants');


const parseExperienceDate = (dateStr) => {
    if (dateStr === 'Present') {
        return new Date();
    }

    const [month, year] = dateStr.split(', ').map(s => s.trim());
    const monthMap = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'June': 5,
        'July': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11,
        'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
        'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };

    return new Date(parseInt(year), monthMap[month] || 0);
};

const getAllExperiences = asyncHandler(async (req, res) => {
    const experiences = await Experience.find().lean();

    experiences.sort((a, b) => {
        const dateA = parseExperienceDate(a.date.start);
        const dateB = parseExperienceDate(b.date.start);
        return dateB - dateA;
    });

    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, experiences, 'Experiences fetched successfully')
    );
});

module.exports = {
    getAllExperiences,
};
