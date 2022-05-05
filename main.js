const { app, BrowserWindow, Menu } = require("electron")

const createWindow = () => {
  const window = new BrowserWindow({
    width: 900,
    height: 600
  })

  window.loadFile("index.html")

  const template = [
    {
      label: "Nomentum",
      submenu: [
        {
          role: "about"
        },
        {
          type: "separator"
        },
        {
          role: "quit"
        }],
    },
    {
      label: "🍔",
      submenu: [
        {
          label: "New Background"
        },
        {
          type: "separator"
        },
        {
          role: "Reset Preferences"
        }
      ]
    },
  ]
  const customMenu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(customMenu)
}

app.whenReady().then(() => {
  createWindow()
})
