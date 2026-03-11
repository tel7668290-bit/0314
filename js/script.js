const envelope = document.querySelector('.envelope-wrapper');
// 這裡對應妳上傳的檔案名稱
const audio = new Audio('videoplayback.mp4'); 
audio.loop = true;

envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
    
    if (envelope.classList.contains('open')) {
        audio.play().catch(e => console.log("播放失敗:", e));
        createHearts();
    } else {
        audio.pause();
    }
});

function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.opacity = Math.random();
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

const style = document.createElement('style');
style.innerHTML = `
    .floating-heart {
        position: fixed;
        top: -10%;
        font-size: 20px;
        pointer-events: none;
        animation: fall linear forwards;
        z-index: 999;
    }
    @keyframes fall {
        to { transform: translateY(110vh); }
    }
`;
document.head.appendChild(style);
