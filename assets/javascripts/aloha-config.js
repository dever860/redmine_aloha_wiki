( function ( window, undefined ) {
	var Aloha = window.Aloha || ( window.Aloha = {} );

	Aloha.settings = {
		plugins: {
	        // which plugins to load
        	load: [
				    'common/ui',
	                            'common/format',
	                            'common/table',
	                            'common/list',
	                            'common/link',
	                            'common/highlighteditables',
	                            'common/undo',
	                            'common/contenthandler',
	                            'common/paste',
	                            'common/characterpicker',
	                            'common/commands',
	                            'common/block',
	                            'common/image',
	                            'common/abbr',
	                            'common/horizontalruler',
	                            'common/align',
	                            'common/dom-to-xhtml',
	                            'extra/textcolor',
	                            'extra/formatlesspaste',
	                            'extra/hints',
	                            'extra/toc',
	                            'extra/headerids',
	                            'extra/listenforcer',
	                            'extra/metaview',
	                            'extra/numerated-headers',
	                            'extra/ribbon',
	                            'extra/wai-lang',
	                            'extra/flag-icons',
	                            'extra/linkbrowser',
	                            'extra/imagebrowser',
	                            'extra/cite'
		]
	}
	};

} )( window );
