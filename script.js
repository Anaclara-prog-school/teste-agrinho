// Alterar o estilo do cabeçalho ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.padding = "0.5rem 5%";
        header.style.backgroundColor = "#ffffff";
    } else {
        header.style.padding = "1rem 5%";
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    }
});

// Efeito de clique suave (opcional, já que usamos CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});