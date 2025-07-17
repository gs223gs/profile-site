import { atom } from 'jotai';
import type { Repository, PageInfo } from '@/types/repository';

export const repositoriesAtom = atom<Repository[]>([]);

export const pageInfoAtom = atom<PageInfo | null>(null);

export const currentPageAtom = atom<number>(1);

export const totalCountAtom = atom<number>(0);

export const isLoadingAtom = atom<boolean>(false);