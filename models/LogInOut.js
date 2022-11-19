const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection') // Double check this is correct ---------
const bcrypt = require('bcrypt');

class LogInOut extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

LogInOut.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [8],
    },
  },
},
{
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
  }

);

module.exports = LogInOut;