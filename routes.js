module.exports = function(app){
  app.get('/', (req,res) => {
    res.send({message: 'first json object'})
  });
}
