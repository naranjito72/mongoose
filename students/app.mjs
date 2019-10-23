import MongoManager from './mongo/MongoManager.mjs';
import config from './config.mjs';
import {Student} from './model/model.mjs';

const mongo = new MongoManager(config);

mongo.connect();

const ana = new Student({
    name: 'ana'
})

const projecto = {
    title: 'Mongoose'
}

ana.projects.push(projecto);
//opción callback
ana.save((error, student)=>{
    if(error){
        console.log(error)
    }else {
        console.log(student + 'se guardó en la bd')
    }
})
//opción promesa
ana.save().then(student =>console.log(student + 'se guardó en la bd'))
          .catch(error => console.log(error));
