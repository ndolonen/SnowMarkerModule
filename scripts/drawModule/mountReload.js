
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


m.mount(drawRoot, drawTools)
// m.mount(iconRoot, iconTools)
cssColors()
function resetDraw()
{
    m.mount(drawRoot, drawTools)
    cssColors()
}