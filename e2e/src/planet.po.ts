import { browser, by, element } from 'protractor';


export class PlanetPage {

  sleep() {
    browser.driver.sleep(5000);
  }

  completeForm() {
    let nom = element.all(by.id('nom'));
    let nbHabitant = element.all(by.id('nbHabitant'));
    let nbKmTerre = element.all(by.id('nbKmTerre'));
    let allegiance = element.all(by.id('allegiance'));
    let image = element.all(by.id('image'));

    nom.sendKeys('poiuytreza');
    nbHabitant.sendKeys(100);
    nbKmTerre.sendKeys(300);
    allegiance.sendKeys('Auvergne');

    image.sendKeys('test');
  }



}
