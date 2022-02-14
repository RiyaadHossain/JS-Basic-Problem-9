
/* ১) একটা অ্যারেতে তোমার পছন্দের খাবার গুলো রাখো এবং যে সব খাবারের নামের মধ্যে m আছে সেসব খাবারের নামগুলো console log করো। */
let favFood = ['Ice-cream', 'Malta', 'Mango', 'Biriyani', 'Mutton', 'Chocolate', 'Muri']

function isM(arr){
    let result = [];
    for(const name of arr){
        let demo = name.toLowerCase()
        if(demo.includes('m')){
            result.push(name)
        }
    }
    return result;
}

console.log(isM(favFood))


/* ২) একটা অ্যারেতে তোমার বন্ধু বা বান্ধুবির পুরা নাম রাখো এবং যাদের নাম md দিয়ে শুরু হয় সেই নামগুলো প্রথমে console log করবে। তারপর পুরা জিনিসটা একটা ফাংশনে রাখো। এবং তোমার কাজ হবে যার যার নাম md দিয়ে শুরু হয়। সেই নামগুলো রিটার্ন করবে। 

এক্সট্রা: চেষ্টা করবে কারো নাম যদি MD বা Md বা md হয়। তাদের নাম যেন তোমার রিটার্ন রেজাল্টে যোগ হয়।  */

let myFriends = ['Md Sangram', 'Md Jamil', 'Yeasin', 'Sakhawat', 'Md Refayet', 'Nuzmul', 'Fahim', 'Arafat']

function incluedMD(arr){
    let allMD = '';
    for(const friend of arr){
        if(friend.toLowerCase().indexOf('md') != -1){
            allMD += friend + ", ";
        }
    }
    return allMD;
}

console.log(incluedMD(myFriends))


/* ৩) fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

এই উপরের অ্যারে থেকে Orange এবং Lemon প্রিন্ট করো slice() ব্যাবহার করে। */

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(fruits.slice(1,3)) /* Slice Method */
console.log(fruits.concat(myFriends, " hello"))
console.log(fruits.join(' and '))

// /* --------------------------- */
console.log(fruits.splice(2,2, "Papia", "Date", "Pineapple")) /* Splice Method */
console.log(fruits)

/* --------------------------- */
let myString = "Assalamu Alaikum, How are you Doing?"
console.log(myString.substring(7, 8)) /* Substring Method */
console.log(myString.substr(18,3)) /* Substr Method */
console.log(myString.indexOf("How")) /* indexOf Method */
console.log(myString.split(" ")) /* split Method */
console.log(myString.startsWith('A'))
console.log(myString.endsWith('?'))
console.log(Array.isArray(myString))
console.log(Array.isArray(myFriends))