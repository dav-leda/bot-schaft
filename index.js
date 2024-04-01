


import puppeteer from 'puppeteer';
import { getNewTab, sleep } from './helpers.js';

const turnosPage = 'https://buenos-aires.diplo.de/ar-es/service/turnos/1801270?openAccordionId=item-2076388-0-panel'
  
const turnoElement = "#item-2076388-0-panel > div > p > a"

// Abrir Chromium
// Para poder visualizar > headleess: false 
const browser = await puppeteer.launch({ headless: false })
const page = await browser.newPage()

// Ir a la pagina de turnos de la embajada
await page.goto(turnosPage)

await sleep(2)

// Cliquear en 'Reservar turno'
await page.click(turnoElement)


// Ir al nuevo tab del browser
const newPage = await getNewTab(browser)

await newPage.bringToFront()

// Esperar 1 segundo y clickear
await sleep(1)
const continuarButton = '#content > div.wrapper > div:nth-child(13) > a'
await newPage.click(continuarButton)

// Esperar 1 segundo y clickear
await sleep(1)
const continuarButton2 = '#content > div.wrapper > div:nth-child(5) > a'
await newPage.click(continuarButton2)

// Esperar 1 segundo y clickear
await sleep(1)
const continuarButton3 = '#content > div.wrapper > h3:nth-child(2) > a:nth-child(2)'
await newPage.click(continuarButton3)

// Esperar 1 segundo y clickear
await sleep(1)
const refreshCaptcha = '#appointment_captcha_month_refreshcaptcha'
await newPage.click(refreshCaptcha)

