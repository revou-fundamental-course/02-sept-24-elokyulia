// Ini Javascript
// untuk memberikan fungsi inputan 

function validateLuas() {

    let panjangAlas = document.getElementById('panjang.alas').value ;
    let tinggi = document.getElementById('tinggi').value;
    if (panjangAlas ==''|| tinggi ==''|| panjangAlas.include('e') || tinggi.include('e'));
      alert('Form masih kosong');
        console.log(panjangAlas);
        console.log(tinggi);
}

// untuk membuat rumus dan hasil 
  function myFunction(panjangAlas, tinggi) {
    rumus = 1/2 (panjangAlas * tinggi);

  let rumus = myFunction();
  document.getElementById("result").innerHTML = rumus;
  }
  
  
  
  
