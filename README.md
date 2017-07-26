### permissions-class-es6
This is small helper class to help managing flag-based permissions.

### No rocket science

Run `npm run release` to `test` & `build` & `babelify` & `compress` into permissions-manager.min.js ready-to-go file. How difficiult can it be in current Java Script world?

### Usage

```javascript
// permissions set
var P = {
    PERM_NONE: 0,
    PERM_A: 1,
    PERM_B: 2,
    PERM_BOLLOCKS: 4,
    PERM_IMPORTANT: 8,
    PERM_ADMIN: 16,
    PERM_DEV: 32,
    PERM_THOR: 64
}

// no permissions initially
var perm = new PermissionsManager(P.PERM_NONE);

if(perm.hasPermission(P.PERM_IMPORTANT)){
  // will not happen
}

perm.setPermission(P.PERM_IMPORTANT);

if(perm.hasPermission(P.PERM_IMPORTANT)){
  // now it is possible
}

```
