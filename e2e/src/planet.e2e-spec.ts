import { browser, element, logging, by } from 'protractor';
import { PlanetPage } from './planet.po';



describe('test des planetes', () => {
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
});



it('Recherche le lien d\'ajout de planète et clique dessus', () => {
  element.all(by.css('li')).then(totalRows => {
    this.nbPlanete = totalRows.length;
    element(by.css('#addPlanetLink')).click();
    expect(browser.driver.getCurrentUrl()).toContain('planets/add-planet');
  });
});



it('Test le formulaire', () => {
  // On envoi le navigateur vers l’url d’ajout
  browser.get('/planets/add - planet');
  // Nous remplissons le formulaire d’ajout
  page.completeForm();
  page.sleep();
  // On récupère le bouton submit
  let submitBtn = element.all(by.css('#submitBtn'));
  // On clique sur le bouton submit
  submitBtn.click().then(fn => {
    // Nous recomptons le nombre de boutons li
    element.all(by.css('li')).then(totalNewRows => {
      // Une planète est sensé avoir été ajoutée, nous augmentons de 1 la variable planète
      this.nbPlanete += 1;
      //On compare le nombre de li dans la page au nombre de planète
      const comparePlanet = this.nbPlanete;
      // On demande de tester si leur valeur est la même
      expect(totalNewRows.length).toEqual(comparePlanet);
      page.sleep();
    });
  });
