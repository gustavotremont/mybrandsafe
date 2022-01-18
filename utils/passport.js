const passportJWT = require('passport-jwt');
const { Users } = require('../models')

const JwtStrategy = passportJWT.Strategy;

// usar con cookie-parser
const cookieExtractor = (req) => {
    var token = null;
    if (req && req.cookies) token = req.cookies['access_token'];
    return token;
};

const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = process.env.JWT_SECRET;

const passportJWTStrategy = (passport) => {
    passport.use( new JwtStrategy(opts, async (jwtPayload, done) => {
        const user = await Users.findOne({email: jwtPayload.email});
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    }));

    return passport;
}

const passportStrategies = {
    passportJWTStrategy
}

module.exports = passportStrategies;