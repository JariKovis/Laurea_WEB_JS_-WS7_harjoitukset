function parseData() {

    // Get all quote and author tags from the page
    var qdata = document.getElementsByTagName('quote');
    var adata = document.getElementsByTagName('author');
    // Output on console.
    // You can also use qdata[0].childNodes[0].nodeValue;
    console.log(qdata[1].innerHTML);
    console.log(adata[1].innerHTML);

    /*
    // If there were many tags, one could loop through it
    for (var i=0; i < x.length; i++){
    x[i].innerHTML;
    console.log(i);
    }
    
    
    */

}
