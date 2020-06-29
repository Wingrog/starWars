import { browser, element, logging, by } from 'protractor';
import { PlanetPage } from './planet.po';



describe('Test des planetes', () => {
  // Variable contenant notre PlanetPage
  let page: PlanetPage;
  // variable que l’on utilisera pour compter le nombre de planète
  let nbPlanete: number;
  // Avant de commencer les tests, nous demandons à notre navigateur de se
  // rendre à l’URL suivante
  beforeEach(() => {
    page = new PlanetPage();
    browser.get('/planets');
  });
  // Quand tout est finis, nous fermons le navigateur et nous affichons les logs
  // dans la console
  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });


  it('Recherche le lien d\'ajout de planète et clique dessus', () => {
    element.all(by.css('li')).then(totalRows => {
      this.nbPlanete = totalRows.length;
      element(by.css('#addPlanetLink')).click();
      expect(browser.driver.getCurrentUrl()).toContain('planets/add');
    });
  })
})
