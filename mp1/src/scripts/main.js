// Put your js code here


//1. modal
var modal = document.getElementById('big-modal-pic');
modal.style.display = 'none'

var normal_pic = document.getElementById('normal-mourn-pic')

normal_pic.onclick = function () {
    modal.style.display = 'block'
}

modal.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

document.getElementById('close-button').onclick = function () {
    console.log('close')
    modal.style.display = 'none'
}


//2.scroll
document.body.onscroll = function (event) {
    let dis_scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    resize_nav_bar(dis_scroll > 50)
    change_selectable_when_scroll(dis_scroll)
}

function highlight_bar (element) {
    let selectables = document.getElementsByClassName('selectable')
    Array.prototype.map.call(selectables, function (element) {
        element.classList.remove('lightened')
    })

    element.classList.add('lightened')}

var news = document.getElementById('news')
var two_cols = document.getElementById('two-cols')
var slides = document.getElementById('slides')
var video = document.getElementById('video')
var last_section = document.getElementById('last-section')

var rankings_section = document.getElementById('section-rankings')
var highlights_section = document.getElementById('footer-highlights')
var video_section = document.getElementById('video-container-box')
var social_section = document.getElementById('social-media-box')

var distNewsBottom = 0;
var dis_rankings = rankings_section.offsetTop
var dis_highlights = highlights_section.offsetTop
var dis_video = video_section.offsetTop
var dis_social = social_section.offsetTop

function change_selectable_when_scroll (dis_scroll) {
    let real_dis_scroll = dis_scroll + 100

    if (real_dis_scroll < dis_rankings) {
        highlight_bar(news)
    } else if (real_dis_scroll < dis_highlights) {
        highlight_bar(two_cols)
    } else if (real_dis_scroll < dis_video) {
        highlight_bar(slides)
    } else if (real_dis_scroll < dis_social) {
        highlight_bar(video)
    } else {
        highlight_bar(last_section)
    }
}

function click_nav_bar () {
    news.onclick = function () {
        scrollTo(distNewsBottom)
    }
    two_cols.onclick = function () {
        scrollTo(dis_rankings)
    } 
    slides.onclick = function () {
        scrollTo(dis_highlights)
    }
    video.onclick = function () {
        scrollTo(dis_video)
    }
    last_section.onclick = function () {
        scrollTo(dis_social)
    }
}
click_nav_bar()

function resize_nav_bar(shrink) {
    console.log(shrink)
    if (shrink) {
        Array.prototype.map.call(document.getElementsByClassName('shrink'), function (element) {
            element.style.visibility = 'hidden'
            element.classList.add('gone')
        })          
    } else {
        Array.prototype.map.call(document.getElementsByClassName('shrink'), function (element) {
            element.classList.remove('gone')
            element.style.visibility = 'visible'
        })
    }
}

function mouse_over_nav_bar () {
    let selectables = document.getElementsByClassName('selectable')
    Array.prototype.map.call(selectables, function (element) {
        element.onmouseover = function (event) {
            Array.prototype.map.call(selectables, function (element) {
                element.classList.remove('lightened')
            })

            element.classList.add('lightened')
        }

        element.onmouseout = function (event) {
            change_selectable_when_scroll(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)
        }
    })
}
mouse_over_nav_bar()



// var current_y = 0;
var target_y = 0;

function scrollTo(position_y, time = 10, speed = 50) {
    target_y = position_y - 50;
    
    let screenY = Math.floor(window.scrollY);

    //Scroll Down
    if (screenY < position_y) {
    	// document.getElementsByClassName('nav-bar').style.height = '150%'
        var scrolling = setInterval(function () {
            screenY = screenY + speed;
            if (screenY >= target_y) {
                clearInterval(scrolling);
                return;
            }
            window.scrollTo(0, screenY);
        }, time);
    }

    //Scroll Up
    if (screenY > position_y) {
    	// document.getElementsByClassName('nav-bar').style.height = '67%'    	
        var scrolling = setInterval(function () {
            screenY = screenY - speed;
            if (screenY <= target_y) {
                clearInterval(scrolling);
                return;
            }
            window.scrollTo(0, screenY);
        }, time);
    } 
}
// 3.slides
var pictures = [
    'assets/court.jpeg',
    'https://img.buzzfeed.com/buzzfeed-static/static/2020-01/27/20/asset/65546335b6a9/sub-buzz-593-1580158440-2.jpg?downsize=1600:*&output-format=auto&output-quality=auto',
    'https://img.buzzfeed.com/buzzfeed-static/static/2020-01/27/20/asset/d3fdefe4cf94/sub-buzz-602-1580158598-4.jpg?downsize=1600:*&output-format=auto&output-quality=auto'
]

function slide_picture(index, right) {
    let carousel = document.getElementById('carousal-pic')
    
    if (right) {
        carousel.classList.add('slideRight')
        setTimeout(() => {
            carousel.classList.remove('slideRight')
            carousel.src = pictures[index]
            carousel.classList.add('fromLeft')
            setTimeout(() => {
                carousel.classList.remove('fromLeft')
            }, 100)
        }, 100)

    } else {
        carousel.classList.add('slideLeft')
        setTimeout(() => {
            carousel.classList.remove('slideLeft')
            carousel.src = pictures[index]
            carousel.classList.add('fromRight')
            setTimeout(() => {
                carousel.classList.remove('fromRight')
            }, 100)
        }, 100)
    }
}

document.getElementById('press_left').onclick = function () {
    let temp = pictures[0]
    pictures.splice(0, 1)
    pictures = pictures.concat([temp])
    slide_picture(0, false)
}

document.getElementById('press_right').onclick = function () {
    pictures.splice(0, 0, pictures[pictures.length - 1])
        pictures.splice(pictures.length - 1, 1)

    slide_picture(0, true)
}

//animation
const buttonGo = document.querySelector('.button-small');
buttonGo.addEventListener('click',() => {
    const item = document.getElementsByClassName("position-initial")[0];
    item.classList.add("position-left");
    setTimeout(() => item.classList.remove("position-left"), 7000);
});