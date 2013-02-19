Aloha.ready( function() {
	var $ = Aloha.jQuery;
//	Aloha.jQuery('#editor').aloha();
    $('#editor').aloha();

    $('#save').click(function(){
               payload = $("#editor");
               a = jQuery("#aloha-flag", payload);
               if (a.html() === null) {
                       payload.append("<div style='visibility: hidden; display: none;' id='aloha-flag'></div>");
               }
               $("#payload").attr("value", payload.html());
               $("#wiki_form").submit();
    });
});
