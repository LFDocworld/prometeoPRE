/// <reference types="Cypress" />
import elementos from '../selectores/misselectores'

describe(('Test de  Login'), ()=> {

    beforeEach('Conectando a la web', ()=>{

        cy.visit("")

    })


    it.skip('Test de Nueva Orden BQ Profum', ()=>{ 

        cy.mi_login_profum()
        cy.wait(1500)

        //// NUEVA ORDEN DE TRABAJO BUQUE /////

        
        cy.get(elementos.otfug.btn_nueva_ot).click();

        //Drop BQ   
        cy.xpath(elementos.otfug.slc_bq).type('ABIGAIL{enter}');
        
        //Drop RA
        cy.xpath(elementos.otfug.slc_ra).type('Cintia Arancibia{enter}');

        //Drop Estado de servicio
        cy.xpath(elementos.otfug.slc_estado_serv).type('Buques puerto Argentinos{enter}')
        
        //Boton guardar
        cy.get(elementos.otfug.btn_guardar_ot).click()
        cy.wait(1500)
        
        cy.mi_logout()
    
    }) 

    it('Test de Nueva Nominacion BQ Profum', ()=>{ 

        cy.mi_login_profum()
        
        //// NUEVA ORDEN DE TRABAJO BUQUE /////




       
        /////// + NOMINACION BUQUE  /////

        // + NUEVA NOMINACION
        

        
        //cy.mi_logout()
    
    }) 

})   
