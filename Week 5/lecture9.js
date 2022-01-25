////**********************************************************************
////**********************************************************************
//// Lecture  9: Asynchronous Javascript. Callbacks, Promises, Awaits, etc
////**********************************************************************
////**********************************************************************


//There is only one JS thread and that can be a bit yikes at times.
window.addEventListener('load', (event) => {
    a = 0
    setInterval(()=>{
        console.log("hi", a);
        a+=1;
    }, 1000)

    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        alert('You clicked me!');

        let pElem = document.createElement('p');
        pElem.textContent = 'This is a newly-added paragraph.';
        document.body.appendChild(pElem);
    });
})
    
    