import { chordsPosition } from "./types"

const doMayor : chordsPosition = {
    traste: 1,
    cejilla: 0,
    position: {
        finger1: [1, 2],
        finger2: [0, 0],
        finger3: [4, 2],
        finger4: [5, 3]
    }
}

const reMayor : chordsPosition = {
    traste: 1,
    cejilla: 0,
    position: {
        finger1: [3, 2],
        finger2: [1, 2],
        finger3: [2, 3],
        finger4: [0, 0]
    }
}

const miMayor : chordsPosition = {
    traste: 1,
    cejilla: 0,
    position: {
        finger1: [0, 0],
        finger2: [4, 2],
        finger3: [5, 2],
        finger4: [0, 0]
    }
}

export const acordesMayores = {
    doMayor,
    reMayor,
    miMayor
}