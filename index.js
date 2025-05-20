import puppeteer from 'puppeteer';
import { getNewTab, sleep } from './helpers.js';
import selectors from './selectors.js';

const timeout = { timeout: 9999 };

// Abrir Chromium
// Para poder visualizar > headleess: false 
const browser = await puppeteer.launch({ headless: false })
const page = await browser.newPage()

try {
  // Ir a la pagina de turnos de la embajada
  await page.goto(selectors.turnosPage)

  // Testear error
  // await page.waitForSelector('xxx', timeout)

  // Cliquear en 'Reservar turno'
  await page.waitForSelector(selectors.turnoElement, timeout)
  await page.click(selectors.turnoElement)

  // Ir al nuevo tab del browser
  const newPage = await getNewTab(browser)  
  await newPage.bringToFront()

  // Click en botones
  await newPage.waitForSelector(selectors.continuarBtn, timeout)
  await newPage.click(selectors.continuarBtn)

  await newPage.waitForSelector(selectors.continuarBtn2, timeout)
  await newPage.click(selectors.continuarBtn2)

  await newPage.waitForSelector(selectors.continuarBtn3, timeout)
  await newPage.click(selectors.continuarBtn3)

  await newPage.waitForSelector(selectors.refreshCaptcha, timeout)
  await newPage.click(selectors.refreshCaptcha)

} catch (error) {
  console.log(error)
}


