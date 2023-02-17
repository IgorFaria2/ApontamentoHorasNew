import sequelize, { Sequelize } from "sequelize"
import { connection } from "../config/connection.js"
const schema = ""

class modelATIVIDADES extends sequelize.Model{}
modelATIVIDADES.init(
    {
        ID_ATIVIDADE:{
            type:sequelize.BIGINT,
            allownull:false,
            primaryKey:true            
        },
        ID_PROJETO:{
            type:Sequelize.BIGINT,
            references: {model: 'PROJETOS', key: 'ID_PROJETO'},
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        DESCRICAO:{
            type:sequelize.TEXT,
            allowNull:false,
        },
        HORAS:{
            type:sequelize.TIME,
            allowNull:false,
        },
        DATA_INICIO:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        STATUS:{
            type:Sequelize.TEXT,
            allowNull:false
        },
        ID_COLAB:{
            type:Sequelize.BIGINT,
            references: {model: 'PESSOAL_IC',key: 'ID_COLAB'},
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        },
    },
    {
        sequelize:connection,modelName:"ATIVIDADES", freezeTableName:true, schema
    }
)
export { modelATIVIDADES }