import { atom } from 'jotai'

export const sidebarOpenAtom = atom(true)

export const sidebarToggleAtom = atom(
  null,
  (get, set) => {
    set(sidebarOpenAtom, !get(sidebarOpenAtom))
  }
)

export const sidebarCloseAtom = atom(
  null,
  (_, set) => {
    set(sidebarOpenAtom, false)
  }
)

export const sidebarOpenActionAtom = atom(
  null,
  (_, set) => {
    set(sidebarOpenAtom, true)
  }
)