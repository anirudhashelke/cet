//adding title to document
document.title = "State Common Entrance Test Cell | Government of Maharashtra"
// create icon
const icon = document.createElement("link")
icon.rel = "icon"
icon.href = "../img/cet.png"
document.head.appendChild(icon)

const root = document.getElementById("root")
// create  link for  style
// const indexLink =document.createElement('link')
//  indexLink.rel="stylesheet"
//  indexLink.href="../css/style.css"

// document.head.appendChild(indexLink)

// // //create a link for fontawesome
// const fontawesome = document.createElement("link")
// fontawesome.rel = "stylesheet"
// fontawesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"

// document.head.appendChild(fontawesome)

// // create link bootstrap
// const bootstrap =document.createElement("link")
// bootstrap.rel="stylesheet"
// bootstrap.href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"

// document.head.appendChild(bootstrap)

// create links function
function allLinks(path) {
    const name = document.createElement("link")
    name.rel = "stylesheet"
    name.href = path

    document.head.appendChild(name)
    return "linked"
}
allLinks("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css")
allLinks("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
allLinks("../css/style.css")
allLinks("../res/responsive.css")

// header part
const header = document.createElement("header")
// headers.className="container"
// headers.style.borderBottom="1px solid black"
root.appendChild(header)

// create header div
const headers = document.createElement("div")
headers.className = "container"
headers.style.borderBottom = "1px solid black"
header.appendChild(headers)
// create header div
const headerDiv = document.createElement("div")
headerDiv.className = "row py-2"
headers.appendChild(headerDiv)

// create div for headerdiv
const headerDivcol = document.createElement("div")
headerDivcol.className = "col-12 col-md-8  m-auto "
headerDiv.appendChild(headerDivcol)
// create ul 
const headerDivcolUl = document.createElement("ul")
headerDivcolUl.style.listStyle = "none"
headerDivcolUl.className = "d-flex align-items-center my-auto justify-content-between "
headerDivcol.appendChild(headerDivcolUl)

const array = [
    {
        title: "Skip to main content",
        icon: "fa-arrow-down",
        fontSize: "17px"
    },
    {
        icon: "fa-volume-up",
        fontSize: "17px"
    },
    {
        title: "A",
        fontSize: "17px"
    },
    {
        icon: "fa-sitemap",
        fontSize: "17px"
    },
    {
        icon: "fa-search",
        fontSize: "17px"
    }
]

for (let i = 0; i < array.length; i++) {
    // console.log(array[i].title)

    // create li 
    const headerDivcolUlLi = document.createElement("li")
    headerDivcolUlLi.style.fontSize = array[i].fontSize
    headerDivcolUlLi.className="a-headertop"
    // create a for li
    const headerDivcolUlLiAchor = document.createElement("a")
    headerDivcolUlLiAchor.className = "text-dark text-decoration-none"
    headerDivcolUlLiAchor.href = "#"

    // create i for achor
    const headerDivcolUlLiAchorI = document.createElement("i")
    headerDivcolUlLiAchorI.className = `fa ${array[i].icon}`

    // appendChild for headerDivul
    headerDivcolUlLiAchor.append(headerDivcolUlLiAchorI)
    headerDivcolUlLiAchor.append(array[i].title || "")
    headerDivcolUlLi.appendChild(headerDivcolUlLiAchor)
    headerDivcolUl.appendChild(headerDivcolUlLi)
}
const headerDivcols = document.createElement("div")
headerDivcols.className = "col-12 col-md-4 m-auto "
// appendChild for headerDiv
headerDiv.appendChild(headerDivcols)

// create ul 
const headerDivcolsUl = document.createElement("ul")
headerDivcolsUl.style.listStyle = "none"
headerDivcolsUl.className = "d-flex align-items-center my-auto gap-5 justify-content-end a-headergaps"
headerDivcols.appendChild(headerDivcolsUl)
const arrays = [
    {
        icon: "fa-youtube-play",
        fontSize: "17px"
    },
    {
        icon: "fa-facebook-official",
        fontSize: "17px"
    },
    {
        icon: "fa-instagram",
        fontSize: "17px"

    },
    {
        title: "twitter",
        icon: "fa-twitter",
        fontSize: "17px"
    }
]
for (let i = 0; i < arrays.length; i++) {
    // console.log(array[i].title)

    // create li 
    const headerDivcolsUlLi = document.createElement("li")
    headerDivcolsUlLi.style.fontSize = arrays[i].fontSize
    headerDivcolsUlLi.className="a-headertop"
    // create a for li
    const headerDivcolsUlLiAchor = document.createElement("a")
    headerDivcolsUlLiAchor.className = "text-dark text-decoration-none"
    headerDivcolsUlLiAchor.href = "#"

    // create i for achor
    const headerDivcolsUlLiAchorI = document.createElement("i")
    headerDivcolsUlLiAchorI.className = `fa ${arrays[i].icon}`

    // appendChild for headerDivul
    headerDivcolsUlLiAchor.append(headerDivcolsUlLiAchorI)
    headerDivcolsUlLiAchor.append(arrays[i].title || "")
    headerDivcolsUlLi.appendChild(headerDivcolsUlLiAchor)
    headerDivcolsUl.appendChild(headerDivcolsUlLi)
}

// headermiddle
const headerMiddle = document.createElement("div")
headerMiddle.className = "container "
// create row for headertmiddle
const headerMiddlerRow = document.createElement("div")
headerMiddlerRow.className = "row"
headerMiddle.appendChild(headerMiddlerRow)
// create headermiddlerocol for row
const headerMiddlerRowCol = document.createElement("div")
headerMiddlerRowCol.className = "col-12 col-md-7 py-2 d-flex  "
headerMiddlerRow.appendChild(headerMiddlerRowCol)
//  create sub div for headermiddlerowcol 1
var headerMiddlerRowColDiv = document.createElement("div")
headerMiddlerRowColDiv.className = "a-states"
headerMiddlerRowColDiv.style.width = "10%"
// create imgtag 
var headerMiddlerRowColDivImg = document.createElement("img")
headerMiddlerRowColDivImg.src = "../img/satyamev-jayte-removebg-preview.png"
headerMiddlerRowColDivImg.style.width = "50px"
// headerMiddlerRowColDivImg.style.height="86px"
headerMiddlerRowColDiv.appendChild(headerMiddlerRowColDivImg)
headerMiddlerRowCol.appendChild(headerMiddlerRowColDiv)

// ...2

var headerMiddlerRowColDiv = document.createElement("div")
headerMiddlerRowColDiv.className = "a-state d-flex  ps-3 align-items-center gap-4"
headerMiddlerRowColDiv.style.borderLeft = "1px solid black"
headerMiddlerRowColDiv.style.width = "79%"

// create inside div sub1 
var headerMiddlerRowColDivSub = document.createElement("div")
headerMiddlerRowColDiv.append(headerMiddlerRowColDivSub)
// headerMiddlerRowColDivSub child img
var headerMiddlerRowColDivImg = document.createElement("img")
headerMiddlerRowColDivImg.src = "../img/cet.png"
headerMiddlerRowColDivImg.style.width = "88px"
headerMiddlerRowColDivSub.appendChild(headerMiddlerRowColDivImg)

// ............sub2
var headerMiddlerRowColDivSub = document.createElement("div")
headerMiddlerRowColDiv.append(headerMiddlerRowColDivSub)
// headerMiddlerRowColDivSub child h1
var headerMiddlerRowColDivSubH1 = document.createElement("h4")
headerMiddlerRowColDivSubH1.innerText = "GOVERNMENT OF MAHARASHTRA"
headerMiddlerRowColDivSubH1.className = "a-headertext"
headerMiddlerRowColDivSubH1.style.fontSize = "22px"
headerMiddlerRowColDivSubH1.style.fontWeight = "700"
headerMiddlerRowColDivSubH1.style.color = "#163269"
headerMiddlerRowColDivSub.appendChild(headerMiddlerRowColDivSubH1)

//headerMiddlerRowColDivSub child create h5
var headerMiddlerRowColDivSubH5 = document.createElement("h5")

headerMiddlerRowColDivSubH5.innerText = "State Common Entrance Test Cell"
headerMiddlerRowColDivSubH5.style.fontSize = "18px"
headerMiddlerRowColDivSubH5.style.fontWeight = "500"
headerMiddlerRowColDivSub.appendChild(headerMiddlerRowColDivSubH5)
headerMiddlerRowCol.appendChild(headerMiddlerRowColDiv)

// ..3
var headerMiddlerRowColDiv = document.createElement("div")
headerMiddlerRowColDiv.className = "a-state"
headerMiddlerRowColDiv.style.width = "11%"

// headerMiddlerRowColDivSub child img
var headerMiddlerRowColDivImg = document.createElement("img")
headerMiddlerRowColDivImg.src = "../img/Seal_of_Maharashtra.svg.png"
headerMiddlerRowColDivImg.style.width = "88px"

headerMiddlerRowColDiv.appendChild(headerMiddlerRowColDivImg)
headerMiddlerRowCol.appendChild(headerMiddlerRowColDiv)
header.appendChild(headerMiddle)

// start headerend part
const headerbottom=document.createElement("div")
headerbottom.style.backgroundColor="#163269"
header.appendChild(headerbottom)

// create headerEndContainer
const headerEndContainer=document.createElement("div")
headerEndContainer.className="container"
headerbottom.appendChild(headerEndContainer)

const headerEnd = document.createElement("div")
headerEnd.className = "row d-flex justify-content-between"

headerEndContainer.appendChild(headerEnd)
// create div  endheder1
var headerEndcol = document.createElement("div")
headerEndcol.className = "col-12 col-md-9 py-4  m-auto a-headercol"
headerEnd.appendChild(headerEndcol)

// create ul
const headerEndcolUl=document.createElement("ul")
headerEndcolUl.style.listStyle="none"
headerEndcolUl.className="d-flex justify-content-between my-auto a-headerendul "
headerEndcol.appendChild(headerEndcolUl)

//create array for navs
const headerBottomNavUlLiList = ["Home", "About Us", "CETs", "CAP", "Downloads", "Statics", "Online System", "Event", "Contact"]


headerBottomNavUlLiList.forEach(function (ele) {
   // create li
const headerEndcolUlLi=document.createElement("li")
headerEndcolUlLi.className="a-headerendli"
    // create atag
const headerEndcolUlLiAtag=document.createElement("a")
     headerEndcolUlLiAtag.href="#"
     headerEndcolUlLiAtag.innerText = ele
     headerEndcolUlLiAtag.className = "a-headera text-decoration-none text-white"
    headerEndcolUlLi.appendChild(headerEndcolUlLiAtag)
    headerEndcolUl.appendChild(headerEndcolUlLi)

})
// endheder2

var headerEndcol = document.createElement("div")
headerEndcol.className = "col-12 col-md-2 py-4 text-end a-headercol"


//create a btn to nav
const headerEndcolBtn = document.createElement("button")
headerEndcolBtn.type = "button"
headerEndcolBtn.innerText = "Ask Pragati"
headerEndcolBtn.className = " a-headerbtn text-white p-1 px-2 rounded-2"
headerEndcolBtn.style.border = "1px solid #808080"
headerEndcolBtn.style.background = "#01205D"

headerEndcol.appendChild(headerEndcolBtn)


//create a img to btn
const headerEndcolBtnImg = document.createElement("img")
headerEndcolBtnImg.src = "../img/Ask-Pragati-9.png"
headerEndcolBtnImg.alt = "Ask-Pragati"
headerEndcolBtnImg.width = "35"

headerEndcolBtn.appendChild(headerEndcolBtnImg)
headerEnd.appendChild(headerEndcol)


// cerate main tag
const main=document.createElement("div")
root.appendChild(main)

// create maaiNotice
const mainNotice=document.createElement("section")
main.appendChild(mainNotice)

// ceraet maincontainer
const mainNOticeContainer=document.createElement("div")
mainNOticeContainer.className="container d-flex  py-2"
mainNotice.appendChild(mainNOticeContainer)

// creaet noticebut
const mainNOticeContainerBtn=document.createElement('button')
mainNOticeContainerBtn.innerText = "Announcement"
mainNOticeContainerBtn.style.background = "#EEC641"
mainNOticeContainerBtn.className = "btn text-white fw-bold"
mainNOticeContainer.appendChild(mainNOticeContainerBtn)

//create marquee tag
const mainNOticeContainerMarquee=document.createElement("marquee")
mainNOticeContainerMarquee.innerHTML = "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2023-24 (English/Marathi)"
mainNOticeContainerMarquee.style.background = "#f1f1f1"
mainNOticeContainerMarquee.className = "  m-0 p-0 ms-2 "
mainNOticeContainerMarquee.behavior = ""
// mainNOticeContainerMarquee.onmouseover=this.stop();
// mainNOticeContainerMarquee.onmouseout=this.start()
mainNOticeContainerMarquee.direction = ""
mainNOticeContainerMarquee.style.lineHeight = "2.3"
mainNOticeContainer.appendChild(mainNOticeContainerMarquee)

// ceraete spantag
const marqueeSpan=document.createElement("span")
mainNOticeContainerMarquee.appendChild(marqueeSpan)
//  ceraet spanimg
const marqueeSpanImg=document.createElement("img")
marqueeSpanImg.src="../img/blinknew.gif"
marqueeSpanImg.alt='#'
marqueeSpanImg.style.width="23px"
marqueeSpanImg.style.height="12px"
marqueeSpanImg.style.paddingLeft="3px"
marqueeSpan.appendChild(marqueeSpanImg)

// start banner
const banner=document.createElement("section")
banner.className="d-flex"
main.appendChild(banner)

// creaete bannercontainer // banner left
const bannerContainerleft=document.createElement('div')
bannerContainerleft.style.width="75%"
bannerContainerleft.style.background="url(../img/GOVERNMENT.png)"
bannerContainerleft.style.height="386px"
bannerContainerleft.style.backgroundRepeat = "no-repeat"
bannerContainerleft.style.backgroundSize = "cover"
bannerContainerleft.style.backgroundPosition="50% 50%"
banner.appendChild(bannerContainerleft)

// banner right
const bannerContainerRight=document.createElement('div')
bannerContainerRight.style.background="url(../img/MicrosoftTeams-image-scaled.jpg)"
bannerContainerRight.style.width="25%"
bannerContainerRight.style.height="386px"
bannerContainerRight.style.backgroundRepeat = "no-repeat"
bannerContainerRight.style.backgroundSize = "cover"
bannerContainerRight.style.backgroundPosition="100% 0%"
banner.appendChild(bannerContainerRight)

// ceraet rightsub
const bannerContainerRightSub=document.createElement("div")
bannerContainerRightSub.style.background="linear-gradient(180deg, rgba(22,50,105,0.8) 10%, rgba(238,198,65,1) 100%)"
bannerContainerRightSub.style.height="100%"
bannerContainerRight.appendChild(bannerContainerRightSub)

// create rightcontent
const bannerContainerRightSubConatent=document.createElement("div")
bannerContainerRightSubConatent.className="py-4 px-4 a-banner "

function IconTitleCard(icon, titleString, background,img) {
    let card = document.createElement("div")
    card.className = "d-flex align-items-center gap-3 p-2  text-white a-bannergap   "
    let RightleftBox = document.createElement("div")
    RightleftBox.style.width = "70px"
    RightleftBox.style.height = "70px"
    RightleftBox.className = "bg-white rounded-pill d-flex  align-items-center justify-content-center a-banners"
    //create one more div to icon background
    const iconsLeft = document.createElement("div")
    iconsLeft.style.width = "50px"
    iconsLeft.style.height = "50px"
    iconsLeft.style.background = background
    iconsLeft.className = "a-bannert rounded-pill d-flex  align-items-center justify-content-center"
    iconsLeft.innerHTML = `<i class="fa ${icon} a-iconss" style="font-size:30px;" aria-hidden="true"></i>`
    RightleftBox.appendChild(iconsLeft)

    let rightBox = document.createElement("div")
    rightBox.style.flex = 1
    //create h6
    const title = document.createElement("h6")
    title.style.lineHeight = "22px"
    title.className="pt-2 a-bannerbox"
    title.innerText = titleString
    rightBox.appendChild(title)
    card.appendChild(RightleftBox)
    card.appendChild(rightBox)

    // create img
    const titleImg=document.createElement("img")
    titleImg.src=img
    titleImg.alt=""
    titleImg.className="ps-2 a-imgs"
    title.appendChild(titleImg)
     
    return card
}
bannerContainerRightSubConatent.appendChild(IconTitleCard("fa-user-circle-o", "Candidate Registration A.Y 2024-25", "#0E8F52","../img/blinknew.gif"))
bannerContainerRightSubConatent.appendChild(IconTitleCard("fa-users", "Candidate Help Module", "#FFB859" ,"../img/blinknew.gif"))
bannerContainerRightSubConatent.appendChild(IconTitleCard("fa-graduation-cap", "Foreign Candidate Registration Portal", "#163269"))
bannerContainerRightSubConatent.appendChild(IconTitleCard("fa-id-card", "Admissions Regulating Authority (ARA) Website", "#EE6A41"))
 
bannerContainerRightSub.appendChild(bannerContainerRightSubConatent)

// create left courses
const bannerContainerleftCourse = document.createElement("div")
bannerContainerleftCourse.className = "row m-0 "
bannerContainerleftCourse.style.background = "#EEC641"
bannerContainerleftCourse.style.width = "100%"

function CardNumber(title, descriptionText, background,) {
    const card = document.createElement("div")
    card.className = `col-12 col-lg-3 text-center text-white  py-2 `

    if (background) {
        card.style.background = background
    }

    //create title
    const titleH5 = document.createElement("h5")
    titleH5.className = "count"
    titleH5.setAttribute("data-count", title)
    titleH5.innerText = 0
    titleH5.style.fontSize = "30px"

    //create description
    const description = document.createElement("p")
    description.className = "m-0"
    description.innerText = descriptionText


    card.appendChild(titleH5)
    card.appendChild(description)
    //returned card
    return card
}


bannerContainerleftCourse.appendChild(CardNumber(6, "Number of Departments"))
bannerContainerleftCourse.appendChild(CardNumber(19, "Number of CETs", "#163269"))
bannerContainerleftCourse.appendChild(CardNumber(61, "Number of Courses"))
bannerContainerleftCourse.appendChild(CardNumber(4000, "Number of Institutes","#163269"))

main.appendChild(bannerContainerleftCourse)

const counts = document.querySelectorAll(".count")
counts.forEach(function (counter) {

    function updateCounter() {
        const finalValue = Number(counter.getAttribute("data-count"))
        const oldValue = Number(counter.innerText.replace(",", ""))
        const incrementValue = finalValue / 100

        if (oldValue < finalValue) {
            counter.innerText = Math.ceil(incrementValue + oldValue).toLocaleString()
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = `${finalValue > 1000 ? `${finalValue.toLocaleString()}+` : finalValue}`
        }
    }

    updateCounter()

})


const Script = document.createElement("script")
Script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
Script.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
Script.crossOrigin = "anonymous"
// console.log(Script)
document.body.appendChild(Script)