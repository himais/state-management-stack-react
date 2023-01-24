import { create } from 'zustand'

const useABStore = create((set) => ({
  experiments: [],
  addExperiment: (experiment) => {
    set((state) => ({ 
      experiments: [...state.experiments, experiment ]
  }))}
}))

export { useABStore }