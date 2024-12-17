window.onload = () => {
  const createLogos = setInterval(() => {
    window.state = window.state || {
      x: 0,
      logos: [],
    };

    if (window.state.x < 1000) {
      const img = document.createElement("img");
      img.style.width = "64px";
      img.src = `./logo.png`;

      // append img to body
      document.body.appendChild(img);

      window.state.x += 1;

      // random number between 1 and 100
      const random = Math.floor(Math.random() * 100) + 1;

      if (random === 1) {
        img.onclick = () => {
          window.location = "https://discord.gg/unnamed-group";
        };
      } else {
        window.state.logos.push(img);
      }
    } else {
      clearInterval(createLogos);

      // shuffle the logo array
      const shuffledLogos = window.state.logos.sort(() => 0.5 - Math.random());

      shuffledLogos.forEach((logo) => {
        // random number between 666 and 999
        const randomTime = Math.floor(Math.random() * 333) + 666;

        // blink!
        setInterval(() => {
          logo.src = `./logo_blink.png`;
          setTimeout(() => {
            logo.src = `./logo.png`;
          }, 100);
        }, randomTime);
      });

      alert("Find the one who stares, win a prize!");
    }
  }, 0);
};

function sv_skip() {
  window.location = "https://discord.gg/unnamed-group";
}
