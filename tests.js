document.addEventListener("DOMContentLoaded", function () {

const testBlocks = [
/* ================= 1-BLOK ================= */
{
id:1,
title:"1-blok: Ot",
tests:[
{q:"Ot qanday so‘z turkumi?",o:["Predmet nomini bildiradi","Harakatni bildiradi","Belgi bildiradi","Miqdorni bildiradi"],c:0},
{q:"Qaysi so‘z ot?",o:["Yugurdi","Kitob","Chiroyli","Tez"],c:1},
{q:"Shaxs nomi bildirgan ot?",o:["Shahar","O‘qituvchi","Daraxt","Kitob"],c:1},
{q:"Jamlovchi ot qaysi?",o:["Yoshlar","Kitoblar","Uylar","Bolalar"],c:0},
{q:"Otning so‘roqlari?",o:["Qanday?","Qancha?","Kim? Nima?","Qayerda?"],c:2},
{q:"Mavhum ot qaysi?",o:["Baxt","Stol","Qalam","Uy"],c:0},
{q:"An’anaviy ot qaysi?",o:["Daraxt","Yugurish","Chiroyli","Tez"],c:0},
{q:"Ko‘plik qo‘shimchasi?",o:["-ni","-da","-lar","-ning"],c:2},
{q:"Ot yasovchi qo‘shimcha?",o:["-chi","-roq","-gina","-day"],c:0},
{q:"Qaysi gapda ot bor?",o:["U yugurdi","Kitob stol ustida","U chiroyli","Tez keldi"],c:1}
]
},

/* ================= 2-BLOK ================= */
{
id:2,
title:"2-blok: Fe’l",
tests:[
{q:"Fe’l nimani bildiradi?",o:["Predmet","Harakat","Belgi","Miqdor"],c:1},
{q:"Qaysi fe’l?",o:["O‘qish","Kitob","Chiroyli","Uy"],c:0},
{q:"Bo‘lishsiz fe’l qaysi?",o:["Bordi","Bormadi","Keladi","O‘qiydi"],c:1},
{q:"Fe’lning so‘roqlari?",o:["Kim?","Nima?","Nima qildi?","Qanday?"],c:2},
{q:"Buyruq-istak fe’li?",o:["Bor","Boradi","Borgan","Borsa"],c:0},
{q:"O‘tgan zamon fe’li?",o:["Boradi","Bordi","Bor","Borsin"],c:1},
{q:"Hozirgi zamon fe’li?",o:["O‘qidi","O‘qiyapti","O‘qir","O‘qisin"],c:1},
{q:"Kelasi zamon fe’li?",o:["Boradi","Bordi","Borgan","Bor"],c:0},
{q:"Fe’l yasovchi qo‘shimcha?",o:["-la","-chi","-kor","-zor"],c:0},
{q:"Qaysi gapda fe’l bor?",o:["Kitob stol ustida","U o‘qiyapti","Uy katta","Bugun issiq"],c:1}
]
},

/* ================= 3-BLOK ================= */
{
id:3,
title:"3-blok: Sifat",
tests:[
{q:"Sifat nimani bildiradi?",o:["Harakat","Belgi","Predmet","Miqdor"],c:1},
{q:"Qaysi sifat?",o:["Yugurdi","Katta","Kitob","Bor"],c:1},
{q:"Asliy sifat?",o:["Oq","Oqish","Oppoq","Oqartir"],c:0},
{q:"Nisbiy sifat?",o:["Yozgi","Oppoq","Yaxshi","Tez"],c:0},
{q:"Sifatning so‘roqlari?",o:["Kim?","Qanday?","Nima qildi?","Qayer?"],c:1},
{q:"Orttirma daraja?",o:["Katta","Kattaroq","Eng katta","Kattagina"],c:2},
{q:"Qiyosiy daraja?",o:["Yaxshi","Yaxshiroq","Eng yaxshi","Yaxshigina"],c:1},
{q:"Sifat yasovchi qo‘shimcha?",o:["-li","-chi","-la","-zor"],c:0},
{q:"Qaysi gapda sifat bor?",o:["Uy katta","U yugurdi","Kitob o‘qidi","Borib keldi"],c:0},
{q:"Belgi bildirgan so‘z?",o:["Tez","Chiroyli","O‘qidi","Kitob"],c:1}
]
},

/* ================= 4-BLOK ================= */
{
id:4,
title:"4-blok: Ravish",
tests:[
{q:"Ravish nimani bildiradi?",o:["Belgi","Harakat holati","Predmet","Shaxs"],c:1},
{q:"Qaysi ravish?",o:["Tez","Katta","Kitob","Uy"],c:0},
{q:"Payt ravishi?",o:["Bugun","Tez","Chiroyli","Yaxshi"],c:0},
{q:"Hol ravishi?",o:["Sekin","Bugun","U","Kitob"],c:0},
{q:"Ravishning so‘roqlari?",o:["Qanday? Qachon?","Kim?","Nima?","Qayer?"],c:0},
{q:"O‘rin ravishi?",o:["Bu yerda","Sekin","Bugun","Yaxshi"],c:0},
{q:"Daraja ravishi?",o:["Juda","Bugun","Bu yerda","Ertaga"],c:0},
{q:"Ravish yasovchi qo‘shimcha?",o:["-cha","-chi","-kor","-zor"],c:0},
{q:"Qaysi gapda ravish bor?",o:["U tez keldi","Uy katta","Kitob bor","Daraxt o‘sdi"],c:0},
{q:"Holni bildirgan so‘z?",o:["Tez","Kitob","Uy","Qalam"],c:0}
]
},

/* ================= 5-BLOK ================= */
{
id:5,
title:"5-blok: Olmosh",
tests:[
{q:"Olmosh nimani almashtiradi?",o:["Fe’lni","Otni","Sifatni","Ravishni"],c:1},
{q:"Qaysi olmosh?",o:["U","Kitob","Chiroyli","Tez"],c:0},
{q:"Shaxs olmoshi?",o:["Men","Bu","Kim","Qaysi"],c:0},
{q:"Ko‘rsatish olmoshi?",o:["Bu","Men","Kim","Qanday"],c:0},
{q:"So‘roq olmoshi?",o:["Kim","Bu","U","Biz"],c:0},
{q:"Belgili olmosh?",o:["Hamma","Kim","Bu","Men"],c:0},
{q:"Bo‘lishsizlik olmoshi?",o:["Hech kim","Men","Bu","U"],c:0},
{q:"Olmosh qaysi so‘zni almashtiradi?",o:["Ot","Fe’l","Ravish","Sifat"],c:0},
{q:"Qaysi gapda olmosh bor?",o:["U keldi","Kitob bor","Uy katta","Tez yugurdi"],c:0},
{q:"Olmoshning vazifasi?",o:["Takrorni kamaytirish","Bezash","Urg‘u","Ohang"],c:0}
]
},

/* ================= 6–10 BLOKLAR (PREMIUM) ================= */
{
id:6,title:"6-blok: Son",tests:[{q:"Son nimani bildiradi?",o:["Miqdor","Harakat","Belgi","Predmet"],c:0},
{q:"Qaysi son?",o:["Uch","Kitob","Yaxshi","Bor"],c:0},
{q:"Miqdor son?",o:["Beshta","Beshinchi","Besh","Uchov"],c:2},
{q:"Tartib son?",o:["Beshinchi","Besh","Beshta","Uchov"],c:0},
{q:"Jamlovchi son?",o:["Uchov","Uch","Uchinchi","Uchta"],c:0},
{q:"Sonning so‘roqlari?",o:["Qancha? Nechta?","Kim?","Qanday?","Qayer?"],c:0},
{q:"Son qaysi so‘z turkumi?",o:["Mustaqil","Yordamchi","Bog‘lovchi","Yuklama"],c:0},
{q:"Hisob son?",o:["Uch","Uchinchi","Uchov","Uchta"],c:0},
{q:"Qaysi gapda son bor?",o:["Uch kitob bor","Uy katta","U keldi","Tez yugurdi"],c:0},
{q:"Son vazifasi?",o:["Miqdor bildirish","Harakat","Belgi","Hol"],c:0}
]},
{
id:7,title:"7-blok: Bog‘lovchi",tests:[{q:"Bog‘lovchi nima qiladi?",o:["Bog‘laydi","Ajratadi","Sanaydi","Ta’kidlaydi"],c:0},
{q:"Qaysi bog‘lovchi?",o:["Va","Men","Bu","Tez"],c:0},
{q:"Teng bog‘lovchi?",o:["Va","Chunki","Agar","Go‘yo"],c:0},
{q:"Ergash bog‘lovchi?",o:["Chunki","Va","Ham","Yoki"],c:0},
{q:"Bog‘lovchi vazifasi?",o:["So‘zlarni bog‘lash","So‘roq","Hol","Kesim"],c:0},
{q:"Qaysi gapda bog‘lovchi bor?",o:["Men va sen","Uy katta","Kitob bor","U yugurdi"],c:0},
{q:"Bog‘lovchi so‘z turkumi?",o:["Yordamchi","Mustaqil","Ot","Fe’l"],c:0},
{q:"Yoki qanday bog‘lovchi?",o:["Teng","Ergash","Hol","Kesim"],c:0},
{q:"Bog‘lovchi gap bo‘lagi bo‘ladimi?",o:["Yo‘q","Ha","Ba’zan","Faqat she’rda"],c:0},
{q:"Bog‘lovchi ma’nosi?",o:["Aloqa","Belgi","Harakat","Miqdor"],c:0}
]},
{
id:8,title:"8-blok: Yuklama",tests:[{q:"Yuklama vazifasi?",o:["Ta’kidlash","Bog‘lash","Sanash","Ajratish"],c:0},
{q:"Qaysi yuklama?",o:["Ham","Va","U","Kitob"],c:0},
{q:"-mi qanday yuklama?",o:["So‘roq","Ta’kid","Inkori","Bog‘lovchi"],c:0},
{q:"Yuklama qaysi turkum?",o:["Yordamchi","Mustaqil","Ot","Fe’l"],c:0},
{q:"Yuklama gap bo‘lagi bo‘ladimi?",o:["Yo‘q","Ha","Ba’zan","Doim"],c:0},
{q:"Faqat yuklamami?",o:["Ha","Yo‘q","Ba’zan","Doim"],c:0},
{q:"Yuklama ohangga ta’sir qiladimi?",o:["Ha","Yo‘q","Kamdan","Faqat she’rda"],c:0},
{q:"Qaysi gapda yuklama bor?",o:["U ham keldi","Uy katta","Kitob bor","U yugurdi"],c:0},
{q:"Yuklama mustaqil ma’nolimi?",o:["Yo‘q","Ha","Ba’zan","Doim"],c:0},
{q:"Yuklama so‘z turkumi?",o:["Yordamchi","Ot","Fe’l","Sifat"],c:0}
]},
{
id:9,title:"9-blok: Imlo",tests:[{q:"Imlo nimani o‘rganadi?",o:["Yozuvni","Talaffuzni","Ohangni","Urg‘uni"],c:0},
{q:"Qo‘shib yoziladigan so‘z?",o:["Hechkim","Hech kim","Hech-kim","Hech  kim"],c:1},
{q:"Ajratib yoziladi?",o:["Har kim","Hechkim","Harkim","Hech-kim"],c:0},
{q:"Chiziqcha bilan?",o:["Ota-ona","Otam","Ota ona","Otaona"],c:0},
{q:"Imlo qoidasi nima?",o:["Yozuv me’yori","Ohang","Urg‘u","Talaffuz"],c:0},
{q:"Qaysi so‘z xato?",o:["Mehnatkash","Xato","Bilimdon","O‘qituvchi"],c:1},
{q:"Imlo lug‘ati nima uchun?",o:["Tekshirish","O‘qish","Yozish","Gapirish"],c:0},
{q:"Qaysi yozuv to‘g‘ri?",o:["Birinchi","Birin chi","Bir inchi","Bir-inchi"],c:0},
{q:"Imlo nimaga xizmat qiladi?",o:["Aniqlik","Bezash","Ohang","Urg‘u"],c:0},
{q:"Imlo xatosi nima?",o:["Yozuvdagi xato","Talaffuz","Ma’no","Urg‘u"],c:0}
]},
{
id:10,title:"10-blok: Tinish belgilari",tests:[{q:"Nuqta qachon qo‘yiladi?",o:["Gap oxirida","Boshlanishda","So‘roqdan oldin","Bog‘lovchidan keyin"],c:0},
{q:"So‘roq belgisi qachon?",o:["Savolda","Buyruqda","Undovda","Xabarda"],c:0},
{q:"Undov belgisi?",o:["His-hayajon","Savol","Xabar","Izoh"],c:0},
{q:"Vergul vazifasi?",o:["Ajratish","Bog‘lash","Yakunlash","Boshlash"],c:0},
{q:"Qo‘shtirnoq qachon?",o:["Ko‘chirma gapda","So‘roq","Buyruq","Xabar"],c:0},
{q:"Ikki nuqta vazifasi?",o:["Izohlash","Savol","Hayajon","Tugatish"],c:0},
{q:"Nuqtali vergul?",o:["Murakkab gapda","Oddiy gapda","So‘roq","Buyruq"],c:0},
{q:"Tinish belgilari nimaga xizmat qiladi?",o:["Mazmunni aniqlash","Bezash","Urg‘u","Ohang"],c:0},
{q:"Qaysi belgilar tinish?",o:[".,?!","abc","123","+-*/"],c:0},
{q:"Vergul qo‘yiladi?",o:["Uyushiq bo‘laklarda","Har gapda","So‘z boshida","Har doim"],c:0}
]}
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
const id=Number(this.value);
const area=document.getElementById("testArea");
area.innerHTML="";

if(!isPremium() && id>5){
area.innerHTML=`<div class="card"><b>🔒 Premium blok</b><p>1–5 bepul</p></div>`;
return;
}

const block=testBlocks.find(b=>b.id===id);
area.innerHTML=`
<div class="card">
<b>${block.title}</b><br><br>
${block.tests.map(t=>`
<p>${t.q}</p>
${t.o.map(v=>`<label><input type="radio"> ${v}</label><br>`).join("")}
`).join("")}
</div>`;
});
});
