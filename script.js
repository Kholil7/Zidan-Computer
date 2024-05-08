function sendMessage() {
    event.preventDefault(); // Hindari form dari pengiriman default

    // Ambil nilai dari input
    var usernameInput = document.getElementById('username');
    var messageInput = document.getElementById('message');
    var username = usernameInput.value;
    var message = messageInput.value;

    // Validasi input
    if (username.trim() === '' || message.trim() === '') {
        // Jika salah satu input kosong, beri pesan kesalahan
        alert('Harap isi kedua bidang sebelum mengirim pesan.');
        return; // Berhenti eksekusi fungsi jika validasi gagal
    }

    // Validasi untuk memeriksa apakah username hanya terdiri dari karakter alfanumerik
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
        // Jika username mengandung karakter khusus, beri peringatan
        alert('Mohon maaf, username hanya boleh terdiri dari huruf dan angka.');
        return; // Berhenti eksekusi fungsi jika validasi gagal
    }

    // Periksa apakah pesan mengandung kata-kata kotor
    var dirtyWords = ['anjing', 'tolol', 'goblok', 'bodoh'];
    for (var i = 0; i < dirtyWords.length; i++) {
        if (message.toLowerCase().includes(dirtyWords[i])) {
            // Jika pesan mengandung kata kotor, beri peringatan
            alert('Mohon maaf, pesan tidak dapat dikirim karena mengandung kata-kata kotor.');
            return; // Berhenti eksekusi fungsi jika ditemukan kata kotor
        }
    }

    // Periksa apakah nomor telepon memiliki awalan '0', jika iya, hapus
    if (username.startsWith('0')) {
        username = username.substr(1);
    }

    // Buat tautan deep link untuk WhatsApp dengan nomor telepon dan pesan
    var whatsappLink = 'https://wa.me/6281331954404?text=Assalamualaikum Wr.Wb, Perkanalkan nama saya ' + username + ', ' + encodeURIComponent(message) + '.';

    // Buka tautan di jendela baru
    var whatsappWindow = window.open(whatsappLink, '_blank');
    
    // Periksa apakah jendela WhatsApp berhasil dibuka
    if (whatsappWindow) {
        // Pesan berhasil
        alert('Pesan berhasil dikirim!');
        // Reset formulir
        usernameInput.value = '';
        messageInput.value = '';
    } else {
        // Pesan gagal
        alert('Gagal mengirim pesan. Pastikan Anda memiliki WhatsApp terinstal.');
    }
}


// autoKapital
function capitalizeFirstLetter(input) {
    input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
}



// Fungsi untuk menentukan status loading berdasarkan waktu
function setStatus() {
        var date = new Date();
        var hour = date.getHours();
        var statusElement = document.getElementById("status");
        var loadingElement = document.getElementById("loading");

        if (hour >= 18 && hour < 24) {
            statusElement.textContent = "Open";
        } else {
            statusElement.textContent = "Close";
        }

        loadingElement.style.display = "block"; // Menampilkan loading

        // Sembunyikan loading setelah 1 detik
        setTimeout(function() {
            loadingElement.style.display = "none";
        }, 1500);
    }

    // Panggil fungsi setStatus saat halaman dimuat
    window.onload = function() {
        setStatus();
    };


// Lezyloading
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll('img[loading="lazy"]');
    let options = {
        root: null, // menggunakan viewport sebagai root
        rootMargin: '0px', // tidak ada margin tambahan
        threshold: 0.1 // ambil tindakan ketika 10% atau lebih dari gambar masuk ke viewport
    };

    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.style.transition = "opacity 1s"; // tambahkan animasi 1 detik
                lazyImage.src = lazyImage.dataset.src; // ganti src dengan data-src
                lazyImage.classList.remove("lazy"); // hapus kelas 'lazy' setelah gambar dimuat
                lazyImageObserver.unobserve(lazyImage);
            }
        });
    }, options);

    lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
    });
});



// Manipulasi DOM (paket/h2)
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function showOnScroll() {
    var paketElements = document.querySelectorAll('.paket');
    paketElements.forEach(function(paket) {
      if (isInViewport(paket)) {
        paket.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', showOnScroll);
  window.addEventListener('resize', showOnScroll);
  
  // Panggil showOnScroll untuk menunjukkan elemen yang sudah terlihat saat halaman dimuat
  showOnScroll();

  
  


// Manipulasi DOM (paket)
// Fungsi untuk mengecek apakah elemen dalam viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fungsi untuk menambahkan kelas animasi jika elemen masuk ke dalam viewport
function fadeInElements() {
    var pakets = document.querySelectorAll('.paket1, .paket2, .paket3');
    pakets.forEach(function(paket) {
        if (isElementInViewport(paket)) {
            paket.classList.add('fade-up');
        }
    });
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('DOMContentLoaded', fadeInElements);
window.addEventListener('scroll', fadeInElements);




// Manipulasi DOM (parag)
// Fungsi untuk mengecek apakah elemen dalam viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fungsi untuk menampilkan atau menyembunyikan elemen berdasarkan status viewport
function toggleFadeElements() {
    var parags = document.querySelectorAll('.parag1, .parag2, .parag3');
    parags.forEach(function(parag) {
        if (isElementInViewport(parag)) {
            parag.classList.add('fade-up');
        } else {
            parag.classList.remove('fade-up');
        }
    });
}

//MANIPULASI NAV
// Panggil fungsi saat halaman dimuat dan digulir
window.addEventListener('DOMContentLoaded', toggleFadeElements);
window.addEventListener('scroll', toggleFadeElements);


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const ulMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('change', function() {
      if (this.checked) {
        ulMenu.style.display = 'block';
      } else {
        ulMenu.style.display = 'none';
      }
    });
  });

//   Tanya1
function tanya1() {
    var instalasi = document.getElementById('tanya1');

    var whatsappLink = '';
    var whatsappWindow = window.open(whatsappLink, '_blank');
}

function tanya2() {
    var jualBeli = document.getElementById('tanya2');

    var whatsappLink = 'https://wa.me/p/7187946187995120/6289519216572';
    var whatsappWindow = window.open(whatsappLink, '_blank');
}

function tanya3() {
    var service = document.getElementById('tanya3');

    var whatsappLink = '';
    var whatsappWindow = window.open(whatsappLink, '_blank');
}