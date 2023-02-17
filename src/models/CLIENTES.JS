import sequelize, { Sequelize } from "sequelize"
import { connection } from "../config/connection.js"
const schema = ""

class modelCLIENTES extends sequelize.Model{}
modelCLIENTES.init(
    {
        ID_CLIENTE:{
            type:sequelize.BIGINT,
            allownull:false,
            primaryKey:true            
        },
        NOME:{
            type:Sequelize.TEXT,
            allowNull:false,
        },
        INSTITUICAO:{
            type:Sequelize.TEXT,
            allowNull:false,
        },
        CONTATO:{
            type:Sequelize.TEXT,
            allowNull:false,
        },
        DISPONIBILIDADE_REUNIAO:{
            type:Sequelize.TEXT,
            allowNull:true,
        },
    },
    {
        sequelize:connection,modelName:"CLIENTES", freezeTableName:true, schema
    }
)
export { modelCLIENTES }