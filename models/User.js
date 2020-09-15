module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('User',{
            id: {
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            name:{
                type:DataTypes.STRING(120),
                allowNull:false
            },
            email:{
                type:DataTypes.STRING(120),
                allowNull:false
            },
            password:{
                type:DataTypes.STRING(255),
                allowNull:false
            }
        },{
            tableName:'users'
        }
    )
    return User;
}