import puppeteer from 'puppeteer';
import { getNewTab, clickAndWait } from './helpers.js';
import selectors from './selectors.js';

// Abrir Chromium
// Para poder visualizar > headleess: false 
const browser = await puppeteer.launch({ headless: false })
const page = await browser.newPage()

try {
  // Ir a la pagina de turnos de la embajada
  await page.goto(selectors.turnosPage)

  // Testear error
  // await clickAndWait(page, 'xxx')

  // Cliquear en 'Reservar turno'
  await clickAndWait(page, selectors.turnoElement);

  // Ir al nuevo tab del browser
  const newPage = await getNewTab(browser)  
  await newPage.bringToFront()

  // Click en botones
  await clickAndWait(newPage, selectors.continuarBtn)
  await clickAndWait(newPage, selectors.continuarBtn2)
  await clickAndWait(newPage, selectors.continuarBtn3)
  await clickAndWait(newPage, selectors.refreshCaptcha)

} catch (error) {
  console.log(error)
}


