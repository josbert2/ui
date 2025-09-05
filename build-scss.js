const { exec } = require('child_process')
const path = require('path')

/**
 * Ejecuta un comando en la terminal y resuelve con stdout y stderr.
 * @param {string} command
 * @returns {Promise<{stdout: string, stderr: string}>}
 */
function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(error)
      }
      resolve({ stdout, stderr })
    })
  })
}

/**
 * Ejecuta la compilación base (por ejemplo, PostCSS + Tailwind).
 */
async function executeBaseCommands() {
  try {
    // Ajusta tu comando según tu flujo con Tailwind
    const { stdout, stderr } = await runCommand(
      `npx postcss --config postcss.config.js src/styles/components/index.css --dir build`
    )

    // Muestra mensajes y errores en consola
    if (stdout.trim()) {
      console.log(stdout)
    }
    if (stderr.trim()) {
      console.error(stderr)
    }

    // Aquí puedes agregar más comandos, por ejemplo:
    // await runCommand('cat dist/base/*.css > dist/base.css')
    // await runCommand(`${postcssPath}/prejss-cli dist/base.css --format commonjs`)

  } catch (error) {
    console.error('Error executing base commands:', error)
  }
}

/**
 * Ejecuta la compilación completa o con otros pasos.
 */
async function executeCommands() {
  try {
    await executeBaseCommands()
    // Aquí puedes añadir más tareas
  } catch (error) {
    console.error('Error executing commands:', error)
  }
}

// Lee el nombre de la función que queremos ejecutar
const functionName = process.argv[2] ? process.argv[2] : 'executeCommands'

switch (functionName) {
  case 'executeBaseCommands':
    executeBaseCommands()
    break
  case 'executeCommands':
    executeCommands()
    break
  default:
    console.log(`Function '${functionName}' not found.`)
}
