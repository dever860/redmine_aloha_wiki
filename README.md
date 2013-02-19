# redmine_aloha_wiki

is [Aloha-editor](http://aloha-editor.org) based WYSIWYG Wiki editor plugin for
Redmine. It's currently in early test stage. Known issues are listed below.

This fork of the editor differs from the source in that the original version
tries to preserve the textile source of the content.  This version does not
preserve the the content in textile; once content is migrated to HTML, it stays
in HTML. This means using this plugin is a one-way trip.

When content is first loaded, the plugin checks whether the content is already
in HTML format; if it already is, the content is loaded into the Aloha editor
unchanged.  If the content is textile, then the plugin first transforms the
textile to HTML, and then uses that as the source.  Again: *this is a one-way
trip.* Do not use this plugin unless you're committed to having your content
eventually be stored as HTML.

The identification mechanism is a hidden div element with a custom id
(id="aloha-flag"). Any content containing this div is assumed to already be in
HTML format, and is not transformed.

This approach has some benefits (and penalties) to other approaches:

* Because transcoding happens at edit time, content can be initially created in
  textile and uploaded, and then translated later automatically when it is
	edited. One use case is for auto-generated content, such as release notes.
* Because transcoding happens at edit time, there is no "upgrade" process at the
  time the plugin is installed.
* Because content is stored as HTML, there is less opportunity of formatting
  loss in repeated transformations between textile and HTML.
* Since the same function is used to translate on edit as is used by core
  Redmine to display content, the fidelity of the initial translation is high.
* Since there is no HTML-to-textile transformation on saving data, once content
  is edited there is no way to go back to the original content.
* Since transformation is occurring, the first revision diff is useless.

The original version of the plugin was written by Nikolay Gniteev.  The one-way
version was adapted by Sean Russell.

# Installation

1. Copy the plugin directory into the `vendor/plugins` directory (make sure the name is redmine_aloha_wiki)
2. Run migration: `rake db:migrate:plugins` _(don't forget to be in the root redmine directory when doing this)_
3. Restart Redmine: `touch tmp/restart.txt` _(don't forget to be in the root redmine directory when doing this)_
4. From now on you'll be able to chose WYSIWYG editor when editing Wiki page, no settings required

**NOTE:** _Probably plugin is incompatible with your current WYSIWYG plugins so be sure to uninstall/deactivate them_


# Limitations

Aloha editor currently lacks of some features:

1. Can't underline
2. Can't add natively wiki link (but wiki links made in textile are correctly
   translated)
3. Can't add natively redmine stored image (but images can be uploaded as
   attachments and then be linked)
4. Can't do citation
5. Can't do preformated/code blocks
6. Can't adjust alignment
7. Can't set abbreviation
8. Most annoying - an issue with a backspace - backspace does nothing for me
   when I'm pressing it. Probably it's could be due to library conflict between
   Prototype (used in Redmine) and JQuery (used in Aloha-editor) since demos on
   [Aloha-editor site](http://aloha-editor.org) are just fine.


# Future

* It wouldn't be hard to offer the option of keeping content in textile, as long
  as the content is never translated.
* I may add back in the option to _attempt_ to translated back to textile
* I want to add Aloha to other areas
* I need to fix up the configuration
* I believe it is possible to adapt one of the Aloha plugins to upload files,
  using sources.
* It should be possible to add a wiki-linking plugin for Aloha

# Disclaimer

Plugin provided "as is" under copyleft license and it'll always be like this.

Plugin is tested for Redmine 2.2.1.

# Word of thanks

Thanks to Nikolay Gniteev for the original plugin.

Thanks to P.J.Lawrence who started [redmine_wysiwyg_textile](https://github.com/kalmykov/redmine_wysiwyg_textile) plugin and Alexey Kalmykov who made some corrections as I've heavily used that plugin to get HTML to textile conversion in my redmine_conv_htmltotextile plugin. Actualy I took it's core and did some adjustments.

[Stackoverflow](http://stackoverflow.com) people as it's there I found most answers to my questions (thank's to Google but anyway...)

World of opensource
