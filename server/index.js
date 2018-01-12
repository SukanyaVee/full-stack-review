const express =require('express')
const bodyParser=require('body-parser')
const massive= require ('massive')
const session = require('express-session')


require('dotenv').config()

const app=express(); 

app.use(bodyParser.json());
app.use(session({
    secret: process.env.CONNECTION_STRING,
    saveUninitialized: false,
    resave: false,
    // cookie: {maxAge=10000000}
}))

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db);
}).catch(error=>console.error(error))

app.post('/login', (req,res)=>{
    const {userId} = req.body;
    const auth0url = `https://$process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`;
    axios.get(auth0url, {
        headers: {
            Authorization: 'Bearer ' + process.env.AUTH0_MANAGEMENT_ACCES_TOKEN
        }
    }).then(response=> {
        const userData = response.data;
        req.session.user={
            name: userData.name, 
            email: userData.email, 
            auth0_id: userData.user_id, 
            pictureUrl: userData.picture
        };
        res.json({user: req.session.user});
    }).catch(error=> {
        console.log('error', error);
        res.status(500).json({message: 'problematic'})
    })
})

const PORT=3035;
app.listen(PORT, ()=>console.log("listening on port: "+PORT));