var $$ = Dom7;

    $$(document).on('page:init', '.page[data-name="orcamento"]', function (e) {
        firebase.database().ref('orçamento').on('value', function (snapshot){
            //usersList.innerHTML = '';
            $$("#usersList").empty();
        
            snapshot.forEach(function(item){
                  var listHtml = '<div class="row block block-strong">';
                  listHtml += '<div class="col-5">'+ item.val().name +'</div>';
                    listHtml += '<div class="col-10">'+ item.val().email +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().comodo +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().cidade +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().bio +'</div>';
                    listHtml += '</div>';
                    //e.append(listHtml).innerHTML;
                    $$("#usersList").append(listHtml);
        
                
            })
        })
        
    }); 
