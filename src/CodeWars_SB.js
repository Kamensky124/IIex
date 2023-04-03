// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false
// assert.strictEqual( isIsogram("Dermatoglyphics"), true );
// assert.strictEqual( isIsogram("isogram"), true );
// assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
// assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
// assert.strictEqual( isIsogram("isIsogram"), false );
// assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
//
// Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//     Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
// Test.assertEquals(XO('xo'),true);
// Test.assertEquals(XO("xxOo"),true);
// Test.assertEquals(XO("xxxm"),false);
// Test.assertEquals(XO("Oo"),false);
// Test.assertEquals(XO("ooom"),false);

// List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
// assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
// assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');







