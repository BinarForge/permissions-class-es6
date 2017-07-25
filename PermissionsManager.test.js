import { expect } from 'chai'
import Permissions from './PermissionsManager.class'


const P = {
    PERM_BASIC: 0,
    PERM_A: 1,
    PERM_B: 2,
    PERM_BOLLOCKS: 4,
    PERM_IMPORTANT: 8,
    PERM_ADMIN: 16,
    PERM_DEV: 32,
    PERM_THOR: 64
}

describe("Given that the user has no permissions whatsoever", function(){
    let perm = new Permissions(P.PERM_BASIC);

    describe("When checking any permission", function(){
        let permissionCheck = perm.hasPermission(1024);
        
        it("Then the permission check results with false", function(){
            expect(permissionCheck).to.be.false;
        })
    })
})

describe("Given that the user has got one specific permission granted", function(){
    let perm = new Permissions(P.PERM_IMPORTANT);

    describe("When checking this specific permission", function(){
        let permissionCheck = perm.hasPermission(P.PERM_IMPORTANT);
        
        it("Then the permission check is positive", function(){
            expect(permissionCheck).to.be.true;
        })
    })

    describe("When checking any other permission", function(){
        let permissionCheck = perm.hasPermission(P.PERM_BOLLOCKS);
        
        it("Then the permission check results with false", function(){
            expect(permissionCheck).to.be.false;
        })
    })
})

describe("Given that the user has got few permissions granted", function(){
    let perm = new Permissions(P.PERM_BASIC);
    perm.setPermission(P.PERM_BOLLOCKS, true);
    perm.setPermission(P.PERM_ADMIN, true);

    describe("When checking for these specific permissions", function(){
        let permissionCheck = (perm.hasPermission(P.PERM_BOLLOCKS) && perm.hasPermission(P.PERM_ADMIN));
        
        it("Then the permission check is positive", function(){
            expect(permissionCheck).to.be.true;
        })
    })

    describe("When checking for any permissions never granted", function(){
        let permissionCheck = (perm.hasPermission(P.PERM_BASIC) 
                            || perm.hasPermission(P.PERM_A)
                            || perm.hasPermission(P.PERM_B)
                            || perm.hasPermission(P.PERM_IMPORTANT)
                            || perm.hasPermission(P.PERM_DEV)
                            || perm.hasPermission(P.PERM_THOR));
        
        it("Then the permission check results with false", function(){
            expect(permissionCheck).to.be.false;
        })
    })
})

describe("Given that the user has got few permissions granted at first", function(){
    let perm = new Permissions(P.PERM_BASIC);
    perm.setPermission(P.PERM_BOLLOCKS, true);
    perm.setPermission(P.PERM_IMPORTANT, true);
    perm.setPermission(P.PERM_ADMIN, true);
    perm.setPermission(P.PERM_DEV, true);

    describe("When performing the initial permission check", function(){
        let permissionCheck = (perm.hasPermission(P.PERM_BOLLOCKS) 
                            && perm.hasPermission(P.PERM_IMPORTANT)
                            && perm.hasPermission(P.PERM_ADMIN)
                            && perm.hasPermission(P.PERM_DEV));
        
        it("Then the permission check is positive for initially granted ones", function(){
            expect(permissionCheck).to.be.true;
        })

        it("But then the permission check results with false for the permissions suddenly taken back", function(){
            perm.setPermission(P.PERM_ADMIN, false);
            perm.setPermission(P.PERM_BOLLOCKS, false);
            
            let secondPermissionCheck = (perm.hasPermission(P.PERM_BOLLOCKS) || perm.hasPermission(P.PERM_ADMIN));

            expect(secondPermissionCheck).to.be.false;
        })
    })
})

describe("Given that the user has got few permissions granted following `flagging` style", function(){
    let perm = new Permissions(P.PERM_BASIC | P.PERM_DEV | P.PERM_IMPORTANT);

    describe("When performing the permission check against not granted ones", function(){
        let permissionCheck = perm.hasPermission(P.PERM_BOLLOCKS);
        
        it("Then the permission check results with false", function(){
            expect(permissionCheck).to.be.false;
        })
    })

    describe("When performing the permission check against valid ones", function(){
        let permissionCheck = perm.hasPermission(P.PERM_DEV);
        
        it("Then the permission check is positive", function(){
            expect(permissionCheck).to.be.true;
        })
    })
})