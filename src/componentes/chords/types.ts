// Lista de acordes
export interface listChord {
    title : String,
    chords : Array<String>,
}

// Posicion de los acordes
export interface chordsPosition {
    traste: number,
    cejilla: number,
    position: {
        finger1: Array<number>,
        finger2: Array<number>,
        finger3: Array<number>,
        finger4: Array<number>
    }
}