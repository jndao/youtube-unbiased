document.addEventListener("DOMSubtreeModified", handleRemoveDetails);

function handleRemoveDetails() {
    /**
     * All document filters for browsing youtube as well as watching videos!
     */
    // comments
    if (document.getElementById('comments')) {
        document.getElementById('comments').remove();
    }

    // like bar details
    if (document.getElementById('sentiment')) document.getElementById('sentiment').remove();

    // view details
    // views for video
    if (document.getElementById('count')) {
        // view count
        document.getElementById('count').remove();
        // the annoying dot
        document.getElementById('dot').remove();
    }

    // like details
    if (document.getElementsByClassName('style-scope ytd-toggle-button-renderer style-text')) {
        Array.from(document.getElementsByClassName('style-scope ytd-toggle-button-renderer style-text')).forEach(function(item) {
            if (item.id === 'text') {
                item.remove();
            }
        });
    }
    // like/dislike details for active button
    if (document.getElementsByClassName('style-scope ytd-toggle-button-renderer style-default-active')) {
        Array.from(document.getElementsByClassName('style-scope ytd-toggle-button-renderer style-default-active')).forEach(function(item) {
            if (item.id === 'text') {
                item.remove();
            }
        });
    }
    // video metadata from suggestions
    if (document.getElementsByClassName('style-scope ytd-video-meta-block')) {
        Array.from(document.getElementsByClassName('style-scope ytd-video-meta-block')).forEach(function(item) {
            if (item.textContent.includes('views')  && item.tagName === 'SPAN') {
                item.remove();
            }
        });
    }

    // views from suggestions
    if (document.getElementsByClassName('ytm-badge-and-byline-item-byline small-text')) {
        Array.from(document.getElementsByClassName('ytm-badge-and-byline-item-byline small-text')).forEach(function(item) {
            if (item.textContent.includes('views')  && item.tagName === 'SPAN') {
                item.remove();
            }
        });
    }


    // supporter stuff (gets rid of all of the ticks and 'new' badges so that people have to select
    // only based on the thumbnail and the channel
    if (document.getElementsByClassName('style-scope ytd-badge-supported-renderer')) {
        Array.from(document.getElementsByClassName('style-scope ytd-badge-supported-renderer')).forEach(function(item) {
            item.remove();
        });
    }

    // get rid of subscriber count
    if (document.getElementById('owner-sub-count')) document.getElementById('owner-sub-count').remove();

    /**
     * All document filters for looking at an individual's channel
     * Removes the sub count as well as the meta data for the video suggesions on the channel
     */

    // removing sub count
    if (document.getElementById('subscriber-count')) document.getElementById('subscriber-count').remove();

    // removing metadata from uploads
    if (document.getElementsByClassName('style-scope ytd-grid-video-renderer')) {
        Array.from(document.getElementsByClassName('style-scope ytd-grid-video-renderer')).forEach(function(item) {
            if (item.textContent.includes('views') && item.tagName === 'SPAN') {
                item.remove();
            }
        });
    }
}