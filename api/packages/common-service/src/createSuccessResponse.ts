export function createSuccessResponse(res, data = {}) {
    res.status(200).json({
        success: true,
        data,
    });
}
export function createSuccessCSVResponse(res, data, filename = 'file') {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader(
        'Content-Disposition',
        `attachment; filename="${filename}.csv"`,
    );

    res.send(data);
}
