var Memcached = require('memcached');
var memcached = new Memcached('127.0.0.1:11211');
var lifetime = 86400; //24hrs
// Add first entry to cache
memcached.add('firstKey', 'First', lifetime, function( err, result ){
    if( err ) console.error( err );
    console.dir("add firstKey: " + result );
});
memcached.get('firstKey', function( err, result ){
    if( err ) console.error( err );
    console.dir("Value for firstKey: " + result );
});
// Change value
memcached.set('firstKey', 'First Updated', lifetime, function( err, result ){
    if( err ) console.error( err );
    console.dir("Set firstKey: " + result );
});
memcached.get('firstKey', function( err, result ){
    if( err ) console.error( err );
    console.dir("New value for firstKey: " + result );
});
// Add second entry to cache
memcached.add('secondKey', 'Second', lifetime, function( err, result ){
    if( err ) console.error( err );
    console.dir("add secondKey: "+ result );
});
memcached.get('secondKey', function( err, result ){
    if( err ) console.error( err );
    console.dir("Value for secondKey: " + result );
});
// Remove a single entry
memcached.del('firstKey', function( err, result ){
    if( err ) console.error( err );
    console.dir("del firstKey: " + result );
});
// Remove all entries
memcached.flush(function( err, result ){
    if( err ) console.error( err );
    console.dir("flush: " + result );
});