Aloha.ready( function() {
	var $ = Aloha.jQuery;
//	Aloha.jQuery('#editor').aloha();
    $('#editor').aloha();
    Aloha.require(['jquery', 'ui/scopes', 'ui/ui-plugin'], function ($, Scopes, UiPlugin) {
        var toolbar = $('.aloha-toolbar');
        // Center and resize the toolbar
        //toolbar.css({'position': 'static', 'margin': 'auto'});
        $('#editor').append(toolbar);
        Scopes.setScope('Aloha.continuoustext');
        UiPlugin.showToolbar();
        // The child element must also be resized, don't know why
        toolbar.children().css({'width': 600});
 
        Aloha.bind('aloha-editable-deactivated', function () {
            UiPlugin.showToolbar();
        });
    });

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
