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


  it('L\'utilisateur peut voir la liste des planètes et il peut accéder à la page ajouter une planete"', () => {
    element.all(by.id('listPlanets')).then(totalRows => {
      this.nbPlanete = totalRows.length;
      element(by.id('addPlanetLink')).click();
      expect(browser.driver.getCurrentUrl()).toContain('planets/add');
    });
  })

  // POUR TESTER L'AJOUT DUNE PLANETE
  it('L\'utilisateur peut ajouter une planète"', () => {
    element.all(by.id('listPlanets')).then(totalRows => {
      this.nbPlanete = totalRows.length;
      browser.get('/planets/add');
      page.completeForm();
      page.sleep();

      element(by.id('submitterPlanet')).click();
      element.all(by.id('listPlanets')).then(totalRows => {
        page.sleep();
        expect(this.nbPlanete + 1).toEqual(totalRows.length);
      });
    })
  })


  // POUR TESTER L'EDITION D'UNE PLANETE

  it('L\'utilisateur peut editer une planète"', () => {
    element.all(by.css('listPlanets')).then(totalRows => {
      this.nbPlanete = totalRows.length;
      page.sleep();
    });

    browser.get('/planets/update/' + this.nbPlanete);
    page.editForm();
    page.sleep();

    element(by.id('submitterPlanet')).click();

    page.sleep();

    element.all(by.id('listPlanets')).then(totalRows => {
      page.sleep();
      expect(browser.driver.getCurrentUrl()).toContain('planets');
    });

  })
})
