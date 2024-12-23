window.addEventListener('load', function(){
        truncateCardTitle();
});
function truncateCardTitle(){
        var cardTitle = document.querySelectorAll('.card-title');
        cardTitle.forEach(function(item){
                var title = item.innerHTML;
                if(title.length > 40){
                        item.textContent = title.substring(0, 40) + '...';
                }
        });
}

//Side bar Mini
function sidebarMini(){
        var sidebarMini = document.querySelector('.sidebarMini');
        sidebarMini.classList.toggle('is-open');
}

//Dark Mode
darkMode();
function darkMode(){
        var body = document.querySelector('body');
        body.classList.toggle('darkMode');
}