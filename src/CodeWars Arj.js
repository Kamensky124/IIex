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
