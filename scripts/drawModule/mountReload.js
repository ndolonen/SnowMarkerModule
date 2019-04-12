
// $('#iconTab').hide() 

// let swapDrawWindowToggle = false
// $('.toggleFunction').click( () => 
// {
//     if (swapDrawWindowToggle)
//     {   
//         $('#iconTab').hide()
//         $('#drawTab').show()  
//         swapDrawWindowToggle = false 
//     } else
//     {
//         $('#drawTab').hide() 
//         $('#iconTab').show() 
//         swapDrawWindowToggle = true
//     }   
// })

m.mount(popupRoot, drawPopup)
let drawRoot = document.getElementById("drawBox")
let iconRoot = document.getElementById("iconBox")
m.mount(drawRoot, drawTools)
m.mount(iconRoot, iconTools)
markerIcons_load()
$('#iconBox').hide()

// m.mount(iconRoot, iconTools)
cssColors()
function resetDraw()
{
    m.mount(drawRoot, drawTools)
    cssColors()
}

let selectedToolbox = false //false = draw, true = tools
function showDrawbox()
{
    if( selectedToolbox )
    {    
        $("#drawPopupTitle").text("Draw Tools")
        $('#drawBox').show()
        $('#iconBox').hide()
        $('#iconTab').removeClass("selectedTab")
        $('#drawTab').addClass("selectedTab")
        selectedToolbox = false
    }
}

function showIconbox()
{
    if( !selectedToolbox )
    { 
        $("#drawPopupTitle").text("Icon Tools")
        $('#drawBox').hide()
        $('#iconBox').show()
        $('#drawTab').removeClass("selectedTab")
        $('#iconTab').addClass("selectedTab")
        selectedToolbox = true
    }
}