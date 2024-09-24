function run() {
    const query = new URLSearchParams(window.location.search);
    const phone = query.get('phone');

    if (!phone) {
        const toHide = document.querySelectorAll('.show');
        toHide.forEach((el) => el.classList.add('hide'));
        return;
    }

    const toHide = document.querySelectorAll('.inputs');
    toHide.forEach((el) => el.classList.add('hide'));

    const wurl = `https://wa.me/${phone}`;

    const qrcode = new QRCode("qrcode", {
        text: wurl,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    const link = document.getElementById('w_link');
    link.href = wurl;
}

run();