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

interface CaptchaStore {
    verify: boolean
    setVerify: (verify: boolean) => void
}

interface ModalStore {
    isOpen: boolean
    setOpen: (isOpen: boolean) => void
}

interface SelectStore {
    select: number | null;
    setSelect: (value: number | null) => void;
}

interface SelectedIndexStore {
    selectedIndex: number | null;
    setSelectedIndex: (value: number | null) => void;
}


export const useBirthStore = create<BirthStore>((set) => ({
    birth: { year: 0, month: 0, day: 0 },
    setYear: (year: number) => set((state) => ({ birth: { ...state.birth, year } })),
    setMonth: (month: number) => set((state) => ({ birth: { ...state.birth, month } })),
    setDay: (day: number) => set((state) => ({ birth: { ...state.birth, day } })),
}));

export const useCaptchaStore = create<CaptchaStore>((set) => ({
    verify: false,
    setVerify: (verify: boolean) => set({ verify }),
}));

export const useModalStore = create<ModalStore>((set) => ({
    isOpen: false,
    setOpen: (isOpen: boolean) => set({ isOpen }),
}));

export const useSelectStore = create<SelectStore>((set) => ({
    select: 1,
    setSelect: (value) => set({ select: value }),
}));

export const useSelectedIndexStore = create<SelectedIndexStore>((set) => ({
    selectedIndex: 0,
    setSelectedIndex: (value) => set({ selectedIndex: value }),
}));
