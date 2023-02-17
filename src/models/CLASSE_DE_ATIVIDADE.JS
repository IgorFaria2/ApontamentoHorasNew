import sequelize, { Sequelize } from "sequelize"
import { connection } from "../config/connection.js"
const schema = ""

class modelCLASSE_DE_ATIVIDADES extends sequelize.Model{}
modelCLASSE_DE_ATIVIDADES.init(
    {
        ID_CLASSE:{
            type:sequelize.BIGINT,
            allownull:false,
            primaryKey:true
        },
        ATIVIDADE_IC:{
            type:Sequelize.TEXT,
            allowNull:false
        },
        GRUPO:{
            type:sequelize.TEXT,
            allowNull:false
        },
        ATIVIDADE_SPI:{
            type:sequelize.TEXT,
            allowNull:false,
        },
        DESCRICAO:{
            type:Sequelize.TEXT,
            allowNull:true,
        },
    },
    {
        sequelize:connection,modelName:"CLASSE_DE_ATIVIDADES", freezeTableName:true, schema
    }
)
export { modelCLASSE_DE_ATIVIDADES }