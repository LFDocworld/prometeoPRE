/// <reference types="Cypress" />
import elementos from '../selectores/misselectores'

describe(('Test de  Login'), ()=> {

    beforeEach('Conectando a la web', ()=>{

        cy.visit("")

    })


    it.skip('Test de Nueva Orden PLANTA MOVILES', ()=>{ 

        cy.mi_login_profum()
        cy.wait(1500)

        //// NUEVA ORDEN DE TRABAJO PLANTA MOVILES/////

        
        cy.xpath("/html/body/app-layout-main/div/main/div/app-order-list/div[1]/div/div/div/div/div[2]/app-order-filter/form/div/div[1]/app-input-select/div/div/ng-select/div/div/div[3]/input").type('Fumigacion Plantas Moviles{enter}').click();
        cy.wait(1200)
        cy.get("body > app-layout-main > div > main > div > app-order-list > div:nth-child(1) > div > div > div > div > div.col-md-2 > button").click();
        cy.xpath("/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[2]/div[1]/app-input-select/div/div/ng-select").type('Cintia{enter}');
        cy.get("body > app-layout-main > div > main > div > app-new-order > div > div.card-body > form > div.pl-2.mr-4.mb-4.ng-star-inserted > button.btn.btn-primary.mr-2").click()
        
        //cy.mi_logout()
    
    }) 

    it('Test de Nueva Servicio Planta Movil', ()=>{ 

        cy.mi_login_profum()

        
        //// NUEVO SERVICIO PLANTA MOVIL /////
        cy.xpath("/html/body/app-layout-main/div/main/div/app-order-list/div[1]/div/div/div/div/div[2]/app-order-filter/form/div/div[1]/app-input-select/div/div/ng-select/div/div/div[3]/input").type('Fumigacion Plantas Moviles{enter}').click();
        cy.wait(1200)
        cy.get("body > app-layout-main > div > main > div > app-order-list > div:nth-child(1) > div > div > div > div > div.col-md-2 > button").click();
        cy.xpath("/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[2]/div[1]/app-input-select/div/div/ng-select").type('Cintia{enter}');
        cy.get("body > app-layout-main > div > main > div > app-new-order > div > div.card-body > form > div.pl-2.mr-4.mb-4.ng-star-inserted > button.btn.btn-primary.mr-2").click()
        

        cy.xpath("/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[4]/div[1]/app-new-nomination-mobile-plant/div[2]/div[2]/form/div[1]/div[1]/app-input-date-without-time/div/div/input").type('21/8/2023{enter}');

        




       
        /////// + NOMINACION BUQUE  /////

        // + NUEVA NOMINACION
        

        
        //cy.mi_logout()
    
    }) 

})   
