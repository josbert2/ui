// watch.js

const pc = require('picocolors')
const { exec } = require('child_process')
const path = require('path')
const fs = require('fs')

console.log(pc.cyan('Watching for changes...'))

function build(functionName = 'executeCommands') {
  const startTime = Date.now()

  exec(`node ./build-scss.js ${functionName}`, (err, stdout, stderr) => {
    const endTime = Date.now()

    if (err) {
      console.error(pc.red('Error al compilar:'), err)
    }
    if (stderr.trim()) {
      console.error(pc.red('stderr:'), stderr)
    }
    if (stdout.trim()) {
      console.log(pc.green('stdout:'), stdout)
    }

    console.log(
      pc.cyan(`${functionName} `) +
      pc.yellow(`⏰ Tiempo: ${((endTime - startTime) / 1000).toFixed(2)}s`)
    )
  })
}

// “Diccionario” donde vamos guardando temporizadores por archivo
const timeouts = {}

// Watch de la carpeta, recursivo
fs.watch("src/styles/components", { recursive: true }, (event, filename) => {
  if (!filename) return

  // Cancelamos un posible timeout previo para este archivo
  if (timeouts[filename]) {
    clearTimeout(timeouts[filename])
  }

  // Seteamos un nuevo timeout para compilar, por ejemplo 200ms más tarde
  timeouts[filename] = setTimeout(() => {
    delete timeouts[filename]
    console.log(pc.cyan(`🔍 Cambio detectado: ${filename} (${event})`))
    console.log(pc.green(`⚡ Archivo modificado: ${path.resolve("src/styles/components", filename)}`))
    
    build("executeBaseCommands")
  }, 200)
})
