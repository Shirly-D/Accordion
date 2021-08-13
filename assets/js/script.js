var accord = document.querySelectorAll('.accord');

for (var i = 0; i < accord.length; i++) {
    accord[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var content = this,nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
}























