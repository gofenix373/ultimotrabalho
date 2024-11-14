        // Função para animar os cards com efeito de Fade-In
        function fadeInOnScroll() {
            const cards = document.querySelectorAll('.card-jogador');

            // Verifica se o card está visível na tela
            cards.forEach(card => {
                const cardPosition = card.getBoundingClientRect();
                if (cardPosition.top < window.innerHeight && cardPosition.bottom >= 0) {
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                }
            });
        }

        // Adiciona a animação ao rolar a página
        window.addEventListener('scroll', fadeInOnScroll);

        // Chama a função inicialmente para os elementos que podem já estar visíveis
        fadeInOnScroll();