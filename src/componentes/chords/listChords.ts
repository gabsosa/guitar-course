import { listChord } from "./types"

const majorChords : listChord = 
{
    title: 'Acordes Mayores',
    chords: [
        "Do Mayor (C)",
        "Re Mayor (D)",
        "Mi Mayor (E)",
        "Fa Mayor (F)",
        "Sol Mayor (G)",
        "La Mayor (A)",
        "Si Mayor (B)",
      ] 
}

const minorChords : listChord = {
    title: 'Acordes Menores',
    chords: [
        "Do Menor (Cm)",
        "Re Menor (Dm)",
        "Mi Menor (Em)",
        "Fa Menor (Fm)",
        "Sol Menor (Gm)",
        "La Menor (Am)",
        "Si Menor (Bm)",
      ]
}

const sevenChords : listChord = {
    title: 'Acordes con Septima',
    chords: [
        "Do7 (C7)",
        "Re7 (D7)",
        "Mi7 (E7)",
        "Fa7 (F7)",
        "Sol7 (G7)",
        "La7 (A7)",
        "Si7 (B7)",
    ]
}

const sevenMinorChords : listChord = {
    title: 'Acordes Menores con Septima',
    chords: [
        "Do Menor Séptima (Cm7)",
        "Re Menor Séptima (Dm7)",
        "Mi Menor Séptima (Em7)",
        "Fa Menor Séptima (Fm7)",
        "Sol Menor Séptima (Gm7)",
        "La Menor Séptima (Am7)",
        "Si Menor Séptima (Bm7)",
    ]
}

const sevenMajorChords : listChord = {
    title: 'Acordes Mayores con Septima',
    chords: [
        "Do Mayor Séptima Mayor (Cmaj7)",
        "Re Mayor Séptima Mayor (Dmaj7)",
        "Mi Mayor Séptima Mayor (Emaj7)",
        "Fa Mayor Séptima Mayor (Fmaj7)",
        "Sol Mayor Séptima Mayor (Gmaj7)",
        "La Mayor Séptima Mayor (Amaj7)",
        "Si Mayor Séptima Mayor (Bmaj7)",
    ]
}

const suspChords : listChord = {
    title: 'Acordes Suspendidos',
    chords: [
        "Do Sus2 (Csus2)",
        "Re Sus2 (Dsus2)",
        "Mi Sus2 (Esus2)",
        "Fa Sus2 (Fsus2)",
        "Sol Sus2 (Gsus2)",
        "La Sus2 (Asus2)",
        "Si Sus2 (Bsus2)",
        "Do Sus4 (Csus4)",
        "Re Sus4 (Dsus4)",
        "Mi Sus4 (Esus4)",
        "Fa Sus4 (Fsus4)",
        "Sol Sus4 (Gsus4)",
        "La Sus4 (Asus4)",
        "Si Sus4 (Bsus4)",
    ]
}

const aumChords : listChord = {
    title: 'Acordes Aumentados',
    chords: [
        "Do Aumentado (Caug)",
        "Re Aumentado (Daug)",
        "Mi Aumentado (Eaug)",
        "Fa Aumentado (Faug)",
        "Sol Aumentado (Gaug)",
        "La Aumentado (Aaug)",
        "Si Aumentado (Baug)",
    ]
}

const disChords : listChord = {
    title: 'Acordes Disminuidos',
    chords: [
        "Do Disminuido (Cdim)",
        "Re Disminuido (Ddim)",
        "Mi Disminuido (Edim)",
        "Fa Disminuido (Fdim)",
        "Sol Disminuido (Gdim)",
        "La Disminuido (Adim)",
        "Si Disminuido (Bdim)",
    ]
}

const fiveChords : listChord = {
    title: 'Acordes con 5ta',
    chords: [
        "Do5 (C5)",
        "Re5 (D5)",
        "Mi5 (E5)",
        "Fa5 (F5)",
        "Sol5 (G5)",
        "La5 (A5)",
        "Si5 (B5)",
    ]
}

export const chords : Array<listChord> = [
    majorChords,
    minorChords,
    sevenChords,
    sevenMajorChords,
    sevenMinorChords,
    suspChords,
    aumChords,
    disChords,
    fiveChords
]