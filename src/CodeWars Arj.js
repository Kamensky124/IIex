    const findAverage = array =>
        array.length > 0 ? array.reduce((prev, curr) => prev + curr) / array.length : 0;

    function grow1(x) {
        return x.length > 0 ? x.reduce((res, n) => res * n) / x.length : 0;
    }

    function grow(x) {
        return x.reduce((res, n) => res * n);
    }

    function betterThanAverage(classPoints, yourPoints) {
        let classAverage = (classPoints.reduce((prev, curr) => prev + curr) / classPoints.length);
        if (classAverage < yourPoints) {
            return true
        }
        ;
        if (classAverage > yourPoints) {
            return false
        }
        ;
    }

    function shortcut(string) {
        return string.split(/[aeiou]/g).join('')
    }

    function getVowelCount(str) {
        var vowelsCounter = 0;
        str = str.toLowerCase();
        let vowels = ["a", "e", "i", "o", "u"];
        for (let i of str) {
            if (vowels.includes(i)) vowelsCounter++;
        }
        return vowelsCounter;
    }

    function makeUpperCase(str) {
        return str.toUpperCase();
    }

    // not correct with nan
    // function findAverage(array) {
    //     const initialValue = 0;
    //     arrLength = array.length;
    //     sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue) / arrLength;
    //     if (sumWithInitial != "NaN") {
    //         return sumWithInitial;
    //     };
    //     console.log (sumWithInitial);
    // if (sumWithInitial == "NaN") {
    //     return "0";
    // };
    // }

    //Codewars return price without vat

    //return price without vat
    function excludingVatPrice(price) {
        if (price == null) {
            return -1;
        } else {
            console.log(+(price / 1.15).toFixed(2));
            return +(price / 1.15).toFixed(2);
        }
    }

    // BAD
    // function excludingVatPrice(price){
    //     let exclVAT = (price / 1.15).toFixed(2);;
    //     if (exclVAT == 0) {return -1};
    //     if (exclVAT != 0) {return exclVAT};
    //         }

    //    console.log(excludingVatPrice(12340));

    // assertSimilar(, 106.96)

    // Setup


    // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection
    //  Record Collection
    //
    // After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
    // Failed:After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.
    //     Failed:After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
    // Failed:After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
    //     Passed:After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
    //     Failed:After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
    // Failed:After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide

    // Only change code below this line

    const recordCollection = {
        2548: {
            albumTitle: 'Slippery When Wet',
            artist: 'Bon Jovi',
            tracks: ['Let It Rock', 'You Give Love a Bad Name']
        },
        2468: {
            albumTitle: '1999',
            artist: 'Prince',
            tracks: ['1999', 'Little Red Corvette']
        },
        1245: {
            artist: 'Robert Palmer',
            tracks: []
        },
        5439: {
            albumTitle: 'ABBA Gold'
        }
    };

    // sol
    function updateRecords(records, id, prop, value) {
        if (prop !== 'tracks' && value !== "") {
            records[id][prop] = value;
        } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
            records[id][prop] = [value];
        } else if (prop === "tracks" && value !== "") {
            records[id][prop].push(value);
        } else if (value === "") {
            delete records[id][prop];
        }
        return records;
    };

    // console.log (updateRecords(recordCollection, 5439, 'artist', 'ABBA')); //returns 1.


    function howManyLightsabersDoYouOwn(name) {
        if (name == "Zach") {
            return 18
        }
        ;
        if (name != "Zach") {
            return 0
        }
        ;
    }

    function howManyLightsabersDoYouOwn(name) {
        return name === 'Zach' ? 18 : 0;
    }

    // let howManyLightsabersDoYouOwn = name => name == "Zach" ? 18 : 0;

    // console.log (howManyLightsabersDoYouOwn("Zach"));
    // console.log (howManyLightsabersDoYouOwn("Adam"));

    // n = 0  ==> [1]        # [2^0]
    // n = 1  ==> [1, 2]     # [2^0, 2^1]
    // n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
    // powersOfTwo(4), [1, 2, 4, 8, 16]

    // function powersOfTwo(n){
    //   let powers = [];
    //   for (i=0;i <=n;i++){
    //     let answer = 2**i
    //     powers.push(answer)
    //   }
    //   return powers
    // }
    //
    // const powersOfTwo = (exponent) => {
    //     let powers =[];
    //     for (let i=0;i <=exponent;i++){
    //         let arrayElement =2**i;
    //         powers.push(arrayElement);
    //     }
    //     return powers
    // }
    //
    // function powersOfTwo(n) {
    //   return Array.from({length: n + 1}, (v, k) => 2 ** k);
    // }
    //
    // powersOfTwo = n => [...Array(n + 1)].map((e, i) => Math.pow(2, i));
    // var powersOfTwo = n => Array.from({length : n + 1}, (val, i) => Math.pow(2, i));
    // // map method
    // const powersOfTwo = n => Array(n + 1).fill(2).map((e, i) => e**i )
    // const powersOfTwo = n =>
    //   [...Array(++n)].map((_, idx) => 2 ** idx);
    //
    // console.log(powersOfTwo(4))

    // function countPositivesSumNegatives(input) {
    //     let posCount = 0
    //     let negSum = 0
    //     let arEl = 0
    //     if (input === null || input.length === 0) {
    //         return []} else
    //     {for (let i = 0; i < input.length; i++) {
    //
    //         if (input[i] > 0) {
    //             posCount++
    //         } else {
    //             negSum = negSum + input[i]
    //         }
    //     }
    //         return [posCount, negSum]}
    // }
    //
    //     return [posCount, negSum]
    // }

    // let expected = [10, -65];
    // let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];


    // Disemvowel Trolls
    //
    // Trolls are attacking your comment section!
    // A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
    // Your task is to write a function that takes a string and return a new string with all vowels removed.
    // For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
    // Note: for this kata y isn't considered a vowel.
    //
    // function disemvowel(str) {
    //   var newStr = "";
    //   for (i = 0; i <= str.length; i++) {
    //     if (str.charAt(i) != "a" || str.charAt(i) != "e" || str.charAt(i) != "i" || str.charAt(i) != "o" || str.charAt(i) != "u") {
    //       newStr += str.charAt(i)
    //     }
    //     return newStr;
    //   }
    // }
    //
    // const { assert } = require("chai")
    //
    // describe("Basic tests", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    //     assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    //     assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    //     })
    //   })


    // CORRECT
    // function sum(numbers) {
    //     return numbers.reduce((a, b) => a + b, 0);
    // }

    //     function sum (numbers) {
    //         let resSum = 0;
    // numbers.forEach(item => resSum += item)
    //         return resSum
    //     };
    //     // console.log(sum([1, 2, 3, 4]))
    //     console.log(sum([]))


    // This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
    //
    //
    // assert.strictEqual(simpleMultiplication(2),16,'Should return given argument times eight...')
    // assert.strictEqual(simpleMultiplication(1),9, 'Should return given argument times nine...')
    // assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
    // assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
    // assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')
    //
    // function simpleMultiplication(n) {
    //     return n * (n % 2 ? 9 : 8);
    // }

    // console.log(sum([]))

    //
    // if (numbers !== [] ) {
    //     let result = numbers
    //         .reduce(function(sum, elem) {
    //         return sum + elem;
    //     }, 0);}
    // else {return result}
    // Test.assertEquals(sum([]), 0);
    // Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);

    //GOVNOKOD
    // var min = function (list) {
    //     let minItem = 0;
    //     for (let i = 0; i < list.length; i++) {
    //         if (list[i] <= minItem) {
    //             minItem = list[i];
    //         }
    //     }
    //
    //     console.log(Math.min(...list));
    //     return minItem;
    // }
    //
    // var max = function (list) {
    //     let maxItem = 0;
    //     for (let i = 0; i < list.length; i++) {
    //         if (list[i] >= maxItem) {
    //             maxItem = list[i];
    //         }
    //     }
    //     console.log(Math.max(...list));
    //     return maxItem;
    // }

    var min = function (list) {
        return list[0] = Math.min(...list)
    }

    var max = function (list) {
        return list[0] = Math.max(...list)
    }

    // BEST
    //     const min = (list) => Math.min(...list);
    //     const max = (list) => Math.max(...list);


    // console.log(max())
    // console.log(min([-52, 56, 30, 29, -54, 0, -110]));
    // console.log(min([42, 54, 65, 87, 0]));
    // console.log(max([4,6,2,1,9,63,-134,566]));
    // console.log(max([5]));

    // Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    // Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    // Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
    // Test.assertEquals(max([5]), 5);

    function fakeBin(initStr) {
        var newStr = "";
        // debugger;
        for (i = 0; i <= initStr.length; i++) {
            if (initStr[i] >= "5") {
                newStr += "1"
            }
            if (initStr[i] < "5") {
                newStr += "0"
            }
        }
        return newStr
    }

    // console.log(fakeBin('45385593107843568'))


    function fakeBin(x) {
        return x.split('').map(n => n < 5 ? 0 : 1).join('');
    }

    function fakeBin(x) {
        return x.replace(/\d/g, d => d < 5 ? 0 : 1);
    }

    function fakeBin(str) {
        var newStr = "";
        for (var i = 0; i < str.length; i++) {
            if (Number(str[i]) >= 5) {
                newStr += "1"
            } else {
                newStr += "0";
            }
        }
        return newStr;
    }

    // assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
    // assert.strictEqual(fakeBin('509321967506747'), '101000111101101');
    // assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');


    // If your name starts with the letter "R" or lower case "r", you are playing banjo!
    //     name + " plays banjo"
    // name + " does not play banjo"


    // MY
    function areYouPlayingBanjo(name) {

        name[0] === "R" | name[0] === "r" ? name = (name + " plays banjo") : name = (name + " does not play banjo");
        return name
    }

    // BEST
    function areYouPlayingBanjo(name) {
        return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
    }

    //
    //     console.log ('hi');
    // console.log (areYouPlayingBanjo("dima"))

    // assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    // assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    // assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    // assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    // assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");

    // Write function bmi that calculates body mass index (bmi = weight / height2).
    //     if bmi <= 18.5 return "Underweight"
    // if bmi <= 25.0 return "Normal"
    // if bmi <= 30.0 return "Overweight"
    // if bmi > 30 return "Obese"

    function bmi(weight, height) {
        let result = weight / (height ** 2)
        if (result <= 18.5) return "Underweight";
        if (result <= 25.0) return "Normal";
        if (result <= 30.0) return "Overweight";
        if (result > 30) return "Obese";
    }

    // через тернарный
    function bmi(weight, height) {

        var bmi = weight / (height * height);

        return bmi < 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

    }

    // через case
    function bmi(weight, height) {
        var formula = (weight / Math.pow(height, 2));
        switch (true) {
            case formula <= 18.5:
                return 'Underweight';
            case formula <= 25.0:
                return 'Normal';
            case formula <= 30:
                return 'Overweight';
            default:
                return 'Obese';

        }
    }

    // console.log (bmi(80,1.8))

    // assert.strictEqual(hero(10, 5), true);
    // assert.strictEqual(hero(7, 4), false);
    // assert.strictEqual(hero(4, 5), false);
    // assert.strictEqual(hero(100, 40), true);
    // assert.strictEqual(hero(1500, 751), false);
    // assert.strictEqual(hero(0, 1), false);

    function hero2(bullets, dragons) {
        return (dragons * 2 / bullets) <= 1 ? 'true' : 'false';
    }

    // BEST
    function hero3(bullets, dragons) {
        return bullets >= 2 * dragons
    }

    const hero4 = (bullets, dragons) => dragons * 2 <= bullets;

    function hero(bullets, dragons) {
//Get Coding!
        return (bullets / 2 >= dragons) ? true : false;
    }

    // console.log (hero(0, 1))
    // console.log (hero(7, 4))
    // console.log (hero(4, 5))
    // console.log (hero(100, 40))
    // console.log (hero(1500, 751))

    // assert.equal(zeroFuel(50, 25, 2), true);
    // assert.equal(zeroFuel(100, 50, 1), false);

    const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
        return distanceToPump <= (fuelLeft * mpg)
    };

    // console.log(zeroFuel(50, 25, 2))


    // DNA to RNA Conversion
    // Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
    //
    //     Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
    //
    //     Create a function which translates a given DNA string into RNA.
    //
    //     For example:
    //
    //     "GCAT"  =>  "GCAU"
    // The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

    // assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    // assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    // assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")

    function DNAtoRNA(dna) {
        // create a function which returns an RNA sequence from the given DNA sequence
        return dna.split('').map(e =>(e == "T") ? e = "U" : e
        ).join('')
    }

    function DNAtoRNA2(dna){
        return dna.replace(/T/g, 'U');
    }

    console.log(DNAtoRNA("ATTTT"))


    // Reversed sequence
    // Build a function that returns an array of integers from n to 1 where n>0.
    // Example : n=5 --> [5,4,3,2,1]
    // deepEqual(reverseSeq(5), [5, 4, 3, 2, 1])

    const reverseSeq = n => {
        let arrayForReverce = [];
        let countValue = n
        // debugger
        for (let i = 0; i < n + 1; i++) {
            arrayForReverce[i] = i
        }
        arrayForReverce.reverse()
        arrayForReverce.pop()
        return arrayForReverce;
    };

    const reverseSeq2 = n => {
        let arr = [];
        for (let i = n; i > 0; i--) {
            arr.push(i);
        }
        return arr;
    };

    const reverseSeq3 = n => {
        return Array(n).fill(0).map((e, i) => n - i);
    };

    // console.log(reverseSeq(5))

    // Trimming a string
    // assert.strictEqual(trim("Creating kata is fun", 14),"Creating ka...");
    // assert.strictEqual(trim("He", 1),"H...");
    // assert.strictEqual(trim("Code Wars is pretty rad", 50), "Code Wars is pretty rad");


    function trim(str, size) {
        debugger

        // GOOD 1
        if(str.length <= size) return str
        if(size <= 3)return str.slice(0,size) + '...'
        if(size > 3) return str.slice(0,size-3)+'...'

        // GOOD 2
        if ( str.length <= size ) {
            return str;
        }
        const real = str.slice(0, size);
        return `${real.length < 4 ? real : real.slice(0, -3)}...`;


    }
    // console.log(trim("Creating kata is fun", 14))
    // console.log(trim("He", 1))
    // console.log(trim("ho t34", 4))
    // console.log(trim("PrENT AXNR", 5))
    // console.log(trim("vWy uvv yUP apS", 2))
    // console.log(trim("ElP qRZ", 1))

    // VARIATIVE BAD
    // let result = ''
    // if (size===4){
    //     return result = str.slice(0, 4)+'...';
    // }
    // if (size===5){
    //     return result = str.slice(0, 2)+'...';
    // }
    // if (size !== 4 || 5) {
    //     if (str.length <= size) {
    //         return str
    //     }
    //     if (str.length > 3) {
    //         size -= 3
    //         if (size < 3) {
    //             size = size + 3//костыль
    //         }
    //     }
    //     for (let i = 0; i < size; i++) {
    //         result += str[i]
    //     }
    //     return result = result + "..."
    // }

    // var A BAD
    // return str.length <= size ?
    //     str :
    //     str.slice(0, str.length > 3 ?
    //         size - 3 :
    //         size) + "..."

    // var B BAD
    //     return str.length > size ? `${str.slice(0,str.length<3?size:size-3)}...`:str

    function rentalCarCost(d) {
        // Your solution here
        let rent = 40;
        let days3Off = 20;
        let days7Off = 50;
        let total = 0
        return (d < 3) ? (total = d * rent) :
            (d >= 3 && d < 7) ? (total = d * rent - days3Off) :
                (d >= 7) ? (total = d * rent - days7Off):0
    }

    // alternative
    const rentalCarCost3 = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
    function rentalCarCost4(d) {
        return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
    }

    console.log(rentalCarCost(3))
    // 6*4=240-20
    // very day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
    // assert.strictEqual(rentalCarCost(3), 100);
    // assert.strictEqual(rentalCarCost(4), 140);
    // assert.strictEqual(rentalCarCost(5), 180);
    // assert.strictEqual(rentalCarCost(6), 220);


    function countBy(x, n) {
        let z = [];
        let add = x;
        for (let i = 0; i < n; i++) {
            x=x+add
            z.push(x)
        }
        return z;
    }

    function countBy2(x, n) {
        var z = [];
        for (i = 1; i <= n; i++) {
            z.push(x * i);
        }
        return z;
    }

    const countBy3 = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

    console.log(countBy(2,10))

    // assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
    // assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")


    var countSheep = (num) => {

        if (num > 0) {
            let result = []
            for (let i = 1; i < num + 1; i++) {
                result.push(i + ' sheep...')
            }
            return result.join("")
        } else return ""
    }
    console.log(countSheep(3))
    console.log(countSheep(0))
    // assert.strictEqual(countSheep(0), "");
    // assert.strictEqual(countSheep(1), "1 sheep...");
    // assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    // assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");

    // assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");

    const highAndLow = (numbers) => {
        let strToArray = numbers.split(" ")
        return resArr = ([maxVal,minVal] = [Math.max(...strToArray), Math.min(...strToArray)]).join(' ')
    }

    console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

    // BestSol
    function highAndLow2(numbers){
        numbers = numbers.split(' ').map(Number);
        return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
    }

    // const bestStudent = students.reduce((acc, st) => acc>st ? acc : st);

    // You're a square!
    // Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
    // Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
    // Test.assertEquals(isSquare( 3), false, "3 is not a square number");
    // Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
    // Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
    // Test.assertEquals(isSquare(26), false, "26 is not a square number");
    //
    var isSquare = function(x)    {
        if (x >= 0) {

            // Find floating point value of
            // square root of x.
            let sr = Math.sqrt(x);

            // if product of square root
            // is equal, then
            // return T/F

            return ((sr * sr) == x);
        }
        return false;
    }
    // Your answer was wrong for 33: expected true to equal false
    // Your answer was wrong for 79: expected true to equal false


    var isSquare = function (x) {
        if (x >= 0) {

            // Find floating point value of
            // square root of x.
            let sr = Math.sqrt(x);
            console.log(sr);
            let testSr = Math.round(sr)
            // if product of square root
            // is equal, then
            // return T/F
            return ((testSr * testSr) == x);
        }
        return false;
    }

    // Вычислить квадратный корень
    // Округлить до ближайшего целого
    // Возвести в квадрат
    // Проверить, что совпадает с исходным числом.

    // BEST
    function isSquare2(n) {
        return Math.sqrt(n) % 1 === 0;
    }
    const isSquare3 = n => Number.isInteger(Math.sqrt(n));


    console.log(isSquare(4))
    console.log(isSquare(25))
    console.log(isSquare(26))
    console.log(isSquare(33))
    console.log(isSquare(79))


    // Get the Middle Character
    // You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
    // Test.assertEquals(getMiddle("test"),"es");
    // Test.assertEquals(getMiddle("testing"),"t");
    // Test.assertEquals(getMiddle("middle"),"dd");
    // Test.assertEquals(getMiddle("A"),"A");

    function getMiddle(s)
    {
        let strToArr = s.split('');
        let strMiddle = Math.round(strToArr.length/2)
        return (s.length%2)?strToArr[strMiddle-1]:strToArr[strMiddle-1] + strToArr[strMiddle]
    }
    console.log(getMiddle("test"))
    console.log(getMiddle("testing"))//odd

    // BEST
    function getMiddle2(s)
    {
        return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
    }
    function getMiddle3(s) {
        var middle = s.length / 2;
        return (s.length % 2)
            ? s.charAt(Math.floor(middle))
            : s.slice(middle - 1, middle + 1);
    }

    // Descending Order
    // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
    // assert.strictEqual(descendingOrder(0), 0)
    // assert.strictEqual(descendingOrder(1), 1)
    // assert.strictEqual(descendingOrder(111), 111)
    // assert.strictEqual(descendingOrder(15), 51)
    // assert.strictEqual(descendingOrder(1021), 2110)
    // assert.strictEqual(descendingOrder(123456789), 987654321)
    import {Z_BEST_COMPRESSION} from "zlib";

    descendingOrder =(num)=> {
        if ( num.toString().length>1) {
            let numbers = num.toString().split('');
            let iterationCount = 0;
            for (let j = 0; j < numbers.length - 1; j++) {
                let isSorted = true; //add conditional sort cycle
                for (let i = 0; i < numbers.length - 1 - j; i++) {
                    if (numbers[i] < numbers[i + 1]) {
                        isSorted = false;
                        iterationCount = iterationCount + 1;
                        [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]]
                    }
                }
                if (isSorted) break
            }
            let result = numbers.join('')
            return parseInt(result)}
        else {return num}
    }
    console.log(descendingOrder(768576567486467761))
    // BEST
    function descendingOrder2(n){
        return parseInt(String(n).split('').sort().reverse().join(''))
    }
    function descendingOrder3(n){
        return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
    }

    // Rock Paper Scissors
    // Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
    // Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
    // Test.assertEquals(rps('paper', 'rock'), getMsg(1));
    // Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
    // Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
    // Test.assertEquals(rps('rock', 'paper'), getMsg(2));
    // Test.assertEquals(rps('rock', 'rock'), 'Draw!');
    // Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
    // Test.assertEquals(rps('paper', 'paper'), 'Draw!');

    // "scissors", "paper" --> "Player 1 won!"
    // "scissors", "rock" --> "Player 2 won!"
    // "paper", "paper" --> "Draw!"

    const rps = (p1, p2) => {
        if (p1 === p2) {
            return 'Draw!'
        } else if (p1 === 'rock') {
            if (p2 === 'scissors') {
                return 'Player 1 won!'
            } else {
                return 'Player 2 won!'
            }
        } else if (p1 === 'paper') {
            if (p2 === 'rock') {
                return 'Player 1 won!'
            } else {
                return 'Player 2 won!'
            }
        } else if (p1 === 'scissors') {
            if (p2 === 'paper') {
                return 'Player 1 won!'
            } else {
                return 'Player 2 won!'
            }
        }
    };
    // console.log(rps('paper', 'scissors'))
    // BEST
    const rps2 = (p1, p2) => {
        if (p1 === p2) return "Draw!";
        var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
        if (p2 === rules[p1]) {
            return "Player 1 won!";
        } else {
            return "Player 2 won!";
        }
    };
    const rps3 = (p1, p2) => {
        if (p1 === p2) {
            return 'Draw!'
        }
        ;
        return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`;
    }
    const rps4 = (p1, p2) => {
        if (p1 === p2) return 'Draw!';
        if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
        if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
        if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
        return 'Player 2 won!';
    };

    // Exes and Ohs
    // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
    // XO("ooxx") => true
    // XO("xooxx") => false
    // XO("ooxXm") => true
    // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    // XO("zzoo") => false
    function XO(str) {
        let [countX, countO] = [0, 0];
        let str2 = str
            .toLowerCase()
            .split('')
        str2.forEach(s => {
                if (s === 'o') {countO++}
                else if (s === 'x') {countX++}
                return s
            }
        );
        return countX === countO
    }
    // console.log(XO("oOxX"))
    // BEST
    function XO2(str) {
        let x = str.match(/x/gi);
        let o = str.match(/o/gi);
        return (x && x.length) === (o && o.length);
    }
    const XO3 = str => {
        str = str.toLowerCase().split('');
        return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
    }
    function XO4(str) {
        return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
    }


    // List Filtering
    // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
    // assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
    // assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
    // assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
    function filter_list(l) {
        // Return a new array with the strings filtered out
        return l.filter(item => typeof item === 'number')
    }
    console.log(filter_list([1,2,'a','b']))

    // Rock Paper Scissors
    // Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
    // Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
    // Test.assertEquals(rps('paper', 'rock'), getMsg(1));
    // Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
    // Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
    // Test.assertEquals(rps('rock', 'paper'), getMsg(2));
    // Test.assertEquals(rps('rock', 'rock'), 'Draw!');
    // Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
    // Test.assertEquals(rps('paper', 'paper'), 'Draw!');

    // "scissors", "paper" --> "Player 1 won!"
    // "scissors", "rock" --> "Player 2 won!"
    // "paper", "paper" --> "Draw!"

    const rps = (p1, p2) => {
        if (p1 === p2) {
            return 'Draw!'
        } else if (p1 === 'rock') {
            if (p2 === 'scissors') {
                return 'Player 1 won!'
            } else {
                return 'Player 2 won!'
            }
        } else if (p1 === 'paper') {
            if (p2 === 'rock') {
                return 'Player 1 won!'
            } else {
                return 'Player 2 won!'
            }
        } else if (p1 === 'scissors') {
            if (p2 === 'paper') {
                return 'Player 1 won!'
            } else {
                return 'Player 2 won!'
            }
        }
    };
    // console.log(rps('paper', 'scissors'))
    // BEST
    const rps2 = (p1, p2) => {
        if (p1 === p2) return "Draw!";
        var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
        if (p2 === rules[p1]) {
            return "Player 1 won!";
        } else {
            return "Player 2 won!";
        }
    };
    const rps3 = (p1, p2) => {
        if (p1 === p2) {
            return 'Draw!'
        }
        ;
        return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`;
    }
    const rps4 = (p1, p2) => {
        if (p1 === p2) return 'Draw!';
        if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
        if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
        if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
        return 'Player 2 won!';
    };

    // Exes and Ohs
    // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
    // XO("ooxx") => true
    // XO("xooxx") => false
    // XO("ooxXm") => true
    // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    // XO("zzoo") => false
    function XO(str) {
        let [countX, countO] = [0, 0];
        let str2 = str
            .toLowerCase()
            .split('')
        str2.forEach(s => {
                if (s === 'o') {
                    countO++
                } else if (s === 'x') {
                    countX++
                }
                return s
            }
        );
        return countX === countO
    }

    // console.log(XO("oOxX"))
    // BEST
    function XO2(str) {
        let x = str.match(/x/gi);
        let o = str.match(/o/gi);
        return (x && x.length) === (o && o.length);
    }

    const XO3 = str => {
        str = str.toLowerCase().split('');
        return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
    }

    function XO4(str) {
        return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
    }


    // List Filtering
    // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
    // assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
    // assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
    // assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
    function filter_list(l) {
        // Return a new array with the strings filtered out
        return l.filter(item => typeof item === 'number')
    }

    console.log(filter_list([1, 2, 'a', 'b']))
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

    function isIsogram2(s) {
        let s2 = s.toLowerCase();
        let s4 = new Set(s)
        console.log(s4);
        return new Set(s2).size == s2.length;
    }

    console.log(isIsogram2("Deermatoglyphics"))

    function isIsogram3(str) {
        return new Set(str.toUpperCase()).size == str.length;
    }

    function isIsogram4(str) {
        return !/(\w).*\1/i.test(str)
    }

    //z.
    function isIsogram5(str) {
        var i, j;
        str = str.toLowerCase();
        for (i = 0; i < str.length; ++i)
            for (j = i + 1; j < str.length; ++j)
                if (str[i] === str[j])
                    return false;
        return true;
    }

    function isIsogram(str) {
        str = str.toLowerCase();
        let IsogramDictionary = []
        for (i = 0; i < str.length; i++) {
            IsogramDictionary[i] = str[i]
        }
        for (i = 0; i < str.length; i++) {
            for (j = 1; j < IsogramDictionary.length; j++)
                if (str[i] === IsogramDictionary[j]) {
                    console.log(str[i], IsogramDictionary[j])
                    return true
                }
        }
        return false
    }


    // String ends with?
    //     Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
    // Examples:
    //     solution('abc', 'bc') // returns true
    // solution('abc', 'd') // returns false
    // Test.assertEquals(solution('abcde', 'cde'), true)
    // Test.assertEquals(solution('abcde', 'abc'), false)

    function solution11(str, ending){
        if (ending.length > 0) {
            return str.slice(-ending.length) == ending ? true: false;
        }
        else {return true}
    }

    function solution12(str, ending){
        return str.endsWith(ending);
    }

    function solution13(str, ending){
        if (typeof(str) != "string" || typeof(ending) != "string")
            throw "wrong type";
        if (ending.length>str.length)
            return false;
        return str.substr(str.length-ending.length, ending.length) == ending;
    }

    function solution14(str, ending){
        let split_str = str.split('');
        let integerEnding = ending.length;

        let reversedArr = reverse(split_str);
        let reversedEnding = reverse((ending.split('')));
        let checker = true;

        for (let i = 0; i < integerEnding; i++) {
            if (reversedArr[i] != reversedEnding[i]){
                checker = false;
            }
        };

        return checker;


        function reverse(arr) {
            for (let i = 0; i < arr.length / 2; i++) {
                let oldElement = arr[i];
                let previousIndex = arr.length - 1 - i;
                arr[i] = arr[previousIndex];
                arr[previousIndex] = oldElement;
            }
            return arr;
        }
    }

    console.log(solution('abc', ''))
    // console.log(solution('abcde', 'abc'))
    // console.log(solution('ninja', 'ja'))

    // console.log(firstArr.length)
    // console.log(secondArr.length)
    // console.log([firstArr, secondArr])
    // console.log(firstArr.length - secondArr.length)


    // console.log(firstArr.length)
    // console.log(secondArr.length)
    // console.log([firstArr,secondArr])
    // console.log(firstArr.length-secondArr.length)
    // if (secondArr.length<=2) {for (let i=secondArr.length-2; i<firstArr.length; i++) {
    //
    //
    //     console.log(firstArr[i])
    //     console.log(secondArr[i-secondArr.length+2])
    // }}

    // assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    // assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
    // assert.strictEqual(findShort("Let's travel abroad shall we"), 2);

    console.log(findShort("Let's travel abroad shall we"))

    function findShort(s){
        const words=s.split(' ');
        const shortest = words.reduce((shortestWord, currentWord) => {
            return currentWord.length < shortestWord.length ? currentWord : shortestWord;
        }, words[0]);
        return shortest.length
    }

    function findShort2(s){
        return Math.min.apply(null, s.split(' ').map(w => w.length));
    }
    function findShort4(s){
        return Math.min(...s.split(" ").map (s => s.length));
    }
    function findShort3(s){
        var arr = s.split(' ');
        var smallest = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if(arr[i].length < smallest.length){
                smallest = arr[i];
            }
        }
        return smallest.length;
    }
    const findShort5 = (s) => s
        .split(' ')
        .sort((a, b) => b.length - a.length)
        .pop()
        .length;

    function findShort6(s) {
        return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
    }

    console.log(maskify('4556364607935616'))

    // return masked string
    function maskify(cc) {
        let arr = cc.split('')
        for (i=0;i<arr.length-4;i++) {
            arr[i]="#"
        }
        let str = arr.join('')
        return str
    }

    function maskify2(cc) {
        return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
    }

    function maskify(cc) {
        return cc.replace(/.(?=....)/g, '#');
    }



    function validatePIN2(pin) {
        const regex = /^(\d{4}|\d{6})$/
        return regex.test(pin);
    }
    // alt1
    function validatePIN11(pin) {
        return /^(\d{4}|\d{6})$/.test(pin)
    }
    // alt2
    function validatePIN12 (pin) {
        var pinlen = pin.length;
        var isCorrectLength = (pinlen == 4 || pinlen == 6);
        var hasOnlyNumbers = pin.match(/^\d+$/);
        if(isCorrectLength && hasOnlyNumbers){
            return true;
        }
        return false;
    }


    console.log(validatePIN('1'))
    console.log(validatePIN("12345"))
    console.log(validatePIN("123433"))
    // wrong
    function validatePIN(pin) {
        if (pin.length !== 4 && pin.length !== 6) {
            return false
        }
        pin = pin.split('')
        for (let i = 0; i < pin.length; i++) {
            if (isNaN(pin[i])) {
                return false
            }
        }
        return true
    }
    // wrong
    function validatePIN3(pin) {
        const acceptedPINLength = [4, 6];
        return acceptedPINLength.includes(pin.length) && !isNaN(pin);
    }


    // accum("abcd") -> "A-Bb-Ccc-Dddd"
    // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    // accum("cwAt") -> "C-Ww-Aaa-Tttt"

    // best
    function accum1(s) {
        return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
    }
    function accum2(s) {
        return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
    }

    function accum4(str) {
        var letters = str.split('');
        var result = [];
        for (var i = 0; i < letters.length; i++) {
            result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
        }
        return result.join('-');
    }
    // Here's the solution to the problem using JavaScript:

    // chatGPT
    function accum(str) {
        const arr = str.toLowerCase().split('');
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let letter = arr[i];
            result.push(letter.toUpperCase() + Array(i + 1).join(letter));
        }
        return result.join('-');
    }

    console.log(accum("abcd")); // Output: "A-Bb-Ccc-Dddd"

    // Let's go through the solution step-by-step:
    //
    // 1. We define a function named `accum` which takes a single parameter `str`.
    // 2. We convert the input string to lowercase characters and split them into an array using `split('')`.
    // 3. We initialize an empty array named `result` which we'll be using to store our intermediate results.
    // 4. We loop through all the elements of the `arr` array and for each character, we construct a string by concatenating one uppercase letter followed by `i+1` lowercase letters of the same kind using the `Array(i + 1).join(letter)` code.
    // 5. We push the constructed string to the `result` array.
    // 6. Finally, we join the `result` array elements with a hyphen `-` and return it.
    //
    //     When we run this code and pass the string `"abcd"` as an input, it produces the output `"A-Bb-Ccc-Dddd"`, which is the expected result.


