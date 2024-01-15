const btnLuas = document.getElementById('btn-luas')
const btnKeliling = document.getElementById('btn-keliling')
const btnHitung = document.getElementById('btn-hitung')
const btnReset = document.getElementById('btn-reset')
const judul1 = document.getElementsByTagName('h3')[0]
const judul2 = document.getElementsByTagName('h3')[1]
const pText = document.querySelectorAll('.content p')
const inputNilai = document.getElementById('input-nilai')
const hasil = document.getElementById('hasil')

btnKeliling.addEventListener('click', function(){
    btnKeliling.style.backgroundColor = "#080708"
    btnKeliling.style.color = "#FFFF"
    btnLuas.style.backgroundColor = "#EFEFEF"
    btnLuas.style.color = "#080708"
    judul1.innerHTML = "Keliling Persegi"
    judul2.innerHTML = "Hitung Keliling Persegi"
    pText[0].innerHTML = "Rumus Keliling Persegi yaitu :"
    pText[1].innerHTML = "<b>K = S + S + S + S</b>"
    pText[2].innerHTML = `Dimana : <br>
    S = Sisi <br>
    K = Keliling`
})

btnLuas.addEventListener('click', function(){
    btnKeliling.style.backgroundColor = "#EFEFEF"
    btnKeliling.style.color = "#080708"
    btnLuas.style.backgroundColor = "#080708"
    btnLuas.style.color = "#FFFF"
    judul1.innerHTML = "Luas Persegi"
    judul2.innerHTML = "Hitung Luas Persegi"
    pText[0].innerHTML = "Rumus Luas Persegi yaitu :"
    pText[1].innerHTML = "<b>L = S x S</b>"
    pText[2].innerHTML = `Dimana : <br>
    S = Sisi <br>
    L = Luas`
})

btnHitung.addEventListener('click', function(){
    
    switch(judul1.innerHTML){
        case "Luas Persegi":
            if (inputNilai.value == "") {
                alert('Masukkan Nilai Sisi!')
            } else {
            sisi = inputNilai.value
            rumus = sisi * sisi
            hasil.value = `Hasil :

            L = S x S
            L = ${sisi} x ${sisi}
            L = ${rumus}`
            }
        break

        case "Keliling Persegi":
            if (inputNilai.value == "") {
                alert('Masukkan Nilai Sisi!')
            } else {
            sisi = inputNilai.value
           rumus = 4 * sisi
           hasil.value = `Hasil :

           K = S + S + S + S
           K = ${sisi} + ${sisi} + ${sisi} + ${sisi}
           K = ${rumus}`
           }
        break
    }
    
})

btnReset.addEventListener('click', function(){
    inputNilai.value = ""
    hasil.value = "Hasil :"
})