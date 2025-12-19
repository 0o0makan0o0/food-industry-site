// انیمیشن ظهور عناصر هنگام اسکرول
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// افکت تغییر ظاهر هدر هنگام اسکرول
window.addEventListener("scroll", function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "5px 0";
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    } else {
        nav.style.padding = "15px 0";
        nav.style.boxShadow = "none";
    }
});

// اجرای اولیه انیمیشن برای عناصر ابتدای صفحه
reveal();
