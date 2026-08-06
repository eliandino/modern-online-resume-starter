const slides=[
'FamilyFlow',
'ECG SDK',
'AR Marketing Studio',
'DevPath',
'AnatoPin'
];
let i=0;
const s=document.getElementById('slide');
document.getElementById('next').onclick=()=>{i=(i+1)%slides.length;s.textContent=slides[i];}
document.getElementById('prev').onclick=()=>{i=(i-1+slides.length)%slides.length;s.textContent=slides[i];}
document.getElementById('theme').onclick=()=>document.body.classList.toggle('light');
