import { vi } from 'vitest'

// console.errorとconsole.logをスパイに置き換える
global.console.log = vi.fn()
global.console.error = vi.fn()