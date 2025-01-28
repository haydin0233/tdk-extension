function kelimeGovdesiBul(kelime) {
    // Basit isim ekleri (uzundan kısaya sıralı)
    const ekler = [
        // İyelik + Hal
        'larımızda', 'lerimizde',
        'larımıza', 'lerimize',
        'larımız', 'lerimiz',
        'larında', 'lerinde',
        'larına', 'lerine',
        'lardan', 'lerden',
        'larda', 'lerde',
        'ların', 'lerin',
        'ımızda', 'imizde',
        'ımıza', 'imize',
        'ımız', 'imiz',
        'ında', 'inde',
        'ına', 'ine',
        'dan', 'den',
        'tan', 'ten',
        'da', 'de',
        'ta', 'te',
        'ın', 'in',
        'un', 'ün',
        'ya', 'ye',
        'na', 'ne',
        'la', 'le',
        'ı', 'i',
        'u', 'ü',
        'a', 'e'
    ];
    
    let govde = kelime.toLowerCase();
    
    // Ekleri kontrol et
    for (let ek of ekler) {
        if (govde.endsWith(ek)) {
            govde = govde.slice(0, -ek.length);
            break; // İlk eşleşen eki çıkar ve dur
        }
    }
    
    // Ünsüz yumuşaması kontrolü
    const sertlesme = {
        'b': 'p',
        'c': 'ç',
        'd': 't',
        'ğ': 'k'
    };

    const sonHarf = govde[govde.length - 1];
    if (Object.keys(sertlesme).includes(sonHarf)) {
        govde = govde.slice(0, -1) + sertlesme[sonHarf];
    }
    
    return govde;
}