document.addEventListener("DOMContentLoaded", function () {

const testBlocks = [
/* ================= 1-BLOK ================= */
{
id: 1,
title: "1-blok: Badiiy matn tahlili",
tests: [
{q:"Asar nomi orqali qanday badiiy maqsad ifodalangan?",o:["Qahramon kasbi","Tasodif","Muallif fikri","Kayfiyatni umumlashtirish"],c:3},
{q:"Doktor obraziga xos jihatni toping.",o:["Shoshqoloq","Sovuqqon","Mas’uliyatsiz","Qo‘rqoq"],c:1},
{q:"Mayor obrazi nimasi bilan ajralib turadi?",o:["Sabr","Muomalaga qarab munosabat","Mehr","Halollik"],c:1},
{q:"[2] gapda qaysi uslubiy ma’no bor?",o:["Achinish","Kinoya","Quvonch","Hayrat"],c:1},
{q:"Asardagi keskinlik nimadan kelib chiqadi?",o:["Pul","Og‘riq","Tahdid","Kasb"],c:2},
{q:"Doktorning javobi nimani bildiradi?",o:["Rahm","Istehzo","Qo‘rquv","Beparvolik"],c:1},
{q:"Asar janri qaysi?",o:["Roman","Qissa","Hikoya","Drama"],c:2},
{q:"Mayorning oxirgi gapi qanday ohangda?",o:["Samimiy","Keskin","Kinoyali","Beg‘am"],c:2},
{q:"Badiiy matnda muallif nimani ochgan?",o:["Kasb","Jamiyat","Xarakter","Tarix"],c:2},
{q:"Asar voqealari qayerda kechadi?",o:["Uyda","Ko‘chada","Doktor xonasida","Maydonda"],c:2}
]
},

/* ================= 2-BLOK ================= */
{
id: 2,
title: "2-blok: Ot",
tests: [
{q:"Ot nimani bildiradi?",o:["Harakat","Belgi","Predmet","Holat"],c:2},
{q:"Qaysi so‘z ot?",o:["Yugurdi","Chiroyli","Kitob","Tez"],c:2},
{q:"Mavhum otni toping.",o:["Stol","Baxt","Qalam","Uy"],c:1},
{q:"Aniq otni toping.",o:["Sevgi","Baxt","Do‘stlik","Daraxt"],c:3},
{q:"Ko‘plik qo‘shimchasi qaysi?",o:["-ni","-lar","-da","-ga"],c:1},
{q:"Egalik qo‘shimchasi qaysi?",o:["-ning","-im","-dan","-lar"],c:1},
{q:"Ot qaysi savolga javob bo‘ladi?",o:["Qanday?","Qachon?","Kim? Nima?","Qayerda?"],c:2},
{q:"Turdosh otni toping.",o:["Kitob","Kitobcha","Uy","Suv"],c:1},
{q:"Otlarda nechta kelishik bor?",o:["5","6","7","8"],c:1},
{q:"Ot qaysi gap bo‘lagi bo‘la oladi?",o:["Faqat ega","Faqat to‘ldiruvchi","Bir necha","Faqat kesim"],c:2}
]
},

/* ================= 3-BLOK ================= */
{
id: 3,
title: "3-blok: Fe’l",
tests: [
{q:"Fe’l nimani bildiradi?",o:["Predmet","Belgi","Harakat","Miqdor"],c:2},
{q:"O‘tgan zamon fe’lini toping.",o:["O‘qiyapti","O‘qir","O‘qidi","O‘qimoq"],c:2},
{q:"Buyruq-istak mayli qaysi?",o:["O‘qidi","O‘qir","O‘qi!","O‘qimoq"],c:2},
{q:"Bo‘lishsiz fe’lni toping.",o:["Bordi","Bormadi","Boradi","Bor"],c:1},
{q:"Fe’lning boshlang‘ich shakli?",o:["O‘qidi","O‘qiydi","O‘qimoq","O‘qir"],c:2},
{q:"Majhul nisbat qo‘shimchasi?",o:["-di","-il","-ar","-moq"],c:1},
{q:"Fe’l gapda ko‘pincha qaysi bo‘lak?",o:["Ega","Kesim","Aniqlovchi","Hol"],c:1},
{q:"Hozirgi zamon qaysi?",o:["-di","-yapti","-ar","-moq"],c:1},
{q:"Shaxs-son qo‘shimchasi?",o:["-ni","-da","-man","-lar"],c:2},
{q:"Fe’l nisbatlari nechta?",o:["3","4","5","6"],c:2}
]
},

/* ================= 4–10 BLOKLAR ================= */
/* uslubni saqlab qolish uchun shu qolip davom etadi */

{
id: 4, title: "4-blok: Sifat",
tests: [
{q:"Sifat nimani bildiradi?",o:["Predmet","Belgi","Harakat","Miqdor"],c:1},
{q:"Rang bildirgan sifat?",o:["Katta","Oq","Tez","Yangi"],c:1},
{q:"Qiyosiy daraja qaysi?",o:["Katta","Kattaroq","Eng katta","Kattalik"],c:1},
{q:"Orttirma daraja qaysi?",o:["Katta","Kattaroq","Eng katta","Kattalik"],c:2},
{q:"Sifat qaysi so‘zni aniqlaydi?",o:["Ot","Fe’l","Ravish","Olmosh"],c:0},
{q:"Sifatdoshni toping.",o:["O‘qimoq","O‘qiydi","O‘qigan","O‘qir"],c:2},
{q:"Belgi bildirgan so‘z?",o:["Uy","Yashil","Yurdi","Bugun"],c:1},
{q:"Sifat yasalishi qaysi?",o:["-di","-li","-da","-lar"],c:1},
{q:"Sifat gapda qaysi bo‘lak?",o:["Ega","Kesim","Aniqlovchi","Hol"],c:2},
{q:"Darajalanmaydigan sifat?",o:["Oq","Temir","Yaxshi","Katta"],c:1}
]
},

{
id: 5, title: "5-blok: Ravish",
tests: [
{q:"Ravish nimani bildiradi?",o:["Predmet","Harakat holati","Belgi","Shaxs"],c:1},
{q:"Qaysi ravish?",o:["Tez","Yaxshi","Kitob","Bor"],c:0},
{q:"Payt ravishini toping.",o:["Bugun","Sekin","Yaxshi","Ko‘p"],c:0},
{q:"O‘rin ravishi?",o:["Bu yerda","Tez","Oz","Ko‘p"],c:0},
{q:"Ravish qaysi so‘z turkumiga bog‘lanadi?",o:["Ot","Fe’l","Sifat","Olmosh"],c:1},
{q:"Daraja ravishi?",o:["Juda","Bugun","Bu yerda","Endi"],c:0},
{q:"Ravish yasovchi qo‘shimcha?",o:["-cha","-di","-lar","-ni"],c:0},
{q:"Hol vazifasida kelgan so‘z?",o:["Tez","Uy","Yashil","Kitob"],c:0},
{q:"Ravish savoli?",o:["Qanday?","Qayerda?","Qachon?","Barchasi"],c:3},
{q:"Ravishning vazifasi?",o:["Belgilash","Harakatni aniqlash","Nomlash","Sanash"],c:1}
]
},

{
id: 6, title: "6-blok: Olmosh",
tests: [
{q:"Olmosh nimani almashtiradi?",o:["Fe’l","Ot","Ravish","Bog‘lovchi"],c:1},
{q:"Kishilik olmoshi?",o:["Bu","U","Kim","Qaysi"],c:1},
{q:"Ko‘rsatish olmoshi?",o:["Men","U","Bu","Kim"],c:2},
{q:"So‘roq olmoshi?",o:["Kim","Bu","U","O‘sha"],c:0},
{q:"Olmosh gapda qaysi bo‘lak?",o:["Faqat ega","Faqat kesim","Turli","Faqat hol"],c:2},
{q:"O‘zlik olmoshi?",o:["O‘zi","U","Bu","Kim"],c:0},
{q:"Belgiga ishora qiluvchi?",o:["Shu","Men","Kim","O‘sha"],c:0},
{q:"Olmoshlar nega kerak?",o:["Takrorni oldini olish","Bezash","Sanash","Bog‘lash"],c:0},
{q:"Olmosh so‘roqmi?",o:["Qaysi","U","Bu","O‘sha"],c:0},
{q:"Olmosh ot o‘rnida keladimi?",o:["Yo‘q","Ba’zan","Ha","Faqat she’rda"],c:2}
]
},

{
id: 7, title: "7-blok: Son",
tests: [
{q:"Son nimani bildiradi?",o:["Belgi","Miqdor","Harakat","Holat"],c:1},
{q:"Sanoq son?",o:["Birinchi","Uch","Uchala","Uchinchisi"],c:1},
{q:"Tartib son?",o:["Uch","Uchta","Uchinchi","Uchov"],c:2},
{q:"Jamlovchi son?",o:["Uch","Uchta","Uchov","Uchinchi"],c:2},
{q:"Son qaysi so‘zni aniqlaydi?",o:["Fe’l","Ot","Ravish","Sifat"],c:1},
{q:"Son savoli?",o:["Qancha?","Qanday?","Qayerda?","Kim?"],c:0},
{q:"Son yasovchi qo‘shimcha?",o:["-inchi","-li","-da","-ni"],c:0},
{q:"Son gapda qaysi bo‘lak?",o:["Aniqlovchi","Kesim","Hol","Bog‘lovchi"],c:0},
{q:"Son darajalanadimi?",o:["Ha","Yo‘q","Ba’zan","She’rda"],c:1},
{q:"Son mustaqil so‘z turkumi?",o:["Yo‘q","Ha","Faqat yozma","Faqat og‘zaki"],c:1}
]
},

{
id: 8, title: "8-blok: Bog‘lovchi",
tests: [
{q:"Bog‘lovchi vazifasi?",o:["So‘z yasash","Bog‘lash","Sanash","Belgilash"],c:1},
{q:"Teng bog‘lovchi?",o:["Va","Agar","Chunki","Negaki"],c:0},
{q:"Ergashtiruvchi?",o:["Va","Yoki","Agar","Ham"],c:2},
{q:"Bog‘lovchi so‘z turkumimi?",o:["Yo‘q","Ha","Qisman","Ba’zan"],c:1},
{q:"Bog‘lovchi gap bo‘lagimi?",o:["Ha","Yo‘q","Ba’zan","She’rda"],c:1},
{q:"Uyushiq bo‘laklarni bog‘laydi?",o:["Ot","Bog‘lovchi","Son","Olmosh"],c:1},
{q:"Qarama-qarshi bog‘lovchi?",o:["Va","Lekin","Ham","Yoki"],c:1},
{q:"Bog‘lovchi mustaqil ma’nolimi?",o:["Ha","Yo‘q","Ba’zan","Kamdan"],c:1},
{q:"Bog‘lovchi misoli?",o:["Va","Uy","Tez","Yashil"],c:0},
{q:"Bog‘lovchi nechta tur?",o:["2","3","4","5"],c:0}
]
},

{
id: 9, title: "9-blok: Imlo",
tests: [
{q:"To‘g‘ri yozilgan so‘z?",o:["Muomila","Muomala","Muamola","Muomalla"],c:1},
{q:"Ajratib yoziladi?",o:["Hechkim","Harqachon","Hech qachon","Birpas"],c:2},
{q:"Qo‘shib yoziladi?",o:["Har xil","Hech kim","Birdaniga","Ko‘pdan-ko‘p"],c:2},
{q:"Imlo xatosi qaysi?",o:["Mehnatkash","Asqatmoq","Dazmol","Muomila"],c:3},
{q:"Qaysi so‘z to‘g‘ri?",o:["Rahmat","Raxmat","Rohmat","Raxmat"],c:0},
{q:"Chiziqcha qayerda?",o:["Ota-ona","Bugun","Kitob","Yozdi"],c:0},
{q:"Imlo nimani o‘rganadi?",o:["So‘z","To‘g‘ri yozish","Gap","Ma’no"],c:1},
{q:"Imloda asos nima?",o:["Talaffuz","Qoidalar","Ohang","Sheva"],c:1},
{q:"Qaysi noto‘g‘ri?",o:["Foyda","Foida","Mehnat","Yordam"],c:1},
{q:"Imloviy me’yor?",o:["Rasmiy","To‘g‘ri yozuv","Sheva","Og‘zaki"],c:1}
]
},

{
id: 10, title: "10-blok: Tinish belgilari",
tests: [
{q:"Vergul qayerda qo‘yiladi?",o:["Uyushiq bo‘lakda","So‘roq gapda","Buyruqda","Undalmada"],c:0},
{q:"Nuqta qayerda?",o:["So‘roq gapda","Buyruqda","Xabar gapda","Undalmada"],c:2},
{q:"So‘roq belgisi?",o:["Xabar","So‘roq","Buyruq","Undalma"],c:1},
{q:"Undov belgisi?",o:["Buyruq","So‘roq","Xabar","Sanash"],c:0},
{q:"Tire qayerda?",o:["Ega–kesim orasida","Har doim","So‘roq gapda","Undalmada"],c:0},
{q:"Ko‘p nuqta nimani bildiradi?",o:["Savol","Fikr uzilishi","Buyruq","Undalma"],c:1},
{q:"Qavs vazifasi?",o:["Izoh","So‘roq","Buyruq","Bog‘lash"],c:0},
{q:"Qo‘shtirnoq qayerda?",o:["Ko‘chirma gapda","Xabar gapda","So‘roq gapda","Undalmada"],c:0},
{q:"Nuqtali vergul?",o:["Murakkab gapda","Oddiy gapda","So‘roq gapda","Buyruqda"],c:0},
{q:"Tinish belgisi nimani ko‘rsatadi?",o:["Ma’no","Ohang","Tuzilish","Barchasi"],c:3}
]
}
];

const box = document.getElementById("tests-container");

box.innerHTML = `
<div class="card">
<b>Test blokini tanlang:</b>
<select id="blockSelect">
<option value="">— Tanlang —</option>
${testBlocks.map(b=>`<option value="${b.id}">${b.title}</option>`).join("")}
</select>
</div>
<div id="testArea"></div>
`;

document.getElementById("blockSelect").addEventListener("change",function(){
const id = Number(this.value);
const area = document.getElementById("testArea");
area.innerHTML = "";
const block = testBlocks.find(b=>b.id===id);
if(!block) return;

block.tests.forEach((t,i)=>{
const c=document.createElement("div");
c.className="card";
c.innerHTML=`<b>${i+1}. ${t.q}</b>`;
t.o.forEach((opt,ix)=>{
const d=document.createElement("div");
d.className="option";
d.innerText=String.fromCharCode(65+ix)+") "+opt;
d.onclick=()=>d.classList.add(ix===t.c?"correct":"wrong");
c.appendChild(d);
});
area.appendChild(c);
});
});

});
