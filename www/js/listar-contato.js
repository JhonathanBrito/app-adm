var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar-contato"]', function (e) {
    firebase.database().ref('contato').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div class="row block block-strong">';
                //listHtml += '<td class="label-cell">'+item.key+'</td>';
                listHtml += '<div class="col-25">'+ item.val().name +'</div>';
                listHtml += '<div class="col-25">'+ item.val().email +'</div>';
                listHtml += '<div class="col-25">'+ item.val().telefone +'</div>';
                listHtml += '<div class="col-25">'+ item.val().bio +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
            
        })
    })
    
});
  