$(document).ready(function () {
    $('.nav').on('click', function (event) {
        let hash = window.location.hash;
        let currentLanding = hash.substring(hash.length - 1);
        let id = $(this).attr('id');

        if (currentLanding && currentLanding > "1")
        {
            let newLanding = "";
            switch (id)
            {
                case 'nav-bottom':
                    newLanding = +currentLanding + +"1"
                    break;
                case 'nav-top':
                    newLanding = currentLanding - "1";
                    break;
                default:
                    alert('id no work')
            }
            event.preventDefault();
            window.location.replace("#landing" + newLanding)
        } else if (id === "nav-bottom")
        {
            event.preventDefault();
            window.location.replace('#landing2')
        }
    })

    document.onkeydown = function (event) {
        let hash = window.location.hash;
        let currentLanding = hash.substring(hash.length - 1);

        if (currentLanding && currentLanding > "1")
        {
            let newLanding = "";
            switch (event.key)
            {
                case 'ArrowDown':
                    newLanding = +currentLanding + +"1"
                    break;
                case 'ArrowUp':
                    newLanding = currentLanding - "1";
                    break;
                default:
                    return;
            }
            event.preventDefault();
            window.location.replace("#landing" + newLanding)
        } else if (event.key === "ArrowDown")
        {
            event.preventDefault();
            window.location.replace('#landing2')
        }
    }
})

window.onresize = function (event) {
    window.location.replace('#landing1')
}
