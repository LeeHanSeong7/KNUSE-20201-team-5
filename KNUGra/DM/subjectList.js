HashMap = function(){  
    this.map = new Array();
};  
HashMap.prototype = {  
    put : function(key, value){  
        this.map[key] = value;
    },  
    get : function(key){  
        return this.map[key];
    },  
    getAll : function(){  
        return this.map;
    },  
    clear : function(){  
        this.map = new Array();
    },  
    isEmpty : function(){    
         return (this.map.size() == 0);
    },
    remove : function(key){    
         delete this.map[key];
    },
    toString : function(){
        var temp = '';
        for(i in this.map){  
            temp = temp + ',' + i + ':' +  this.map[i];
        }
        temp = temp.replace(',','');
          return temp;
    },
    keySet : function(){  
        var keys = new Array();  
        for(i in this.map){  
            keys.push(i);
        }  
        return keys;
    }
};

class subjectList extends Object{

};
