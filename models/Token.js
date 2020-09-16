module.exports = (sequelize, DataTypes)=>{
    const Token = sequelize.define('Token',{
            id: {
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            hash:{
                type:DataTypes.STRING(255),
                allowNull:false
            },
            use:{
                type:DataTypes.INTEGER(1),
                allowNull:false
            },
            fk_user:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
        },{
            tableName:'token'
        })
        Token.associate = (listaModels)=>{
            Token.belongsTo(listaModels.User,{
                foreignKey:'fk_user',
                as:'user'
            })
        }
    return Token;
}