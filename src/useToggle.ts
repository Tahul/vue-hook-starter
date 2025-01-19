import { ref } from 'vue'

/**
 * A simple toggler.
 */
export function useToggle(defaultValue = false) {
  const toggleable = ref(defaultValue)

  const toggle = () => (toggleable.value = !toggleable.value)

  return [toggleable, toggle] as const
}
