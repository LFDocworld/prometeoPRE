/// <reference types="Cypress" />
import elementos from '../../selectores/misselectores'

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

        cy.get(elementos.otfug.btn_nueva_ot).click();

        //Drop BQ   
        cy.xpath(elementos.otfug.slc_bq).type('ABIGAIL{enter}');
        
        //Drop RA
        cy.xpath(elementos.otfug.slc_ra).type('Cintia Arancibia{enter}');

        //Drop Estado de servicio
        cy.xpath(elementos.otfug.slc_estado_serv).type('Buques puerto Argentinos{enter}')
        
        //Boton guardar
        cy.get(elementos.otfug.btn_guardar_ot).click()
        cy.wait(10000)


       
        /////// + NOMINACION BUQUE  /////

        // + NUEVA NOMINACION
        
        cy.get(elementos.otfug.btn_nueva_nom).click()

        //Mercaderia
        cy.get(elementos.otfug.slc_mercaderia).type('ALGODON{enter}')

        //TN a tratar
        cy.xpath(elementos.otfug.slc_tn_a_tratar).type('2500{enter}')
       
        //Dosis trabajo|
        cy.xpath(elementos.otfug.txt_dosis_trabajo).type('2{enter}')

        //Unidad 
        cy.xpath(elementos.otfug.slc_unidad).type('tab{enter}')

        //origen
        cy.xpath(elementos.otfug.slc_origen).type('Argentina{enter}')
        
        //Destino
        cy.xpath(elementos.otfug.slc_destino).type('Brasil{enter}')

        //Puerto Carga
        cy.xpath(elementos.otfug.slc_puerto_carga).type('ACA{enter}')

        //A cargar
        cy.xpath(elementos.otfug.txt_a_cargar).type('2500{enter}')

        //BTN AGREGAR
        cy.get(elementos.otfug.btn_agregar).click()       

        //Puerto Tratamiento
        cy.xpath(elementos.otfug.slc_puerto_tratamiento).type('adm{enter}')
        
        //BTN GUARDADR
        cy.scrollTo('bottom')
        cy.get(elementos.otfug.btn_guardar_nom).click()
        
        //cy.mi_logout()
    
    }) 

})   

