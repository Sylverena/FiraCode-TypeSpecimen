$(document).ready(function() {
    // Set the interval for scrolling (in milliseconds)
    const scrollInterval = 3000;

    // Function to scroll the div's content
    function scrollContent($scrollingDiv) {
        const $firstChild = $scrollingDiv.find('p:first');

        // Animate the scroll by moving the first child to the bottom
        $firstChild.slideUp(function() {
            $firstChild.appendTo($scrollingDiv).slideDown();
        });
    }

    // Start the auto-scrolling for each .scrolling-div
    $('.scrolling-div').each(function() {
        const $scrollingDiv = $(this);
        let scrollTimer = setInterval(function () {
            scrollContent($scrollingDiv);
        }, scrollInterval);

        // Pause the auto-scrolling when the user hovers over the content
        $scrollingDiv.hover(function() {
            clearInterval(scrollTimer);
        }, function() {
            scrollTimer = setInterval(function() {
                scrollContent($scrollingDiv);
            }, scrollInterval);
        });
    });
});
