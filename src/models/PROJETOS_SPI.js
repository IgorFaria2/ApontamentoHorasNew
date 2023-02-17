import sequelize, { Sequelize } from "sequelize"
import { connection } from "../config/connection.js"
const schema = ""

class modelPROJETOS_SPI extends sequelize.Model{}
modelPROJETOS_SPI.init(
    {
        ID_PROJETO_SPI:{
            type:sequelize.BIGINT,
            allownull:false,
            primaryKey:true
        },
        ID_PROJETO:{
            type:sequelize.BIGINT,
            references: {model: 'PROJETOS',key: 'ID_PROJETO'},
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        },
        INSTITUICAO:{
            type:sequelize.TEXT,
            allowNull:false,
        },
    },
    {
        sequelize:connection,modelName:"PROJETOS_SPI", freezeTableName:true, schema
    }
)
export { modelPROJETOS_SPI }