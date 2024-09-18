import { join } from 'node:path'

import dotenv from 'dotenv'
import { readFileSync, existsSync } from 'node:fs'

/**
 * 获取当前环境下生效的配置文件名
 */
function getConfFiles() {
  const script = process.env.npm_lifecycle_script as string
  const reg = new RegExp('--mode ([a-z_\\d]+)')
  const result = reg.exec(script)
  if (result) {
    const mode = result[1]
    return ['.env', `.env.${mode}`]
  }
  return ['.env', '.env.production']
}

/**
 * Get the environment variables starting with the specified prefix
 * @param match prefix
 * @param confFiles ext
 */
export async function getEnvConfig(
  match = 'VITE_',
  confFiles = getConfFiles()
): Promise<{
  [key: string]: string
}> {
  let envConfig = {}

  confFiles.forEach(confFile => {
    try {
      const envLocation = join(process.cwd(), `./${confFile}`)
      if (!existsSync(envLocation)) return
      const envContent = readFileSync(envLocation, {
        encoding: 'utf8'
      })
      const env = dotenv.parse(envContent)
      envConfig = { ...envConfig, ...env }
    } catch (e) {
      console.error(`Error when parsing ${confFile}`, e)
    }
  })

  const reg = new RegExp(`^(${match})`)
  Object.keys(envConfig).forEach(key => {
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key)
    }
  })
  return envConfig
}
