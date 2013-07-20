// https://www.dokuwiki.org/plugin:inlinetoc#hiding_dokuwiki_toc_for_adora_belle
// by s.sahara 2013/05/13
function hideDokuwikiToc() {
    var $toc = jQuery('#dw__toc');
    var $toc2= jQuery('div.inlinetoc2');
    if($toc2.length && $toc.length) {
        $toc.css('display', 'none');
    }
}
jQuery(function(){
    hideDokuwikiToc();
});