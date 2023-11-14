function topla() {
  let sayi1 = Number(document.getElementById("sayi1").value);
  let sayi2 = Number(document.getElementById("sayi2").value);

  document.getElementById("sonuc").textContent = `Sonuç: ${sayi1 + sayi2}`;
}

function cikar() {
  let sayi1 = Number(document.getElementById("sayi1").value);
  let sayi2 = Number(document.getElementById("sayi2").value);

  document.getElementById("sonuc").textContent = `Sonuç: ${sayi1 - sayi2}`;
}

function carp() {
  let sayi1 = Number(document.getElementById("sayi1").value);
  let sayi2 = Number(document.getElementById("sayi2").value);

  document.getElementById("sonuc").textContent = `Sonuç: ${sayi1 * sayi2}`;
}

function bol() {
  let sayi1 = Number(document.getElementById("sayi1").value);
  let sayi2 = Number(document.getElementById("sayi2").value);

  if (sayi2 !== 0) {
    document.getElementById("sonuc").textContent = `Sonuç: ${sayi1 / sayi2}`;
  } else {
    document.getElementById("sonuc").textContent = `Sayı sıfıra bölünemez. Hatalı işlem yaptınız.`;
  }
}
