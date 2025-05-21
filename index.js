import puppeteer from 'puppeteer';
import { getNewTab, waitThenClick } from './helpers.js';
import selectors from './selectors.js';

// Abrir Chromium
// Para poder visualizar > headleess: false 
const browser = await puppeteer.launch({ headless: false })
const page = await browser.newPage()

// Ir a la pagina de turnos de la embajada
await page.goto(selectors.turnosPage)

// Testear error
// await waitThenClick(page, 'xxx')

// Cliquear en 'Reservar turno'
await waitThenClick(page, selectors.turnoElement);

// Ir al nuevo tab del browser
const newPage = await getNewTab(browser)  
await newPage.bringToFront()

// Click en botones
await waitThenClick(newPage, selectors.continuarBtn)
await waitThenClick(newPage, selectors.continuarBtn2)
await waitThenClick(newPage, selectors.continuarBtn3)
await waitThenClick(newPage, selectors.refreshCaptcha)



