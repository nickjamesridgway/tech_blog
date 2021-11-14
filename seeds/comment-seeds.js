const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is great!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "You've reached a new goal!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;