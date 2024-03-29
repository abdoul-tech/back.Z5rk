const { Model } = require('mongoose')


const Controllers = {
    auth: require('./auth.controller'),
    nft: require('./nft.controller'),
    user: require('./user.controller'),
    comment: require('./comment.controller'),
    collection: require('./collection.controller'),
}

module.exports = Controllers;