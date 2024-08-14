import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Adjust path accordingly

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isEmployer: {  // New field added
      type: DataTypes.BOOLEAN,
      defaultValue: false,  // Default to `false` meaning it's a candidate
  },
    // Add other fields as needed
});

export default User;
