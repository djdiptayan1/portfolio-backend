const { asyncHandler } = require('../utils/asyncHandler');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const Certificates = require('../utils/models/certificates.model');
const { HTTP_STATUS } = require('../constants');

/**
 * Helper function to parse date strings in various formats
 * Handles: "January 25, 2024", "February, 2024", "June 4, 2023"
 */
const parseCertificationDate = (dateStr) => {
    if (!dateStr) return new Date(0); // Return epoch for missing dates

    // Handle "Month Day, Year" format (e.g., "January 25, 2024")
    if (dateStr.match(/^[A-Za-z]+\s+\d{1,2},\s+\d{4}$/)) {
        return new Date(dateStr);
    }

    // Handle "Month, Year" format (e.g., "February, 2024")
    if (dateStr.match(/^[A-Za-z]+,\s+\d{4}$/)) {
        const [month, year] = dateStr.split(', ');
        return new Date(`${month} 1, ${year}`);
    }

    // Handle "Month Day Year" format without comma
    if (dateStr.match(/^[A-Za-z]+\s+\d{1,2}\s+\d{4}$/)) {
        const parts = dateStr.split(' ');
        return new Date(`${parts[0]} ${parts[1]}, ${parts[2]}`);
    }

    // Fallback: try to parse directly
    return new Date(dateStr);
};

const getAllCertifications = asyncHandler(async (req, res) => {
    const certifications = await Certificates.find().lean();

    // Sort certifications by date in descending order (most recent first)
    certifications.sort((a, b) => {
        const dateA = parseCertificationDate(a.date_str);
        const dateB = parseCertificationDate(b.date_str);
        return dateB - dateA; // Descending order
    });

    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, certifications, 'Certifications fetched successfully')
    );
});

module.exports = {
    getAllCertifications,
};
