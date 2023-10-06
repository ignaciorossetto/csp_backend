const badRequest = (req,res,next) => {
    res.status(404).json({
        status: 'failed',
        code: 404,
        message: 'Bad request - url not found'
    })
}

module.exports = badRequest