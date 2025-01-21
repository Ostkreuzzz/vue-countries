import { type Severity } from '@/types/Severity'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

export const showToast = (message: string, type: Severity) => {
  toast.add({
    severity: type,
    summary: 'Error Message',
    detail: message,
    life: 3000,
  })
}
