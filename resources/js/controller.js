$(document).ready(function(){
    window.changeActiveTab = function changeActiveTab(tabName) {
        switch(tabName){
            case "nav-cardapio":
                $("#nav-cardapio").attr("class","active");
            break;            
            case "nav-horarios":
                $("#nav-horarios").attr("class","active");
            break;            
            case "nav-precos":
                $("#nav-precos").attr("class","active");
            break;            
            default:
                $("#nav-cardapio").attr("class","active");
            break;
        }
    };
});
       