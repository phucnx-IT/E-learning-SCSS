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