'use strict';

// 下からふわっと表示
{
    document.addEventListener("DOMContentLoaded", () => {
        const target = document.querySelector(".empathy");
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.7 });
        io.observe(target);
    });
}

{
    // 複数要素の下からふわっと表示
    document.addEventListener("DOMContentLoaded", () => {
        const targets = document.querySelectorAll(".fade-up");
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target); // 一度だけ実行
                }
            });
        }, { threshold: 0.7 });

        targets.forEach(target => io.observe(target));
    });

}

{
    document.addEventListener("DOMContentLoaded", () => {
        const targets = document.querySelectorAll(".fade-up, .slide-in , .slide-in-right");
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.7 });

        targets.forEach(target => io.observe(target));
    });
}

