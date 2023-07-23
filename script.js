//your JS code here. If required.
        const targetElement=document.getElementById("level");
        let domLevel=0;
        let currentElement=targetElement;
        while(currentElement)
        {
            domLevel++;
            currentElement=currentElement.parentElement;
        }
    alert(`The level of the element is ${domLevel}`);
    