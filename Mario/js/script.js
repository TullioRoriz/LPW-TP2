const mario = document.querySelector('.mario');
        const pipe = document.querySelector('.pipe');
        let jumpCount = 0;

        const updateJumpCounter = () => {
            const jumpCounterElement = document.getElementById('jumpCounter');
            jumpCounterElement.textContent = `PULOS: ${jumpCount}`;
        }

        const jump = () => {
            mario.classList.add('jump');

            setTimeout(() => {
                mario.classList.remove('jump');
            }, 500);

            jumpCount++;
            updateJumpCounter();
        }

        const loop = setInterval(() => {
            const pipePosition = pipe.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

            if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;

                pipe.style.animation = 'none';
                pipe.style.bottom = `${marioPosition}px`;

                mario.src = './images/pixil-frame-0.png';
                mario.style.width = '180px';
                mario.style.marginLeft = '-10px';

                clearInterval(loop);
            }

        }, 10);

        document.addEventListener('keydown', jump);