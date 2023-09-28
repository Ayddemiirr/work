$(function () {
    let rightIcon = $(".fa-chevron-right");
    let leftIcon = $(".fa-chevron-left");

    function rightSlider() {
        let active = $(".active");
        if (active.next() != null) {
            active.removeClass("active");
            active.next().addClass("active");
        } else {
            active.removeClass("active");
            active.parent().first().addClass("active");
        }
    }

    function leftSlider() {
        let active = $(".active");
        if (active.prev() != null) {
            active.removeClass("active");
            active.prev().addClass("active");
        } else {
            active.removeClass("active");
            active.parent().last().addClass("active");
        }
    }

    rightIcon.click(rightSlider);
    leftIcon.click(leftSlider);

    setInterval(() => {
        rightSlider();
    }, 1000);
})
