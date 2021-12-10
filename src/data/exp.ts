interface data {
    game: { level: Array<any>, start: boolean, pause: boolean }
}
import { level } from "./level_data"
export let variables: data = {
    game: {
        level: level,
        start: false,
        pause: false
    }
}