const words = [
  "Ma’rifat","Istiqlol","Tafakkur","Vijdon","Ziyo",
  "Adolat","Hikmat","Sadoqat","Shijoat","Matonat",
  "E’tiqod","G‘urur","Mas’uliyat","Ibrat","Qadr",
  "Iymon","Ilm","Haqiqat","Barkamol","Kamal",
  "Iroda","Xotira","Mehr","Sabr","Shukr",
  "Orzu","Intilish","Mehnat","Rivoj","Baraka"
];

const day = new Date().getDate() % words.length;
document.getElementById("dailyWord").innerText = words[day];
