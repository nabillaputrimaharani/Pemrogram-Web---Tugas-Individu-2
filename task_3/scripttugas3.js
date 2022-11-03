
function tombol() {
    // 
    const bp = document.getElementById('title');
    bp.innerHTML = 'BLACKPINK';

    const area = document.getElementById('area');
    area.innerHTML = 'IN YOUR AREA';

    const elemenP = document.createElement('h3'); 
    const teksElementP = document.createTextNode('Blackpink (bahasa Korea: 블랙핑크, digayakan sebagai BLɅƆKPIИK) adalah grup vokal wanita asal Korea Selatan. Blackpink dibentuk oleh YG Entertainment dengan beranggotakan empat orang, diantaranya Jennie, Jisoo, Lisa, dan Rosé.'); // Deklarasi Variabel untuk mengisi teks

    elemenP.appendChild(teksElementP); 

    const cetak = document.getElementById('body'); 

    cetak.appendChild(elemenP);
}
