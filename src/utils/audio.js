import { Howl } from 'howler';
class Audio {
    constructor(playList) {
        this.playList = playList;
        this.index = 0;
    }
    play(index) {
        let self = this
        let sound
        if (typeof (index) === "number" && index >= 0 && index < self.playList.length) {
            index
        } else {
            index = self.index
        }
        let data = self.playList[index]
        if (data.howl === undefined) {
            sound = data.howl
        } else {
            sound = data.howl = new Howl({
                src: [require("@/assets/sound/resource/" + data.name)]
            })
        }
        sound.play()
    }
}
export default Audio;