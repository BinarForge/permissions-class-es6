export default class PermissionsManager
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
                this.userPermissions += permission|0;
            }
        }
        else{
            if(this.bitCheck(this.userPermissions, permission)){
                this.userPermissions -= permission|0;
            }
        }
    }

    hasPermission(permission){
        return this.bitCheck(permission|0, this.userPermissions);
    };

    getPermissionsSumValue(){
        return this.userPermissions;
    }
}