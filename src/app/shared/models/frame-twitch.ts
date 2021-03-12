export class FrameTwitch {
    constructor(
        public src : string,
        public height : string,
        public width : string,
        public channelName : string,
        public allowFullScreen?: boolean,
        public mute?: boolean
    ) {}

}
