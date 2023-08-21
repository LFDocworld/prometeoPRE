// ***********************************************

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

import elementos from '../selectores/misselectores'

Cypress.Commands.add('escribir', (selector, texto) => { 

        cy.get(selector).type(texto)
 })

Cypress.Commands.add('mi_login',() => { 

        cy.fixture('./login').then((datos_login)=>{
                
                cy.escribir(elementos.login.txt_usuario,datos_login.usuario_fugran)
                cy.escribir(elementos.login.txt_clave,datos_login.clave)
                cy.get(elementos.login.btn_ingresar).click()
                
        })
 })

 Cypress.Commands.add('mi_logout',() => { 
        cy.wait(500)
        cy.get(elementos.logout.btn_usuario).click()
        cy.get(elementos.logout.btn_logout).click()
 })

 Cypress.Commands.add('mi_login_profum',() => { 

        cy.fixture('./userProfum').then((datos_login)=>{
                
                cy.escribir(elementos.login.txt_usuario,datos_login.usuario_Profum)
                cy.escribir(elementos.login.txt_clave,datos_login.clave)
                cy.get(elementos.login.btn_ingresar).click()
                
                
        })
 })