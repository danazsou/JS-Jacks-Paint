function configureListeners() {
    let images = document.getElementsByTagName('img'); 


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners  
        //mouseover will display price 
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)        
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
}
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
     //remove appropriate CSS class

     if (this.classList.contains('dim')){
        this.classList.remove('dim') // changed add to remove
     
}


    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}


function getProductInfo(paintColor) {
    let price;
    let colorName;  
    

    //paint colors listed in order horizonally left to right, repeat.
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price     
            price = '$19.99' 
            colorName = 'Lime Green'
            updatePrice(colorName, price) 
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price 
            price = '11.14' 
            colorName = 'Medium Brown' 
            updatePrice(colorName, price)       
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = '$22.99'
            colorName = 'Royal Blue'   
            updatePrice(colorName, price)   
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price = '$5.00'
            colorName = 'Bright Red'            
            updatePrice(colorName, price)   
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price
            price = '10.57'   
            colorName = 'Solid White' 
            updatePrice(colorName, price)          
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price    
            price = '$35.99'   
            colorName = 'Solid Black'   
            updatePrice(colorName, price)  
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$11.99'
            colorName = 'Medium Blue'       
            updatePrice(colorName, price)      
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price
            price = '$17.89'  
            colorName = 'Light Purple'      
            updatePrice(colorName, price)  
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$12.25'
            colorName = 'Bright Yellow'                       
            updatePrice(colorName, price)   
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price'); //followed mdn documentation
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name');
        color.textContent = colorName;
    }
    
}
