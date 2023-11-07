$(document).ready( function ()
{
    $("#font-size-slider").on("input", function () {
        const fontSize = $(this).val();
        $("#font-size-value").text(fontSize);
        $(".variable-div").css("font-size", fontSize + "pt");
    });

    $(document).ready(function() {
        const $boldButton = $("#bold-button");
        const $italicButton = $("#italic-button");
        const $underlineButton = $("#underline-button");
        const $textArea = $(".variable-div");

        $boldButton.click(function() {
            toggleStyle($textArea, "bold");
            $boldButton.toggleClass('button-active');
        });

        $italicButton.click(function() {
            toggleStyle($textArea, "italic");
            $italicButton.toggleClass('button-active');
        });

        $underlineButton.click(function() {
            toggleStyle($textArea, "underline");
            $underlineButton.toggleClass('button-active');
        });

        function toggleStyle($element, style) {
            $element.toggleClass(style);

        }
    });

});