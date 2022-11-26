const Post = require('./Post');
const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Post, Blog };



// // Example with more than one
// const User = require('./User');
// const Gallery = require('./Gallery');
// const Painting = require('./Painting');

// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

// module.exports = { User, Gallery, Painting };
