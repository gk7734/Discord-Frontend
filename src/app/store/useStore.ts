import {create} from "zustand";

interface Birth {
    year: number
    month: number
    day: number
}

interface BirthStore {
    birth: Birth
    setYear: (year: number) => void
    setMonth: (month: number) => void
    setDay: (day: number) => void
}

export const useBirthStore = create<BirthStore>((set) => ({
    birth: { year: 0, month: 0, day: 0 },
    setYear: (year: number) => set((state) => ({ birth: { ...state.birth, year } })),
    setMonth: (month: number) => set((state) => ({ birth: { ...state.birth, month } })),
    setDay: (day: number) => set((state) => ({ birth: { ...state.birth, day } })),
}))
