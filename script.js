// Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navMenu.classList.remove('active');
        }
    });
});

// Exhibitions Data
const personalExhibitions = [
    { year: '2003', title: 'Manuel Riccardi', location: 'Banca Cassa di risparmio di Ferrara - Ferrara, Italia' },
    { year: '2003', title: 'Ricerca DA(r)TE', location: 'Sala Comunale - Aosta, Italia' },
    { year: '2004', title: '(Ri)tratti interiori', location: 'Les Corbeilles - Aosta, Italia' },
    { year: '2004', title: 'Il deforme armonioso', location: 'Maison de la Grivola - Cogne, Italia' },
    { year: '2005', title: 'Riempire uno spazio vuoto', location: 'galleria Commerciale LES CORBEILLES - Aosta, Italia' },
    { year: '2007', title: 'Trascorsi Formativi', location: 'Banca Sella - Roma, Italia' },
    { year: '2008', title: 'VISIONI PROFONDE', location: 'Forte di Bard - Aosta, Italia' },
    { year: '2008', title: 'Trascorsi Formativi', location: 'Banca Sella - Firenze, Italia' },
    { year: '2008', title: 'Trascorsi Formativi', location: 'Banca Sella - Bologna, Italia' },
    { year: '2014', title: 'RelazionARTI', location: 'Atelier Balan - Aosta, Italia' },
    { year: '2015', title: '....MA DAI....', location: 'Edifici Miramar - Sitges, Spagna' }
];

const collectiveExhibitions = [
    { year: '2002', title: 'Espoarte 2002', location: 'Museo di arte contemporanea Albissola Marina - Savona, Italia' },
    { year: '2003', title: 'Biennale d\'arte contemporanea "Ippolito Caffi"', location: 'Museo Vittoriano "Ala Brasini" - Roma, Italia' },
    { year: '2003', title: 'XXX Anniversario Gruppo Batik Art', location: 'Sala Barna - Barcellona, Spagna' },
    { year: '2003', title: 'Collettiva Artisti valdostani', location: 'Torre dei Signori - Aosta, Italia' },
    { year: '2004', title: 'La piccola Montmartre', location: 'Saint Vincent - Aosta, Italia' },
    { year: '2004', title: 'COLLETTIVA Galerie Le Patio Salon d\'Art Mediterranee', location: 'Galerie Le Patio Salon d\'Art Mediterranee - Cannes, Francia' },
    { year: '2004', title: 'OpenArt 2004', location: 'Sale del Bramante, Piazza del Popolo - Roma, Italia' },
    { year: '2005', title: 'Gemini:Muse', location: 'Chiostro di Sant Orso - Aosta, Italia' },
    { year: '2006', title: 'Sogni e risvegli', location: 'Spazioardo - Milano, Italia' },
    { year: '2006', title: 'ArtExpo New York', location: 'Jacob K. Javit Center New York - New York, Stati Uniti' },
    { year: '2006', title: 'Timeles Identity', location: 'Les Corbeilles - Aosta, Italia' },
    { year: '2007', title: 'I COLORI D\'ITALIA', location: 'Espace Arsinoe - Parigi, Francia' },
    { year: '2008', title: 'Collettiva X Ampasilava', location: 'Museo Magi \'900 - Bologna, Italia' },
    { year: '2009', title: 'Arte Contemporanea Internazionale', location: 'Museum of the Americas, Miami, USA - Miami, Stati Uniti' },
    { year: '2009', title: 'Open Art Fair', location: 'Utrecht - Utrecht, Paesi Bassi' },
    { year: '2009', title: 'kunstart 09', location: '6th Internetional art fair - Bolzano, Italia' },
    { year: '2009', title: 'Arte Genova', location: 'Fiera di Genova - Genova, Italia' },
    { year: '2009', title: 'Mini Personale "Artisti Scelti"', location: 'Galleria Modigliani - Milano, Italia' },
    { year: '2009', title: 'The Dreamers', location: 'Galleria Rosso Cinabro - Roma, Italia' },
    { year: '2010', title: 'I colori dell\'inquietudine', location: 'Torre Malvasia - Finale Ligure, Italia' },
    { year: '2010', title: 'italians do it better', location: 'Marc de Puechredon Gallery - Basilea, Svizzera' },
    { year: '2011', title: 'Prebiennale di Venezia 2011', location: 'Scoletta di San Giovanni Battista - Venezia, Italia' },
    { year: '2021', title: 'Cuerpos Queer Mentes Diversas', location: 'ESTUDI VIDAL C/D\'EN BOSC 6 SITGES - Barcellona, Spagna' }
];

// Populate exhibitions
function populateExhibitions(exhibitions, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = exhibitions.map(exhibition => `
        <div class="exhibition-item">
            <div class="exhibition-year">${exhibition.year}</div>
            <div class="exhibition-title">${exhibition.title}</div>
            <div class="exhibition-location">${exhibition.location}</div>
        </div>
    `).join('');
}

populateExhibitions(personalExhibitions, 'personalExhibitions');
populateExhibitions(collectiveExhibitions, 'collectiveExhibitions');

// Curtain Animation
const personalCurtainToggle = document.getElementById('personalCurtainToggle');
const personalCurtain = document.getElementById('personalCurtain');
const collectiveCurtainToggle = document.getElementById('collectiveCurtainToggle');
const collectiveCurtain = document.getElementById('collectiveCurtain');

if (personalCurtainToggle && personalCurtain) {
    personalCurtainToggle.addEventListener('click', () => {
        personalCurtain.classList.toggle('open');
        personalCurtainToggle.classList.toggle('active');
    });
}

if (collectiveCurtainToggle && collectiveCurtain) {
    collectiveCurtainToggle.addEventListener('click', () => {
        collectiveCurtain.classList.toggle('open');
        collectiveCurtainToggle.classList.toggle('active');
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active', !isActive);
        });
    }
});

// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.getElementById('heroImage');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px) scale(1.05)`;
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
