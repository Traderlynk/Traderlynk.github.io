/* eslint-disable no-unused-vars, no-var, max-len */

var interfaceConfig = {
    // TO FIX: this needs to be handled from SASS variables. There are some
    // methods allowing to use variables both in css and js.
    DEFAULT_BACKGROUND: '#474747',

    /**
     * In case the desktop sharing is disabled through the config the button
     * will not be hidden, but displayed as disabled with this text us as
     * a tooltip.
     */
    DESKTOP_SHARING_BUTTON_DISABLED_TOOLTIP: null,
    INITIAL_TOOLBAR_TIMEOUT: 20000,
    TOOLBAR_TIMEOUT: 4000,
    DEFAULT_REMOTE_DISPLAY_NAME: 'Participant',
    DEFAULT_LOCAL_DISPLAY_NAME: 'me',
    SHOW_JITSI_WATERMARK: false,
    JITSI_WATERMARK_LINK: 'http://traderlynk.co.uk',

    // if watermark is disabled by default, it can be shown only for guests
    SHOW_WATERMARK_FOR_GUESTS: false,
    SHOW_BRAND_WATERMARK: false,
    BRAND_WATERMARK_LINK: '',
    SHOW_POWERED_BY: false,
    SHOW_DEEP_LINKING_IMAGE: false,
    GENERATE_ROOMNAMES_ON_WELCOME_PAGE: true,
    DISPLAY_WELCOME_PAGE_CONTENT: true,
    APP_NAME: 'Etherlynk',
    NATIVE_APP_NAME: 'Etherlynk',
    LANG_DETECTION: false, // Allow i18n to detect the system language
    INVITATION_POWERED_BY: true,

    /**
     * If we should show authentication block in profile
     */
    AUTHENTICATION_ENABLE: true,

    /**
     * the toolbar buttons line is intentionally left in one line, to be able
     * to easily override values or remove them using regex
     */
    TOOLBAR_BUTTONS: [

        // main toolbar
        'microphone', 'camera', 'desktop', 'fullscreen', 'fodeviceselection', 'hangup',

        // extended toolbar
        'profile', 'chat', 'recording', 'etherpad',
        'sharedvideo', 'settings', 'raisehand', 'videoquality', 'filmstrip',
        'invite', 'feedback', 'stats', 'shortcuts'
    ],

    SETTINGS_SECTIONS: [ 'language', 'devices', 'moderator' ],

    // Determines how the video would fit the screen. 'both' would fit the whole
    // screen, 'height' would fit the original video height to the height of the
    // screen, 'width' would fit the original video width to the width of the
    // screen respecting ratio.
    VIDEO_LAYOUT_FIT: 'both',

    /**
     * Whether to only show the filmstrip (and hide the toolbar).
     */
    filmStripOnly: false,

    /**
     * Whether to show thumbnails in filmstrip as a column instead of as a row.
     */
    VERTICAL_FILMSTRIP: true,

    // A html text to be shown to guests on the close page, false disables it
    CLOSE_PAGE_GUEST_HINT: false,
    RANDOM_AVATAR_URL_PREFIX: false,
    RANDOM_AVATAR_URL_SUFFIX: false,
    FILM_STRIP_MAX_HEIGHT: 120,

    // Enables feedback star animation.
    ENABLE_FEEDBACK_ANIMATION: false,
    DISABLE_FOCUS_INDICATOR: false,
    DISABLE_DOMINANT_SPEAKER_INDICATOR: false,

    /**
     * Whether the ringing sound in the call/ring overlay is disabled. If
     * {@code undefined}, defaults to {@code false}.
     *
     * @type {boolean}
     */
    DISABLE_RINGING: false,
    AUDIO_LEVEL_PRIMARY_COLOR: 'rgba(255,255,255,0.4)',
    AUDIO_LEVEL_SECONDARY_COLOR: 'rgba(255,255,255,0.2)',
    POLICY_LOGO: null,
    LOCAL_THUMBNAIL_RATIO: 16 / 9, // 16:9
    REMOTE_THUMBNAIL_RATIO: 1, // 1:1
    // Documentation reference for the live streaming feature.
    LIVE_STREAMING_HELP_LINK: 'https://jitsi.org/live',

    /**
     * Whether the mobile app Jitsi Meet is to be promoted to participants
     * attempting to join a conference in a mobile Web browser. If
     * {@code undefined}, defaults to {@code true}.
     *
     * @type {boolean}
     */
    MOBILE_APP_PROMO: true,

    /**
     * Maximum coeficient of the ratio of the large video to the visible area
     * after the large video is scaled to fit the window.
     *
     * @type {number}
     */
    MAXIMUM_ZOOMING_COEFFICIENT: 1.3,

    /*
     * If indicated some of the error dialogs may point to the support URL for
     * help.
     */
    SUPPORT_URL: 'https://github.com/jitsi/jitsi-meet/issues/new',

    /**
     * Whether the connection indicator icon should hide itself based on
     * connection strength. If true, the connection indicator will remain
     * displayed while the participant has a weak connection and will hide
     * itself after the CONNECTION_INDICATOR_HIDE_TIMEOUT when the connection is
     * strong.
     *
     * @type {boolean}
     */
    CONNECTION_INDICATOR_AUTO_HIDE_ENABLED: true,

    /**
     * How long the connection indicator should remain displayed before hiding.
     * Used in conjunction with CONNECTION_INDICATOR_AUTOHIDE_ENABLED.
     *
     * @type {number}
     */
    CONNECTION_INDICATOR_AUTO_HIDE_TIMEOUT: 5000,

    /**
     * The name of the application connected to the "Add people" search service.
     */
    // ADD_PEOPLE_APP_NAME: "",

    /**
     * If true, hides the video quality label indicating the resolution status
     * of the current large video.
     *
     * @type {boolean}
     */
    VIDEO_QUALITY_LABEL_DISABLED: false,

    /**
     * Temporary feature flag to debug performance with the large video
     * background blur. On initial implementation, blur was always enabled so a
     * falsy value here will be used to keep blur enabled, as will the value
     * "video", and will render the blur over a video element. The value
     * "canvas" will display the blur over a canvas element, while the value
     * "off" will prevent the background from rendering.
     */
    _BACKGROUND_BLUR: 'off'

    /**
     * Specify custom URL for downloading android mobile app.
     */
    // MOBILE_DOWNLOAD_LINK_ANDROID: 'https://play.google.com/store/apps/details?id=org.jitsi.meet',

    /**
     * Specify URL for downloading ios mobile app.
     */
    // MOBILE_DOWNLOAD_LINK_IOS: 'https://itunes.apple.com/us/app/jitsi-meet/id1165103905',

    /**
     * Specify mobile app scheme for opening the app from the mobile browser.
     */
    // APP_SCHEME: 'org.jitsi.meet'
};

/* eslint-enable no-unused-vars, no-var, max-len */
