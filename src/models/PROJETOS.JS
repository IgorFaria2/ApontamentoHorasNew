import sequelize, { Sequelize } from "sequelize"
import { connection } from "../config/connection.js"
const schema = ""

class modelPROJETOS extends sequelize.Model{}
modelPROJETOS.init(
    {
        ID_PROJETO:{
            type:sequelize.BIGINT,
            allownull:false,
            primaryKey:true
        },
        PIC:{
            type:Sequelize.TEXT,
            allowNull:false,
        },
        PI:{
            type:Sequelize.TEXT,
            allowNull:false,
        },
        ID_CLIENTE:{
            type:sequelize.BIGINT,
            references: {model: 'CLIENTES',key: 'ID_CLIENTE'},
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        LINK_DOC_ESCOPO_APROVADO:{
            type:Sequelize.TEXT,
            allowNull:false,
        },
    },
    {
        sequelize:connection,modelName:"PROJETOS", freezeTableName:true, schema
    }
)
export { modelPROJETOS }