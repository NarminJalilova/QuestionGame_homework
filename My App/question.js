const startQuestionGame = confirm ("Salam otelimize xosh gelmisiniz, Otaq bron etmek isteyirsiniz?")

// Eger sualimizin cavabi true-dursa
if (startQuestionGame) {
    const question1 = prompt ("Siz neçə nəfərsiniz?");
    // Burada if icerisinde if else-lerle question-larimizi artiririq
    if (question1>=1 & question1<=4) {
        const yourRoom = prompt ("Otaq sayını bildirin zəhmət olmasa") 
   
    // Qiymetlerimiz
        let price;
       
        if (yourRoom == "1") {
          price =  120;
        } else if (yourRoom == "2") {
          price =  200;
        } else {
          price = 300;
        }
      
        const priceInfo = `Sizin ödəniş məbləğiniz: ${price} AZN-dir`;
        alert(priceInfo);

    // Qiymet yazildiqdan sonra yene sorusur
        const priceAgree = confirm ("Qiymete ne daxildir?")
        if  (priceAgree) {
            alert ("Qiymete yalniz seher yemeyi daxildir. Her sey daxil isteyirsinizse qiymetler ferqli olacaq.")
        } 
   
        const result = `Sizin istədiyiniz ${yourRoom} otaqlı nömrə hazirlanir. Zəhmət olmasa gözləyin.` 
        
     //Otaq sayindan sonra raziligini sorusur, razi deyilse endirim teklif edir
        const agree = confirm ("Razısınızsa otağı hazırlayaq")
        if (agree) {
            alert(result);
         } else {
                alert ("Sizə endirim təklif edə bilərik")
                const discount = confirm ("Endirimli qiymet ile maraqlanirsiniz?")
                if (discount) {
                    alert ("Endirmli qiymete seher yemeyi de daxildir.")
                }else {
                    alert ("Teessuf ki, bu maximum ede bileceyim endirimdir. Size xos istirahetler!")
                }
            }
        // Shertimiz 4 neferdir, eger 4-den artiq yazilsa onda asagidaki cixsin
    } else {
        alert ("Təəssüf ki bu saya uyğun nömrəmiz qalmayıb")

    //   Sonra yeniden elaqe nomresi isteyirik
        const phone = prompt ("Zehmet olmasa elaqe nomresi qeyd edin.")
        if (phone) {
                alert ("Boshalan otagimiz olarsa,iki saat erzinde Sizinle elaqe saxlanilacaq. Anlayisiniz ucun tesekkurler!")
        }else {
            alert("Teshekkurler. Size Ugurlar")
        }
    }
}

// Bu ise en ilk yazdigimiz if else-mizdi 
else {
   console.log("Otelin sayt adresini Size teqdim edirem. Sizi otelimizde görmək istərik!")
    alert ("Otelin sayt adresini Size teqdim edirem. Sizi otelimizde görmək istərik!")
    const feedback = prompt ("Sayti inceleyib geri donus etmek isteseniz buyurun")
    if (feedback) {
        alert ("Saytda etrafli melumatlar qeyd olunub. Evvelceden de rezervasiya ede bilersiniz")
    }else {
        alert ("Sizi  tanimaq xos oldu")
    }
}