import { Sequelize } from "sequelize";

const database = new Sequelize('fullstack-mern','root','',{
    host: 'localhost',
    dialect:'mysql'
});

export default database;