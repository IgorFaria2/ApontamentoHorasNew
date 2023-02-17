import sequelize, { Sequelize } from "sequelize"
import { connection } from "../config/connection.js"
const schema = ""

class modelFERIAS extends sequelize.Model{}
modelFERIAS.init(
    {
        ID_FERIAS:{
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
        DATA_INICIO:{
            type:sequelize.DATE,
            allowNull:false
        },
        DATA_VOLTA:{
            type:sequelize.DATE,
            allowNull:false
        },
    },
    {
        sequelize:connection,modelName:"FERIAS", freezeTableName:true, schema
    }
)
export { modelFERIAS }