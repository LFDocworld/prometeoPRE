/// <reference types="Cypress" />
import elementos from '../selectores/misselectores'

describe(('Test de  Login'), ()=> {

    before('Conectando a la web', ()=>{

        cy.visit("")

    })


    it('Test del logueo de usuario', ()=>{ 

            cy.mi_login()
            cy.wait(10000)

            // seleccion de +nueva orden
            cy.get('body > app-layout-main > div > main > div > app-order-list > div:nth-child(1) > div > div > div > div > div.col-md-2 > button').click()
            
            cy.wait(500)
 



    //cy.mi_logout()
    
    }) 

})   