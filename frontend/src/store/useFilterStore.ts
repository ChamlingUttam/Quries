import { create } from "zustand";
import { api } from "../api/axios";

interface User {
  name: string;
  age: number;
  salary: number;
  country: string;
  city: string;
  status: string;
}

interface Store {
  data: User[];
  loading: boolean;
  fetchData: (params: any) => Promise<void>;
}

export const useFilterStore = create<Store>((set) => ({
  data: [],
  loading: false,

  fetchData: async (params) => {
    set({ loading: true });
    try {
      const res = await api.get("/filter", { params });
      set({ data: res.data, loading: false });
    } catch (error) {
      set({ data: [], loading: false });
    }
  },
}));