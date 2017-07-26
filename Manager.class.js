export default class Manager
{
    constructor(userPermissions){
        this.userPermissions = userPermissions;
    }

    bitCheck(a, b){
        return (a & b) > 0;
    }

    setPermission(permission, give){
        if(give === true){
            if(!this.bitCheck(this.userPermissions, permission)){
                this.userPermissions += permission;
            }
        }
        else{
            if(this.bitCheck(this.userPermissions, permission)){
                this.userPermissions -= permission;
            }
        }
    }

    hasPermission(permission){
        return this.bitCheck(permission, this.userPermissions);
    };

    getPermissionsSumValue(){
        return this.userPermissions;
    }
}