// おみくじ

var results = [
    ["運勢：大吉","運勢：中吉", "運勢：小吉", "運勢：凶", "運勢：大凶"],
    ["願望：かなう！", "願望：かなうかも！", "願望：少し難しいかも", "願望：難しい...", "願望：無理かも..."],
    ["健康：元気いっぱい！", "健康：元気！", "健康：普通", "健康：少し疲れている", "健康：疲れている"],
    ["恋愛：成就する！", "恋愛：良い感じ！", "恋愛：まぁまぁ", "恋愛：喧嘩するかも", "恋愛：別れるかも"],
    ["金運：良し！", "金運：給料アップ", "金運：通常どおり", "金運：少し金欠", "金運：借金するかも"],
    ["学問：うまくいく！", "学問：点数アップ", "学問：平均的", "学問：壁にあたる", "学問：挫折"]
];

function drawOmikuji() {
    var result = '';
    var randomIndex = 0;
    for (var i = 0; i < results.length; i++) {
        if (i===0){
            randomIndex = Math.floor(Math.random() * results[i].length);
        } 
        result += results[i][randomIndex] + '<br>';
    }
    document.getElementById("result").innerHTML = result;
}



// 星占い

const rand1 = Math.random();
const rand2 = Math.random();
const rand3 = Math.random();
const rand4 = Math.random();
const rand5 = Math.random();

function getRandomStars(month, day) {
    var stars = [
        "★",
        "★★",
        "★★★",
        "★★★★",
        "★★★★★"
    ];
    var a = 0.9;
    var a1;
    var a2;
    var a3;
    var a4;
    var a5;
    if (month % 2 === 0 && day % 2 === 0) {
        if(rand1 >= 0.5){
            a = 1.0;
        }else{
            a = 0.5;
        }
        a1 = rand2;
        a2 = rand3;
        a3 = rand4;
        a4 = rand5;
        a5 = rand1;  
    } else if (month % 2 === 0) {
        if(rand2 >= 0.9){
            a = 0.5;
        }else{
            a = 1.0;
        }
        a1 = rand3;
        a2 = rand4;
        a3 = rand5;
        a4 = rand1;
        a5 = rand2; 
    } else if (day % 2 === 0) {
        if(rand3 >= 0.5){
            a = 1.0
        }else{
            a = 0.4;
        }
        a1 = rand4;
        a2 = rand5;
        a3 = rand1;
        a4 = rand2;
        a5 = rand3;
    } else {
        if(rand4 >= 0.9){
            a = 0.5;
        }else{
            a = 1.0;
        }
        a1 = rand5;
        a2 = rand1;
        a3 = rand2;
        a4 = rand3;
        a5 = rand4;
    }
    return [
        stars[Math.floor(a1 * stars.length *a)],
        stars[Math.floor(a2 * stars.length *a)],
        stars[Math.floor(a3 * stars.length *a)],
        stars[Math.floor(a4 * stars.length *a)],
        stars[Math.floor(a5 * stars.length *a)]
    ];
}

function showHoroscopeAndFortune() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var birthdate = new Date(year, month - 1, day);
    var signs = ["山羊座", "水瓶座", "魚座", "牡羊座", "牡牛座", "双子座", "蟹座", "獅子座", "乙女座", "天秤座", "蠍座", "射手座"];
    var last_day = [19, 18, 20, 19, 20, 21, 22, 22, 22, 23, 22, 21];
    var sign = month - (day > last_day[month - 1] ? 0 : 1);
    var result = "星座： " + signs[sign] + "<br>";
    var categories = ["願望", "健康", "恋愛", "金運", "学問"];
    var outsters = getRandomStars(month - 1, day);
    for (var i = 0; i < categories.length; i++) {
        result += categories[i] + "：" + outsters[i] + "<br>";
    }
    document.getElementById("horoscope").innerHTML = result;
}


