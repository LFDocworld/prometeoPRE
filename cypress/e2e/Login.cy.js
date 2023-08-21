/// <reference types="Cypress" />
import elementos from '../selectores/misselectores'

describe(('Test de  Login'), ()=> {

    before('Conectando a la web', ()=>{

        cy.visit("")

    })


    it('Test del logueo de usuario', ()=>{ 

    cy.mi_login()

    cy.mi_logout()
    
    }) 

})   