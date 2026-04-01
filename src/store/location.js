import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

//Represent hyrachcial navigations within finder
const DEFAULT_LOCATION = locations.work;
const useLocationStore = create(immer((set) => ({
  activeLocation: DEFAULT_LOCATION,
  
  setActiveLocation: (location = null) => set((state) => {
    state.activeLocation = location;
  }),
  
  resetActiveLocation: () => set((state) => {
    state.activeLocation = DEFAULT_LOCATION;
  })
})));

export default useLocationStore;