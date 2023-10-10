document.onkeydown = function (event) {
    let hash = window.location.hash;
    let currentLanding = hash.substring(hash.length - 1);

    if (currentLanding && currentLanding > "0")
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