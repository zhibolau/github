module.exports = function(name, width, height){
    this.name = name;
    this.width = width;
    this.height = height;
    
    var api = {
        getName : getName,
        getWidth : getWidth,
        setWidth : setWidth,
        setName : setName
    };
    return api;
    
    function getName(){
        return this.name;
    }
    function setName(name){
        return this.name = name;
    }
    function getWidth(){
        return this.width;
    }
    function setWidth(width){
        return this.width = width;
    }
}