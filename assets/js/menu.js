document.addEventListener('DOMContentLoaded', () => {
    // Close the dropdown menu if the user clicks outside of it,
    // or hits the Escape key.
    let menu = document.getElementById('menu');
    let drop = document.getElementById('drop-button');
    console.log("drop:", drop);

    drop.addEventListener('click', (e) => {
        menu.style.display = menu.style.display == 'unset' ? '' : 'unset';
    });

    window.addEventListener('click', (e) => {
        if (!e.target.matches('#drop-button')) {
            console.log("click");
            menu.style.display = '';
        menu.style.display = menu.style.display == 'unset' ? '' : 'unset';
            console.log("menu:", menu.style.display);
        }
    });

    window.addEventListener('keydown', (e) => {
        e = e || window.event;
        let key = e.which || e.keyCode;
        if (key == 27) {
            menu.style.display = '';
        }
    });
});

