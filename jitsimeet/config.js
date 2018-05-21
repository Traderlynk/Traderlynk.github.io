var config = {
    hosts: {
        domain: 'traderlynk.4ng.net',
        muc: 'conference.traderlynk.4ng.net'
    },

    bosh: 'wss://traderlynk.4ng.net:7443/ws/',
    clientNode: 'http://igniterealtime.org/webmeet',

    disableSuspendVideo: true,
    desktopSharingChromeExtId: null,
    desktopSharingChromeDisabled: true,
    desktopSharingChromeSources: [ 'screen', 'window', 'tab' ],
    desktopSharingChromeMinExtVersion: '0.1',
    desktopSharingFirefoxDisabled: false,

    channelLastN: -1,
    enableWelcomePage: true,
    minHDHeight: 540,
    enableUserRolesBasedOnToken: false,

    p2p: {
        enabled: true,
        stunServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' },
            { urls: 'stun:stun2.l.google.com:19302' }
        ],
        preferH264: true
    },

    deploymentInfo: {

    }
};
