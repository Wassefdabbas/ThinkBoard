import {Ratelimit} from '@upstash/ratelimit'
import {Redis} from '@upstash/redis'
import 'dotenv/config'

// create a ratelimiter that allows 10 request per 20s
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(150, '60 s')
})

export default ratelimit