import { DataTypes, Model } from 'sequelize'
import SequelizeOrm from "../../lib/SequelizeOrm";

// Valid
class User extends Model {
    declare id: number
    declare name: string
    declare account: string
    declare email: string
    declare email_verified_at: number
    declare password: string
    declare remember_token: string
    declare created_at: number
    declare updated_at: number
    declare deleted_at: number

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    account: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255)
    },
    email_verified_at: {
        type: DataTypes.DATE,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    remember_token: {
        type: DataTypes.STRING(100),
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    },
    deleted_at: {
        type: DataTypes.DATE
    }
},{
    sequelize: SequelizeOrm.sequelize,
    tableName: 'Users',
    timestamps: false
});

// console.log("The table for the User model was just (re)created!");
export default User