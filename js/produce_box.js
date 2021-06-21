function produce_img_over(e) {
    sm_img = e.getElementsByClassName("product_img_small");
    wd_img = e.getElementsByClassName("product_img_width");
    produce_text = e.getElementsByClassName("produce_text");
    sm_img[0].style.display = "none";
    wd_img[0].style.display = "block";
    produce_text[0].style.display = "block"
}

function produce_img_out(e) {
    sm_img = e.getElementsByClassName("product_img_small");
    wd_img = e.getElementsByClassName("product_img_width");
    produce_text = e.getElementsByClassName("produce_text");

    wd_img[0].style.display = "none";
    sm_img[0].style.display = "block";
    produce_text[0].style.display = "none"

}