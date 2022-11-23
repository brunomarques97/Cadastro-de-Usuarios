const Sequelize=require('sequelize')
const sequelize=new Sequelize('teste','root','123456',{
    host:"localhost",
    dialect:'mysql'
})
sequelize.authenticate().then(function(){
    console.log("conectado")
}).catch(function(erro){
    console.log("fallha: "+erro)
})