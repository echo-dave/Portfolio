$(document).ready(function () {
    // set minimum height of about text to portrait img
    $("div.about").css("min-height", $(".portrait").css("height"));

    //set .imgBreak hight as a percentage of width. file 19% of width
    $(".imgBreak").css("height", parseInt($(".imgBreak").css("width").substring(0, $(".imgBreak").css("width").length - 2) * .19 + "px"));

    //listen for loader animation to end and set position absolute
    $(".animatedLoader").on("animationend webkitAnimationEnd oAnimationEnd", function (event) {
        console.log(event.originalEvent.animationName);
        if (event.originalEvent.animationName ==="slidetop") {

        $(".animatedLoader").css("position", "absolute");

        //change from dark to light
    /*     let currentSheet = $("#style").prop("href");
        if (currentSheet.indexOf("style.css") >= 0) { */
        function setLightBtn() {
            $("#styleChange").html('<h6><a href="#" title="Have a go at the light theme">go light</a><h6>');
            $("#styleChange").on("click", function () {
            $("#style").prop("href", "assets/css/light.css");
                setDarkBtn();
            });

        }
        function setDarkBtn(){
            $("#styleChange").html('<h6><a href="#" title="Return to the dark">go dark</a><h6>');
            $("#styleChange").on("click", function () {
                $("#style").prop("href", "assets/css/style.css");
                setLightBtn();
            });
        
        }
        setLightBtn();

    }
        
    });




    let aL;
    let aniLo;
    let marginWidth;
    let strLength; //for concatonating

    //Portrait resize
    $(".portrait").css("height", $(".portrait").css("width"));
    // $(window).on("resize", function () {

    function sizingFunction() {
        $(".portrait").css("height", $(".portrait").css("width"));

        //header resize based 756px


        //working block for .animationLoader
        aL = $(".animatedLoader").css("width");
        aL = aL.substring(0, aL.length - 2);
        aniLo = parseInt(aL) / 756; //.70 to calculate off 43.4 base margin
        marginWidth = aniLo * 43.4
        // let marginWidth = aniLo * parseInt($(".svgWrap").css("margin-left").substring(0,aL.length - 2));
        $(".svgWrap").css("margin-left", marginWidth + "px");

        // canvas
        aL = $(".animatedLoader").css("width");
        aL = aL.substring(0, aL.length - 2); // trim px
        aniLo = parseInt(aL) / 756; //width of loader / max width for %change to apply
        //let marginWidth = aniLo * 43.4
        marginWidth = aniLo * parseInt($(".animationCanvas").css("left").substring(0, this.length - 2));
        $(".animationCanvas").css("left", marginWidth + "px");


    };

    sizingFunction();

    $(window).on("resize", function () {
        sizingFunction();
    });
});