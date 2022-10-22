const labels = document.querySelectorAll('.faq-div');
// const unhideClass = 'unhidden';


labels.forEach(element => {
    element.onclick = () => {        

        const allClasses = document.querySelectorAll('.unhidden');

        if(allClasses.length != 0){
            allClasses.forEach((element) => {
                element.classList.remove('unhidden');
            });
        }
        element.children[1].classList.add('unhidden')

        
        
        // let paragraphs = element.querySelector('.faq-p');

        // paragraphs.classList.add('unhidden');

        // if (paragraphs.classList.contains(unhideClass)) {
        //     paragraphs.classList.remove(unhideClass)
        // } else {
        //     paragraphs.classList.add(unhideClass);
        // }
    }
});