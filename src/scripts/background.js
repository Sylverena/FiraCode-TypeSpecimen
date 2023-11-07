function parallaxFadeOut()
{
    let $parallaxContainer = $('.parallax-container')
    $parallaxContainer.removeClass('fadein')
    $parallaxContainer.addClass('fadeout')

}

function parallaxFadeIn()
{
    let $parallaxContainer = $('.parallax-container')
    $parallaxContainer.removeClass('fadeout')
    $parallaxContainer.addClass('fadein')
}

function checkFade(landingNum)
{
    if (landingNum > 2)
    {
        parallaxFadeOut()
    }
    else if (landingNum === 2)
    {
        parallaxFadeIn()
    }
}