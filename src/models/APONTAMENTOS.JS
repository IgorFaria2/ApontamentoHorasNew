import sequelize, { Sequelize } from "sequelize"
import { connection } from "../config/connection.js"
const schema = ""

class modelAPONTAMENTOS extends sequelize.Model{}
modelAPONTAMENTOS.init(
    {
        ID_APONTAMENTO:{
            type:sequelize.BIGINT,
            allownull:false,
            primaryKey:true
        },
        ID_COLAB:{
            type:sequelize.BIGINT,
            references: {model: 'PESSOAL_IC', key: 'ID_COLAB'},
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        ID_PROJETO:{
            type:sequelize.BIGINT,
            references: {model: 'PROJETOS', key: 'ID_PROJETO'},
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        DATA:{
            type:sequelize.DATE,
            allowNull:false,
        },
        HORAS:{
            type:Sequelize.TIME,
            allowNull:false,
        },
        ID_CLASSE:{
            type:sequelize.BIGINT,
            references: {model: 'CLASSE_DE_ATIVIDADES', key: 'ID_CLASSE'},
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        }
    },
    {
    
        sequelize:connection,modelName:"APONTAMENTOS", freezeTableName:true, schema
    }
)
export { modelAPONTAMENTOS }