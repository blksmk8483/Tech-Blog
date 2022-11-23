const Post = require('./Post');
const User = require('./User');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

module.exports = { User, Post };



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
