function produce_img_over(e) {
    sm_img = e.getElementsByClassName("product_img_small");
    wd_img = e.getElementsByClassName("product_img_width");
    sm_img[0].style.display = "none";
    wd_img[0].style.display = "block";
}

function produce_img_out(e) {
    sm_img = e.getElementsByClassName("product_img_small");
    wd_img = e.getElementsByClassName("product_img_width");
    wd_img[0].style.display = "none";
    sm_img[0].style.display = "block";
}