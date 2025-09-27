import ratelimit from "../config/upstash.js"


// if we have auth, and change the 'my-limit-key' to user ID => better, so each user has its own limiter
const ratelimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit('my-limit-key')
        if (!success) {
            return res.status(429).json({
                message: 'Too many requests, please Try again Later'
            })
        }

        next()
    } catch (error) {
        console.log('Rate Limit Error : ', error)
        next(error)
    }
}

export default ratelimiter