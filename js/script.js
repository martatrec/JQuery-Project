//impedire all'utente di visualizzare da subito il messaggio sulla pagina
//soluzione: nascondere il messaggio, far comparire un pulsante e quando l'utente clicca, far riapparire il messaggio facendo scomparire il pulsante

//1. nascondere il messaggio
$(".spoiler h2").hide();
//2. aggiungere il pulsante
$(".spoiler").append("<button>Scopri cosa hai vinto</button>");
//3. quando clicchiamo
$("button").click(function(){
	//3.1 mostrare il messaggio
	$(".spoiler h2").show();
 	//3.2 eliminare il pulsante
 	$(this).remove();
});
  
//problema: quando clicco su un'immagine vengo rimandato ad un'altra pagina
//soluzione: sovrapporre l'immagine ad uno sfondo nero - lightbox

//1. catturare il click dell'utente sull'immagine
$("#gallery a").click(function(){
	event.preventDefault();
	var href = $(this).attr("href");
 //2. mostrare l'overlay
 $overlay.show();
 //3. mostrare sull'overlay l'immagine cliccata
 $image.attr("src", href);
 $image.show();
 //4. mostrare il testo dell'immagine sull'overlay
 var textDescription = $(this).children("img").attr("alt");
 $text.text(textDescription);
});
 
 var $overlay = $('<div id="overlay"></div>');
 var $image = $('<img>');
 var $text = $('<p></p>');

//aggiungere l'overlay
$("body").append($overlay);
//aggiungere l'immagine
$overlay.append($image);
//aggiungere il testo
$overlay.append($text);

//quando clicco sull'overlay
$overlay.click(function(){
	//si nasconde l'overlay
	$overlay.hide(); 
})


//creare un dropdown menu per schermi piccoli

//inserire il tag select all'interno del nav
var $select = $('<select></select>');
$("nav").append($select);

//per tutti gli elementi del menu di navigazione
$("nav a").each(function(){
 //creare un tag option
 var $option = $('<option></option>');
 //inserire i tag option all'interno del tag select
 $select.append($option);
 //inserire il testo all'interno del tag option
 $option.text($(this).text());
 //inserire il valore del tag option, l'href di ogni link del nav
 $option.val($(this).attr("href"));
});
 
//indirizzare l'utente alla sezione una volta selezionato il link
$select.change(function(){
	window.location = $select.val();
});

//per piccoli schermi, nascondere il nav e mostrare il menu dropdown + il pulsante

//nascondere il menu dropdown e il pulsante per i grandi schermi


 //Aggiungere un plugin alla pagina
 $(".animsition").animsition({
 	inclass: "fade-down-small",
 	outclass: "fade-right-small",
 	inDuration: 1000,
 	outDuration: 500
 });

 //Aggiungere una sticky navigation
 $(".main-header").sticky();