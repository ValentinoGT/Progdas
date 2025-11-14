const learnBtn = document.querySelector('.btn[href= "#testimoni"]');
if (learnBtn) {
    learnBtn.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector("#testimoni");
        if(target) {
            target.scrollIntoView({behavior: "smooth"})
        }
    })
}

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("pesan berhasil dikirim!");
    form.reset();
  });
}

const scrollTopbtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
    if(document.documentElement.scrollTop > 200) {
        scrollTopbtn.style.display = "block";
    } else {
        scrollTopbtn.style.display = "none";
    }
}

scrollTopbtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})
