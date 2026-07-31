// ======================================
// SPORT ACADEMY
// script.js
// ======================================

// ----- Header dynamique -----

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }

});


// ----- Défilement fluide -----

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ----- Animation des cartes -----

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

cards.forEach(card => observer.observe(card));


// ----- Effet de clic sur Télécharger -----

const boutons = document.querySelectorAll(".download");

boutons.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.textContent = "Téléchargement...";

        setTimeout(() => {

            btn.textContent = "Télécharger";

        }, 1500);

    });

});


// ----- Recherche de livres -----
// (fonctionnera quand tu ajouteras une barre de recherche)

const recherche = document.getElementById("search");

if (recherche) {

    recherche.addEventListener("keyup", function () {

        const texte = this.value.toLowerCase();

        cards.forEach(card => {

            const titre = card.querySelector("h3").textContent.toLowerCase();
            const description = card.querySelector("p").textContent.toLowerCase();

            if (titre.includes(texte) || description.includes(texte)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

console.log("Sport Academy chargé avec succès !");
