$(document).ready(function () {
   // set minimum height of about text to portrait img
   $("div.about").css("min-height", $(".portrait").css("height"));
   
   
    let aL;
    let aniLo;
    let marginWidth;
    let strLength; //for concatonating

    //Portrait resize
    $(".portrait").css("height", $(".portrait").css("width"));
    $(window).on("resize", function () {
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

        //text animation textAnimation

        /* aL = $(".animatedLoader").css("width");
        aL = aL.substring(0, aL.length - 2); // trim px
        aniLo = parseInt(aL) / 756; //width of loader / max width for %change to apply
        //let marginWidth = aniLo * 43.4
        strLength = $(".textAnimation").css("left").length;
        marginWidth = aniLo * parseInt($(".textAnimation").css("left").substring(0, strLength - 2));
        $(".textAnimation").css("left", marginWidth + "px"); */

        /* function leftRescale(className, attrName) {
           let aL = $(".animatedLoader").css("width");
           aL = aL.substring(0, aL.length - 2);
           let aniLo = parseInt(aL) / 756; // get working percentage
           let marginWidth = aniLo * parseInt($(className).css(attrName).substr(0,this.length - 2));
          // $("className").css("attrName", marginWidth + "px");
       }
       leftRescale ('".svgWrap"','"margin-left"');
*/
    });
});