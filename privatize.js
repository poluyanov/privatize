var privatize = function(construct, privat){
    var member,
        i,
        publicMembers = {},
        _construct;

    if(!(privat instanceof Array)){
        privat = [];
    }
 
    for(member in construct.prototype){
        publicMembers[member] = construct.prototype[member];
    }

    for(i = 0; i < privat.length; i++){
        if(privat[i] in construct.prototype){
            delete publicMembers[member];
        } else {
            throw Exception('Unknown privat method ' + privat[i] + ' in prototype')
        }
    }

    _construct = function(){
        var member;

        for(member in publicMembers){
            publicMembers[member] = publicMembers[member].bind(this)
        }

        construct.apply(this, arguments);

        return publicMembers
    };

    _construct.prototype = construct.prototype;

    return _construct;
};