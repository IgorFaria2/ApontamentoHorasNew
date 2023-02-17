import sequelize from "sequelize"
import {databaseConfig} from "./database.js"

const connection = new sequelize(databaseConfig)

/*const connection = new sequelize(
    process.env.DATABASE,process.env.DATABASE_USERNAME,process.env.DATABASE_PASSWORD,{
        host: process.env.DATABASE_HOST,        
        dialect: 'mssql'
    }
);*/

connection.sync()

try{
    await connection.authenticate();
    console.log("CONEXÃO BEM SUCEDIDA")
}
catch (error){
    console.log(error)
}

export{ connection } 