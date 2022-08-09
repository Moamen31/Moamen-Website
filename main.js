
//time countDown in events section
let countDown = setInterval(() => {

    //get the date we want to count to (in milliseconds)
    let targetDate = new Date("Dec 31, 2022 23:59:59").getTime()

    //get time now (in milliseconds)
    let timeNow = new Date().getTime()

    //difference between them
    let diff = targetDate - timeNow

    //how time works
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    //day is 1000 * 60 * 60 * 24
    //hour is 1000 * 60 * 60
    //minute is 1000 * 60

    // we turn the diff to days hours minutes seconds
    let newDays = Math.floor(diff / day)
    let newHours = Math.floor((diff % day) / hour)
    let newMinutes = Math.floor((diff % hour) / minute)
    let newSeconds = Math.floor((diff % minute) / second)

    //get elements
    document.querySelector(".events .days").textContent = newDays < 10 ? `0${newDays}` : newDays
    document.querySelector(".events .hours").textContent = newHours < 10 ? `0${newHours}` : newHours
    document.querySelector(".events .minutes").textContent = newMinutes < 10 ? `0${newMinutes}` : newMinutes
    document.querySelector(".events .seconds").textContent = newSeconds < 10 ? `0${newSeconds}` : newSeconds

    if (diff === 0) {
        clearInterval(countDown)
    }
}, 1000)


//scroll to top btn
let scrollBtn = document.querySelector(".scroll-btn")
let header = document.querySelector("header")
let links = document.querySelectorAll("header nav > ul > li > a")
let logo = document.querySelector("header .logo a")

//progress in our skills section
let progressSection = document.querySelector(".our-skills")
let spans = document.querySelectorAll(".progress span")

//stats numbers on scroll
let statsSection = document.querySelector(".stats")
let statsNumbers = document.querySelectorAll(".stat-number")
let started = false;

window.onscroll = (() => {
    //scroll btn
    if (window.scrollY >= 600) {
        scrollBtn.style.display = "block"
    } else {
        scrollBtn.style.display = "none"
    }

    //header
    if (window.scrollY >= 400) {
        header.style.cssText =
            "position:fixed;background-color:#0075ff;z-index: 50;";
        links.forEach((link) => {
            link.style.color = "white"
        });
        logo.style.color = "white"
    }
    if (window.scrollY === 0) {
        header.style.cssText =
            "position:relative;";
        links.forEach((link) => {
            link.style.color = "black"
        });
        logo.style.color = "#2196f3"
    }

    //progress bar on scroll
    if (window.scrollY >= progressSection.offsetTop - 300) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })

    }

    //stat on scroll 
    if (window.scrollY >= statsSection.offsetTop - 300) {
        //to stop the counting from going forever
        if (!started) {
            statsNumbers.forEach((number) => {
                counter(number)
            })
            started = true;
        }
        function counter(ele) {
            let limit = ele.dataset.limit;
            let count = setInterval(() => {
                ele.textContent++
                if (ele.textContent == limit) {
                    clearInterval(count);
                }
            }, 2000 / limit)
        }
    }
})

//scroll to top on click
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth",
    })
})


//mega menu on click
let otherLinks = document.querySelector(".other-links")
otherLinks.addEventListener("click", () => {
    otherLinks.classList.toggle("show-menu")
})


// preloader
let preLoader = document.querySelector(".preloader")

window.addEventListener("load", function(){
    preLoader.style.display = "none"
})