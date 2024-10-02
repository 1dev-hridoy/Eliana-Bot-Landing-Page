      // Intersection Observer for fade-in animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('opacity-0');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => {
        el.classList.add('opacity-0', 'transition', 'duration-1000');
        observer.observe(el);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interactive feature cards
    const featureCards = document.querySelectorAll('#features .bg-gray-800');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('bg-blue-600');
            card.classList.remove('bg-gray-800');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('bg-blue-600');
            card.classList.add('bg-gray-800');
        });
    });

    // Dynamic command demonstration
    const commandDemos = [
        { command: '!mod warn @user Inappropriate language', result: 'User warned successfully!' },
        { command: '!play Imagine Dragons - Believer', result: 'Now playing: Imagine Dragons - Believer' },
        { command: '!trivia start general medium', result: 'Trivia game started! First question: What is the capital of France?' }
    ];

    const commandSection = document.querySelector('#commands');
    const commandPres = commandSection.querySelectorAll('pre');

    commandPres.forEach((pre, index) => {
        const code = pre.querySelector('code');
        const originalCommand = code.innerText;
        const result = commandDemos[index].result;

        pre.addEventListener('click', () => {
            code.innerText = 'Executing command...';
            setTimeout(() => {
                code.innerText = result;
                setTimeout(() => {
                    code.innerText = originalCommand;
                }, 2000);
            }, 1000);
        });
    });

    // Parallax effect for header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const scrollPosition = window.pageYOffset;
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });