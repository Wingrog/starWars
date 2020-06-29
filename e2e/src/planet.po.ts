import { browser, by, element } from 'protractor';


export class PlanetPage {

  sleep() {
    browser.driver.sleep(5000);
  }

  completeForm() {
    let nom = element.all(by.id('nom'));
    let nombreHabitant = element.all(by.id('nombreHabitant'));
    let distanceTerre = element.all(by.id('distanceTerre'));
    let allegiance = element.all(by.id('allegiance'));
    let photo = element.all(by.id('photo'));

    nom.sendKeys('poiuytreza');
    nombreHabitant.sendKeys(100);
    distanceTerre.sendKeys(300);
    allegiance.sendKeys('Auvergne');

    photo.sendKeys('test');
  }



}
