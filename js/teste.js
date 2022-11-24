const Sequelize=require('sequelize')
const sequelize=new Sequelize('teste','root','123456',{
    host:"localhost",
    dialect:'mysql'
})
const postagem= sequelize.define('cadastro',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    DataDeNascimento:{
        type:Sequelize.data
    },
    cpf:{
        type:Sequelize.INTEGER
    }
})
postagem.sync({force:true})

    
sequelize.authenticate().then(function(){
    console.log("conectado")
}).catch(function(erro){
    console.log("fallha: "+erro)
})