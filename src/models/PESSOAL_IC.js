import sequelize, { Sequelize } from "sequelize"
import { connection } from "../config/connection.js"
const schema = ""

class modelPESSOAL_IC extends sequelize.Model{}
modelPESSOAL_IC.init(
    {
        ID_COLAB:{
            type:sequelize.BIGINT,
            allownull:false,
            primaryKey:true
        },
        NOME:{
            type:sequelize.TEXT,
            allowNull:false
        },
        CARGO:{
            type:sequelize.TEXT,
            allowNull:false
        },
        HORAS_DIA:{
            type:Sequelize.BIGINT,
            allowNull:false,
        },
        DATA_ENTRADA:{
            type:sequelize.DATE,
            allowNull:false,
        },
        DATA_SAIDA:{
            type:sequelize.DATE,
            allowNull:true,
        },
        STATUS:{
            type:Sequelize.TEXT,
            allowNull:false,
        },
    },
    {
        sequelize:connection,modelName:"PESSOAL_IC", freezeTableName:true, schema
    }
)
export { modelPESSOAL_IC }